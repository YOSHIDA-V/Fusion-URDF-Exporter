#Author-syuntoku14
#Description-Generate URDF file from Fusion 360

import adsk, adsk.core, adsk.fusion, traceback
import os
import sys
from .utils import utils
from .core import Link, Joint, Write
from .tools import validate_export_package

"""
# length unit is 'cm' and inertial unit is 'kg/cm^2'
# If there is no 'body' in the root component, maybe the corrdinates are wrong.
"""

# joint effort: 100
# joint velocity: 100
# supports "Revolute", "Rigid" and "Slider" joint types

# I'm not sure how prismatic joint acts if there is no limit in fusion model

def run(context):
    ui = None
    success_msg = 'Successfully create URDF file'
    msg = success_msg
    
    try:
        # --------------------
        # initialize
        app = adsk.core.Application.get()
        ui = app.userInterface
        product = app.activeProduct
        design = adsk.fusion.Design.cast(product)
        title = 'Fusion2URDF'
        if not design:
            ui.messageBox('No active Fusion design', title)
            return

        root = design.rootComponent  # root component 
        components = design.allComponents

        # set the names        
        robot_name = root.name.split()[0]
        package_name = robot_name + '_description'
        save_dir = utils.file_dialog(ui)
        if save_dir == False:
            ui.messageBox('Fusion2URDF was canceled', title)
            return 0
        
        save_dir = save_dir + '/' + package_name
        try: os.mkdir(save_dir)
        except: pass     

        package_dir = os.path.abspath(os.path.dirname(__file__)) + '/package/'
        
        # --------------------
        # set dictionaries
        
        # Generate joints_dict. All joints are related to root. 
        utils.validate_occurrence_link_names(root)
        all_joints_dict, msg = Joint.make_joints_dict(root, msg)
        if msg != success_msg:
            ui.messageBox(msg, title)
            return 0   

        reportable_skipped, fatal_skipped = Joint.partition_skipped_joints(all_joints_dict)
        if fatal_skipped:
            report_file, csv_file = Write.write_joint_tree_report(all_joints_dict, {}, save_dir)
            details = [
                '{}: {}'.format(joint, all_joints_dict[joint].get('skip_reason', 'unknown'))
                for joint in fatal_skipped
            ]
            raise RuntimeError(
                'URDF export stopped because Fusion joints could not be represented safely.\n\n{}\n\nReport:\n{}\n{}'
                .format('\n'.join(details), report_file, csv_file)
            )

        joints_dict = {
            joint: all_joints_dict[joint]
            for joint in all_joints_dict
            if not all_joints_dict[joint].get('skip_from_urdf', False)
        }

        link_occurrences = utils.link_occurrence_map(root)
        if 'base_link' not in link_occurrences:
            report_file, csv_file = Write.write_joint_tree_report(joints_dict, {}, save_dir)
            msg = 'There is no base_link. Please set base_link and run again.\n\nReport:\n{}\n{}'.format(report_file, csv_file)
            ui.messageBox(msg, title)
            return 0

        urdf_link_names = set(['base_link'])
        for joint in joints_dict:
            urdf_link_names.add(joints_dict[joint]['parent'])
            urdf_link_names.add(joints_dict[joint]['child'])

        visible_geometry_links = utils.visible_geometry_link_names(root, urdf_link_names)
        extra_fixed_links = sorted([link for link in visible_geometry_links if link not in urdf_link_names])
        if extra_fixed_links:
            utils.write_extra_fixed_links_report(save_dir, extra_fixed_links)
            raise RuntimeError(
                'Visible Fusion components are not connected to the URDF joint tree.\n\n{}\n\n'
                'Create explicit Rigid Joints for fixed components, or hide components that must not be exported.\n\nReport:\n{}'
                .format('\n'.join(extra_fixed_links), os.path.join(save_dir, 'extra_fixed_links.csv'))
            )

        target_link_names = set(['base_link'])
        for joint in joints_dict:
            target_link_names.add(joints_dict[joint]['parent'])
            target_link_names.add(joints_dict[joint]['child'])
        
        links_xyz_dict = {}

        # copy over package files
        utils.copy_package(save_dir, package_dir)
        utils.update_cmakelists(save_dir, package_name)
        utils.update_package_xml(save_dir, package_name)

        # Generate STl files
        temp_export_occs = []
        link_part_keys = {}
        try:
            temp_export_occs = utils.copy_occs(root, target_link_names)
            inertial_dict, msg = Link.make_inertial_dict(root, msg, target_link_names, temp_export_occs)
            if msg != success_msg:
                ui.messageBox(msg, title)
                return 0
            Link.add_virtual_inertials(inertial_dict, joints_dict, target_link_names)
            report_file, csv_file = Write.write_joint_tree_report(all_joints_dict, inertial_dict, save_dir)
            utils.write_extra_fixed_links_report(save_dir, extra_fixed_links)
            export_result = utils.export_stl(design, save_dir, components, temp_export_occs)
            utils.write_export_structure_report(save_dir, target_link_names, temp_export_occs, inertial_dict, extra_fixed_links, export_result)
            if export_result.get('failed'):
                raise RuntimeError(
                    'STL export failed for links:\n{}\n\nReport:\n{}'
                    .format('\n'.join(sorted(export_result['failed'])), os.path.join(save_dir, 'export_structure_report.csv'))
                )
            link_part_keys = {entry['export_name']: entry.get('part_key', '') for entry in temp_export_occs}
        finally:
            utils.delete_occs(temp_export_occs)
        mesh_reuse_info = utils.build_mesh_reuse_info(save_dir, target_link_names, link_part_keys)

        # --------------------
        # Generate URDF
        Write.write_xacro(joints_dict, links_xyz_dict, inertial_dict, package_name, robot_name, save_dir, mesh_reuse_info)
        Write.write_materials_xacro(joints_dict, links_xyz_dict, inertial_dict, package_name, robot_name, save_dir)
        for legacy_relpath in [
            'urdf/{}.trans'.format(robot_name),
            'urdf/{}.gazebo'.format(robot_name),
            'launch/display.launch',
            'launch/gazebo.launch',
            'launch/controller.launch',
            'launch/controller.yaml',
        ]:
            legacy_path = os.path.join(save_dir, legacy_relpath)
            if os.path.exists(legacy_path):
                os.remove(legacy_path)
        Write.write_display_launch(package_name, robot_name, save_dir)
        viewer_html = Write.write_web_viewer_urdf(robot_name, save_dir)
        utils.cleanup_reused_meshes(save_dir, mesh_reuse_info)

        validation = validate_export_package.validate(save_dir)
        if validation['errors']:
            raise RuntimeError(
                'Exported package validation failed:\n{}'
                .format('\n'.join(validation['errors']))
            )

        utils.remove_generated_reports(save_dir, preserve_joint_tree=bool(reportable_skipped))
        viewer_url = Write.open_web_viewer(viewer_html)
        if reportable_skipped:
            msg += '\n\nURDF tree omissions (see joint_tree_report.txt):\n{}'.format(
                '\n'.join([
                    '{}: {}'.format(joint, all_joints_dict[joint].get('skip_reason', 'unknown'))
                    for joint in reportable_skipped
                ])
            )
        msg += '\n\nModel viewer opened:\n{}'.format(viewer_url)
        ui.messageBox(msg, title)
    except RuntimeError as e:
        if ui:
            ui.messageBox(str(e), title)
    except:
        if ui:
            ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))
