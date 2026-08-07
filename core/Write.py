# -*- coding: utf-8 -*-
"""
Created on Sun May 12 20:46:26 2019

@author: syuntoku
"""

import adsk, base64, csv, html, os, pathlib, shutil, webbrowser
from xml.etree import ElementTree
from xml.etree.ElementTree import Element, SubElement
from . import Link, Joint
from ..utils import utils

ACTUATED_JOINT_TYPES = set(['revolute', 'continuous', 'prismatic'])

def _walk_reachable_links(joints_dict):
    reachable = set(['base_link'])
    changed = True
    while changed:
        changed = False
        for joint in joints_dict:
            parent = joints_dict[joint]['parent']
            child = joints_dict[joint]['child']
            if parent in reachable and child not in reachable:
                reachable.add(child)
                changed = True
    return reachable

def _build_tree_lines(rows):
    children_by_parent = {}
    for row in rows:
        if row.get('skip_from_urdf', 'False') == 'True':
            continue
        children_by_parent.setdefault(row['parent'], []).append(row)

    lines = []
    visited_edges = set()

    def walk(link, depth):
        prefix = '  ' * depth
        lines.append('{}{}'.format(prefix, link))
        for row in sorted(children_by_parent.get(link, []), key=lambda item: item['child']):
            edge_key = (row['joint'], row['parent'], row['child'])
            if edge_key in visited_edges:
                continue
            visited_edges.add(edge_key)
            swap_mark = ' auto_swapped' if row['auto_swapped'] == 'True' else ''
            lines.append('{}  -- {} [{}{}] --> {}'.format(prefix, row['joint'], row['type'], swap_mark, row['child']))
            walk(row['child'], depth + 2)

    walk('base_link', 0)
    return lines

def write_joint_tree_report(joints_dict, inertial_dict, save_dir):
    """
    Write parent/child diagnostics before URDF generation.
    """
    os.makedirs(save_dir, exist_ok=True)
    report_file = os.path.join(save_dir, 'joint_tree_report.txt')
    csv_file = os.path.join(save_dir, 'joint_tree_edges.csv')
    link_csv_file = os.path.join(save_dir, 'joint_tree_links.csv')
    urdf_joints_dict = {joint: joints_dict[joint] for joint in joints_dict if not joints_dict[joint].get('skip_from_urdf', False)}

    child_links = [urdf_joints_dict[joint]['child'] for joint in urdf_joints_dict]
    parent_links = [urdf_joints_dict[joint]['parent'] for joint in urdf_joints_dict]
    child_set = set(child_links)
    parent_set = set(parent_links)
    inertial_set = set(inertial_dict.keys())
    reachable = _walk_reachable_links(urdf_joints_dict) if 'base_link' in inertial_dict else set()
    parent_only_links = sorted(parent_set - child_set - set(['base_link']))
    missing_inertial_links = sorted((parent_set | child_set | set(['base_link'])) - inertial_set)
    duplicate_children = sorted([link for link in child_set if child_links.count(link) > 1])
    all_links = sorted(inertial_set | parent_set | child_set | set(['base_link']))
    auto_swapped_joints = sorted([joint for joint in urdf_joints_dict if urdf_joints_dict[joint].get('auto_swapped', False)])
    skipped_joints = sorted([joint for joint in joints_dict if joints_dict[joint].get('skip_from_urdf', False)])

    rows = []
    for joint in joints_dict:
        parent = joints_dict[joint]['parent']
        child = joints_dict[joint]['child']
        issues = []
        diagnostic_only = joints_dict[joint].get('diagnostic_only', False)
        if diagnostic_only:
            issues.append(joints_dict[joint].get('skip_reason', 'diagnostic_only'))
        elif joints_dict[joint].get('skip_from_urdf', False):
            issues.append(joints_dict[joint].get('skip_reason', 'skipped_from_urdf'))
        if not diagnostic_only and parent not in inertial_set:
            issues.append('parent_missing_inertial')
        if not diagnostic_only and child not in inertial_set:
            issues.append('child_missing_inertial')
        if not diagnostic_only and parent not in reachable and parent != 'base_link':
            issues.append('parent_not_reachable_from_base_link')
        if not diagnostic_only and child not in reachable:
            issues.append('child_not_reachable_from_base_link')
        if not diagnostic_only and child_links.count(child) > 1:
            issues.append('child_has_multiple_parents')
        if not diagnostic_only and parent in parent_only_links:
            issues.append('parent_only_not_base_link')
        rows.append({
            'joint': joint,
            'fusion_joint_name': joints_dict[joint].get('fusion_joint_name', ''),
            'type': joints_dict[joint]['type'],
            'source': joints_dict[joint].get('source', 'joint'),
            'original_parent': joints_dict[joint].get('original_parent', parent),
            'original_child': joints_dict[joint].get('original_child', child),
            'parent': parent,
            'child': child,
            'auto_swapped': str(joints_dict[joint].get('auto_swapped', False)),
            'skip_from_urdf': str(joints_dict[joint].get('skip_from_urdf', False)),
            'skip_reason': joints_dict[joint].get('skip_reason', ''),
            'diagnostic_only': str(diagnostic_only),
            'parent_has_inertial': parent in inertial_set,
            'child_has_inertial': child in inertial_set,
            'parent_reachable_from_base_link': parent in reachable or parent == 'base_link',
            'child_reachable_from_base_link': child in reachable,
            'axis': ' '.join([str(_) for _ in joints_dict[joint].get('axis', [])]),
            'lower_limit': joints_dict[joint].get('lower_limit', ''),
            'upper_limit': joints_dict[joint].get('upper_limit', ''),
            'limit_source': joints_dict[joint].get('limit_source', ''),
            'issue': ';'.join(issues) if issues else 'OK'
        })

    with open(csv_file, mode='w', newline='', encoding='utf-8') as f:
        fieldnames = [
            'joint', 'fusion_joint_name', 'type', 'source', 'original_parent', 'original_child',
            'parent', 'child', 'auto_swapped', 'skip_from_urdf', 'skip_reason',
            'diagnostic_only',
            'parent_has_inertial', 'child_has_inertial',
            'parent_reachable_from_base_link', 'child_reachable_from_base_link',
            'axis', 'lower_limit', 'upper_limit', 'limit_source',
            'issue'
        ]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    link_rows = []
    for link in all_links:
        appears_as_parent = link in parent_set
        appears_as_child = link in child_set
        has_inertial = link in inertial_set
        is_reachable = link in reachable
        suggestions = []
        if link == 'base_link':
            suggestions.append('root')
        if not has_inertial:
            suggestions.append('make_real_component_with_body')
        if link != 'base_link' and not appears_as_parent and not appears_as_child:
            suggestions.append('add_joint_to_tree')
        if link != 'base_link' and appears_as_parent and not appears_as_child:
            suggestions.append('connect_parent_side_to_base_link_or_rename_to_base_link')
        if link != 'base_link' and appears_as_child and not is_reachable:
            suggestions.append('fix_parent_chain_to_base_link')
        if not suggestions:
            suggestions.append('OK')
        link_rows.append({
            'link': link,
            'has_inertial': has_inertial,
            'appears_as_parent': appears_as_parent,
            'appears_as_child': appears_as_child,
            'reachable_from_base_link': is_reachable,
            'suggested_action': ';'.join(suggestions)
        })

    with open(link_csv_file, mode='w', newline='', encoding='utf-8') as f:
        fieldnames = [
            'link', 'has_inertial', 'appears_as_parent', 'appears_as_child',
            'reachable_from_base_link', 'suggested_action'
        ]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(link_rows)

    with open(report_file, mode='w', encoding='utf-8') as f:
        f.write('fusion2urdf joint tree report\n')
        f.write('================================\n\n')
        f.write('Summary\n')
        f.write('-------\n')
        f.write('base_link_found: {}\n'.format('yes' if 'base_link' in inertial_dict else 'no'))
        f.write('joints_total_seen: {}\n'.format(len(joints_dict)))
        f.write('joints_used_for_urdf_tree: {}\n'.format(len(urdf_joints_dict)))
        f.write('joints_skipped_from_urdf_tree: {}\n'.format(len(skipped_joints)))
        f.write('links_with_inertial: {}\n'.format(len(inertial_dict)))
        f.write('reachable_links_from_base_link: {}\n'.format(len(reachable)))
        f.write('parent_only_not_base_link: {}\n'.format(', '.join(parent_only_links) if parent_only_links else 'none'))
        f.write('missing_inertial_links: {}\n'.format(', '.join(missing_inertial_links) if missing_inertial_links else 'none'))
        f.write('duplicate_child_links: {}\n'.format(', '.join(duplicate_children) if duplicate_children else 'none'))
        f.write('auto_swapped_joints: {}\n'.format(', '.join(auto_swapped_joints) if auto_swapped_joints else 'none'))
        f.write('skipped_joints: {}\n'.format(', '.join(skipped_joints) if skipped_joints else 'none'))
        f.write('link_status_csv: {}\n'.format(link_csv_file))
        f.write('\n')
        f.write('Likely fixes\n')
        f.write('------------\n')
        if parent_only_links:
            f.write('- Parent-only links must either be base_link or have a parent joint from the base_link side: {}\n'.format(', '.join(parent_only_links)))
        if missing_inertial_links:
            f.write('- Missing inertial links need a real component occurrence with bodies or a flattened component structure: {}\n'.format(', '.join(missing_inertial_links)))
        if duplicate_children:
            f.write('- A URDF link can have only one parent. Extra loop/duplicate joints were skipped for URDF tree output: {}\n'.format(', '.join(duplicate_children)))
        if not parent_only_links and not missing_inertial_links and not duplicate_children:
            f.write('- No obvious structural issue detected in parent/child names.\n')
        f.write('\n')
        f.write('Tree view from base_link\n')
        f.write('------------------------\n')
        if 'base_link' not in inertial_dict:
            f.write('base_link is missing.\n')
        else:
            for line in _build_tree_lines(rows):
                f.write(line + '\n')
        f.write('\n')
        f.write('Joint edges\n')
        f.write('-----------\n')
        for row in rows:
            f.write('{joint}: {parent} -> {child} [{type}] source={source} auto_swapped={auto_swapped} skip_from_urdf={skip_from_urdf} issue={issue}\n'.format(**row))
        f.write('\n')
        f.write('Reachable tree from base_link\n')
        f.write('-----------------------------\n')
        if 'base_link' not in inertial_dict:
            f.write('base_link is missing.\n')
        else:
            for row in rows:
                if row['skip_from_urdf'] == 'False' and row['parent'] in reachable and row['child'] in reachable:
                    f.write('{parent} -> {child} via {joint}\n'.format(**row))
        f.write('\n')
        f.write('Disconnected or suspicious edges\n')
        f.write('-------------------------------\n')
        suspicious = [row for row in rows if row['issue'] != 'OK']
        if suspicious:
            for row in suspicious:
                f.write('{joint}: {parent} -> {child} issue={issue}\n'.format(**row))
        else:
            f.write('none\n')
        f.write('\n')
        f.write('Disconnected links\n')
        f.write('------------------\n')
        disconnected_links = [row for row in link_rows if row['link'] != 'base_link' and not row['reachable_from_base_link']]
        if disconnected_links:
            for row in disconnected_links:
                f.write('{link} suggested_action={suggested_action}\n'.format(**row))
        else:
            f.write('none\n')

    return report_file, csv_file

def _mesh_reuse_for_link(mesh_reuse_info, name):
    if mesh_reuse_info is None:
        return None
    return mesh_reuse_info.get('by_link', {}).get(name)

def _mesh_file_for_link(mesh_reuse_info, name):
    entry = _mesh_reuse_for_link(mesh_reuse_info, name)
    if entry is not None:
        return entry['mesh_file']
    if mesh_reuse_info is not None:
        default_mesh = name + '.stl'
        if default_mesh in mesh_reuse_info.get('mesh_files', set()):
            return default_mesh
        return ''
    return None

def _mesh_offset_for_link(mesh_reuse_info, name):
    entry = _mesh_reuse_for_link(mesh_reuse_info, name)
    if entry is not None:
        return entry['offset_m']
    return None

def write_link_urdf(joints_dict, repo, links_xyz_dict, file_name, inertial_dict, mesh_reuse_info=None):
    """
    Write links information into urdf "repo/file_name"
    
    
    Parameters
    ----------
    joints_dict: dict
        information of the each joint
    repo: str
        the name of the repository to save the xml file
    links_xyz_dict: vacant dict
        xyz information of the each link
    file_name: str
        urdf full path
    inertial_dict:
        information of the each inertial
    
    Note
    ----------
    In this function, links_xyz_dict is set for write_joint_tran_urdf.
    The origin of the coordinate of center_of_mass is the coordinate of the link
    """
    with open(file_name, mode='a', encoding='utf-8') as f:
        # for base_link
        center_of_mass = inertial_dict['base_link']['center_of_mass']
        link = Link.Link(name='base_link', xyz=[0,0,0], 
            center_of_mass=center_of_mass, repo=repo,
            mass=inertial_dict['base_link']['mass'],
            inertia_tensor=inertial_dict['base_link']['inertia'],
            link_material_name=Link.material_name('base_link'),
            mesh_file=_mesh_file_for_link(mesh_reuse_info, 'base_link'),
            mesh_offset=_mesh_offset_for_link(mesh_reuse_info, 'base_link'))
        links_xyz_dict[link.name] = link.xyz
        link.make_link_xml()
        f.write(link.link_xml)
        f.write('\n')

        # others
        for joint in joints_dict:
            name = joints_dict[joint]['child']
            center_of_mass = \
                [ i-j for i, j in zip(inertial_dict[name]['center_of_mass'], joints_dict[joint]['xyz'])]
            link = Link.Link(name=name, xyz=joints_dict[joint]['xyz'],\
                center_of_mass=center_of_mass,\
                repo=repo, mass=inertial_dict[name]['mass'],\
                inertia_tensor=inertial_dict[name]['inertia'],\
                link_material_name=Link.material_name(name),\
                mesh_file=_mesh_file_for_link(mesh_reuse_info, name),\
                mesh_offset=_mesh_offset_for_link(mesh_reuse_info, name))
            links_xyz_dict[link.name] = link.xyz            
            link.make_link_xml()
            f.write(link.link_xml)
            f.write('\n')


def write_joint_urdf(joints_dict, repo, links_xyz_dict, file_name, save_dir):
    """
    Write joints and transmission information into urdf "repo/file_name"
    
    
    Parameters
    ----------
    joints_dict: dict
        information of the each joint
    repo: str
        the name of the repository to save the xml file
    links_xyz_dict: dict
        xyz information of the each link
    file_name: str
        urdf full path
    """
    
    with open(file_name, mode='a', encoding='utf-8') as f:
        for j in joints_dict:
            parent = joints_dict[j]['parent']
            child = joints_dict[j]['child']
            joint_type = joints_dict[j]['type']
            upper_limit = joints_dict[j]['upper_limit']
            lower_limit = joints_dict[j]['lower_limit']
            try:
                xyz = [round(p-c, 6) for p, c in \
                    zip(links_xyz_dict[parent], links_xyz_dict[child])]  # xyz = parent - child
            except KeyError as ke:
                missing_link = ke.args[0]
                child_links = set([joints_dict[name]['child'] for name in joints_dict])
                parent_only_links = sorted(set([joints_dict[name]['parent'] for name in joints_dict]) - child_links - set(['base_link']))
                raise RuntimeError("URDF tree is not connected to base_link.\n\nJoint:\n%s\n\nParent:\n%s\nChild:\n%s\n\nMissing link origin:\n%s\n\nThis usually means the parent is not base_link and never appears as a child of another joint.\nFix in Fusion 360:\n- If %s is the robot base, rename that component to base_link.\n- Otherwise create/fix the joint from base_link side so %s appears as Component1(child) once.\n- For this joint, parent must be Component2 and child must be Component1.\n\nParent-only links:\n%s\n\nReport:\n%s\n%s"
                % (j, parent, child, missing_link, missing_link, missing_link, ', '.join(parent_only_links), os.path.join(save_dir, 'joint_tree_report.txt'), os.path.join(save_dir, 'joint_tree_edges.csv')))
                
            joint = Joint.Joint(name=j, joint_type = joint_type, xyz=xyz, \
            axis=joints_dict[j]['axis'], parent=parent, child=child, \
            upper_limit=upper_limit, lower_limit=lower_limit,
            rpy=joints_dict[j].get('rpy', [0, 0, 0]),
            effort=joints_dict[j].get('effort', 100.0),
            velocity=joints_dict[j].get('velocity', 100.0),
            mimic=joints_dict[j].get('mimic'))
            joint.make_joint_xml()
            joint.make_transmission_xml()
            f.write(joint.joint_xml)
            f.write('\n')

def write_gazebo_endtag(file_name):
    """
    Write about gazebo_plugin and the </robot> tag at the end of the urdf
    
    
    Parameters
    ----------
    file_name: str
        urdf full path
    """
    with open(file_name, mode='a', encoding='utf-8') as f:
        f.write('</robot>\n')
        

def write_xacro(joints_dict, links_xyz_dict, inertial_dict, package_name, robot_name, save_dir, mesh_reuse_info=None):
    try: os.mkdir(save_dir + '/urdf')
    except: pass 

    file_name = save_dir + '/urdf/' + robot_name + '.xacro'  # the name of urdf file
    repo = package_name + '/meshes/'  # the repository of binary stl files
    with open(file_name, mode='w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" ?>\n')
        f.write('<robot name="{}" xmlns:xacro="http://www.ros.org/wiki/xacro">\n'.format(robot_name))
        f.write('\n')
        f.write('<xacro:include filename="$(find {})/urdf/materials.xacro" />'.format(package_name))
        f.write('\n')

    write_link_urdf(joints_dict, repo, links_xyz_dict, file_name, inertial_dict, mesh_reuse_info)
    write_joint_urdf(joints_dict, repo, links_xyz_dict, file_name, save_dir)
    write_gazebo_endtag(file_name)

def write_urdf(joints_dict, links_xyz_dict, inertial_dict, package_name, robot_name, save_dir, mesh_reuse_info=None):
    return write_xacro(joints_dict, links_xyz_dict, inertial_dict, package_name, robot_name, save_dir, mesh_reuse_info)

def write_materials_xacro(joints_dict, links_xyz_dict, inertial_dict, package_name, robot_name, save_dir):
    try: os.mkdir(save_dir + '/urdf')
    except: pass  

    file_name = save_dir + '/urdf/materials.xacro'  # the name of urdf file
    with open(file_name, mode='w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" ?>\n')
        f.write('<robot name="{}" xmlns:xacro="http://www.ros.org/wiki/xacro" >\n'.format(robot_name))
        f.write('\n')
        for name in sorted(inertial_dict):
            rgba = inertial_dict[name].get('rgba', Link.DEFAULT_RGBA)
            f.write('<material name="{}">\n'.format(Link.material_name(name)))
            f.write('  <color rgba="{}"/>\n'.format(' '.join(['{:.6f}'.format(value) for value in rgba])))
            f.write('</material>\n\n')
        f.write('</robot>\n')

def write_transmissions_xacro(joints_dict, links_xyz_dict, inertial_dict, package_name, robot_name, save_dir):
    """
    Write joints and transmission information into urdf "repo/file_name"
    
    
    Parameters
    ----------
    joints_dict: dict
        information of the each joint
    repo: str
        the name of the repository to save the xml file
    links_xyz_dict: dict
        xyz information of the each link
    file_name: str
        urdf full path
    """
    
    file_name = save_dir + '/urdf/{}.trans'.format(robot_name)  # the name of urdf file
    with open(file_name, mode='w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" ?>\n')
        f.write('<robot name="{}" xmlns:xacro="http://www.ros.org/wiki/xacro" >\n'.format(robot_name))
        f.write('\n')

        for j in joints_dict:
            parent = joints_dict[j]['parent']
            child = joints_dict[j]['child']
            joint_type = joints_dict[j]['type']
            upper_limit = joints_dict[j]['upper_limit']
            lower_limit = joints_dict[j]['lower_limit']
            try:
                xyz = [round(p-c, 6) for p, c in \
                    zip(links_xyz_dict[parent], links_xyz_dict[child])]  # xyz = parent - child
            except KeyError as ke:
                raise RuntimeError("There seems to be an error with the connection between\n\n%s\nand\n%s\n\nCheck \
whether the connections\nparent=component2=%s\nchild=component1=%s\nare correct or if you need \
to swap component1<=>component2"
                % (parent, child, parent, child))
                
            joint = Joint.Joint(name=j, joint_type = joint_type, xyz=xyz, \
            axis=joints_dict[j]['axis'], parent=parent, child=child, \
            upper_limit=upper_limit, lower_limit=lower_limit,
            rpy=joints_dict[j].get('rpy', [0, 0, 0]),
            effort=joints_dict[j].get('effort', 100.0),
            velocity=joints_dict[j].get('velocity', 100.0),
            mimic=joints_dict[j].get('mimic'))
            if joint_type in ACTUATED_JOINT_TYPES:
                joint.make_transmission_xml()
                f.write(joint.tran_xml)
                f.write('\n')

        f.write('</robot>\n')

def write_gazebo_xacro(joints_dict, links_xyz_dict, inertial_dict, package_name, robot_name, save_dir):
    try: os.mkdir(save_dir + '/urdf')
    except: pass  

    file_name = save_dir + '/urdf/' + robot_name + '.gazebo'  # the name of urdf file
    repo = robot_name + '/meshes/'  # the repository of binary stl files
    #repo = package_name + '/' + robot_name + '/bin_stl/'  # the repository of binary stl files
    with open(file_name, mode='w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" ?>\n')
        f.write('<robot name="{}" xmlns:xacro="http://www.ros.org/wiki/xacro" >\n'.format(robot_name))
        f.write('\n')
        f.write('<xacro:property name="body_color" value="Gazebo/Silver" />\n')
        f.write('\n')

        gazebo = Element('gazebo')
        plugin = SubElement(gazebo, 'plugin')
        plugin.attrib = {'name':'control', 'filename':'libgazebo_ros_control.so'}
        gazebo_xml = "\n".join(utils.prettify(gazebo).split("\n")[1:])
        f.write(gazebo_xml)

        # for base_link
        f.write('<gazebo reference="base_link">\n')
        f.write('  <material>${body_color}</material>\n')
        f.write('  <mu1>0.2</mu1>\n')
        f.write('  <mu2>0.2</mu2>\n')
        f.write('  <selfCollide>true</selfCollide>\n')
        f.write('  <gravity>true</gravity>\n')
        f.write('</gazebo>\n')
        f.write('\n')

        # others
        for joint in joints_dict:
            name = joints_dict[joint]['child']
            f.write('<gazebo reference="{}">\n'.format(name))
            f.write('  <material>${body_color}</material>\n')
            f.write('  <mu1>0.2</mu1>\n')
            f.write('  <mu2>0.2</mu2>\n')
            f.write('  <selfCollide>true</selfCollide>\n')
            f.write('</gazebo>\n')
            f.write('\n')

        f.write('</robot>\n')

def write_display_launch(package_name, robot_name, save_dir):
    os.makedirs(save_dir + '/launch', exist_ok=True)
    file_name = save_dir + '/launch/display.launch.py'
    content = """from launch import LaunchDescription
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory
import os
import xacro


def generate_launch_description():
    package_share = get_package_share_directory('{package_name}')
    model_path = os.path.join(package_share, 'urdf', '{robot_name}.xacro')
    rviz_path = os.path.join(package_share, 'launch', 'urdf.rviz')
    robot_description = xacro.process_file(model_path).toxml()

    return LaunchDescription([
        Node(
            package='robot_state_publisher',
            executable='robot_state_publisher',
            parameters=[{{'robot_description': robot_description}}],
            output='screen',
        ),
        Node(
            package='joint_state_publisher_gui',
            executable='joint_state_publisher_gui',
            output='screen',
        ),
        Node(
            package='rviz2',
            executable='rviz2',
            arguments=['-d', rviz_path],
            output='screen',
        ),
    ])
""".format(package_name=package_name, robot_name=robot_name)
    with open(file_name, mode='w', encoding='utf-8') as f:
        f.write(content)
    legacy_file = save_dir + '/launch/display.launch'
    if os.path.exists(legacy_file):
        os.remove(legacy_file)

def write_gazebo_launch(package_name, robot_name, save_dir):
    """
    write gazebo launch file "save_dir/launch/gazebo.launch"
    
    
    Parameter
    ---------
    robot_name: str
        name of the robot
    save_dir: str
        path of the repository to save
    """
    
    try: os.mkdir(save_dir + '/launch')
    except: pass     
    
    launch = Element('launch')
    param = SubElement(launch, 'param')
    param.attrib = {'name':'robot_description', 'command':'$(find xacro)/xacro $(find {})/urdf/{}.xacro'.format(package_name, robot_name)}

    node = SubElement(launch, 'node')
    node.attrib = {'name':'spawn_urdf', 'pkg':'gazebo_ros', 'type':'spawn_model',\
                    'args':'-param robot_description -urdf -model {}'.format(robot_name)}

    include_ =  SubElement(launch, 'include')
    include_.attrib = {'file':'$(find gazebo_ros)/launch/empty_world.launch'}        
    
    number_of_args = 5
    args = [None for i in range(number_of_args)]
    args_name_value_pairs = [['paused', 'true'], ['use_sim_time', 'true'],
                             ['gui', 'true'], ['headless', 'false'], 
                             ['debug', 'false']]
                             
    for i, arg in enumerate(args):
        arg = SubElement(include_, 'arg')
        arg.attrib = {'name' : args_name_value_pairs[i][0] , 
        'value' : args_name_value_pairs[i][1]}


    
    launch_xml = "\n".join(utils.prettify(launch).split("\n")[1:])        
    
    file_name = save_dir + '/launch/' + 'gazebo.launch'    
    with open(file_name, mode='w', encoding='utf-8') as f:
        f.write(launch_xml)


def write_control_launch(package_name, robot_name, save_dir, joints_dict):
    """
    write control launch file "save_dir/launch/controller.launch"
    
    
    Parameter
    ---------
    robot_name: str
        name of the robot
    save_dir: str
        path of the repository to save
    joints_dict: dict
        information of the joints
    """
    
    try: os.mkdir(save_dir + '/launch')
    except: pass     
    
    #launch = Element('launch')

    controller_name = robot_name + '_controller'
    #rosparam = SubElement(launch, 'rosparam')
    #rosparam.attrib = {'file':'$(find {})/launch/controller.yaml'.format(package_name),
    #                   'command':'load'}
                       
    controller_args_str = ""
    for j in joints_dict:
        joint_type = joints_dict[j]['type']
        if joint_type in ACTUATED_JOINT_TYPES:
            controller_args_str += j + '_position_controller '
    controller_args_str += 'joint_state_controller '

    node_controller = Element('node')
    node_controller.attrib = {'name':'controller_spawner', 'pkg':'controller_manager', 'type':'spawner',\
                    'respawn':'false', 'output':'screen', 'ns':robot_name,\
                    'args':'{}'.format(controller_args_str)}
    
    node_publisher = Element('node')
    node_publisher.attrib = {'name':'robot_state_publisher', 'pkg':'robot_state_publisher',\
                    'type':'robot_state_publisher', 'respawn':'false', 'output':'screen'}
    remap = SubElement(node_publisher, 'remap')
    remap.attrib = {'from':'/joint_states',\
                    'to':'/' + robot_name + '/joint_states'}
    
    #launch_xml  = "\n".join(utils.prettify(launch).split("\n")[1:])   
    launch_xml  = "\n".join(utils.prettify(node_controller).split("\n")[1:])   
    launch_xml += "\n".join(utils.prettify(node_publisher).split("\n")[1:])   

    file_name = save_dir + '/launch/controller.launch'    
    with open(file_name, mode='w', encoding='utf-8') as f:
        f.write('<launch>\n')
        f.write('\n')
        #for some reason ROS is very picky about the attribute ordering, so we'll bitbang this element
        f.write('<rosparam file="$(find {})/launch/controller.yaml" command="load"/>'.format(package_name))
        f.write('\n')
        f.write(launch_xml)
        f.write('\n')
        f.write('</launch>')
        

def write_yaml(package_name, robot_name, save_dir, joints_dict):
    """
    write yaml file "save_dir/launch/controller.yaml"
    
    
    Parameter
    ---------
    robot_name: str
        name of the robot
    save_dir: str
        path of the repository to save
    joints_dict: dict
        information of the joints
    """
    try: os.mkdir(save_dir + '/launch')
    except: pass 

    controller_name = robot_name + '_controller'
    file_name = save_dir + '/launch/controller.yaml'
    with open(file_name, 'w', encoding='utf-8') as f:
        f.write(controller_name + ':\n')
        # joint_state_controller
        f.write('  # Publish all joint states -----------------------------------\n')
        f.write('  joint_state_controller:\n')
        f.write('    type: joint_state_controller/JointStateController\n')  
        f.write('    publish_rate: 50\n\n')
        # position_controllers
        f.write('  # Position Controllers --------------------------------------\n')
        for joint in joints_dict:
            joint_type = joints_dict[joint]['type']
            if joint_type in ACTUATED_JOINT_TYPES:
                f.write('  ' + joint + '_position_controller:\n')
                f.write('    type: effort_controllers/JointPositionController\n')
                f.write('    joint: '+ joint + '\n')
                f.write('    pid: {p: 100.0, i: 0.01, d: 10.0}\n')

def _safe_xml_name(name):
    safe = ''.join([c if c.isalnum() or c in ['_', '-'] else '_' for c in name])
    if len(safe) == 0 or safe[0].isdigit():
        safe = 'link_' + safe
    return safe

def open_web_viewer(viewer_file):
    """Open the self-contained gkjohnson URDF viewer in the default browser."""
    viewer_url = pathlib.Path(viewer_file).resolve().as_uri()
    webbrowser.open(viewer_url)
    return viewer_url


def _remove_legacy_vscode_preview(save_dir):
    for filename in ('open_vscode_preview.cmd', 'open_model_viewer.cmd'):
        legacy_file = os.path.join(save_dir, filename)
        if os.path.isfile(legacy_file):
            os.remove(legacy_file)
    for directory in ('.vscode', 'vscode_preview'):
        path = os.path.join(save_dir, directory)
        if os.path.isdir(path):
            shutil.rmtree(path)


def write_web_viewer_urdf(robot_name, save_dir):
    """
    Write a standalone URDF for the gkjohnson browser viewer.
    """
    _remove_legacy_vscode_preview(save_dir)
    viewer_dir = os.path.join(save_dir, 'viewer')
    os.makedirs(viewer_dir, exist_ok=True)
    for generated_name in ('index.html', 'serve_model.py'):
        generated_path = os.path.join(viewer_dir, generated_name)
        if os.path.isfile(generated_path):
            os.remove(generated_path)
    assets_dir = os.path.join(viewer_dir, 'assets')
    if os.path.isdir(assets_dir):
        shutil.rmtree(assets_dir)

    for name in os.listdir(viewer_dir):
        if name.lower().endswith('.urdf'):
            os.remove(os.path.join(viewer_dir, name))

    xacro_file = os.path.join(save_dir, 'urdf', robot_name + '.xacro')
    tree = ElementTree.parse(xacro_file)
    robot = tree.getroot()
    for child in list(robot):
        if child.tag.endswith('include'):
            robot.remove(child)
    materials_file = os.path.join(save_dir, 'urdf', 'materials.xacro')
    if os.path.exists(materials_file):
        materials_root = ElementTree.parse(materials_file).getroot()
        for material in reversed(materials_root.findall('material')):
            robot.insert(0, material)
    for mesh in robot.findall('.//mesh'):
        filename = mesh.attrib.get('filename', '')
        marker = '/meshes/'
        if marker in filename:
            mesh.attrib['filename'] = '../meshes/' + filename.split(marker, 1)[1]

    for mesh in robot.findall('.//mesh'):
        filename = mesh.attrib.get('filename', '')
        if not filename.startswith('../meshes/'):
            continue
        mesh_path = os.path.join(save_dir, 'meshes', filename[len('../meshes/'):])
        if not os.path.isfile(mesh_path):
            continue
        extension = os.path.splitext(mesh_path)[1].lower().lstrip('.') or 'stl'
        with open(mesh_path, 'rb') as f:
            encoded_mesh = base64.b64encode(f.read()).decode('ascii')
        mesh.attrib['filename'] = 'data:model/{};base64,{}#mesh.{}'.format(
            extension, encoded_mesh, extension)

    embedded_urdf = '<?xml version="1.0" ?>\n' + "\n".join(
        utils.prettify(robot).split("\n")[1:])
    encoded_urdf = base64.b64encode(embedded_urdf.encode('utf-8')).decode('ascii')
    resource_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'resources', 'web_viewer')
    with open(os.path.join(resource_dir, 'viewer.css'), encoding='utf-8') as f:
        viewer_css = f.read()
    with open(os.path.join(resource_dir, 'viewer.bundle.js'), encoding='utf-8') as f:
        viewer_script = f.read()
    shutil.copy2(
        os.path.join(resource_dir, 'THIRD_PARTY_LICENSE.txt'),
        os.path.join(viewer_dir, 'THIRD_PARTY_LICENSE.txt'))
    model_name = html.escape(robot_name, quote=True)
    model_url = 'data:application/xml;base64,' + encoded_urdf
    viewer_html = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{name} URDF Viewer</title>
  <style>{css}</style>
</head>
<body tabindex="0">
  <div id="menu">
    <ul id="urdf-options"><li urdf="{model_url}" color="#263238">{name}</li></ul>
    <div id="controls" class="hidden">
      <div id="toggle-controls"></div>
      <div id="ignore-joint-limits" class="toggle">Ignore Joint Limits</div>
      <div id="hide-fixed" class="toggle">Hide Fixed Joints</div>
      <div id="radians-toggle" class="toggle">Use Radians</div>
      <div id="autocenter-toggle" class="toggle checked">Autocenter</div>
      <div id="collision-toggle" class="toggle">Show Collision</div>
      <div id="do-animate" class="toggle">Animate Joints</div>
      <label>Up Axis
        <select id="up-select">
          <option value="+X">+X</option><option value="-X">-X</option>
          <option value="+Y">+Y</option><option value="-Y">-Y</option>
          <option value="+Z" selected>+Z</option><option value="-Z">-Z</option>
        </select>
      </label>
      <ul></ul>
    </div>
  </div>
  <urdf-viewer up="+Z" display-shadow tabindex="0"></urdf-viewer>
  <script>{script}</script>
  <script>
    var embeddedViewer = document.querySelector('urdf-viewer');
    embeddedViewer.urlModifierFunc = function (url) {{
      var dataIndex = url.lastIndexOf('data:');
      return dataIndex >= 0 ? url.substring(dataIndex) : url;
    }};
    document.dispatchEvent(new Event('WebComponentsReady'));
    window.setTimeout(function () {{
      embeddedViewer.up = '+Z';
      document.getElementById('up-select').value = '+Z';
    }}, 0);
  </script>
</body>
</html>
'''.format(name=model_name, css=viewer_css, model_url=model_url, script=viewer_script)
    standalone_viewer = os.path.join(viewer_dir, 'open_model_viewer.html')
    with open(standalone_viewer, mode='w', encoding='utf-8') as f:
        f.write(viewer_html)

    return standalone_viewer


