# -*- coding: utf-8 -*-

import json
import re

from ..utils import utils


ATTRIBUTE_GROUP = 'fusion2urdf_urdf_joints'
ATTRIBUTE_NAME = 'joints_json'
LEGACY_ATTRIBUTE_GROUP = 'fusion2urdf_urdf_mates'
LEGACY_ATTRIBUTE_NAME = 'mates_json'
SUPPORTED_TYPES = set(['fixed', 'revolute', 'continuous', 'prismatic'])


def _clean_joint_name(name):
    name = re.sub(r'[^0-9A-Za-z_-]+', '_', name or '').strip('_')
    return name or 'urdf_joint'


def _vector3(values, default):
    try:
        if len(values) != 3:
            return list(default)
        return [round(float(values[i]), 6) for i in range(3)]
    except:
        return list(default)


def _number(value, default=0.0):
    try:
        return round(float(value), 6)
    except:
        return default


def _bool(value, default=False):
    if isinstance(value, bool):
        return value
    if value is None:
        return default
    if isinstance(value, str):
        return value.lower() in ['1', 'true', 'yes', 'on']
    return bool(value)


def load_joints(root):
    attr = None
    for group, name in [
        (ATTRIBUTE_GROUP, ATTRIBUTE_NAME),
        (LEGACY_ATTRIBUTE_GROUP, LEGACY_ATTRIBUTE_NAME),
    ]:
        try:
            attr = root.attributes.itemByName(group, name)
        except:
            attr = None
        if attr:
            break
    if not attr:
        return []

    try:
        data = json.loads(attr.value)
    except:
        return []

    if isinstance(data, dict):
        joints = data.get('joints', data.get('mates', []))
    else:
        joints = data
    return joints if isinstance(joints, list) else []


def _diagnostic_entry(name, reason):
    return _clean_joint_name(name), {
        'type': 'fixed',
        'axis': [0.0, 0.0, 0.0],
        'upper_limit': 0.0,
        'lower_limit': 0.0,
        'limit_source': '',
        'source': 'urdf_joint',
        'original_parent': '',
        'original_child': '',
        'parent': '',
        'child': '',
        'xyz': [0.0, 0.0, 0.0],
        'rpy': [0.0, 0.0, 0.0],
        'effort': 0.0,
        'velocity': 0.0,
        'mimic': None,
        'auto_swapped': False,
        'skip_from_urdf': True,
        'skip_reason': reason,
        'diagnostic_only': True,
        'fusion_joint_name': ''
    }


def joint_entries(root):
    entries = []

    for index, joint in enumerate(load_joints(root), 1):
        if not isinstance(joint, dict):
            entries.append(_diagnostic_entry('invalid_urdf_joint_{:02d}'.format(index), 'invalid_urdf_joint_json'))
            continue

        joint_type = joint.get('type', 'fixed')
        if joint_type not in SUPPORTED_TYPES:
            entries.append(_diagnostic_entry(joint.get('name', 'invalid_urdf_joint_{:02d}'.format(index)), 'unsupported_urdf_joint_type'))
            continue

        parent = utils.sanitize_link_name(joint.get('parent', ''))
        child = utils.sanitize_link_name(joint.get('child', ''))
        if not parent or not child:
            entries.append(_diagnostic_entry(joint.get('name', 'invalid_urdf_joint_{:02d}'.format(index)), 'missing_urdf_joint_parent_or_child'))
            continue

        axis = [0.0, 0.0, 0.0] if joint_type in ['fixed', 'floating'] else _vector3(joint.get('axis', [0.0, 0.0, 1.0]), [0.0, 0.0, 1.0])
        name = _clean_joint_name(joint.get('name', 'urdf_joint_{:02d}'.format(index)))
        mimic_joint = _clean_joint_name(joint.get('mimic_joint', '')) if joint.get('mimic_joint') else ''
        mimic = None
        if mimic_joint:
            mimic = {
                'joint': mimic_joint,
                'multiplier': _number(joint.get('mimic_multiplier', 1.0), 1.0),
                'offset': _number(joint.get('mimic_offset', 0.0), 0.0),
            }

        entries.append((name, {
            'type': joint_type,
            'axis': axis,
            'upper_limit': _number(joint.get('upper_limit', 0.0)),
            'lower_limit': _number(joint.get('lower_limit', 0.0)),
            'limit_source': 'urdf_joint',
            'source': 'urdf_joint',
            'original_parent': parent,
            'original_child': child,
            'parent': parent,
            'child': child,
            'xyz': _vector3(joint.get('origin_m', [0.0, 0.0, 0.0]), [0.0, 0.0, 0.0]),
            'rpy': _vector3(joint.get('origin_rpy', [0.0, 0.0, 0.0]), [0.0, 0.0, 0.0]),
            'effort': _number(joint.get('effort', 100.0), 100.0),
            'velocity': _number(joint.get('velocity', 100.0), 100.0),
            'mimic': mimic,
            'auto_swapped': False,
            'skip_from_urdf': False,
            'skip_reason': '',
            'overwrite_fusion_joint': _bool(joint.get('overwrite_fusion_joint', True), True),
            'fusion_joint_name': ''
        }))

    return entries
