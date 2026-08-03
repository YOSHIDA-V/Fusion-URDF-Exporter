import argparse
import csv
import copy
import math
import os
import re
import sys
import struct
import xml.etree.ElementTree as ET
from pathlib import Path


def _local_name(tag):
    return tag.rsplit('}', 1)[-1]


XACRO_NS = 'http://www.ros.org/wiki/xacro'
XACRO_TAG_PREFIX = '{%s}' % XACRO_NS
XACRO_EXPR_RE = re.compile(r'\$\{([^}]+)\}')


def _package_name(package_dir):
    package_xml = Path(package_dir) / 'package.xml'
    if package_xml.exists():
        try:
            root = ET.parse(package_xml).getroot()
        except ET.ParseError:
            pass
        else:
            name = root.findtext('name')
            if name:
                return name.strip()
    return os.path.basename(package_dir)


def _resolve_xacro_path(filename, current_path, package_dir):
    if not filename:
        return None
    if filename.startswith('$(find ') and ')/' in filename:
        rel = filename.split(')/', 1)[1]
        candidate = os.path.join(package_dir, rel.replace('/', os.sep))
        if os.path.exists(candidate):
            return candidate
    candidate = os.path.join(os.path.dirname(current_path), filename.replace('/', os.sep))
    if os.path.exists(candidate):
        return candidate
    candidate = os.path.join(package_dir, filename.replace('/', os.sep))
    if os.path.exists(candidate):
        return candidate
    return None


def _resolve_mesh_path(mesh_filename, package_dir):
    if not mesh_filename:
        return None
    if mesh_filename.startswith('package://'):
        rel = mesh_filename.split('/', 3)
        if len(rel) >= 4:
            candidate = os.path.join(package_dir, rel[3].replace('/', os.sep))
            if os.path.exists(candidate):
                return candidate
    if mesh_filename.startswith('file://'):
        candidate = mesh_filename[len('file://'):]
        if os.path.exists(candidate):
            return candidate
    candidate = os.path.join(package_dir, mesh_filename.replace('/', os.sep))
    if os.path.exists(candidate):
        return candidate
    return None


def _coerce_xacro_value(value):
    if not isinstance(value, str):
        return value
    text = value.strip()
    if not text:
        return text
    if re.fullmatch(r'[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?', text):
        try:
            return float(text)
        except ValueError:
            return text
    return text


def _substitute_xacro_text(text, context):
    if text is None or '${' not in text:
        return text

    def repl(match):
        expr = match.group(1).strip()
        try:
            value = eval(expr, {"__builtins__": {}}, context)  # noqa: S307 - controlled xacro-like expressions
        except Exception:
            return match.group(0)
        return str(value)

    return XACRO_EXPR_RE.sub(repl, text)


def _apply_substitutions(element, context):
    for key, value in list(element.attrib.items()):
        element.attrib[key] = _substitute_xacro_text(value, context)
    if element.text is not None:
        element.text = _substitute_xacro_text(element.text, context)
    if element.tail is not None:
        element.tail = _substitute_xacro_text(element.tail, context)
    for child in list(element):
        _apply_substitutions(child, context)


def _parse_macro_params(param_spec):
    params = []
    defaults = {}
    for token in (param_spec or '').split():
        if ':=' in token:
            name, default = token.split(':=', 1)
        elif '=' in token:
            name, default = token.split('=', 1)
        else:
            name, default = token, None
        name = name.strip()
        if not name:
            continue
        params.append(name)
        if default is not None:
            defaults[name] = default
    return params, defaults


def _collect_xacro_macros(path, package_dir, macros, visited):
    resolved = os.path.abspath(path)
    if resolved in visited:
        return
    visited.add(resolved)
    tree = ET.parse(path)
    root = tree.getroot()
    for child in root:
        tag = _local_name(child.tag)
        if tag == 'include':
            include_path = _resolve_xacro_path(child.attrib.get('filename', ''), path, package_dir)
            if include_path:
                _collect_xacro_macros(include_path, package_dir, macros, visited)
        elif tag == 'macro':
            macro_name = child.attrib.get('name', '').strip()
            if not macro_name:
                continue
            params, defaults = _parse_macro_params(child.attrib.get('params', ''))
            macros[macro_name] = {
                'params': params,
                'defaults': defaults,
                'body': [copy.deepcopy(grandchild) for grandchild in list(child)],
            }


def _expand_xacro_children(children, macros, context):
    expanded = []
    for child in children:
        tag = _local_name(child.tag)
        if tag in {'include', 'macro', 'property'} and child.tag.startswith(XACRO_TAG_PREFIX):
            continue
        if child.tag.startswith(XACRO_TAG_PREFIX) and tag in macros:
            macro = macros[tag]
            call_context = dict(context)
            for param in macro['params']:
                raw = child.attrib.get(param, macro['defaults'].get(param, ''))
                raw = _substitute_xacro_text(raw, context)
                call_context[param] = _coerce_xacro_value(raw)
            for body_child in macro['body']:
                body_copy = copy.deepcopy(body_child)
                _apply_substitutions(body_copy, call_context)
                expanded.extend(_expand_xacro_children([body_copy], macros, call_context))
            continue
        child_copy = copy.deepcopy(child)
        _apply_substitutions(child_copy, context)
        child_copy[:] = _expand_xacro_children(list(child_copy), macros, context)
        expanded.append(child_copy)
    return expanded


def _expand_xacro_tree(path, package_dir):
    macros = {}
    _collect_xacro_macros(path, package_dir, macros, set())
    tree = ET.parse(path)
    root = tree.getroot()
    expanded_root = copy.deepcopy(root)
    expanded_root[:] = _expand_xacro_children(list(root), macros, {})
    return ET.ElementTree(expanded_root)


def _binary_stl_geometry(path):
    try:
        with open(path, 'rb') as f:
            data = f.read()
    except OSError:
        return None
    if len(data) < 84:
        return None
    triangle_count = struct.unpack('<I', data[80:84])[0]
    expected_len = 84 + triangle_count * 50
    if expected_len > len(data):
        return None
    mins = [float('inf'), float('inf'), float('inf')]
    maxs = [float('-inf'), float('-inf'), float('-inf')]
    offset = 84
    points = []
    for _ in range(triangle_count):
        values = struct.unpack('<12fH', data[offset:offset + 50])[:12]
        offset += 50
        for index in [3, 6, 9]:
            for axis in range(3):
                value = values[index + axis]
                mins[axis] = min(mins[axis], value)
                maxs[axis] = max(maxs[axis], value)
    if mins[0] == float('inf'):
        return None
    center = [(mins[i] + maxs[i]) / 2.0 for i in range(3)]
    dims = [maxs[i] - mins[i] for i in range(3)]
    offset = 84
    for _ in range(triangle_count):
        values = struct.unpack('<12fH', data[offset:offset + 50])[:12]
        offset += 50
        for index in [3, 6, 9]:
            points.append(tuple([round(values[index + axis] - center[axis], 3) for axis in range(3)]))
    points.sort()
    return {'center_mm': center, 'dims_mm': dims, 'shape_key': repr(points)}


def _mesh_link_name(name):
    stem = os.path.splitext(os.path.basename(name))[0]
    return re.sub(r' \(\d+\)$', '', stem)


def _mesh_part_key(name):
    stem = os.path.splitext(os.path.basename(name))[0]
    stem = re.sub(r' \(\d+\)$', '', stem)
    if stem == 'base_link':
        return stem
    return re.sub(r'_\d+$', '', stem)


def _find_main_xacro(package_dir):
    urdf_dir = os.path.join(package_dir, 'urdf')
    candidates = []
    parse_errors = []
    for file_name in sorted(os.listdir(urdf_dir)):
        if not file_name.endswith('.xacro'):
            continue
        if file_name == 'materials.xacro':
            continue
        path = os.path.join(urdf_dir, file_name)
        try:
            root = ET.parse(path).getroot()
        except ET.ParseError as exc:
            parse_errors.append('{}: {}'.format(path, exc))
            continue
        direct_links = sum(1 for element in root if _local_name(element.tag) == 'link')
        direct_joints = sum(1 for element in root if _local_name(element.tag) == 'joint')
        include_count = sum(1 for element in root if _local_name(element.tag) == 'include' and element.tag.startswith(XACRO_TAG_PREFIX))
        macro_call_count = sum(
            1
            for element in root
            if element.tag.startswith(XACRO_TAG_PREFIX)
            and _local_name(element.tag) not in {'include', 'macro', 'property'}
        )
        if macro_call_count > 0:
            candidates.append((1, macro_call_count, include_count, path))
        elif direct_links or direct_joints:
            candidates.append((0, direct_links + direct_joints, include_count, path))
    if not candidates:
        if parse_errors:
            raise RuntimeError('xacro parse error: {}'.format('; '.join(parse_errors)))
        raise RuntimeError('main xacro with base_link was not found')
    macro_candidates = [candidate for candidate in candidates if candidate[0] == 1]
    if macro_candidates:
        macro_candidates.sort(key=lambda item: (item[1], item[2], item[3]), reverse=True)
        return macro_candidates[0][3]
    candidates.sort(key=lambda item: (item[1], item[2], item[3]), reverse=True)
    return candidates[0][3]


def _parse_robot(path):
    package_dir = os.path.abspath(os.path.join(path, os.pardir, os.pardir))
    if os.path.basename(path).endswith('.xacro'):
        try:
            root = _expand_xacro_tree(path, package_dir).getroot()
        except Exception:
            root = ET.parse(path).getroot()
    else:
        root = ET.parse(path).getroot()
    links = set()
    joints = []
    mesh_files = []
    link_info = {}
    for element in root.iter():
        tag = _local_name(element.tag)
        if tag == 'link':
            link_name = element.attrib.get('name', '')
            links.add(link_name)
            info = link_info.setdefault(link_name, {'has_inertial': False, 'mesh_files': []})
            for sub in element:
                sub_tag = _local_name(sub.tag)
                if sub_tag == 'inertial':
                    info['has_inertial'] = True
                elif sub_tag == 'visual':
                    for grandchild in sub.iter():
                        if _local_name(grandchild.tag) == 'mesh':
                            mesh_file = grandchild.attrib.get('filename', '')
                            mesh_files.append(mesh_file)
                            info['mesh_files'].append(mesh_file)
        elif tag == 'joint':
            parent = None
            child = None
            axis = None
            limit = None
            mimic = None
            for sub in element:
                sub_tag = _local_name(sub.tag)
                if sub_tag == 'parent':
                    parent = sub.attrib.get('link')
                elif sub_tag == 'child':
                    child = sub.attrib.get('link')
                elif sub_tag == 'axis':
                    axis = sub.attrib.get('xyz')
                elif sub_tag == 'limit':
                    limit = dict(sub.attrib)
                elif sub_tag == 'mimic':
                    mimic = dict(sub.attrib)
            if not parent or not child:
                continue
            joints.append({
                'name': element.attrib.get('name', ''),
                'type': element.attrib.get('type', ''),
                'parent': parent,
                'child': child,
                'axis': axis,
                'limit': limit,
                'mimic': mimic,
            })
        elif tag == 'mesh':
            mesh_files.append(element.attrib.get('filename', ''))
    return links, joints, mesh_files, link_info


def _is_safe_urdf_name(name):
    return bool(name) and re.match(r'^[0-9A-Za-z_-]+$', name) is not None


def _reachable_links(joints):
    reachable = {'base_link'}
    changed = True
    while changed:
        changed = False
        for joint in joints:
            if joint['parent'] in reachable and joint['child'] not in reachable:
                reachable.add(joint['child'])
                changed = True
    return reachable


def _check_tree(links, joints):
    errors = []
    for link in sorted(links):
        if not _is_safe_urdf_name(link):
            errors.append('unsafe link name: {}'.format(link))
    if 'base_link' not in links:
        errors.append('base_link is missing')
    child_counts = {}
    joint_names = set([joint['name'] for joint in joints])
    for joint in joints:
        if not _is_safe_urdf_name(joint['name']):
            errors.append('unsafe joint name: {}'.format(joint['name']))
        if joint['type'] not in ['fixed', 'revolute', 'continuous', 'prismatic']:
            errors.append('unsupported joint type {} in {}'.format(joint['type'], joint['name']))
        if joint['parent'] not in links:
            errors.append('joint {} parent link is missing: {}'.format(joint['name'], joint['parent']))
        if joint['child'] not in links:
            errors.append('joint {} child link is missing: {}'.format(joint['name'], joint['child']))
        if joint['type'] in ['revolute', 'continuous', 'prismatic']:
            try:
                axis = [float(value) for value in (joint.get('axis') or '').split()]
                if len(axis) != 3 or not all(math.isfinite(value) for value in axis) or sum(value * value for value in axis) < 1e-12:
                    raise ValueError()
            except (TypeError, ValueError):
                errors.append('joint {} has an invalid or zero axis'.format(joint['name']))
            limit = joint.get('limit') or {}
            try:
                effort = float(limit['effort'])
                velocity = float(limit['velocity'])
                if not math.isfinite(effort) or not math.isfinite(velocity) or effort <= 0 or velocity <= 0:
                    raise ValueError()
            except (KeyError, TypeError, ValueError):
                errors.append('joint {} has invalid effort or velocity limits'.format(joint['name']))
            if joint['type'] in ['revolute', 'prismatic']:
                try:
                    lower = float(limit['lower'])
                    upper = float(limit['upper'])
                    if not math.isfinite(lower) or not math.isfinite(upper) or lower >= upper:
                        raise ValueError()
                except (KeyError, TypeError, ValueError):
                    errors.append('joint {} has invalid lower or upper limits'.format(joint['name']))
        mimic = joint.get('mimic') or {}
        mimic_target = mimic.get('joint')
        if mimic_target and mimic_target not in joint_names:
            errors.append('joint {} mimics a missing joint: {}'.format(joint['name'], mimic_target))
        child_counts[joint['child']] = child_counts.get(joint['child'], 0) + 1
    duplicate_children = sorted([link for link, count in child_counts.items() if count > 1])
    if duplicate_children:
        errors.append('links with multiple parents: {}'.format(', '.join(str(link) for link in duplicate_children if link)))
    reachable = _reachable_links(joints)
    unreachable = sorted(links - reachable)
    if unreachable:
        errors.append('unreachable links from base_link: {}'.format(', '.join(unreachable)))
    return errors, reachable


def _check_meshes(package_dir, package_name, mesh_files):
    errors = []
    warnings = []
    prefix = 'package://{}/meshes/'.format(package_name)
    for mesh in mesh_files:
        if not mesh:
            errors.append('empty mesh filename')
            continue
        if not mesh.startswith(prefix):
            errors.append('non-portable or wrong package mesh path: {}'.format(mesh))
            continue
        rel = mesh[len(prefix):].replace('/', os.sep)
        path = os.path.join(package_dir, 'meshes', rel)
        if not os.path.exists(path):
            errors.append('mesh file is missing: {}'.format(mesh))
    if not mesh_files:
        warnings.append('no mesh references found')
    return errors, warnings


def _check_export_structure(package_dir):
    path = os.path.join(package_dir, 'export_structure_report.csv')
    errors = []
    warnings = []
    synthetic = False
    if not os.path.exists(path):
        synthetic = True
        _, _, _, link_info = _parse_robot(_find_main_xacro(package_dir))
        rows = []
        for link_name in sorted(link_info):
            info = link_info[link_name]
            rows.append({
                'link_name': link_name,
                'component_name': link_name,
                'part_key': link_name,
                'body_count': len(info.get('mesh_files', [])),
                'has_mesh': bool(info.get('mesh_files')),
                'stl_export_status': 'exported' if info.get('mesh_files') else 'no_mesh_virtual_link',
                'has_inertial': info.get('has_inertial', False),
                'inertial_source': 'xacro_synthesized',
                'extra_fixed_to_base': False,
                'occurrence_name': link_name,
            })
    else:
        with open(path, newline='', encoding='utf-8') as f:
            rows = list(csv.DictReader(f))
    required = {'link_name', 'stl_export_status', 'has_mesh', 'has_inertial'}
    missing_fields = sorted(required - set(rows[0].keys())) if rows else sorted(required)
    if missing_fields:
        errors.append('export_structure_report.csv missing fields: {}'.format(', '.join(missing_fields)))
        return errors, warnings
    failed = [row['link_name'] for row in rows if row.get('stl_export_status') == 'failed']
    virtual = [row['link_name'] for row in rows if row.get('stl_export_status') == 'no_mesh_virtual_link']
    not_exported = [row['link_name'] for row in rows if row.get('stl_export_status') == 'not_exported']
    if failed:
        errors.append('STL export failed links: {}'.format(', '.join(failed)))
    if not_exported:
        errors.append('links had export entries but no STL result: {}'.format(', '.join(not_exported)))
    if virtual and not synthetic:
        warnings.append('virtual meshless links: {}'.format(', '.join(virtual)))
    return errors, warnings


def _check_mesh_reuse(package_dir):
    path = os.path.join(package_dir, 'mesh_reuse_report.csv')
    errors = []
    warnings = []
    synthetic = False
    if not os.path.exists(path):
        synthetic = True
        mesh_dir = os.path.join(package_dir, 'meshes')
        rows = []
        if os.path.isdir(mesh_dir):
            for root_dir, _, files in os.walk(mesh_dir):
                for file_name in sorted(files):
                    if not file_name.lower().endswith('.stl'):
                        continue
                    full_path = os.path.join(root_dir, file_name)
                    rel_path = os.path.relpath(full_path, mesh_dir)
                    rows.append({
                        'link_name': _mesh_link_name(rel_path),
                        'part_key': _mesh_part_key(rel_path),
                        'source_mesh_file': rel_path,
                        'used_mesh_file': rel_path,
                        'reused': False,
                        'reuse_status': 'unique_part',
                    })
    else:
        with open(path, newline='', encoding='utf-8') as f:
            rows = list(csv.DictReader(f))
    required = {'link_name', 'source_mesh_file', 'used_mesh_file', 'reused', 'reuse_status'}
    missing_fields = sorted(required - set(rows[0].keys())) if rows else sorted(required)
    if missing_fields:
        errors.append('mesh_reuse_report.csv missing fields: {}'.format(', '.join(missing_fields)))
        return errors, warnings
    mismatch = [
        row['source_mesh_file']
        for row in rows
        if row.get('reuse_status') == 'not_reused_shape_or_rotation_mismatch'
    ]
    if mismatch and not synthetic:
        warnings.append('not reused because shape/rotation differs: {}'.format(', '.join(mismatch)))
    mesh_dir = os.path.join(package_dir, 'meshes')
    missing_used = sorted(set([
        row['used_mesh_file']
        for row in rows
        if row.get('used_mesh_file') and not os.path.exists(os.path.join(mesh_dir, row['used_mesh_file']))
    ]))
    if missing_used:
        errors.append('mesh_reuse_report.csv references missing used mesh: {}'.format(', '.join(missing_used)))
    return errors, warnings


def validate(package_dir):
    package_dir = os.path.abspath(package_dir)
    package_name = _package_name(package_dir)
    main_xacro = _find_main_xacro(package_dir)
    links, joints, mesh_files, link_info = _parse_robot(main_xacro)
    errors, reachable = _check_tree(links, joints)
    mesh_errors, mesh_warnings = _check_meshes(package_dir, package_name, mesh_files)
    report_errors, report_warnings = _check_export_structure(package_dir)
    reuse_errors, reuse_warnings = _check_mesh_reuse(package_dir)
    errors += mesh_errors + report_errors + reuse_errors
    warnings = mesh_warnings + report_warnings + reuse_warnings
    return {
        'package_dir': package_dir,
        'main_xacro': main_xacro,
        'links': len(links),
        'joints': len(joints),
        'meshes': len(mesh_files),
        'reachable': len(reachable),
        'errors': errors,
        'warnings': warnings,
    }


def main():
    parser = argparse.ArgumentParser(description='Validate a Fusion2URDF exported ROS description package.')
    parser.add_argument('package_dir')
    args = parser.parse_args()
    try:
        result = validate(args.package_dir)
    except Exception as exc:
        print('ERROR: {}'.format(exc))
        return 1
    print('package_dir={}'.format(result['package_dir']))
    print('main_xacro={}'.format(result['main_xacro']))
    print('links={} joints={} meshes={} reachable={}'.format(
        result['links'], result['joints'], result['meshes'], result['reachable']))
    for warning in result['warnings']:
        print('WARNING: {}'.format(warning))
    for error in result['errors']:
        print('ERROR: {}'.format(error))
    return 1 if result['errors'] else 0


if __name__ == '__main__':
    sys.exit(main())
