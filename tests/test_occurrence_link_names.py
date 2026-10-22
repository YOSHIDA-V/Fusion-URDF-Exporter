"""Distinct Fusion occurrence suffixes must not collapse into one URDF link."""

import unittest

from test_export_logic import Component, FusionJoint, Joint, Occurrence, Root, utils


class OccurrenceLinkNameTests(unittest.TestCase):
    def setUp(self):
        self.base = Occurrence('base_link', 'base_link:1')
        self.parts = []
        for label in ('bumper_a', 'bumper_b'):
            definition = Component(label)
            for instance in (1, 2):
                item = Occurrence(label, '{}:{}'.format(label, instance), bodies=[object()])
                item.component = definition
                self.parts.append(item)
        self.expected = ['bumper_a', 'bumper_a_2', 'bumper_b', 'bumper_b_2']
        self.root = Root([self.base] + self.parts)

    def test_distinct_occurrences_pass_name_preflight(self):
        utils.validate_occurrence_link_names(self.root)

    def test_link_map_retains_all_four_occurrence_objects(self):
        mapping = utils.link_occurrence_map(self.root)
        self.assertEqual(set(mapping), {'base_link', *self.expected})
        for name, occurrence in zip(self.expected, self.parts):
            self.assertIs(mapping[name], occurrence)

    def test_export_sources_keep_each_body_in_its_own_link(self):
        sources = utils.export_link_sources(self.root, set(self.expected))
        self.assertEqual([entry['export_name'] for entry in sources], self.expected)
        self.assertEqual([entry['bodies'] for entry in sources],
                         [list(item.bRepBodies) for item in self.parts])

    def test_joints_keep_four_distinct_children_and_their_origins(self):
        self.root.allJoints = [
            FusionJoint('fixed_{}'.format(index), part, self.base,
                        origin=(index * 10.0, 0.0, 0.0))
            for index, part in enumerate(self.parts, 1)
        ]
        joints, message = Joint.make_joints_dict(self.root, Joint.SUCCESS_MSG)
        self.assertEqual(message, Joint.SUCCESS_MSG)
        active = [entry for entry in joints.values() if not entry.get('skip_from_urdf')]
        self.assertEqual({entry['child'] for entry in active}, set(self.expected))
        self.assertEqual({entry['parent'] for entry in active}, {'base_link'})
        for index, name in enumerate(self.expected, 1):
            entry = next(entry for entry in active if entry['child'] == name)
            self.assertAlmostEqual(entry['xyz'][0], index * 0.1)

    def test_japanese_component_name_keeps_distinct_instance_numbers(self):
        label = '42\u30d0\u30f3\u30d1\u30fc 1'
        first = Occurrence(label, label + ':1', bodies=[object()])
        second = Occurrence(label, label + ':2', bodies=[object()])
        second.component = first.component
        root = Root([first, second])
        utils.validate_occurrence_link_names(root)
        mapping = utils.link_occurrence_map(root)
        self.assertEqual(set(mapping), {'42_____1', '42_____1_2'})

    def test_default_semantic_names_and_mesh_part_identity_are_preserved(self):
        self.assertEqual(utils.top_level_link_name(self.base), 'base_link')
        self.assertEqual(utils.top_level_link_name(self.parts[0]), 'bumper_a')
        self.assertEqual(utils.occurrence_part_key(self.parts[0]),
                         utils.occurrence_part_key(self.parts[1]))


if __name__ == '__main__':
    unittest.main()
