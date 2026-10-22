"""The robot base belongs to the design root, not a nested assembly."""

import unittest

from test_export_logic import FusionJoint, Joint, Occurrence, Root, utils


class BaseLinkScopeTests(unittest.TestCase):
    def setUp(self):
        self.base = Occurrence('base_link (4)', 'base_link (4):1', bodies=[object()])
        self.frames = [
            Occurrence(label, '{}:{}'.format(label, index), bodies=[object()])
            for label, count in (('frame_long', 2), ('frame_short', 4))
            for index in range(1, count + 1)
        ]
        self.bumpers = []
        self.members = []
        for index in range(4):
            label = 'bumper' if index == 0 else 'bumper ({})'.format(index)
            member_name = 'base_link' if index == 0 else 'base_link ({})'.format(index)
            path = label + ':1'
            member = Occurrence(member_name, path + '+' + member_name + ':1',
                                bodies=[object()])
            self.members.append(member)
            self.bumpers.append(Occurrence(label, path, bodies=[object()],
                                           children=[member]))
        edges = [FusionJoint('frame_mount_{}'.format(index), frame, self.base)
                 for index, frame in enumerate(self.frames, 1)]
        edges.extend(FusionJoint('bumper_mount_{}'.format(index), bumper, frame)
                     for index, (bumper, frame) in
                     enumerate(zip(self.bumpers, self.frames[:4]), 1))
        self.root = Root([self.base] + self.frames + self.bumpers, joints=edges)
        self.expected_links = {
            'base_link', 'frame_long', 'frame_long_2', 'frame_short',
            'frame_short_2', 'frame_short_3', 'frame_short_4',
            'bumper', 'bumper__1', 'bumper__2', 'bumper__3',
        }

    def test_top_level_fusion_copy_name_is_canonical_base(self):
        self.assertTrue(utils.is_base_link_occurrence(self.base))
        self.assertEqual(utils.top_level_link_name(self.base), 'base_link')

    def test_existing_base_aliases_remain_supported(self):
        for name in ('base_link', 'base_link:1', 'base_link1'):
            with self.subTest(name=name):
                occurrence = Occurrence(name, name)
                self.assertTrue(utils.is_base_link_occurrence(occurrence))
                self.assertEqual(utils.top_level_link_name(occurrence), 'base_link')

    def test_nested_base_names_are_not_robot_bases(self):
        for member in self.members:
            with self.subTest(path=member.fullPathName):
                self.assertFalse(utils.is_base_link_occurrence(member))

    def test_nested_members_keep_their_occurrence_path_identity(self):
        for member in self.members:
            with self.subTest(path=member.fullPathName):
                self.assertEqual(utils.occurrence_link_name(member),
                                 utils.sanitize_link_name(member.fullPathName))
                self.assertNotEqual(utils.occurrence_link_name(member), 'base_link')

    def test_copied_top_level_base_does_not_collide_with_nested_bases(self):
        utils.validate_occurrence_link_names(self.root)

    def test_canonical_top_level_base_does_not_collide_with_nested_base(self):
        self.base.component.name = 'base_link'
        self.base.name = 'base_link:1'
        self.base.fullPathName = 'base_link:1'
        utils.validate_occurrence_link_names(self.root)

    def test_link_map_selects_the_top_level_base_occurrence(self):
        mapping = utils.link_occurrence_map(self.root)
        self.assertEqual(set(mapping), self.expected_links)
        self.assertIs(mapping['base_link'], self.base)
        self.assertNotIn(self.members[0], mapping.values())

    def test_ten_fixed_joints_form_one_tree_from_the_top_level_base(self):
        joints, message = Joint.make_joints_dict(self.root, Joint.SUCCESS_MSG)
        self.assertEqual(message, Joint.SUCCESS_MSG)
        reportable, fatal = Joint.partition_skipped_joints(joints)
        self.assertEqual(fatal, [])
        self.assertEqual(reportable, [])
        active = [entry for entry in joints.values() if not entry.get('skip_from_urdf')]
        self.assertEqual(len(active), 10)
        vertices = {value for edge in active for value in (edge['parent'], edge['child'])}
        self.assertEqual(vertices, self.expected_links)

    def test_nested_endpoint_stays_attached_to_its_enclosing_bumper(self):
        self.assertEqual(utils.joint_endpoint_link_name(self.root, self.members[0]),
                         'bumper')

    def test_nested_visible_base_body_stays_in_its_bumper_link(self):
        for bumper, member in zip(self.bumpers, self.members):
            with self.subTest(path=bumper.fullPathName):
                self.assertEqual(utils.grouped_visible_bodies(bumper, self.expected_links),
                                 list(bumper.bRepBodies) + list(member.bRepBodies))

    def test_export_sources_keep_all_eleven_links_and_nested_bodies(self):
        sources = utils.export_link_sources(self.root, self.expected_links)
        self.assertEqual({entry['export_name'] for entry in sources}, self.expected_links)
        bumper = next(entry for entry in sources if entry['export_name'] == 'bumper')
        self.assertEqual(bumper['bodies'], list(self.bumpers[0].bRepBodies) +
                         list(self.members[0].bRepBodies))

    def test_hidden_member_body_is_not_exported(self):
        self.members[0].isVisible = False
        self.assertEqual(utils.grouped_visible_bodies(self.bumpers[0], self.expected_links),
                         list(self.bumpers[0].bRepBodies))

    def test_two_top_level_base_candidates_are_rejected(self):
        other = Occurrence('base_link (5)', 'base_link (5):1', bodies=[object()])
        with self.assertRaisesRegex(RuntimeError, 'same URDF link name'):
            utils.validate_occurrence_link_names(Root([self.base, other]))

    def test_nested_base_alone_does_not_create_a_robot_root(self):
        self.assertNotIn('base_link', utils.link_occurrence_map(Root(self.bumpers)))

    def test_unrelated_component_names_are_not_promoted_to_base(self):
        for name in ('arm_base_link (4)', 'base_link_support (4)',
                     'base_link (test)', 'base_link__4'):
            with self.subTest(name=name):
                self.assertFalse(utils.is_base_link_occurrence(Occurrence(name, name + ':1')))


if __name__ == '__main__':
    unittest.main()
