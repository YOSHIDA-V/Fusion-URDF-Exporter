# -*- coding: utf-8 -*-
"""
Created on Sun May 12 20:17:17 2019

@author: syuntoku
"""

import adsk, math, re
from xml.etree.ElementTree import Element, SubElement
from ..utils import utils
from . import UrdfJoint

SUCCESS_MSG = 'Successfully create URDF file'
DEFAULT_PRISMATIC_TRAVEL = 0.1
JOINT_NAME_PREFIX = {
    'fixed': 'fixed_joint',
    'continuous': 'continuous_joint',
    'revolute': 'revolute_joint',
    'prismatic': 'prismatic_joint',
    'planar': 'planar_joint',
    'floating': 'floating_joint',
}

def _is_visible(item):
    try:
        return item.isVisible
    except:
        return True

def _normalized_axis(values):
    try:
        values = [float(value) for value in values]
        length = math.sqrt(sum(value * value for value in values))
        if len(values) != 3 or length < 1e-12:
            return None
        return [round(value / length, 6) for value in values]
    except:
        return None

class Joint:
    def __init__(self, name, xyz, axis, parent, child, joint_type, upper_limit, lower_limit,
                 rpy=None, effort=100.0, velocity=100.0, mimic=None):
        """
        Attributes
        ----------
        name: str
            name of the joint
        type: str
            type of the joint(ex: rev)
        xyz: [x, y, z]
            coordinate of the joint
        axis: [x, y, z]
            coordinate of axis of the joint
        parent: str
            parent link
        child: str
            child link
        joint_xml: str
            generated xml describing about the joint
        tran_xml: str
            generated xml describing about the transmission
        """
        self.name = name
        self.type = joint_type
        self.xyz = xyz
        self.parent = parent
        self.child = child
        self.joint_xml = None
        self.tran_xml = None
        self.axis = axis
        self.upper_limit = upper_limit
        self.lower_limit = lower_limit
        self.rpy = rpy if rpy is not None else [0.0, 0.0, 0.0]
        self.effort = effort
        self.velocity = velocity
        self.mimic = mimic

    def make_joint_xml(self):
        """
        Generate the joint_xml and hold it by self.joint_xml
        """
        joint = Element('joint')
        joint.attrib = {'name':self.name, 'type':self.type}

        origin = SubElement(joint, 'origin')
        origin.attrib = {
            'xyz':' '.join([str(_) for _ in self.xyz]),
            'rpy':' '.join([str(_) for _ in self.rpy])
        }
        parent = SubElement(joint, 'parent')
        parent.attrib = {'link':self.parent}
        child = SubElement(joint, 'child')
        child.attrib = {'link':self.child}
        if self.type == 'revolute' or self.type == 'continuous' or self.type == 'prismatic':
            axis = SubElement(joint, 'axis')
            axis.attrib = {'xyz':' '.join([str(_) for _ in self.axis])}
        if self.type in ['revolute', 'continuous', 'prismatic']:
            limit = SubElement(joint, 'limit')
            limit.attrib = {'effort': str(self.effort), 'velocity': str(self.velocity)}
            if self.type != 'continuous':
                limit.attrib.update({'upper': str(self.upper_limit), 'lower': str(self.lower_limit)})
        if self.mimic and self.mimic.get('joint'):
            mimic = SubElement(joint, 'mimic')
            mimic.attrib = {
                'joint': self.mimic['joint'],
                'multiplier': str(self.mimic.get('multiplier', 1.0)),
                'offset': str(self.mimic.get('offset', 0.0))
            }

        self.joint_xml = "\n".join(utils.prettify(joint).split("\n")[1:])

    def make_transmission_xml(self):
        """
        Generate the tran_xml and hold it by self.tran_xml
        """
        tran = Element('transmission')
        tran.attrib = {'name':self.name + '_tran'}

        joint_type = SubElement(tran, 'type')
        joint_type.text = 'transmission_interface/SimpleTransmission'

        joint = SubElement(tran, 'joint')
        joint.attrib = {'name':self.name}
        hardwareInterface_joint = SubElement(joint, 'hardwareInterface')
        hardwareInterface_joint.text = 'hardware_interface/EffortJointInterface'

        actuator = SubElement(tran, 'actuator')
        actuator.attrib = {'name':self.name + '_actr'}
        hardwareInterface_actr = SubElement(actuator, 'hardwareInterface')
        hardwareInterface_actr.text = 'hardware_interface/EffortJointInterface'
        mechanicalReduction = SubElement(actuator, 'mechanicalReduction')
        mechanicalReduction.text = '1'

        self.tran_xml = "\n".join(utils.prettify(tran).split("\n")[1:])

def _clean_occurrence_name(occ):
    return utils.occurrence_link_name(occ)

def _skipped_joint_entry(joint, source, reason):
    return {
        'type': 'fixed',
        'axis': [0, 0, 0],
        'upper_limit': 0.0,
        'lower_limit': 0.0,
        'limit_source': '',
        'source': source,
        'original_parent': '',
        'original_child': '',
        'parent': '',
        'child': '',
        'xyz': [0, 0, 0],
        'rpy': [0, 0, 0],
        'effort': 0.0,
        'velocity': 0.0,
        'mimic': None,
        'auto_swapped': False,
        'skip_from_urdf': True,
        'skip_reason': reason,
        'diagnostic_only': True,
        'fusion_joint_name': getattr(joint, 'name', '')
    }

def _safe_joint_occurrences(joint):
    try:
        occurrence_one = joint.occurrenceOne
        occurrence_two = joint.occurrenceTwo
    except:
        return None, None
    if occurrence_one is None or occurrence_two is None:
        return None, None
    return occurrence_one, occurrence_two

def _iter_items(collection):
    try:
        return [item for item in collection]
    except:
        pass

    items = []
    try:
        for i in range(collection.count):
            items.append(collection.item(i))
    except:
        pass
    return items

def _all_fusion_joints(root):
    joints = []
    try:
        joints += _iter_items(root.allJoints)
    except:
        try:
            joints += _iter_items(root.joints)
        except:
            pass
    try:
        joints += _iter_items(root.allAsBuiltJoints)
    except:
        try:
            joints += _iter_items(root.asBuiltJoints)
        except:
            pass
    return joints

def _set_motion(joint, joint_dict, msg):
    joint_type_list = [
    'fixed', 'revolute', 'prismatic', 'Cylinderical',
    'PinSlot', 'Planner', 'Ball']

    motion = joint.jointMotion
    if motion is None:
        msg = joint.name + " doesn't have joint motion. Please set it and run again."
        return msg

    joint_type = joint_type_list[motion.jointType]
    joint_dict['type'] = joint_type
    joint_dict['axis'] = [0, 0, 0]
    joint_dict['upper_limit'] = 0.0
    joint_dict['lower_limit'] = 0.0
    joint_dict['limit_source'] = 'fusion'
    joint_dict['effort'] = 100.0
    joint_dict['velocity'] = 100.0
    joint_dict['mimic'] = None

    if joint_type == 'revolute':
        joint_dict['axis'] = _normalized_axis(motion.rotationAxisVector.asArray())
        if joint_dict['axis'] is None:
            return joint.name + ' has an invalid rotation axis.'
        max_enabled = motion.rotationLimits.isMaximumValueEnabled
        min_enabled = motion.rotationLimits.isMinimumValueEnabled
        if max_enabled and min_enabled:
            joint_dict['upper_limit'] = round(motion.rotationLimits.maximumValue, 6)
            joint_dict['lower_limit'] = round(motion.rotationLimits.minimumValue, 6)
        elif max_enabled and not min_enabled:
            msg = joint.name + 'is not set its lower limit. Please set it and try again.'
        elif not max_enabled and min_enabled:
            msg = joint.name + 'is not set its upper limit. Please set it and try again.'
        else:
            joint_dict['type'] = 'continuous'

    elif joint_type == 'prismatic':
        joint_dict['axis'] = _normalized_axis(motion.slideDirectionVector.asArray())
        if joint_dict['axis'] is None:
            return joint.name + ' has an invalid slide axis.'
        max_enabled = motion.slideLimits.isMaximumValueEnabled
        min_enabled = motion.slideLimits.isMinimumValueEnabled
        if max_enabled and min_enabled:
            joint_dict['upper_limit'] = round(motion.slideLimits.maximumValue/100, 6)
            joint_dict['lower_limit'] = round(motion.slideLimits.minimumValue/100, 6)
            if joint_dict['upper_limit'] == joint_dict['lower_limit']:
                msg = joint.name + ' has identical prismatic lower and upper limits. Set a valid travel range in Fusion and try again.'
        elif max_enabled and not min_enabled:
            msg = joint.name + 'is not set its lower limit. Please set it and try again.'
        elif not max_enabled and min_enabled:
            msg = joint.name + 'is not set its upper limit. Please set it and try again.'
        else:
            msg = joint.name + ' does not have prismatic limits. Set lower and upper limits in Fusion and try again.'

    return msg

def _transform_point(M, a):
    ex = [M[0],M[4],M[8]]
    ey = [M[1],M[5],M[9]]
    ez = [M[2],M[6],M[10]]
    oo = [M[3],M[7],M[11]]
    b = [0, 0, 0]
    for i in range(3):
        b[i] = a[0]*ex[i]+a[1]*ey[i]+a[2]*ez[i]+oo[i]
    return b

def _allclose(v1, v2, tol=1e-6):
    return max([abs(a-b) for a,b in zip(v1, v2)]) < tol

def _standard_joint_xyz(joint):
    try:
        occurrence_one, occurrence_two = _safe_joint_occurrences(joint)
        if occurrence_one is None or occurrence_two is None:
            return None
        xyz_from_one_to_joint = joint.geometryOrOriginOne.origin.asArray()
        xyz_from_two_to_joint = joint.geometryOrOriginTwo.origin.asArray()
        xyz_of_one = occurrence_one.transform.translation.asArray()
        M_two = occurrence_two.transform.asArray()

        case1 = _allclose(xyz_from_two_to_joint, xyz_from_one_to_joint)
        case2 = _allclose(xyz_from_two_to_joint, xyz_of_one)
        if case1 or case2:
            xyz_of_joint = xyz_from_two_to_joint
        else:
            xyz_of_joint = _transform_point(M_two, xyz_from_two_to_joint)
        return [round(i / 100.0, 6) for i in xyz_of_joint]
    except:
        try:
            if type(joint.geometryOrOriginTwo)==adsk.fusion.JointOrigin:
                data = joint.geometryOrOriginTwo.geometry.origin.asArray()
            else:
                data = joint.geometryOrOriginTwo.origin.asArray()
            return [round(i / 100.0, 6) for i in data]
        except:
            try:
                data = joint.geometryTwoTransform.translation.asArray()
                return [round(i / 100.0, 6) for i in data]
            except:
                return None

def _as_built_joint_xyz(joint):
    try:
        data = joint.transform.translation.asArray()
        return [round(i / 100.0, 6) for i in data]
    except:
        return _standard_joint_xyz(joint)

def _occurrence_transform_array(occurrence):
    for attribute in ('transform2', 'transform'):
        try:
            transform = getattr(occurrence, attribute)
            data = transform.asArray()
            if data is not None and len(data) >= 12:
                return data
        except:
            pass
    return None

def _relative_occurrence_pose(child_occurrence, parent_occurrence):
    try:
        child_matrix = _occurrence_transform_array(child_occurrence)
        parent_matrix = _occurrence_transform_array(parent_occurrence)
        if child_matrix is None or parent_matrix is None:
            return None
        child_rotation = [
            child_matrix[0:3], child_matrix[4:7], child_matrix[8:11],
        ]
        parent_rotation = [
            parent_matrix[0:3], parent_matrix[4:7], parent_matrix[8:11],
        ]
        child_translation = [child_matrix[3], child_matrix[7], child_matrix[11]]
        parent_translation = [parent_matrix[3], parent_matrix[7], parent_matrix[11]]

        relative_translation = []
        delta = [child_translation[i] - parent_translation[i] for i in range(3)]
        for column in range(3):
            relative_translation.append(sum(parent_rotation[row][column] * delta[row] for row in range(3)))

        relative_rotation = []
        for row in range(3):
            relative_rotation.append([])
            for column in range(3):
                relative_rotation[row].append(
                    sum(parent_rotation[index][row] * child_rotation[index][column] for index in range(3))
                )

        planar_length = math.sqrt(relative_rotation[0][0] ** 2 + relative_rotation[1][0] ** 2)
        if planar_length > 1e-9:
            roll = math.atan2(relative_rotation[2][1], relative_rotation[2][2])
            pitch = math.atan2(-relative_rotation[2][0], planar_length)
            yaw = math.atan2(relative_rotation[1][0], relative_rotation[0][0])
        else:
            roll = math.atan2(-relative_rotation[1][2], relative_rotation[1][1])
            pitch = math.atan2(-relative_rotation[2][0], planar_length)
            yaw = 0.0

        xyz = [round(value / 100.0, 6) for value in relative_translation]
        rpy = [round(value, 6) for value in (roll, pitch, yaw)]
        return xyz, rpy
    except:
        return None

def _joint_entry(joint, source, msg):
    occurrence_one, occurrence_two = _safe_joint_occurrences(joint)
    if occurrence_one is None or occurrence_two is None:
        return _skipped_joint_entry(joint, source, 'invalid_joint_occurrence'), msg

    joint_dict = {}
    motion_msg = _set_motion(joint, joint_dict, SUCCESS_MSG)
    if motion_msg != SUCCESS_MSG:
        return _skipped_joint_entry(joint, source, 'invalid_joint_motion: ' + motion_msg), msg
    if joint_dict.get('type') not in ['fixed', 'revolute', 'continuous', 'prismatic']:
        return _skipped_joint_entry(joint, source, 'unsupported_fusion_joint_type'), msg

    joint_dict['source'] = source
    joint_dict['original_parent'] = _clean_occurrence_name(occurrence_two)
    joint_dict['original_child'] = _clean_occurrence_name(occurrence_one)
    joint_dict['parent'] = joint_dict['original_parent']
    joint_dict['child'] = joint_dict['original_child']
    joint_dict['auto_swapped'] = False
    joint_dict['rpy'] = [0.0, 0.0, 0.0]

    if joint_dict['parent'] == joint_dict['child']:
        skipped = _skipped_joint_entry(joint, source, 'same_link_joint')
        skipped['original_parent'] = joint_dict['original_parent']
        skipped['original_child'] = joint_dict['original_child']
        skipped['parent'] = joint_dict['parent']
        skipped['child'] = joint_dict['child']
        return skipped, msg

    if source == 'as_built':
        joint_dict['xyz'] = _as_built_joint_xyz(joint)
    else:
        joint_dict['xyz'] = _standard_joint_xyz(joint)
    if joint_dict['xyz'] is None and joint_dict['type'] == 'fixed':
        relative_pose = _relative_occurrence_pose(occurrence_one, occurrence_two)
        if relative_pose is not None:
            joint_dict['xyz'], joint_dict['rpy'] = relative_pose
    if joint_dict['xyz'] is None:
        msg = (
            joint.name + " doesn't have joint origin. Please set it and run again.\n\n"
            "Type: " + str(joint_dict.get('type', 'unknown')) + "\n"
            "Parent: " + str(joint_dict.get('parent', 'unknown')) + "\n"
            "Child: " + str(joint_dict.get('child', 'unknown'))
        )
        return None, msg

    return joint_dict, msg

def _reverse_joint_direction(joint_dict):
    joint_dict['parent'], joint_dict['child'] = joint_dict['child'], joint_dict['parent']
    joint_dict['auto_swapped'] = not joint_dict.get('auto_swapped', False)
    if joint_dict['type'] in ['revolute', 'continuous', 'prismatic']:
        joint_dict['axis'] = [round(-i, 6) for i in joint_dict['axis']]
    if joint_dict['type'] in ['revolute', 'prismatic']:
        upper_limit = joint_dict['upper_limit']
        lower_limit = joint_dict['lower_limit']
        joint_dict['upper_limit'] = round(-lower_limit, 6)
        joint_dict['lower_limit'] = round(-upper_limit, 6)

def _mark_overridden_by_urdf_joint(joint_dict, urdf_joint_name):
    joint_dict['skip_from_urdf'] = True
    joint_dict['skip_reason'] = 'overridden_by_urdf_joint'
    joint_dict['diagnostic_only'] = True
    joint_dict['overridden_by_urdf_joint'] = urdf_joint_name

def _orient_from_base_link(joints_dict):
    diagnostic_names = []
    for name in joints_dict:
        if joints_dict[name].get('diagnostic_only', False):
            joints_dict[name]['skip_from_urdf'] = True
            if not joints_dict[name].get('skip_reason'):
                joints_dict[name]['skip_reason'] = 'diagnostic_only'
            diagnostic_names.append(name)
            continue
        joints_dict[name]['skip_from_urdf'] = False
        joints_dict[name]['skip_reason'] = ''

    reachable = set(['base_link'])
    remaining = [name for name in joints_dict if not joints_dict[name].get('diagnostic_only', False)]
    ordered = []

    changed = True
    while changed:
        changed = False
        for name in list(remaining):
            parent = joints_dict[name]['parent']
            child = joints_dict[name]['child']
            if parent in reachable and child not in reachable:
                reachable.add(child)
                remaining.remove(name)
                ordered.append(name)
                changed = True
            elif child in reachable and parent not in reachable:
                if any(abs(value) > 1e-9 for value in joints_dict[name].get('rpy', [0, 0, 0])):
                    joints_dict[name]['skip_from_urdf'] = True
                    joints_dict[name]['skip_reason'] = 'cannot_auto_reverse_joint_with_rotated_origin'
                    remaining.remove(name)
                    ordered.append(name)
                    changed = True
                    continue
                _reverse_joint_direction(joints_dict[name])
                reachable.add(parent)
                remaining.remove(name)
                ordered.append(name)
                changed = True
            elif parent in reachable and child in reachable:
                joints_dict[name]['skip_from_urdf'] = True
                joints_dict[name]['skip_reason'] = 'cycle_or_duplicate_parent'
                remaining.remove(name)
                ordered.append(name)
                changed = True

    for name in list(remaining):
        joints_dict[name]['skip_from_urdf'] = True
        joints_dict[name]['skip_reason'] = 'disconnected_from_base_link'
        ordered.append(name)

    ordered += diagnostic_names
    return {name: joints_dict[name] for name in ordered}

def make_joints_dict(root, msg):
    """
    joints_dict holds parent, axis and xyz informatino of the joints

    Returns
    ----------
    joints_dict:
        {name: {type, axis, upper_limit, lower_limit, parent, child, xyz}}
    msg: str
        Tell the status
    """
    joints_dict = {}
    joint_type_counts = {}
    urdf_joint_by_child = {}
    urdf_joint_by_pair = {}

    for name, joint_dict in UrdfJoint.joint_entries(root):
        original_name = name
        duplicate_index = 2
        while name in joints_dict:
            name = '{}_{:02d}'.format(original_name, duplicate_index)
            duplicate_index += 1
        joints_dict[name] = joint_dict
        if (
            joint_dict.get('source') == 'urdf_joint'
            and not joint_dict.get('diagnostic_only', False)
            and joint_dict.get('overwrite_fusion_joint', True)
        ):
            urdf_joint_by_child[joint_dict['child']] = name
            urdf_joint_by_pair[frozenset([joint_dict['parent'], joint_dict['child']])] = name

    for joint in _all_fusion_joints(root):
        source = 'as_built' if type(joint) == adsk.fusion.AsBuiltJoint else 'joint'
        joint_dict, msg = _joint_entry(joint, source, msg)
        if msg != SUCCESS_MSG:
            break
        if joint_dict is None:
            continue

        joint_dict['fusion_joint_name'] = joint.name
        urdf_override_name = urdf_joint_by_child.get(joint_dict.get('child', ''))
        if urdf_override_name is None:
            urdf_override_name = urdf_joint_by_pair.get(frozenset([joint_dict.get('parent', ''), joint_dict.get('child', '')]))
        if urdf_override_name is not None and not joint_dict.get('diagnostic_only', False):
            _mark_overridden_by_urdf_joint(joint_dict, urdf_override_name)

        if joint_dict.get('diagnostic_only', False):
            prefix = 'skipped_joint'
        else:
            prefix = JOINT_NAME_PREFIX.get(joint_dict['type'], 'joint')
        joint_type_counts[prefix] = joint_type_counts.get(prefix, 0) + 1
        name = '{}_{:02d}'.format(prefix, joint_type_counts[prefix])
        while name in joints_dict:
            joint_type_counts[prefix] += 1
            name = '{}_{:02d}'.format(prefix, joint_type_counts[prefix])

        joints_dict[name] = joint_dict

    return _orient_from_base_link(joints_dict), msg
