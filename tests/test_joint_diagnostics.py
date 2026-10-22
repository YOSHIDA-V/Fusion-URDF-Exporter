"""Documented read-only joint ownership diagnostics; no Fusion model edits."""

import importlib
import json
from pathlib import Path
import tempfile
import unittest

from test_export_logic import Joint


try:
    Diagnostics = importlib.import_module(Joint.__package__ + '.JointDiagnostics')
except ModuleNotFoundError:
    Diagnostics = None


class Entity:
    isValid = True

    def __init__(self, name):
        self.name = name


class Component(Entity):
    def __init__(self, name):
        super().__init__(name)
        self.joints = []
        self.asBuiltJoints = []


class Placement(Entity):
    def __init__(self, path):
        super().__init__(path)
        self.fullPathName = path


class JointHandle(Entity):
    def __init__(self, name, owner, one=None, two=None, native=None, context=None):
        super().__init__(name)
        self.parentComponent = owner
        self.nativeObject = native
        self.assemblyContext = context
        self.isSuppressed = False
        self.isVisible = True
        self.isLightBulbOn = True
        self.one = one
        self.two = two

    @property
    def occurrenceOne(self):
        if isinstance(self.one, Exception):
            raise self.one
        return self.one

    @property
    def occurrenceTwo(self):
        if isinstance(self.two, Exception):
            raise self.two
        return self.two


class JointDiagnosticsTests(unittest.TestCase):
    def setUp(self):
        self.assertIsNotNone(Diagnostics, 'Joint ownership diagnostics are unavailable')
        self.owner = Component('assembly')
        self.base = Placement('base_link:1')

    def test_keeps_readable_endpoint_when_other_getter_raises(self):
        joint = JointHandle('rigid_03', self.owner,
                            RuntimeError('occPath1.valid()'), self.base)
        self.owner.asBuiltJoints = [joint]
        record = Diagnostics.describe_joint(joint, 'as_built')
        self.assertEqual(record['owner_component'], 'assembly')
        self.assertEqual(record['occurrence_two'], 'base_link:1')
        self.assertIsNone(record['occurrence_one'])
        self.assertEqual(record['direct_collection_index'], 0)
        self.assertTrue(any(item['field'] == 'occurrenceOne' for item in record['errors']))

    def test_compares_api_entities_not_joint_names(self):
        other = JointHandle('same_name', self.owner)
        joint = JointHandle('same_name', self.owner)
        self.owner.asBuiltJoints = [other, joint]
        record = Diagnostics.describe_joint(joint, 'as_built')
        self.assertEqual(record['direct_collection_index'], 1)

    def test_records_context_without_concatenating_paths(self):
        native = JointHandle('hinge', self.owner)
        self.owner.joints = [native]
        proxy = JointHandle('hinge', self.owner, native=native,
                            context=Placement('assembly:2'))
        record = Diagnostics.describe_joint(proxy, 'joint')
        self.assertEqual(record['assembly_context'], 'assembly:2')
        self.assertTrue(record['is_proxy'])
        self.assertEqual(record['direct_collection_index'], 0)

    def test_records_nonmembership_without_discarding_joint(self):
        joint = JointHandle('unlisted', self.owner)
        record = Diagnostics.describe_joint(joint, 'as_built')
        self.assertFalse(record['in_direct_collection'])
        self.assertEqual(record['direct_collection_count'], 0)
        self.assertEqual(record['name'], 'unlisted')

    def test_preserves_both_getter_errors(self):
        joint = JointHandle('rigid', self.owner,
                            RuntimeError('occPath1.valid()'),
                            RuntimeError('occPath2.valid()'))
        record = Diagnostics.describe_joint(joint, 'as_built')
        self.assertEqual({item['field'] for item in record['errors']},
                         {'occurrenceOne', 'occurrenceTwo'})

    def test_invalid_handle_is_not_probed(self):
        class Invalid:
            isValid = False

            def __getattr__(self, field):
                raise AssertionError('Invalid handle probed: ' + field)

        record = Diagnostics.describe_joint(Invalid(), 'as_built')
        self.assertFalse(record['is_valid'])
        self.assertIsNone(record['name'])

    def test_writes_hash_bound_read_only_audit(self):
        joint = JointHandle('rigid', self.owner, self.base, self.base)
        self.owner.asBuiltJoints = [joint]
        with tempfile.TemporaryDirectory() as directory:
            path = Diagnostics.write_audit(self.owner, [(joint, 'as_built')],
                                           directory=directory, caller_file=Joint.__file__)
            report = json.loads(Path(path).read_text(encoding='utf-8'))
            self.assertEqual(report['root_as_built_count'], 1)
            self.assertEqual(report['joints'][0]['owner_component'], 'assembly')
            self.assertIn('JointDiagnostics.py', report['source_sha256'])
            self.assertIn('Joint.py', report['source_sha256'])
            self.assertFalse(report['model_mutation_requested'])


class ExistingFailureReproduction(unittest.TestCase):
    def test_failed_getter_does_not_discard_the_readable_endpoint(self):
        owner = Component('assembly')
        base = Placement('base_link:1')
        joints = [JointHandle('rigid_03', owner,
                              RuntimeError('occPath1.valid()'), base)]
        joints.extend(JointHandle('rigid_{:02d}'.format(index), owner, base,
                                  RuntimeError('occPath2.valid()'))
                      for index in range(4, 8))
        self.assertEqual([Joint._safe_joint_occurrences(item) for item in joints],
                         [(None, base)] + [(base, None)] * 4)


if __name__ == '__main__':
    unittest.main(verbosity=2)
