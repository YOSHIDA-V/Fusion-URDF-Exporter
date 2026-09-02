# -*- coding: utf-8 -*-
"""
Created on Sun May 12 19:15:34 2019

@author: syuntoku
"""

import adsk, adsk.core, adsk.fusion
import os.path, re
import csv
import struct
from xml.etree import ElementTree
from xml.dom import minidom
import shutil  # Replaced distutils with shutil
import fileinput
import sys

TEMP_COMPONENT_PREFIX = 'fusion2urdf_tmp_'

def is_visible(item):
    try:
        return item.isVisible
    except:
        return True

def direct_visible_bodies(occs):
    bodies = []
    try:
        for i in range(occs.bRepBodies.count):
            body = occs.bRepBodies.item(i)
            if is_visible(body):
                bodies.append(body)
    except:
        pass
    return bodies

def visible_bodies(occs):
    bodies = direct_visible_bodies(occs)
    try:
        for i in range(occs.childOccurrences.count):
            child_occs = occs.childOccurrences.item(i)
            if is_visible(child_occs):
                bodies += visible_bodies(child_occs)
    except:
        pass
    return bodies

def cleanup_temp_occs(root):
    temp_occs = []
    try:
        for occs in root.allOccurrences:
            if occs.component.name.startswith(TEMP_COMPONENT_PREFIX):
                temp_occs.append(occs)
    except:
        pass
    delete_occs(temp_occs)

def delete_occs(entries):
    for entry in reversed(entries):
        try:
            occs = entry.get('occurrence', entry)
        except:
            occs = entry
        try:
            occs.deleteMe()
        except:
            pass

def mesh_part_key(name):
    stem = os.path.splitext(os.path.basename(name))[0]
    stem = re.sub(r' \(\d+\)$', '', stem)
    if stem == 'base_link':
        return stem
    return re.sub(r'_\d+$', '', stem)

def occurrence_part_key(occs):
    try:
        name = occs.component.name
    except:
        try:
            name = occs.name
        except:
            name = ''
    name = sanitize_link_name(name)
    if name:
        return mesh_part_key(name)
    return 'unknown_part'

def mesh_link_name(name):
    stem = os.path.splitext(os.path.basename(name))[0]
    return re.sub(r' \(\d+\)$', '', stem)

def sanitize_link_name(name):
    return re.sub('[^0-9A-Za-z_-]', '_', name).strip('_')

def is_base_link_name(name):
    try:
        leaf_name = str(name).split('+')[-1]
    except:
        return False
    return leaf_name in ('base_link', 'base_link:1', 'base_link1')

def is_base_link_occurrence(occs):
    candidates = []
    try:
        candidates.append(occs.component.name)
    except:
        pass
    for attribute in ('name', 'fullPathName'):
        try:
            candidates.append(getattr(occs, attribute))
        except:
            pass
    return any(is_base_link_name(name) for name in candidates)

def occurrence_link_name(occs):
    if is_base_link_occurrence(occs):
        return 'base_link'
    try:
        name = occs.fullPathName
        if name:
            return sanitize_link_name(name)
    except:
        pass
    try:
        name = occs.name
    except:
        name = ''
    name = sanitize_link_name(name)
    if name:
        return name
    if is_base_link_occurrence(occs):
        return 'base_link'
    try:
        return sanitize_link_name(occs.component.name)
    except:
        return 'base_link'

def joint_endpoint_link_name(root, occs):
    """Return the top-level link occurrence that contains a Joint endpoint.

    Fusion Joints can reference a nested servo or horn occurrence even when the
    URDF link is represented by its enclosing top-level assembly occurrence.
    Keep the nested occurrence as a fallback for designs that do not expose a
    matching top-level occurrence.
    """
    try:
        endpoint_path = str(occs.fullPathName)
    except:
        endpoint_path = ''

    try:
        top_occurrences = [root.occurrences.item(i) for i in range(root.occurrences.count)]
    except:
        top_occurrences = []

    containing_occurrence = None
    containing_path = ''
    for top_occurrence in top_occurrences:
        try:
            top_path = str(top_occurrence.fullPathName)
        except:
            top_path = ''
        if not top_path:
            continue
        if (
            occs is top_occurrence
            or endpoint_path == top_path
            or endpoint_path.startswith(top_path + '+')
        ) and len(top_path) > len(containing_path):
            containing_occurrence = top_occurrence
            containing_path = top_path

    resolved_occurrence = containing_occurrence if containing_occurrence is not None else occs
    return occurrence_link_name(resolved_occurrence)

def link_occurrence_map(root):
    link_map = {}
    try:
        all_occs = [occs for occs in root.allOccurrences]
    except:
        all_occs = []
    for occs in all_occs:
        is_base_link = is_base_link_occurrence(occs)
        if not is_base_link and not _is_exportable_occurrence(occs):
            continue
        link_name = occurrence_link_name(occs)
        if link_name not in link_map:
            link_map[link_name] = occs
    return link_map

def validate_occurrence_link_names(root):
    """Reject occurrence names that cannot be represented uniquely in URDF."""
    names = {}
    try:
        all_occs = [occs for occs in root.allOccurrences]
    except:
        all_occs = []
    for occs in all_occs:
        is_base_link = is_base_link_occurrence(occs)
        if not is_base_link and not _is_exportable_occurrence(occs):
            continue
        link_name = occurrence_link_name(occs)
        try:
            source_name = occs.fullPathName or occs.name
        except:
            source_name = link_name
        if not link_name:
            raise RuntimeError('Fusion occurrence name cannot be converted to a valid URDF link name: {}'.format(source_name))
        names.setdefault(link_name, []).append(source_name)

    collisions = []
    for link_name, source_names in sorted(names.items()):
        unique_sources = sorted(set(source_names))
        if len(unique_sources) > 1 or (link_name == 'base_link' and len(source_names) > 1):
            collisions.append('{} <= {}'.format(link_name, ', '.join(unique_sources)))
    if collisions:
        raise RuntimeError(
            'Multiple Fusion occurrences resolve to the same URDF link name.\n\n{}\n\n'
            'Rename the Fusion components/occurrences so every URDF link name is unique.'
            .format('\n'.join(collisions))
        )
    return names

def _is_exportable_occurrence(occs):
    try:
        name = occs.component.name
        if name.startswith(TEMP_COMPONENT_PREFIX) or name == 'old_component':
            return False
    except:
        pass
    return is_visible(occs)

def _child_occurrences(occs):
    children = []
    try:
        for i in range(occs.childOccurrences.count):
            children.append(occs.childOccurrences.item(i))
    except:
        pass
    return children

def grouped_visible_bodies(occs, target_link_names=None, root_occurrence=True):
    """
    Return the visible bodies that should belong to one URDF link.

    Fusion copied components often share one Component definition across many
    Occurrences.  URDF links must be built from Occurrence instances instead.
    For an assembly Occurrence used as a link, merge visible descendant bodies
    unless that descendant is itself a target URDF link.
    """
    if not _is_exportable_occurrence(occs):
        return []

    target_link_names = set(target_link_names) if target_link_names is not None else set()
    if not root_occurrence:
        try:
            if occurrence_link_name(occs) in target_link_names:
                return []
        except:
            pass

    bodies = direct_visible_bodies(occs)
    for child_occs in _child_occurrences(occs):
        if is_visible(child_occs):
            bodies += grouped_visible_bodies(child_occs, target_link_names, False)
    return bodies

def visible_direct_body_link_names(root):
    link_names = set()
    try:
        all_occs = [occs for occs in root.allOccurrences]
    except:
        all_occs = []
    for occs in all_occs:
        if not _is_exportable_occurrence(occs):
            continue
        if len(direct_visible_bodies(occs)) > 0:
            link_names.add(occurrence_link_name(occs))
    return link_names

def visible_geometry_link_names(root, target_link_names=None):
    link_names = set()
    target_link_names = set(target_link_names) if target_link_names is not None else set()

    def visit(occs):
        if not _is_exportable_occurrence(occs):
            return
        link_name = occurrence_link_name(occs)
        bodies = grouped_visible_bodies(occs, target_link_names)
        if bodies:
            link_names.add(link_name)
            return
        for child_occs in _child_occurrences(occs):
            visit(child_occs)

    try:
        top_occs = [root.occurrences.item(i) for i in range(root.occurrences.count)]
    except:
        try:
            top_occs = [occs for occs in root.allOccurrences]
        except:
            top_occs = []
    for occs in top_occs:
        visit(occs)
    return link_names

def _binary_stl_geometry(path):
    with open(path, 'rb') as f:
        data = f.read()
    if len(data) < 84:
        return None
    triangle_count = struct.unpack('<I', data[80:84])[0]
    expected_len = 84 + triangle_count * 50
    if expected_len > len(data):
        return None
    mins = [float('inf'), float('inf'), float('inf')]
    maxs = [float('-inf'), float('-inf'), float('-inf')]
    offset = 84
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
    points = []
    offset = 84
    for _ in range(triangle_count):
        values = struct.unpack('<12fH', data[offset:offset + 50])[:12]
        offset += 50
        for index in [3, 6, 9]:
            points.append(tuple([round(values[index + axis] - center[axis], 3) for axis in range(3)]))
    points.sort()
    return {'center_mm': center, 'dims_mm': dims, 'shape_key': repr(points)}

def _dimension_key(dims):
    return tuple([round(value, 3) for value in dims])

def build_mesh_reuse_info(save_dir, target_link_names=None, link_part_keys=None):
    mesh_dir = os.path.join(save_dir, 'meshes')
    target_link_names = set(target_link_names) if target_link_names is not None else None
    link_part_keys = link_part_keys or {}
    info = {
        'by_link': {},
        'all_meshes': [],
        'canonical_files': set(),
        'mesh_files': set(),
        'target_link_names': set(target_link_names) if target_link_names is not None else None,
        'stats': {
            'mesh_files_before': 0,
            'canonical_mesh_files': 0,
            'reused_mesh_files': 0,
            'part_groups': 0
        }
    }
    if not os.path.isdir(mesh_dir):
        return info

    rows = []
    for file_name in sorted(os.listdir(mesh_dir)):
        if not file_name.lower().endswith('.stl'):
            continue
        link_name = mesh_link_name(file_name)
        if target_link_names is not None and link_name not in target_link_names:
            continue
        info['mesh_files'].add(file_name)
        path = os.path.join(mesh_dir, file_name)
        geometry = _binary_stl_geometry(path)
        if geometry is None:
            continue
        rows.append({
            'mesh_file': file_name,
            'link_name': link_name,
            'part_key': link_part_keys.get(link_name, mesh_part_key(file_name)),
            'center_mm': geometry['center_mm'],
            'dims_mm': geometry['dims_mm'],
            'dimension_key': _dimension_key(geometry['dims_mm']),
            'shape_key': geometry['shape_key'],
            'has_collision_suffix': re.search(r' \(\d+\)\.stl$', file_name) is not None
        })

    groups = {}
    part_counts = {}
    part_shape_counts = {}
    for row in rows:
        part_counts[row['part_key']] = part_counts.get(row['part_key'], 0) + 1
        group_key = (row['part_key'], row['dimension_key'], row['shape_key'])
        groups.setdefault(group_key, []).append(row)
    for group_key in groups:
        part_key = group_key[0]
        part_shape_counts[part_key] = part_shape_counts.get(part_key, 0) + 1

    for group_key in groups:
        group_rows = sorted(groups[group_key], key=lambda row: (row['has_collision_suffix'], row['mesh_file']))
        canonical = group_rows[0]
        canonical_file = canonical['mesh_file']
        canonical_center = canonical['center_mm']
        info['canonical_files'].add(canonical_file)
        for row in group_rows:
            reused = row['mesh_file'] != canonical_file
            if reused:
                reuse_status = 'reused_translation_only'
            elif part_counts.get(row['part_key'], 0) <= 1:
                reuse_status = 'unique_part'
            elif part_shape_counts.get(row['part_key'], 0) > 1:
                reuse_status = 'not_reused_shape_or_rotation_mismatch'
            else:
                reuse_status = 'canonical'
            offset_m = [round((row['center_mm'][i] - canonical_center[i]) * 0.001, 6) for i in range(3)]
            entry = {
                'link_name': row['link_name'],
                'part_key': row['part_key'],
                'source_mesh_file': row['mesh_file'],
                'mesh_file': canonical_file,
                'offset_m': offset_m,
                'reused': reused,
                'reuse_status': reuse_status
            }
            existing = info['by_link'].get(row['link_name'])
            if existing is None or row['mesh_file'] == row['link_name'] + '.stl':
                info['by_link'][row['link_name']] = entry
            info['all_meshes'].append(entry)

    info['stats']['mesh_files_before'] = len(rows)
    info['stats']['canonical_mesh_files'] = len(info['canonical_files'])
    info['stats']['reused_mesh_files'] = len([entry for entry in info['all_meshes'] if entry['reused']])
    info['stats']['part_groups'] = len(groups)
    write_mesh_reuse_report(save_dir, info)
    return info

def write_mesh_reuse_report(save_dir, mesh_reuse_info):
    report_file = os.path.join(save_dir, 'mesh_reuse_report.csv')
    with open(report_file, mode='w', newline='', encoding='utf-8') as f:
        fieldnames = [
            'link_name', 'part_key', 'source_mesh_file',
            'used_mesh_file', 'offset_x_m', 'offset_y_m', 'offset_z_m',
            'reused', 'reuse_status'
        ]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for entry in sorted(mesh_reuse_info.get('all_meshes', []), key=lambda item: item['source_mesh_file']):
            writer.writerow({
                'link_name': entry['link_name'],
                'part_key': entry['part_key'],
                'source_mesh_file': entry['source_mesh_file'],
                'used_mesh_file': entry['mesh_file'],
                'offset_x_m': entry['offset_m'][0],
                'offset_y_m': entry['offset_m'][1],
                'offset_z_m': entry['offset_m'][2],
                'reused': entry['reused'],
                'reuse_status': entry.get('reuse_status', '')
            })

def write_extra_fixed_links_report(save_dir, extra_fixed_links):
    report_file = os.path.join(save_dir, 'extra_fixed_links.csv')
    with open(report_file, mode='w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['link_name', 'parent', 'joint_type', 'reason'])
        writer.writeheader()
        for link in extra_fixed_links:
            writer.writerow({
                'link_name': link,
                'parent': 'base_link',
                'joint_type': 'fixed',
                'reason': 'visible_geometry_not_connected_to_urdf_tree'
            })

def write_export_structure_report(save_dir, target_link_names, export_entries, inertial_dict, extra_fixed_links, export_result=None):
    report_file = os.path.join(save_dir, 'export_structure_report.csv')
    entries_by_link = {}
    for entry in export_entries:
        entries_by_link[entry.get('export_name', '')] = entry
    extra_fixed_links = set(extra_fixed_links or [])
    export_result = export_result or {}
    exported = set(export_result.get('exported', []))
    failed = set(export_result.get('failed', []))
    with open(report_file, mode='w', newline='', encoding='utf-8') as f:
        fieldnames = [
            'link_name', 'component_name', 'part_key', 'body_count',
            'has_mesh', 'stl_export_status', 'has_inertial', 'inertial_source',
            'extra_fixed_to_base', 'occurrence_name'
        ]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for link_name in sorted(target_link_names):
            entry = entries_by_link.get(link_name, {})
            inertial = inertial_dict.get(link_name, {})
            if link_name in failed:
                export_status = 'failed'
            elif link_name in exported:
                export_status = 'exported'
            elif entry:
                export_status = 'not_exported'
            else:
                export_status = 'no_mesh_virtual_link'
            writer.writerow({
                'link_name': link_name,
                'component_name': entry.get('component_name', ''),
                'part_key': entry.get('part_key', ''),
                'body_count': entry.get('body_count', 0),
                'has_mesh': link_name in exported,
                'stl_export_status': export_status,
                'has_inertial': link_name in inertial_dict,
                'inertial_source': inertial.get('source', ''),
                'extra_fixed_to_base': link_name in extra_fixed_links,
                'occurrence_name': entry.get('occurrence_name', '')
            })
    return report_file

def remove_generated_reports(save_dir):
    for file_name in [
        'joint_tree_report.txt',
        'joint_tree_edges.csv',
        'joint_tree_links.csv',
        'mesh_reuse_report.csv',
        'extra_fixed_links.csv',
        'export_structure_report.csv',
    ]:
        path = os.path.join(save_dir, file_name)
        if os.path.exists(path):
            try:
                os.remove(path)
            except:
                pass

def cleanup_reused_meshes(save_dir, mesh_reuse_info):
    mesh_dir = os.path.join(save_dir, 'meshes')
    if not os.path.isdir(mesh_dir):
        return
    remove = set()
    for entry in mesh_reuse_info.get('all_meshes', []):
        if entry.get('reused') and entry.get('source_mesh_file') != entry.get('mesh_file'):
            remove.add(entry.get('source_mesh_file'))
    for file_name in remove:
        if not file_name or not file_name.lower().endswith('.stl'):
            continue
        try:
            os.remove(os.path.join(mesh_dir, file_name))
        except:
            pass

def copy_occs(root, target_link_names=None):    
    """    
    duplicate all the components
    """    
    def copy_body(allOccs, occs):
        """    
        copy the old occs to new component
        """
        
        bodies = grouped_visible_bodies(occs, target_link_names)
        transform = adsk.core.Matrix3D.create()
        
        # Create new components from occs
        # This support even when a component has some occses. 

        export_name = occurrence_link_name(occs)
        new_occs = None
        try:
            new_occs = allOccs.addNewComponent(transform)  # this create new occs
            new_occs.component.name = TEMP_COMPONENT_PREFIX + export_name
            new_occs = allOccs.item((allOccs.count-1))
            new_occs.component.name = TEMP_COMPONENT_PREFIX + export_name
            copied = False
            for body in bodies:
                body.copyToComponent(new_occs)
                copied = True
            if copied:
                try:
                    component_name = occs.component.name
                except:
                    component_name = ''
                try:
                    occurrence_name = occs.fullPathName
                except:
                    try:
                        occurrence_name = occs.name
                    except:
                        occurrence_name = export_name
                return {
                    'occurrence': new_occs,
                    'source_occurrence': occs,
                    'export_name': export_name,
                    'part_key': occurrence_part_key(occs),
                    'component_name': component_name,
                    'occurrence_name': occurrence_name,
                    'body_count': len(bodies)
                }
            try:
                new_occs.deleteMe()
            except:
                pass
            return None
        except:
            if new_occs is not None:
                try:
                    new_occs.deleteMe()
                except:
                    pass
            raise

    cleanup_temp_occs(root)
    allOccs = root.occurrences
    copied_occs = []
    copied_names = set()
    target_link_names = set(target_link_names) if target_link_names is not None else None
    coppy_list = [occs for occs in root.allOccurrences]
    try:
        for occs in coppy_list:
            export_name = occurrence_link_name(occs)
            if target_link_names is not None and export_name not in target_link_names:
                continue
            if export_name in copied_names:
                continue
            if _is_exportable_occurrence(occs) and len(grouped_visible_bodies(occs, target_link_names)) > 0:
                copied = copy_body(allOccs, occs)
                if copied is not None:
                    copied_occs.append(copied)
                    copied_names.add(export_name)
    except:
        delete_occs(copied_occs)
        raise

    return copied_occs

def export_stl(design, save_dir, components, export_entries=None):  
    """
    export stl files into "save_dir/"
    
    Parameters
    ----------
    design: adsk.fusion.Design.cast(product)
    save_dir: str
        directory path to save
    components: design.allComponents
    """
          
    # create a single exportManager instance
    exportMgr = design.exportManager
    # get the script location
    try: os.mkdir(save_dir + '/meshes')
    except: pass
    scriptDir = save_dir + '/meshes'
    for file_name in os.listdir(scriptDir):
        if file_name.lower().endswith('.stl'):
            try:
                os.remove(os.path.join(scriptDir, file_name))
            except:
                pass
    if export_entries is not None:
        result = {'exported': [], 'failed': []}
        for entry in export_entries:
            try:
                occ = entry['occurrence']
                fileName = scriptDir + "/" + entry['export_name']
                stlExportOptions = exportMgr.createSTLExportOptions(occ, fileName)
                stlExportOptions.sendToPrintUtility = False
                stlExportOptions.isBinaryFormat = True
                stlExportOptions.meshRefinement = adsk.fusion.MeshRefinementSettings.MeshRefinementLow
                exportMgr.execute(stlExportOptions)
                result['exported'].append(entry['export_name'])
            except:
                result['failed'].append(entry.get('export_name', ''))
                try:
                    print('Component ' + entry['export_name'] + ' has something wrong.')
                except:
                    print('Component has something wrong.')
        return result
    # export the occurrence one by one in the component to a specified file
    for component in components:
        allOccus = component.allOccurrences
        for occ in allOccus:
            if 'old_component' not in occ.component.name and not occ.component.name.startswith(TEMP_COMPONENT_PREFIX) and is_visible(occ):
                try:
                    print(occ.component.name)
                    fileName = scriptDir + "/" + occ.component.name              
                    # create stl exportOptions
                    stlExportOptions = exportMgr.createSTLExportOptions(occ, fileName)
                    stlExportOptions.sendToPrintUtility = False
                    stlExportOptions.isBinaryFormat = True
                    # options are .MeshRefinementLow .MeshRefinementMedium .MeshRefinementHigh
                    stlExportOptions.meshRefinement = adsk.fusion.MeshRefinementSettings.MeshRefinementLow
                    exportMgr.execute(stlExportOptions)
                except:
                    print('Component ' + occ.component.name + ' has something wrong.')
    return {'exported': [], 'failed': []}


def file_dialog(ui):     
    """
    display the dialog to save the file
    """
    # Set styles of folder dialog.
    folderDlg = ui.createFolderDialog()
    folderDlg.title = 'Fusion Folder Dialog' 
    
    # Show folder dialog
    dlgResult = folderDlg.showDialog()
    if dlgResult == adsk.core.DialogResults.DialogOK:
        return folderDlg.folder
    return False


def origin2center_of_mass(inertia, center_of_mass, mass):
    """
    convert the moment of the inertia about the world coordinate into 
    that about center of mass coordinate

    Parameters
    ----------
    moment of inertia about the world coordinate:  [xx, yy, zz, xy, yz, xz]
    center_of_mass: [x, y, z]
    
    Returns
    ----------
    moment of inertia about center of mass : [xx, yy, zz, xy, yz, xz]
    """
    x = center_of_mass[0]
    y = center_of_mass[1]
    z = center_of_mass[2]
    translation_matrix = [y**2 + z**2, x**2 + z**2, x**2 + y**2,
                         -x*y, -y*z, -x*z]
    return [round(i - mass*t, 6) for i, t in zip(inertia, translation_matrix)]


def prettify(elem):
    """
    Return a pretty-printed XML string for the Element.
    
    Parameters
    ----------
    elem : xml.etree.ElementTree.Element
    
    Returns
    ----------
    pretified xml : str
    """
    rough_string = ElementTree.tostring(elem, 'utf-8')
    reparsed = minidom.parseString(rough_string)
    return reparsed.toprettyxml(indent="  ")


def copy_package(save_dir, package_dir):
    try:
        # Check if the target directory exists, if not, create it
        if not os.path.exists(save_dir + '/launch'):
            os.mkdir(save_dir + '/launch')
        if not os.path.exists(save_dir + '/urdf'):
            os.mkdir(save_dir + '/urdf')
        
        # Check if the package directory exists and copy it
        if os.path.exists(package_dir):
            shutil.copytree(package_dir, save_dir, dirs_exist_ok=True)  # dirs_exist_ok=True allows overwriting
        else:
            print(f"Package directory '{package_dir}' does not exist.")
        
    except Exception as e:
        print(f"Error copying package: {e}")


def update_cmakelists(save_dir, package_name):
    file_name = save_dir + '/CMakeLists.txt'

    for line in fileinput.input(file_name, inplace=True):
        if 'project(fusion2urdf)' in line:
            sys.stdout.write("project(" + package_name + ")\n")
        else:
            sys.stdout.write(line)


def update_package_xml(save_dir, package_name):
    file_name = save_dir + '/package.xml'

    for line in fileinput.input(file_name, inplace=True):
        if '<name>' in line:
            sys.stdout.write("  <name>" + package_name + "</name>\n")
        elif '<description>' in line:
            sys.stdout.write("<description>The " + package_name + " package</description>\n")
        else:
            sys.stdout.write(line)
