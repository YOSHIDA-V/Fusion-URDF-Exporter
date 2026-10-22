"""Nested moving components must not collapse into their assembly link."""

import unittest

from test_export_logic import (
    DisabledLimits, FusionJoint, Joint, Limits, Occurrence, Point, Root, utils,
)


class SliderMotion:
    jointType = 2

    def __init__(self, axis=(1.0, 0.0, 0.0)):
        self.slideDirectionVector = Point(axis)
        self.slideLimits = Limits(-0.2, 0.0)


class NestedJointLinkTests(unittest.TestCase):
    def setUp(self):
        self.base = Occurrence('base_link (4)', 'base_link (4):1', bodies=[object()])
        self.frames = [Occurrence('frame', 'frame:{}'.format(index), bodies=[object()])
                       for index in range(1, 7)]
        self.modules = []
        self.plates = []
        self.pads = []
        self.sliders = []
        self.edges = [FusionJoint('frame_mount', frame, self.base) for frame in self.frames]
        for index in range(1, 5):
            path = 'sensor:{}'.format(index)
            plate = Occurrence('plate', path + '+plate:1', bodies=[object(), object(), object()])
            pads = [Occurrence(name, path + '+' + name + ':1', bodies=[object()])
                    for name in ('pad_right', 'pad_center', 'pad_left')]
            hidden_base = Occurrence('base_link', path + '+base_link:1',
                                     bodies=[object()], visible=False)
            module = Occurrence('sensor', path, children=[plate] + pads + [hidden_base])
            self.modules.append(module)
            self.plates.append(plate)
            self.pads.extend(pads)
            self.edges.append(FusionJoint('sensor_mount', plate, self.frames[index - 1]))
            for pad in pads:
                slider = FusionJoint('slide', pad, plate, motion=SliderMotion())
                self.sliders.append(slider)
                self.edges.append(slider)
            self.edges.append(FusionJoint('internal_fixed', plate, hidden_base))
        self.root = Root([self.base] + self.frames + self.modules, as_built_joints=self.edges)
        self.top_names = {utils.top_level_link_name(item)
                          for item in [self.base] + self.frames + self.modules}
        self.pad_names = {utils.occurrence_link_name(pad) for pad in self.pads}
        self.expected_names = self.top_names | self.pad_names

    def make(self):
        entries, message = Joint.make_joints_dict(self.root, Joint.SUCCESS_MSG)
        self.assertEqual(message, Joint.SUCCESS_MSG)
        return entries

    def active(self):
        return [entry for entry in self.make().values() if not entry.get('skip_from_urdf')]

    def test_twelve_nested_sliders_are_not_omitted(self):
        sliders = [entry for entry in self.active() if entry['type'] == 'prismatic']
        self.assertEqual(len(sliders), 12)
        self.assertEqual({entry['child'] for entry in sliders}, self.pad_names)

    def test_fusion_slider_limits_are_preserved_in_metres(self):
        sliders = [entry for entry in self.active() if entry['type'] == 'prismatic']
        self.assertEqual(len(sliders), 12)
        for entry in sliders:
            self.assertEqual((entry['lower_limit'], entry['upper_limit']), (-0.002, 0.0))
            self.assertEqual(entry['axis'], [1.0, 0.0, 0.0])

    def test_moving_link_occurrences_are_in_the_link_map(self):
        mapping = utils.link_occurrence_map(self.root)
        self.assertEqual(set(mapping), self.expected_names)
        for pad in self.pads:
            self.assertIs(mapping[utils.occurrence_link_name(pad)], pad)

    def test_external_attachment_remains_the_static_assembly_link(self):
        for module, plate in zip(self.modules, self.plates):
            self.assertEqual(utils.joint_endpoint_link_name(self.root, plate),
                             utils.top_level_link_name(module))

    def test_moving_endpoints_keep_their_occurrence_instance_identity(self):
        for pad in self.pads:
            self.assertEqual(utils.joint_endpoint_link_name(self.root, pad),
                             utils.occurrence_link_name(pad))

    def test_all_twenty_two_joints_connect_twenty_three_links(self):
        entries = self.make()
        self.assertEqual(Joint.partition_skipped_joints(entries)[1], [])
        active = [entry for entry in entries.values() if not entry.get('skip_from_urdf')]
        self.assertEqual(len(active), 22)
        vertices = {name for entry in active for name in (entry['parent'], entry['child'])}
        self.assertEqual(vertices, self.expected_names)
        self.assertEqual({entry['type'] for entry in active}, {'fixed', 'prismatic'})

    def test_all_thirty_one_visible_bodies_are_exported_once(self):
        sources = utils.export_link_sources(self.root, self.expected_names)
        self.assertEqual({source['export_name'] for source in sources}, self.expected_names)
        bodies = [body for source in sources for body in source['bodies']]
        self.assertEqual(len(bodies), 31)
        self.assertEqual(len({id(body) for body in bodies}), 31)

    def test_static_assembly_excludes_moving_descendant_bodies(self):
        for module, plate in zip(self.modules, self.plates):
            self.assertEqual(utils.grouped_visible_bodies(module, self.expected_names),
                             list(plate.bRepBodies))

    def test_default_export_also_separates_moving_bodies(self):
        sources = utils.export_link_sources(self.root)
        self.assertEqual({source['export_name'] for source in sources}, self.expected_names)
        self.assertEqual(sum(len(source['bodies']) for source in sources), 31)

    def test_geometry_preflight_has_no_false_missing_or_extra_links(self):
        self.assertEqual(utils.visible_geometry_link_names(self.root, self.expected_names),
                         self.expected_names)
        self.assertEqual(utils.disconnected_visible_geometry_links(self.root, self.expected_names), [])

    def test_hidden_slider_part_is_not_promoted_or_exported(self):
        pad = self.pads[0]
        pad.isVisible = False
        self.sliders[0].jointMotion.slideLimits = DisabledLimits()
        mapping = utils.link_occurrence_map(self.root)
        self.assertNotIn(utils.occurrence_link_name(pad), mapping)
        entries = self.make()
        self.assertEqual(Joint.partition_skipped_joints(entries)[1], [])
        active = [entry for entry in entries.values() if not entry.get('skip_from_urdf')]
        self.assertEqual(sum(entry['type'] == 'prismatic' for entry in active), 11)

    def test_hiding_joint_glyph_does_not_remove_sliders(self):
        for slider in self.sliders:
            slider.isVisible = False
        self.assertEqual(sum(entry['type'] == 'prismatic' for entry in self.active()), 12)

    def test_reversed_fusion_endpoints_keep_the_attached_plate_static(self):
        slider = self.sliders[0]
        slider.occurrenceOne, slider.occurrenceTwo = slider.occurrenceTwo, slider.occurrenceOne
        active = self.active()
        self.assertEqual(sum(entry['type'] == 'prismatic' for entry in active), 12)
        reversed_entry = next(entry for entry in active
                              if entry['child'] == utils.occurrence_link_name(self.pads[0]))
        self.assertTrue(reversed_entry['auto_swapped'])
        self.assertEqual(reversed_entry['axis'], [-1.0, 0.0, 0.0])
        self.assertEqual((reversed_entry['lower_limit'], reversed_entry['upper_limit']),
                         (0.0, 0.002))

    def test_fixed_only_nested_assembly_remains_grouped(self):
        for slider in self.sliders:
            slider.jointMotion = self.edges[0].jointMotion
        self.assertEqual(set(utils.link_occurrence_map(self.root)), self.top_names)
        sources = utils.export_link_sources(self.root, self.top_names)
        self.assertEqual(sum(len(source['bodies']) for source in sources), 31)

    def test_copied_components_do_not_share_moving_links(self):
        for pad in self.pads:
            pad.component = self.pads[0].component
        mapping = utils.link_occurrence_map(self.root)
        self.assertEqual(len(self.pad_names), 12)
        self.assertTrue(self.pad_names.issubset(mapping))

    def test_deeper_moving_member_is_found_below_a_static_wrapper(self):
        pad = self.pads[0]
        pad.fullPathName = 'sensor:1+carrier:1+pad_right:1'
        wrapper = Occurrence('carrier', 'sensor:1+carrier:1', children=[pad])
        self.modules[0].childOccurrences._items[1] = wrapper
        self.root = Root([self.base] + self.frames + self.modules, as_built_joints=self.edges)
        targets = self.top_names | {utils.occurrence_link_name(item) for item in self.pads}
        self.assertEqual(utils.visible_geometry_link_names(self.root, targets), targets)
        sources = utils.export_link_sources(self.root, targets)
        self.assertEqual({source['export_name'] for source in sources}, targets)
        self.assertEqual(sum(len(source['bodies']) for source in sources), 31)

    def test_hidden_nested_external_mount_keeps_its_static_assembly(self):
        plate = self.plates[0]
        mount = Occurrence('mount', plate.fullPathName + '+mount:1', visible=False)
        plate.childOccurrences._items.append(mount)
        plate.childOccurrences.count += 1
        self.edges[6].occurrenceOne = mount
        self.root = Root([self.base] + self.frames + self.modules, as_built_joints=self.edges)
        self.assertEqual(utils.joint_endpoint_link_name(self.root, plate), 'sensor')
        active = self.active()
        self.assertEqual(len(active), 22)
        self.assertEqual(sum(entry['type'] == 'prismatic' for entry in active), 12)

    def test_visible_slider_without_limits_still_fails_preflight(self):
        self.sliders[0].jointMotion.slideLimits = DisabledLimits()
        entries = self.make()
        fatal = Joint.partition_skipped_joints(entries)[1]
        self.assertEqual(len(fatal), 1)
        self.assertIn('invalid_joint_motion', entries[fatal[0]]['skip_reason'])

    def test_hidden_assembly_does_not_leak_visible_member_flags(self):
        self.modules[0].isVisible = False
        sources = utils.export_link_sources(self.root)
        self.assertFalse(any(source['occurrence'].fullPathName.startswith('sensor:1')
                             for source in sources))
        self.assertEqual(sum(entry['type'] == 'prismatic' for entry in self.active()), 9)

    def test_static_direct_bodies_remain_with_the_attachment_plate(self):
        extra_body = object()
        self.modules[0].bRepBodies._items.append(extra_body)
        self.modules[0].bRepBodies.count += 1
        bodies = utils.grouped_visible_bodies(self.modules[0], self.expected_names)
        self.assertEqual(bodies, [extra_body] + list(self.plates[0].bRepBodies))


if __name__ == '__main__':
    unittest.main()
