import base64
import ast
import csv
import json
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


class Color:
    def __init__(self, red, green, blue, opacity=255):
        self.red = red
        self.green = green
        self.blue = blue
        self.opacity = opacity


class Appearance:
    def __init__(self, color):
        self.color = color


class Body:
    def __init__(self, color, opacity=1.0):
        self.appearance = Appearance(color)
        self.visibleOpacity = opacity


class Occurrence:
    def __init__(self, component_name, full_path, bodies=None, children=None, visible=True):
        self.component = Component(component_name)
        self.fullPathName = full_path
        self.name = full_path.split('+')[-1]
        self.isVisible = visible
        self.bRepBodies = Collection(bodies or [])
        self.childOccurrences = Collection(children or [])
        self.transform = Transform([0.0, 0.0, 0.0])
        self.transform2 = self.transform
        self.appearance = None


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


class MissingOriginFixedJoint(FusionJoint):
    def __init__(self, name, occurrence_one, occurrence_two):
        super().__init__(name, occurrence_one, occurrence_two)
        self.geometryOrOriginOne = None
        self.geometryOrOriginTwo = None


class MissingOriginContinuousJoint(MissingOriginFixedJoint):
    def __init__(self, name, occurrence_one, occurrence_two, origin):
        super().__init__(name, occurrence_one, occurrence_two)
        self.jointMotion = RevoluteMotion()
        self.jointMotion.rotationLimits = DisabledLimits()
        self.geometryTwoTransform = Transform(origin)


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

    def test_roboviez_addin_has_manifest_and_run_stop_entrypoints(self):
        manifest_path = package_root / 'RobovieZ_URDF_Exporter_AddIn.manifest'
        entrypoint_path = package_root / 'RobovieZ_URDF_Exporter_AddIn.py'

        self.assertTrue(manifest_path.is_file())
        self.assertTrue(entrypoint_path.is_file())

        manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
        self.assertEqual(manifest['type'], 'addin')
        self.assertFalse(manifest['runOnStartup'])
        self.assertEqual(manifest['id'], '516b21c1-a7b7-45c4-82fb-e7013624dfef')

        module = ast.parse(entrypoint_path.read_text(encoding='utf-8'))
        functions = {node.name for node in module.body if isinstance(node, ast.FunctionDef)}
        self.assertIn('run', functions)
        self.assertIn('stop', functions)

        addin_spec = importlib.util.spec_from_file_location(
            'URDF_Exporter.RobovieZ_URDF_Exporter_AddIn',
            entrypoint_path,
        )
        addin_module = importlib.util.module_from_spec(addin_spec)
        addin_spec.loader.exec_module(addin_module)
        forwarded_contexts = []
        original_run = addin_module.exporter.run
        try:
            addin_module.exporter.run = lambda context: forwarded_contexts.append(context)
            context = object()
            addin_module.run(context)
        finally:
            addin_module.exporter.run = original_run

        self.assertEqual(forwarded_contexts, [context])
        self.assertIsNone(addin_module.stop(context))

    def test_occurrence_material_color_is_exported_to_web_viewer_urdf(self):
        occurrence = Occurrence('base_link', 'base_link', bodies=[Body(Color(51, 102, 204, 128), 0.5)])
        rgba = Link.occurrence_rgba(occurrence, list(occurrence.bRepBodies))
        inertials = {'base_link': {'rgba': rgba}}

        with tempfile.TemporaryDirectory() as tmp:
            os.makedirs(os.path.join(tmp, 'urdf'))
            with open(os.path.join(tmp, 'urdf', 'sample.xacro'), 'w', encoding='utf-8') as f:
                f.write('<robot name="sample" xmlns:xacro="http://www.ros.org/wiki/xacro">')
                f.write('<xacro:include filename="materials.xacro"/>')
                f.write('<link name="base_link"><visual><material name="material_base_link"/></visual></link>')
                f.write('</robot>')
            Write.write_materials_xacro({}, {}, inertials, 'sample_description', 'sample', tmp)
            viewer_html = Write.write_web_viewer_urdf('sample', tmp)
            with open(viewer_html, encoding='utf-8') as f:
                content = f.read()
            marker = 'urdf="data:application/xml;base64,'
            encoded_urdf = content.split(marker, 1)[1].split('"', 1)[0]
            content = base64.b64decode(encoded_urdf).decode('utf-8')

        self.assertEqual(rgba, [0.2, 0.4, 0.8, 0.25098])
        self.assertIn('material_base_link', content)
        self.assertIn('0.200000 0.400000 0.800000 0.250980', content)

    def test_web_viewer_export_removes_legacy_vscode_preview(self):
        with tempfile.TemporaryDirectory() as tmp:
            os.makedirs(os.path.join(tmp, 'urdf'))
            os.makedirs(os.path.join(tmp, '.vscode'))
            os.makedirs(os.path.join(tmp, 'vscode_preview'))
            os.makedirs(os.path.join(tmp, 'viewer'))
            open(os.path.join(tmp, 'open_vscode_preview.cmd'), 'w').close()
            open(os.path.join(tmp, 'open_model_viewer.cmd'), 'w').close()
            open(os.path.join(tmp, 'viewer', 'serve_model.py'), 'w').close()
            with open(os.path.join(tmp, 'urdf', 'sample.xacro'), 'w', encoding='utf-8') as f:
                f.write('<robot name="sample"/>')

            viewer_html = Write.write_web_viewer_urdf('sample', tmp)

            self.assertTrue(os.path.isfile(viewer_html))
            self.assertFalse(any(name.lower().endswith('.urdf') for name in os.listdir(os.path.join(tmp, 'viewer'))))
            self.assertFalse(os.path.exists(os.path.join(tmp, 'viewer', 'index.html')))
            self.assertFalse(os.path.exists(os.path.join(tmp, 'viewer', 'assets')))
            self.assertTrue(os.path.isfile(os.path.join(tmp, 'viewer', 'THIRD_PARTY_LICENSE.txt')))
            self.assertFalse(os.path.exists(os.path.join(tmp, 'viewer', 'serve_model.py')))
            self.assertFalse(os.path.exists(os.path.join(tmp, 'open_model_viewer.cmd')))
            self.assertFalse(os.path.exists(os.path.join(tmp, '.vscode')))
            self.assertFalse(os.path.exists(os.path.join(tmp, 'vscode_preview')))
            self.assertFalse(os.path.exists(os.path.join(tmp, 'open_vscode_preview.cmd')))

    def test_web_viewer_opens_self_contained_file_without_local_server(self):
        opened_urls = []
        original_open = Write.webbrowser.open
        Write.webbrowser.open = opened_urls.append
        try:
            with tempfile.TemporaryDirectory() as tmp:
                viewer_file = os.path.join(tmp, 'viewer.html')
                open(viewer_file, 'w').close()
                url = Write.open_web_viewer(viewer_file)
        finally:
            Write.webbrowser.open = original_open

        self.assertTrue(url.startswith('file:///'))
        self.assertEqual(opened_urls, [url])

    def test_web_viewer_embeds_urdf_and_mesh_data(self):
        with tempfile.TemporaryDirectory() as tmp:
            os.makedirs(os.path.join(tmp, 'urdf'))
            os.makedirs(os.path.join(tmp, 'meshes'))
            mesh_bytes = b'solid embedded\nendsolid embedded\n'
            with open(os.path.join(tmp, 'meshes', 'base.stl'), 'wb') as f:
                f.write(mesh_bytes)
            with open(os.path.join(tmp, 'urdf', 'sample.xacro'), 'w', encoding='utf-8') as f:
                f.write('<robot name="sample"><link name="base_link"><visual><geometry>')
                f.write('<mesh filename="package://sample_description/meshes/base.stl"/>')
                f.write('</geometry></visual></link></robot>')

            viewer_html = Write.write_web_viewer_urdf('sample', tmp)
            with open(viewer_html, encoding='utf-8') as f:
                content = f.read()

            marker = 'urdf="data:application/xml;base64,'
            encoded_urdf = content.split(marker, 1)[1].split('"', 1)[0]
            embedded_urdf = base64.b64decode(encoded_urdf).decode('utf-8')
            self.assertIn('data:model/stl;base64,', embedded_urdf)
            self.assertIn(base64.b64encode(mesh_bytes).decode('ascii'), embedded_urdf)
            self.assertNotIn('package://', embedded_urdf)
            self.assertIn("url.lastIndexOf('data:')", content)

    def test_success_cleanup_removes_all_generated_reports(self):
        report_names = [
            'joint_tree_report.txt',
            'joint_tree_edges.csv',
            'joint_tree_links.csv',
            'mesh_reuse_report.csv',
            'extra_fixed_links.csv',
            'export_structure_report.csv',
        ]
        with tempfile.TemporaryDirectory() as tmp:
            for name in report_names:
                open(os.path.join(tmp, name), 'w').close()
            utils.remove_generated_reports(tmp)
            self.assertEqual([name for name in report_names if os.path.exists(os.path.join(tmp, name))], [])

    def test_assembly_occurrence_can_be_flattened_into_one_link(self):
        child = Occurrence('child_part', 'asm+parent:1+child:1', bodies=['child_body'])
        parent = Occurrence('parent_asm', 'asm+parent:1', children=[child])
        root = Root([parent])

        self.assertEqual(utils.grouped_visible_bodies(parent, {'parent_asm'}), ['child_body'])
        self.assertEqual(utils.visible_geometry_link_names(root, {'parent_asm'}), {'parent_asm'})

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

    def test_nested_joint_endpoints_resolve_to_top_level_link_components(self):
        base_servo = Occurrence(
            'P_RS30X_SIMPLE_PLUS',
            'base_link:1+P_RS30X_SIMPLE_PLUS:8',
        )
        neck_horn = Occurrence(
            'P_RS30X_SIMPLE_HORN',
            'neck_link:1+P_RS30X_SIMPLE_HORN:1',
        )
        base_link = Occurrence('base_link', 'base_link:1', children=[base_servo])
        neck_link = Occurrence('neck_link', 'neck_link:1', children=[neck_horn])
        fusion_joint = FusionJoint('Nested Fusion Joint', neck_horn, base_servo)
        root = Root([base_link, neck_link], joints=[fusion_joint])

        joints, msg = Joint.make_joints_dict(root, Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertEqual(joints['fixed_joint_01']['original_parent'], 'base_link')
        self.assertEqual(joints['fixed_joint_01']['original_child'], 'neck_link')
        self.assertFalse(joints['fixed_joint_01']['skip_from_urdf'])

    def test_closed_loop_omission_is_nonfatal_but_other_tree_failures_remain_fatal(self):
        joints = {
            'continuous_joint_18': {
                'skip_from_urdf': True,
                'skip_reason': 'cycle_or_duplicate_parent',
            },
            'disconnected_joint': {
                'skip_from_urdf': True,
                'skip_reason': 'disconnected_from_base_link',
            },
        }

        reportable, fatal = Joint.partition_skipped_joints(joints)

        self.assertEqual(reportable, ['continuous_joint_18'])
        self.assertEqual(fatal, ['disconnected_joint'])

    def test_roboviez_top_level_components_define_link_names_and_preflight(self):
        base_servo = Occurrence(
            'P_RS30X_SIMPLE_PLUS',
            'base_link:1+P_RS30X_SIMPLE_PLUS:8',
            bodies=['base_body'],
        )
        neck_horn = Occurrence(
            'P_RS30X_SIMPLE_HORN',
            'neck_link:1+P_RS30X_SIMPLE_HORN:1',
            bodies=['neck_body'],
        )
        base_link = Occurrence('base_link', 'base_link:1', children=[base_servo])
        neck_link = Occurrence('neck_link', 'neck_link:1', children=[neck_horn])
        fusion_joint = FusionJoint('Nested Fusion Joint', neck_horn, base_servo)
        root = Root([base_link, neck_link], joints=[fusion_joint])

        # Fusion may expose leaf occurrences through allOccurrences while the
        # link-defining assembly occurrences remain available through occurrences.
        root.allOccurrences = [base_servo, neck_horn]

        links = utils.link_occurrence_map(root)
        geometry_links = utils.visible_geometry_link_names(root, {'base_link', 'neck_link'})
        export_sources = utils.export_link_sources(root, {'base_link', 'neck_link'})
        joints, msg = Joint.make_joints_dict(root, Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertIn('base_link', links)
        self.assertIn('neck_link', links)
        self.assertEqual(geometry_links, {'base_link', 'neck_link'})
        self.assertEqual(
            [(entry['export_name'], len(entry['bodies'])) for entry in export_sources],
            [('base_link', 1), ('neck_link', 1)],
        )
        self.assertEqual(joints['fixed_joint_01']['parent'], 'base_link')
        self.assertEqual(joints['fixed_joint_01']['child'], 'neck_link')

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

    def test_base_link_instance_suffix_is_canonicalized(self):
        for base_name in ('base_link:1', 'base_link1'):
            with self.subTest(base_name=base_name):
                base = Occurrence(base_name, base_name, visible=False)
                child = Occurrence('arm_link', 'arm_link')
                fusion_joint = FusionJoint('Base Instance Joint', child, base)

                links = utils.link_occurrence_map(Root([base, child]))
                joints, msg = Joint.make_joints_dict(JointRoot([fusion_joint]), Joint.SUCCESS_MSG)

                self.assertIn('base_link', links)
                self.assertNotIn(utils.sanitize_link_name(base_name), links)
                self.assertEqual(msg, Joint.SUCCESS_MSG)
                self.assertEqual(joints['fixed_joint_01']['parent'], 'base_link')
                self.assertEqual(joints['fixed_joint_01']['child'], 'arm_link')

    def test_base_link_and_base_link_instance_suffix_collision_is_rejected(self):
        base = Occurrence('base_link', 'base_link')
        base_instance = Occurrence('base_link:1', 'base_link:1')

        with self.assertRaises(RuntimeError):
            utils.validate_occurrence_link_names(Root([base, base_instance]))

    def test_fixed_joint_without_origin_uses_relative_occurrence_pose(self):
        base = Occurrence('base_link1', 'base_link1')
        child = Occurrence('arm_link', 'arm_link')
        child.transform = Transform([100.0, 20.0, -30.0])
        child.transform2 = child.transform
        fusion_joint = MissingOriginFixedJoint('base_link1', child, base)

        joints, msg = Joint.make_joints_dict(JointRoot([fusion_joint]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertEqual(joints['fixed_joint_01']['parent'], 'base_link')
        self.assertEqual(joints['fixed_joint_01']['child'], 'arm_link')
        self.assertEqual(joints['fixed_joint_01']['xyz'], [1.0, 0.2, -0.3])
        self.assertEqual(joints['fixed_joint_01']['rpy'], [0.0, 0.0, 0.0])

    def test_continuous_joint_without_geometry_uses_geometry_transform(self):
        base = Occurrence('base_link', 'base_link')
        chest = Occurrence('c_chest_c_1', 'c_chest_c_1')
        fusion_joint = MissingOriginContinuousJoint(
            'base_link1', chest, base, [12.5, -25.0, 37.5]
        )

        joints, msg = Joint.make_joints_dict(JointRoot([fusion_joint]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertEqual(joints['continuous_joint_01']['parent'], 'base_link')
        self.assertEqual(joints['continuous_joint_01']['child'], 'c_chest_c_1')
        self.assertEqual(joints['continuous_joint_01']['xyz'], [0.125, -0.25, 0.375])

    def test_fixed_joint_without_origin_prefers_transform2(self):
        base = Occurrence('base_link1', 'base_link1')
        child = Occurrence('arm_link', 'arm_link')
        base.transform = None
        child.transform = None
        base.transform2 = Transform([0.0, 0.0, 0.0])
        child.transform2 = Transform([25.0, -50.0, 75.0])
        fusion_joint = MissingOriginFixedJoint('base_link1', child, base)

        joints, msg = Joint.make_joints_dict(JointRoot([fusion_joint]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertEqual(joints['fixed_joint_01']['xyz'], [0.25, -0.5, 0.75])

    def test_same_link_joint_without_origin_is_ignored(self):
        base = Occurrence('base_link', 'base_link')
        base_instance = Occurrence('base_link1', 'base_link1')
        fusion_joint = MissingOriginFixedJoint('base_link1', base_instance, base)

        joints, msg = Joint.make_joints_dict(JointRoot([fusion_joint]), Joint.SUCCESS_MSG)

        self.assertEqual(msg, Joint.SUCCESS_MSG)
        self.assertIn('skipped_joint_01', joints)
        self.assertEqual(joints['skipped_joint_01']['skip_reason'], 'same_link_joint')

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
