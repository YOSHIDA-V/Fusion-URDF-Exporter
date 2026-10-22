"""Export visible geometry using valid connections without guessing dead refs."""

import unittest

from test_export_logic import (
    DisabledLimits, FusionJoint, Joint, Occurrence, Point, Root, utils,
)


class MissingReference(FusionJoint):
    isValid = True

    def __init__(self, name, readable):
        self.name = name
        self.readable = readable

    @property
    def occurrenceOne(self):
        raise RuntimeError('2 : InternalValidationError : occPath1.valid()')

    @property
    def occurrenceTwo(self):
        return self.readable


class VisibleJointExportTests(unittest.TestCase):
    def setUp(self):
        self.base = Occurrence('base_link', 'base_link:1', bodies=[object()])
        self.part = Occurrence('visible_part', 'visible_part:1', bodies=[object()])
        self.valid = FusionJoint('current_connection', self.part, self.base)

    def make(self, root):
        joints, message = Joint.make_joints_dict(root, Joint.SUCCESS_MSG)
        self.assertEqual(message, Joint.SUCCESS_MSG)
        return joints

    def test_five_unreadable_refs_do_not_stop_a_complete_visible_tree(self):
        stale = [MissingReference('old_reference_{}'.format(index), self.base)
                 for index in range(5)]
        root = Root([self.base, self.part], joints=[self.valid] + stale)
        joints = self.make(root)
        reportable, fatal = Joint.partition_skipped_joints(joints)
        self.assertEqual(fatal, [])
        self.assertEqual(len(reportable), 5)
        active = [item for item in joints.values() if not item.get('skip_from_urdf')]
        self.assertEqual([(item['parent'], item['child']) for item in active],
                         [('base_link', 'visible_part')])
        target = {'base_link'} | {item['child'] for item in active}
        self.assertEqual(utils.disconnected_visible_geometry_links(root, target), [])

    def test_visible_part_with_only_unreadable_connection_is_reported_missing(self):
        root = Root([self.base, self.part],
                    joints=[MissingReference('old_reference', self.part)])
        joints = self.make(root)
        reportable, fatal = Joint.partition_skipped_joints(joints)
        self.assertEqual(fatal, [])
        self.assertEqual(len(reportable), 1)
        self.assertEqual(utils.disconnected_visible_geometry_links(root, {'base_link'}),
                         ['visible_part'])

    def test_hidden_component_joint_is_omitted(self):
        hidden = Occurrence('hidden_part', 'hidden_part:1',
                            bodies=[object()], visible=False)
        root = Root([self.base, self.part, hidden], joints=[
            self.valid, FusionJoint('hidden_connection', hidden, self.base)])
        joints = self.make(root)
        self.assertEqual(Joint.partition_skipped_joints(joints)[1], [])
        active = [item for item in joints.values() if not item.get('skip_from_urdf')]
        self.assertEqual({item['child'] for item in active}, {'visible_part'})
        skipped = [item for item in joints.values() if item.get('skip_from_urdf')]
        self.assertEqual([item['skip_reason'] for item in skipped],
                         ['hidden_joint_occurrence'])
        self.assertEqual({entry['export_name'] for entry in utils.export_link_sources(root)},
                         {'base_link', 'visible_part'})

    def test_hidden_joint_does_not_require_motion_limits(self):
        class UnlimitedSlider:
            jointType = 2
            slideLimits = DisabledLimits()
            slideDirectionVector = Point((0.0, 0.0, 1.0))

        hidden = Occurrence('hidden_part', 'hidden_part:1', visible=False)
        root = Root([self.base, self.part, hidden], joints=[self.valid, FusionJoint(
            'hidden_slider', hidden, self.base, motion=UnlimitedSlider())])
        joints = self.make(root)
        self.assertEqual(Joint.partition_skipped_joints(joints)[1], [])
        self.assertEqual([item['skip_reason'] for item in joints.values()
                          if item.get('skip_from_urdf')], ['hidden_joint_occurrence'])

    def test_hiding_joint_glyph_does_not_remove_visible_model_connection(self):
        self.valid.isVisible = False
        joints = self.make(Root([self.base, self.part], joints=[self.valid]))
        self.assertEqual(Joint.partition_skipped_joints(joints), ([], []))
        self.assertEqual(next(iter(joints.values()))['child'], 'visible_part')

    def test_hidden_nested_mount_does_not_hide_its_visible_link_assembly(self):
        mount = Occurrence('mount', 'visible_part:1+mount:1', visible=False)
        self.part = Occurrence('visible_part', 'visible_part:1',
                               bodies=[object()], children=[mount])
        root = Root([self.base, self.part], joints=[
            FusionJoint('assembly_connection', mount, self.base)])
        joints = self.make(root)
        self.assertEqual(Joint.partition_skipped_joints(joints), ([], []))
        self.assertEqual(next(iter(joints.values()))['child'], 'visible_part')

    def test_readable_but_invalid_occurrence_handle_is_rejected(self):
        self.part.isValid = False
        one, two = Joint._safe_joint_occurrences(self.valid)
        self.assertIsNone(one)
        self.assertIs(two, self.base)

    def test_invalid_motion_stays_fatal(self):
        class Unsupported:
            jointType = 6

        self.valid.jointMotion = Unsupported()
        joints = self.make(Root([self.base, self.part], joints=[self.valid]))
        self.assertEqual(len(Joint.partition_skipped_joints(joints)[1]), 1)

    def test_disconnected_readable_tree_stays_fatal(self):
        other = Occurrence('other', 'other:1', bodies=[object()])
        root = Root([self.base, self.part, other],
                    joints=[FusionJoint('detached', self.part, other)])
        joints = self.make(root)
        self.assertEqual(len(Joint.partition_skipped_joints(joints)[1]), 1)


if __name__ == '__main__':
    unittest.main(verbosity=2)
