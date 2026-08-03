import csv
import importlib.util
import os
from pathlib import Path
import struct
import sys
import tempfile
import types
import unittest


adsk = types.ModuleType('adsk')
adsk.core = types.ModuleType('adsk.core')
adsk.fusion = types.ModuleType('adsk.fusion')
adsk.fusion.AsBuiltJoint = type('AsBuiltJoint', (), {})
adsk.fusion.JointOrigin = type('JointOrigin', (), {})
sys.modules.setdefault('adsk', adsk)
sys.modules.setdefault('adsk.core', adsk.core)
sys.modules.setdefault('adsk.fusion', adsk.fusion)

package_root = Path(__file__).resolve().parents[1]
package_spec = importlib.util.spec_from_file_location(
    'URDF_Exporter',
    package_root / '__init__.py',
    submodule_search_locations=[str(package_root)],
)
package_module = importlib.util.module_from_spec(package_spec)
sys.modules['URDF_Exporter'] = package_module
package_spec.loader.exec_module(package_module)

from URDF_Exporter.core import Joint
from URDF_Exporter.core import Link
from URDF_Exporter.core import Write
from URDF_Exporter.tools import validate_export_package
from URDF_Exporter.utils import utils


class Collection:
    def __init__(self, items):
        self._items = items
        self.count = len(items)

    def item(self, index):
        return self._items[index]

    def __iter__(self):
        return iter(self._items)


class Component:
    def __init__(self, name):
        self.name = name


class Occurrence:
    def __init__(self, component_name, full_path, bodies=None, children=None, visible=True):
        self.component = Component(component_name)
        self.fullPathName = full_path
        self.name = full_path.split('+')[-1]
        self.isVisible = visible
        self.bRepBodies = Collection(bodies or [])
        self.childOccurrences = Collection(children or [])
        self.transform = Transform([0.0, 0.0, 0.0])


class Root:
    def __init__(self, top_occurrences, attributes=None, joints=None, as_built_joints=None):
        self.occurrences = Collection(top_occurrences)
        all_occurrences = []

        def walk(occurrence):
            all_occurrences.append(occurrence)
            for child in occurrence.childOccurrences:
                walk(child)

        for occurrence in top_occurrences:
            walk(occurrence)
        self.allOccurrences = all_occurrences
        self.attributes = attributes or Attributes({})
        self.allJoints = joints or []
        self.allAsBuiltJoints = as_built_joints or []


class Point:
    def __init__(self, values):
        self.values = values

    def asArray(self):
        return self.values


class Transform:
    def __init__(self, translation):
        self.translation = Point(translation)

    def asArray(self):
        x, y, z = self.translation.asArray()
        return [1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z]


class JointOrigin:
    def __init__(self, origin):
        self.origin = Point(origin)


class FixedMotion:
    jointType = 0


class Limits:
    def __init__(self, lower, upper):
        self.isMaximumValueEnabled = True
        self.isMinimumValueEnabled = True
        self.maximumValue = upper
        self.minimumValue = lower


class RevoluteMotion:
    jointType = 1

    def __init__(self, axis=(0.0, 0.0, 1.0), lower=-1.0, upper=1.0):
        self.rotationAxisVector = Point(axis)
        self.rotationLimits = Limits(lower, upper)


class UnsupportedMotion:
    jointType = 6


class DisabledLimits:
    isMaximumValueEnabled = False
    isMinimumValueEnabled = False


class UnlimitedPrismaticMotion:
    jointType = 2
    slideDirectionVector = Point((0.0, 0.0, 1.0))
    slideLimits = DisabledLimits()


class FusionJoint:
    def __init__(self, name, child, parent, origin=(0.0, 0.0, 0.0), motion=None):
        self.name = name
        self.isVisible = True
        self.occurrenceOne = child
        self.occurrenceTwo = parent
        self.jointMotion = motion or FixedMotion()
        self.geometryOrOriginOne = JointOrigin(origin)
        self.geometryOrOriginTwo = JointOrigin(origin)


class Attribute:
    def __init__(self, value):
        self.value = value


class Attributes:
    def __init__(self, values):
        self.values = values

    def itemByName(self, group, name):
        return self.values.get((group, name))


class JointRoot:
    def __init__(self, joints):
        self.allJoints = joints
        self.allAsBuiltJoints = []


class InvalidOccurrenceJoint:
    name = 'broken fusion joint'
    isVisible = True

    @property
    def occurrenceOne(self):
        raise RuntimeError('2 : InternalValidationError : occPath1.valid()')

    @property
    def occurrenceTwo(self):
        return None


def write_binary_stl(path, vertices):
    header = b'test' + b' ' * 76
    triangle_count = struct.pack('<I', 1)
    normal = (0.0, 0.0, 1.0)
    payload = struct.pack('<12fH', *(normal + tuple(vertices[0]) + tuple(vertices[1]) + tuple(vertices[2]) + (0,)))
    with open(path, 'wb') as f:
        f.write(header + triangle_count + payload)


class ExportLogicTests(unittest.TestCase):
    def test_assembly_occurrence_can_be_flattened_into_one_link(self):
        child = Occurrence('child_part', 'asm+parent:1+child:1', bodies=['child_body'])
        parent = Occurrence('parent_asm', 'asm+parent:1', children=[child])
        root = Root([parent])

        self.assertEqual(utils.grouped_visible_bodies(parent, {'asm_parent_1'}), ['child_body'])
        self.assertEqual(utils.visible_geometry_link_names(root, {'asm_parent_1'}), {'asm_parent_1'})

    def test_nested_target_link_is_not_double_counted_in_parent_link(self):
        child = Occurrence('moving_link', 'asm+parent:1+moving:1', bodies=['moving_body'])
        parent = Occurrence('parent_asm', 'asm+parent:1', children=[child])
        child_link = utils.occurrence_link_name(child)

        self.assertEqual(utils.grouped_visible_bodies(parent, {child_link}), [])

    def test_linked_fusion_copies_keep_distinct_link_names_but_share_part_key(self):
        left = Occurrence('same_component_1', 'asm+left+same:1', bodies=['left_body'])
        right = Occurrence('same_component_1', 'asm+right+same:1', bodies=['right_body'])

        self.assertNotEqual(utils.occurrence_link_name(left), utils.occurrence_link_name(right))
        self.assertEqual(utils.occurrence_part_key(left), utils.occurrence_part_key(right))

    def test_sanitized_occurrence_name_collision_is_rejected(self):
        first = Occurrence('part_a', 'assembly+a:b', bodies=['a'])
        second = Occurrence('part_b', 'assembly+a/b', bodies=['b'])

        with self.assertRaises(RuntimeError):
            utils.validate_occurrence_link_names(Root([first, second]))

    def test_mesh_reuse_only_for_translation_equivalent_same_part_key(self):
        with tempfile.TemporaryDirectory() as tmp:
            mesh_dir = os.path.join(tmp, 'meshes')
            os.makedirs(mesh_dir)
            write_binary_stl(os.path.join(mesh_dir, 'left_copy.stl'), [(0, 0, 0), (1, 0, 0), (0, 1, 0)])
            write_binary_stl(os.path.join(mesh_dir, 'right_copy.stl'), [(10, 0, 0), (11, 0, 0), (10, 1, 0)])

            info = utils.build_mesh_reuse_info(
                tmp,
                {'left_copy', 'right_copy'},
                {'left_copy': 'same_component', 'right_copy': 'same_component'},
            )

            reused = [entry for entry in info['all_meshes'] if entry['reused']]
            self.assertEqual(len(reused), 1)
            self.assertEqual(reused[0]['reuse_status'], 'reused_translation_only')
            self.assertEqual(abs(reused[0]['offset_m'][0]), 0.01)

    def test_mesh_is_not_reused_when_shape_key_differs(self):
        with tempfile.TemporaryDirectory() as tmp:
            mesh_dir = os.path.join(tmp, 'meshes')
            os.makedirs(mesh_dir)
            write_binary_stl(os.path.join(mesh_dir, 'copy_a.stl'), [(0, 0, 0), (1, 0, 0), (0, 1, 0)])
            write_binary_stl(os.path.join(mesh_dir, 'copy_b.stl'), [(0, 0, 0), (2, 0, 0), (0, 1, 0)])

            info = utils.build_mesh_reuse_info(
                tmp,
                {'copy_a', 'copy_b'},
                {'copy_a': 'same_component', 'copy_b': 'same_component'},
            )

            self.assertEqual(info['stats']['reused_mesh_files'], 0)
            statuses = {entry['source_mesh_file']: entry['reuse_status'] for entry in info['all_meshes']}
            self.assertEqual(statuses['copy_a.stl'], 'not_reused_shape_or_rotation_mismatch')
            self.assertEqual(statuses['copy_b.stl'], 'not_reused_shape_or_rotation_mismatch')

    def test_virtual_links_are_reported_as_meshless_intentional_links(self):
        joints = {'fixed_joint_01': {'child': 'empty_frame', 'xyz': [1.0, 2.0, 3.0]}}
        inertials = {'base_link': {'source': 'test'}}
        Link.add_virtual_inertials(inertials, joints, {'base_link', 'empty_frame'})

        self.assertEqual(inertials['empty_frame']['source'], 'virtual_empty_link')
        self.assertEqual(inertials['empty_frame']['center_of_mass'], [1.0, 2.0, 3.0])

        with tempfile.TemporaryDirectory() as tmp:
            utils.write_export_structure_report(
                tmp,
                {'base_link', 'empty_frame'},
                [{'export_name': 'base_link', 'component_name': 'base_link', 'part_key': 'base_link', 'body_count': 1}],
                inertials,
                [],
                {'exported': ['base_link'], 'failed': []},
            )
            with open(os.path.join(tmp, 'export_structure_report.csv'), newline='', encoding='utf-8') as f:
                rows = {row['link_name']: row for row in csv.DictReader(f)}

        self.assertEqual(rows['base_link']['stl_export_status'], 'exported')
        self.assertEqual(rows['empty_frame']['stl_export_status'], 'no_mesh_virtual_link')

    def test_invalid_fusion_joint_is_reported_instead_of_crashing(self):
        joints, msg = Joint.make_joints_dict(JointRoot([InvalidOccurrenceJoint()]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertIn('skipped_joint_01', joints)
        self.assertTrue(joints['skipped_joint_01']['skip_from_urdf'])
        self.assertTrue(joints['skipped_joint_01']['diagnostic_only'])
        self.assertEqual(joints['skipped_joint_01']['skip_reason'], 'invalid_joint_occurrence')

    def test_fusion_component2_is_urdf_parent_and_component1_is_child(self):
        parent = Occurrence('base_link', 'base_link')
        child = Occurrence('arm_link', 'arm_link')
        fusion_joint = FusionJoint('Fusion Joint', child, parent)

        joints, msg = Joint.make_joints_dict(JointRoot([fusion_joint]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertIn('fixed_joint_01', joints)
        self.assertEqual(joints['fixed_joint_01']['original_parent'], 'base_link')
        self.assertEqual(joints['fixed_joint_01']['original_child'], 'arm_link')
        self.assertEqual(joints['fixed_joint_01']['parent'], 'base_link')
        self.assertEqual(joints['fixed_joint_01']['child'], 'arm_link')

    def test_hidden_occurrence_keeps_joint_structure(self):
        base = Occurrence('base_link', 'base_link', visible=False)
        child = Occurrence('frame_link', 'frame_link', visible=False)
        fusion_joint = FusionJoint('Hidden Frame Joint', child, base)

        joints, msg = Joint.make_joints_dict(JointRoot([fusion_joint]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertFalse(joints['fixed_joint_01']['skip_from_urdf'])
        self.assertEqual(joints['fixed_joint_01']['parent'], 'base_link')
        self.assertEqual(joints['fixed_joint_01']['child'], 'frame_link')

    def test_hidden_base_link_is_still_recognized_as_structural_root(self):
        base = Occurrence('base_link', 'base_link', visible=False)

        links = utils.link_occurrence_map(Root([base]))

        self.assertIn('base_link', links)

    def test_reversed_revolute_joint_flips_axis_and_limits(self):
        base = Occurrence('base_link', 'base_link')
        arm = Occurrence('arm_link', 'arm_link')
        fusion_joint = FusionJoint(
            'Reversed Joint', base, arm,
            motion=RevoluteMotion(axis=(0.0, 1.0, 0.0), lower=-1.0, upper=2.0),
        )

        joints, msg = Joint.make_joints_dict(JointRoot([fusion_joint]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        entry = joints['revolute_joint_01']
        self.assertTrue(entry['auto_swapped'])
        self.assertEqual(entry['parent'], 'base_link')
        self.assertEqual(entry['child'], 'arm_link')
        self.assertEqual(entry['axis'], [0.0, -1.0, 0.0])
        self.assertEqual(entry['lower_limit'], -2.0)
        self.assertEqual(entry['upper_limit'], 1.0)

    def test_unsupported_fusion_joint_is_diagnostic(self):
        base = Occurrence('base_link', 'base_link')
        arm = Occurrence('arm_link', 'arm_link')
        fusion_joint = FusionJoint('Ball Joint', arm, base, motion=UnsupportedMotion())

        joints, msg = Joint.make_joints_dict(JointRoot([fusion_joint]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        entry = joints['skipped_joint_01']
        self.assertTrue(entry['skip_from_urdf'])
        self.assertEqual(entry['skip_reason'], 'unsupported_fusion_joint_type')

    def test_all_missing_prismatic_limits_are_reported(self):
        base = Occurrence('base_link', 'base_link')
        slider_a = Occurrence('slider_a', 'slider_a')
        slider_b = Occurrence('slider_b', 'slider_b')
        joints, msg = Joint.make_joints_dict(JointRoot([
            FusionJoint('Slider 30', slider_a, base, motion=UnlimitedPrismaticMotion()),
            FusionJoint('Slider 31', slider_b, base, motion=UnlimitedPrismaticMotion()),
        ]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        failures = [entry for entry in joints.values() if entry.get('skip_reason', '').startswith('invalid_joint_motion:')]
        self.assertEqual(len(failures), 2)
        self.assertTrue(all('does not have prismatic limits' in entry['skip_reason'] for entry in failures))

    def test_urdf_joint_attribute_is_used_as_joint_source(self):
        payload = {
            'schema': 1,
            'joints': [{
                'name': 'shoulder_pitch',
                'type': 'revolute',
                'parent': 'base_link',
                'child': 'arm_link',
                'origin_m': [0.1, 0.2, 0.3],
                'axis': [0.0, 1.0, 0.0],
                'lower_limit': -1.0,
                'upper_limit': 1.0,
            }],
        }
        attrs = Attributes({
            ('fusion2urdf_urdf_joints', 'joints_json'): Attribute(__import__('json').dumps(payload)),
        })
        joints, msg = Joint.make_joints_dict(Root([], attrs), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertIn('shoulder_pitch', joints)
        self.assertEqual(joints['shoulder_pitch']['source'], 'urdf_joint')
        self.assertEqual(joints['shoulder_pitch']['parent'], 'base_link')
        self.assertEqual(joints['shoulder_pitch']['child'], 'arm_link')
        self.assertEqual(joints['shoulder_pitch']['xyz'], [0.1, 0.2, 0.3])
        self.assertEqual(joints['shoulder_pitch']['axis'], [0.0, 1.0, 0.0])

    def test_custom_joint_supports_mimic_and_control_limits(self):
        joint = Joint.Joint(
            name='finger_follower_joint',
            joint_type='revolute',
            xyz=[0.0, 0.0, 0.0],
            rpy=[0.1, 0.2, 0.3],
            axis=[0.0, 0.0, 1.0],
            parent='palm_link',
            child='finger_link',
            upper_limit=0.5,
            lower_limit=-0.5,
            effort=12.0,
            velocity=3.0,
            mimic={'joint': 'finger_driver_joint', 'multiplier': -1.0, 'offset': 0.1},
        )

        joint.make_joint_xml()

        self.assertIn('rpy="0.1 0.2 0.3"', joint.joint_xml)
        self.assertIn('effort="12.0"', joint.joint_xml)
        self.assertIn('velocity="3.0"', joint.joint_xml)
        self.assertIn('joint="finger_driver_joint"', joint.joint_xml)
        self.assertIn('multiplier="-1.0"', joint.joint_xml)

    def test_display_launch_is_ros2_python_launch(self):
        with tempfile.TemporaryDirectory() as tmp:
            Write.write_display_launch('sample_description', 'sample', tmp)
            path = os.path.join(tmp, 'launch', 'display.launch.py')
            with open(path, encoding='utf-8') as f:
                content = f.read()

        self.assertIn('def generate_launch_description()', content)
        self.assertIn("package='rviz2'", content)

    def test_urdf_joint_overrides_fusion_joint_for_same_child(self):
        base = Occurrence('base_link', 'base_link')
        arm = Occurrence('arm_link', 'arm_link')
        fusion_joint = FusionJoint('Fusion Fixed 1', arm, base)
        payload = {
            'schema': 1,
            'joints': [{
                'name': 'shoulder_pitch',
                'type': 'revolute',
                'parent': 'base_link',
                'child': 'arm_link',
                'origin_m': [0.1, 0.2, 0.3],
                'axis': [0.0, 1.0, 0.0],
                'lower_limit': -1.0,
                'upper_limit': 1.0,
                'overwrite_fusion_joint': True,
            }],
        }
        attrs = Attributes({
            ('fusion2urdf_urdf_joints', 'joints_json'): Attribute(__import__('json').dumps(payload)),
        })
        joints, msg = Joint.make_joints_dict(Root([], attrs, [fusion_joint]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertEqual(joints['shoulder_pitch']['source'], 'urdf_joint')
        overridden = [entry for entry in joints.values() if entry.get('skip_reason') == 'overridden_by_urdf_joint']
        self.assertEqual(len(overridden), 1)
        self.assertEqual(overridden[0]['fusion_joint_name'], 'Fusion Fixed 1')
        self.assertEqual(overridden[0]['overridden_by_urdf_joint'], 'shoulder_pitch')

    def test_invalid_urdf_joint_is_reported_as_diagnostic(self):
        payload = {'schema': 1, 'joints': [{'name': 'bad_joint', 'type': 'ball'}]}
        attrs = Attributes({
            ('fusion2urdf_urdf_joints', 'joints_json'): Attribute(__import__('json').dumps(payload)),
        })
        joints, msg = Joint.make_joints_dict(Root([], attrs), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertIn('bad_joint', joints)
        self.assertTrue(joints['bad_joint']['skip_from_urdf'])
        self.assertEqual(joints['bad_joint']['skip_reason'], 'unsupported_urdf_joint_type')

    def test_export_package_validator_accepts_clean_package(self):
        with tempfile.TemporaryDirectory() as tmp:
            package_dir = os.path.join(tmp, 'sample_description')
            urdf_dir = os.path.join(package_dir, 'urdf')
            mesh_dir = os.path.join(package_dir, 'meshes')
            os.makedirs(urdf_dir)
            os.makedirs(mesh_dir)
            write_binary_stl(os.path.join(mesh_dir, 'base_link.stl'), [(0, 0, 0), (1, 0, 0), (0, 1, 0)])
            write_binary_stl(os.path.join(mesh_dir, 'child_link.stl'), [(0, 0, 1), (1, 0, 1), (0, 1, 1)])
            with open(os.path.join(urdf_dir, 'sample.xacro'), 'w', encoding='utf-8') as f:
                f.write('<?xml version="1.0" ?>\n')
                f.write('<robot name="sample" xmlns:xacro="http://www.ros.org/wiki/xacro">\n')
                for link in ['base_link', 'child_link']:
                    f.write('  <link name="{}"><visual><geometry><mesh filename="package://sample_description/meshes/{}.stl"/></geometry></visual></link>\n'.format(link, link))
                f.write('  <joint name="fixed_joint_01" type="fixed"><parent link="base_link"/><child link="child_link"/></joint>\n')
                f.write('</robot>\n')
            with open(os.path.join(package_dir, 'export_structure_report.csv'), 'w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=['link_name', 'stl_export_status', 'has_mesh', 'has_inertial'])
                writer.writeheader()
                writer.writerow({'link_name': 'base_link', 'stl_export_status': 'exported', 'has_mesh': True, 'has_inertial': True})
                writer.writerow({'link_name': 'child_link', 'stl_export_status': 'exported', 'has_mesh': True, 'has_inertial': True})
            with open(os.path.join(package_dir, 'mesh_reuse_report.csv'), 'w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=['link_name', 'source_mesh_file', 'used_mesh_file', 'reused', 'reuse_status'])
                writer.writeheader()
                writer.writerow({'link_name': 'base_link', 'source_mesh_file': 'base_link.stl', 'used_mesh_file': 'base_link.stl', 'reused': False, 'reuse_status': 'unique_part'})
                writer.writerow({'link_name': 'child_link', 'source_mesh_file': 'child_link.stl', 'used_mesh_file': 'child_link.stl', 'reused': False, 'reuse_status': 'unique_part'})

            result = validate_export_package.validate(package_dir)

        self.assertEqual(result['errors'], [])
        self.assertEqual(result['links'], 2)
        self.assertEqual(result['joints'], 1)

    def test_export_package_validator_uses_package_xml_name(self):
        with tempfile.TemporaryDirectory() as tmp:
            package_dir = os.path.join(tmp, 'stage_workspace_name')
            urdf_dir = os.path.join(package_dir, 'urdf')
            mesh_dir = os.path.join(package_dir, 'meshes')
            os.makedirs(urdf_dir)
            os.makedirs(mesh_dir)
            write_binary_stl(os.path.join(mesh_dir, 'base_link.stl'), [(0, 0, 0), (1, 0, 0), (0, 1, 0)])
            with open(os.path.join(urdf_dir, 'sample.xacro'), 'w', encoding='utf-8') as f:
                f.write('<?xml version="1.0" ?>\n')
                f.write('<robot name="sample" xmlns:xacro="http://www.ros.org/wiki/xacro">\n')
                f.write('  <link name="base_link"><visual><geometry><mesh filename="package://sample_description/meshes/base_link.stl"/></geometry></visual></link>\n')
                f.write('</robot>\n')
            with open(os.path.join(package_dir, 'package.xml'), 'w', encoding='utf-8') as f:
                f.write('<?xml version="1.0"?>\n')
                f.write('<package format="3">\n')
                f.write('  <name>sample_description</name>\n')
                f.write('  <version>0.0.0</version>\n')
                f.write('  <description>sample</description>\n')
                f.write('  <maintainer email="test@example.com">Test</maintainer>\n')
                f.write('  <license>Apache-2.0</license>\n')
                f.write('  <buildtool_depend>ament_cmake</buildtool_depend>\n')
                f.write('  <export><build_type>ament_cmake</build_type></export>\n')
                f.write('</package>\n')

            result = validate_export_package.validate(package_dir)

        self.assertEqual(result['errors'], [])
        self.assertEqual(result['main_xacro'].endswith('sample.xacro'), True)

    def test_export_package_validator_ignores_transmission_joints(self):
        with tempfile.TemporaryDirectory() as tmp:
            package_dir = os.path.join(tmp, 'sample_description')
            urdf_dir = os.path.join(package_dir, 'urdf')
            mesh_dir = os.path.join(package_dir, 'meshes')
            os.makedirs(urdf_dir)
            os.makedirs(mesh_dir)
            write_binary_stl(os.path.join(mesh_dir, 'base_link.stl'), [(0, 0, 0), (1, 0, 0), (0, 1, 0)])
            write_binary_stl(os.path.join(mesh_dir, 'arm_base_link.stl'), [(0, 0, 1), (1, 0, 1), (0, 1, 1)])
            write_binary_stl(os.path.join(mesh_dir, 'arm_child_link.stl'), [(0, 0, 2), (1, 0, 2), (0, 1, 2)])
            with open(os.path.join(urdf_dir, 'sample.xacro'), 'w', encoding='utf-8') as f:
                f.write('<?xml version="1.0" ?>\n')
                f.write('<robot name="sample" xmlns:xacro="http://www.ros.org/wiki/xacro">\n')
                f.write('  <xacro:macro name="arm_block" params="parent prefix">\n')
                f.write('    <link name="${prefix}base_link"><visual><geometry><mesh filename="package://sample_description/meshes/arm_base_link.stl"/></geometry></visual></link>\n')
                f.write('    <link name="${prefix}child_link"><visual><geometry><mesh filename="package://sample_description/meshes/arm_child_link.stl"/></geometry></visual></link>\n')
                f.write('    <joint name="${prefix}base_joint" type="fixed"><parent link="${parent}"/><child link="${prefix}base_link"/></joint>\n')
                f.write('    <joint name="${prefix}kinematic_joint" type="fixed"><parent link="${parent}"/><child link="${prefix}child_link"/></joint>\n')
                f.write('    <transmission name="${prefix}kinematic_joint_tran">\n')
                f.write('      <type>transmission_interface/SimpleTransmission</type>\n')
                f.write('      <joint name="${prefix}kinematic_joint">\n')
                f.write('        <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>\n')
                f.write('      </joint>\n')
                f.write('    </transmission>\n')
                f.write('  </xacro:macro>\n')
                f.write('  <link name="base_link"><visual><geometry><mesh filename="package://sample_description/meshes/base_link.stl"/></geometry></visual></link>\n')
                f.write('  <xacro:arm_block parent="base_link" prefix="arm_"/>\n')
                f.write('</robot>\n')
            with open(os.path.join(package_dir, 'package.xml'), 'w', encoding='utf-8') as f:
                f.write('<?xml version="1.0"?>\n')
                f.write('<package format="3">\n')
                f.write('  <name>sample_description</name>\n')
                f.write('  <version>0.0.0</version>\n')
                f.write('  <description>sample</description>\n')
                f.write('  <maintainer email="test@example.com">Test</maintainer>\n')
                f.write('  <license>Apache-2.0</license>\n')
                f.write('  <buildtool_depend>ament_cmake</buildtool_depend>\n')
                f.write('  <export><build_type>ament_cmake</build_type></export>\n')
                f.write('</package>\n')

            result = validate_export_package.validate(package_dir)

        self.assertEqual(result['errors'], [])
        self.assertEqual(result['links'], 3)
        self.assertEqual(result['joints'], 2)
        self.assertEqual(result['main_xacro'].endswith('sample.xacro'), True)

    def test_export_package_validator_synthesizes_missing_reports(self):
        with tempfile.TemporaryDirectory() as tmp:
            package_dir = os.path.join(tmp, 'sample_description')
            urdf_dir = os.path.join(package_dir, 'urdf')
            mesh_dir = os.path.join(package_dir, 'meshes')
            os.makedirs(urdf_dir)
            os.makedirs(mesh_dir)
            write_binary_stl(os.path.join(mesh_dir, 'base_link.stl'), [(0, 0, 0), (1, 0, 0), (0, 1, 0)])
            write_binary_stl(os.path.join(mesh_dir, 'child_link.stl'), [(0, 0, 1), (1, 0, 1), (0, 1, 1)])
            with open(os.path.join(urdf_dir, 'sample.xacro'), 'w', encoding='utf-8') as f:
                f.write('<?xml version="1.0" ?>\n')
                f.write('<robot name="sample" xmlns:xacro="http://www.ros.org/wiki/xacro">\n')
                f.write('  <link name="base_link"><inertial><mass value="1"/></inertial><visual><geometry><mesh filename="package://sample_description/meshes/base_link.stl"/></geometry></visual></link>\n')
                f.write('  <link name="child_link"><visual><geometry><mesh filename="package://sample_description/meshes/child_link.stl"/></geometry></visual></link>\n')
                f.write('  <joint name="fixed_joint_01" type="fixed"><parent link="base_link"/><child link="child_link"/></joint>\n')
                f.write('</robot>\n')
            with open(os.path.join(package_dir, 'package.xml'), 'w', encoding='utf-8') as f:
                f.write('<?xml version="1.0"?>\n')
                f.write('<package format="3">\n')
                f.write('  <name>sample_description</name>\n')
                f.write('  <version>0.0.0</version>\n')
                f.write('  <description>sample</description>\n')
                f.write('  <maintainer email="test@example.com">Test</maintainer>\n')
                f.write('  <license>Apache-2.0</license>\n')
                f.write('  <buildtool_depend>ament_cmake</buildtool_depend>\n')
                f.write('  <export><build_type>ament_cmake</build_type></export>\n')
                f.write('</package>\n')

            result = validate_export_package.validate(package_dir)

        self.assertEqual(result['errors'], [])
        self.assertEqual(result['warnings'], [])
        self.assertEqual(result['links'], 2)
        self.assertEqual(result['joints'], 1)

    def test_export_package_validator_rejects_unsafe_names(self):
        with tempfile.TemporaryDirectory() as tmp:
            package_dir = os.path.join(tmp, 'bad_description')
            urdf_dir = os.path.join(package_dir, 'urdf')
            mesh_dir = os.path.join(package_dir, 'meshes')
            os.makedirs(urdf_dir)
            os.makedirs(mesh_dir)
            write_binary_stl(os.path.join(mesh_dir, 'base_link.stl'), [(0, 0, 0), (1, 0, 0), (0, 1, 0)])
            write_binary_stl(os.path.join(mesh_dir, 'child_link.stl'), [(0, 0, 1), (1, 0, 1), (0, 1, 1)])
            with open(os.path.join(urdf_dir, 'bad.xacro'), 'w', encoding='utf-8') as f:
                f.write('<?xml version="1.0" ?>\n')
                f.write('<robot name="bad" xmlns:xacro="http://www.ros.org/wiki/xacro">\n')
                f.write('  <link name="base_link"><visual><geometry><mesh filename="package://bad_description/meshes/base_link.stl"/></geometry></visual></link>\n')
                f.write('  <link name="child_link"><visual><geometry><mesh filename="package://bad_description/meshes/child_link.stl"/></geometry></visual></link>\n')
                f.write('  <joint name="剛性 9" type="fixed"><parent link="base_link"/><child link="child_link"/></joint>\n')
                f.write('</robot>\n')
            with open(os.path.join(package_dir, 'export_structure_report.csv'), 'w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=['link_name', 'stl_export_status', 'has_mesh', 'has_inertial'])
                writer.writeheader()
            with open(os.path.join(package_dir, 'mesh_reuse_report.csv'), 'w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=['link_name', 'source_mesh_file', 'used_mesh_file', 'reused', 'reuse_status'])
                writer.writeheader()

            result = validate_export_package.validate(package_dir)

        self.assertTrue(any('unsafe joint name' in error for error in result['errors']))


if __name__ == '__main__':
    unittest.main()
