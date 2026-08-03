# -*- coding: utf-8 -*-
"""
Created on Sun May 12 20:11:28 2019

@author: syuntoku
"""

import adsk, re
from xml.etree.ElementTree import Element, SubElement
from ..utils import utils

def _is_visible(item):
    try:
        return item.isVisible
    except:
        return True

class Link:

    def __init__(self, name, xyz, center_of_mass, repo, mass, inertia_tensor, mesh_file=None, mesh_offset=None):
        """
        Parameters
        ----------
        name: str
            name of the link
        xyz: [x, y, z]
            coordinate for the visual and collision
        center_of_mass: [x, y, z]
            coordinate for the center of mass
        link_xml: str
            generated xml describing about the link
        repo: str
            the name of the repository to save the xml file
        mass: float
            mass of the link
        inertia_tensor: [ixx, iyy, izz, ixy, iyz, ixz]
            tensor of the inertia
        """
        self.name = name
        # xyz for visual
        self.xyz = [-_ for _ in xyz]  # reverse the sign of xyz
        # xyz for center of mass
        self.center_of_mass = center_of_mass
        self.link_xml = None
        self.repo = repo
        self.mass = mass
        self.inertia_tensor = inertia_tensor
        self.mesh_file = mesh_file if mesh_file is not None else self.name + '.stl'
        self.mesh_offset = mesh_offset if mesh_offset is not None else [0, 0, 0]
        
    def make_link_xml(self):
        """
        Generate the link_xml and hold it by self.link_xml
        """
        
        link = Element('link')
        link.attrib = {'name':self.name}
        
        #inertial
        inertial = SubElement(link, 'inertial')
        origin_i = SubElement(inertial, 'origin')
        origin_i.attrib = {'xyz':' '.join([str(_) for _ in self.center_of_mass]), 'rpy':'0 0 0'}       
        mass = SubElement(inertial, 'mass')
        mass.attrib = {'value':str(self.mass)}
        inertia = SubElement(inertial, 'inertia')
        inertia.attrib = \
            {'ixx':str(self.inertia_tensor[0]), 'iyy':str(self.inertia_tensor[1]),\
            'izz':str(self.inertia_tensor[2]), 'ixy':str(self.inertia_tensor[3]),\
            'iyz':str(self.inertia_tensor[4]), 'ixz':str(self.inertia_tensor[5])}        
        
        if self.mesh_file:
            # visual
            visual = SubElement(link, 'visual')
            origin_v = SubElement(visual, 'origin')
            mesh_xyz = [round(i + j, 6) for i, j in zip(self.xyz, self.mesh_offset)]
            origin_v.attrib = {'xyz':' '.join([str(_) for _ in mesh_xyz]), 'rpy':'0 0 0'}
            geometry_v = SubElement(visual, 'geometry')
            mesh_v = SubElement(geometry_v, 'mesh')
            mesh_v.attrib = {'filename':'package://' + self.repo + self.mesh_file,'scale':'0.001 0.001 0.001'}
            material = SubElement(visual, 'material')
            material.attrib = {'name':'silver'}
            
            # collision
            collision = SubElement(link, 'collision')
            origin_c = SubElement(collision, 'origin')
            origin_c.attrib = {'xyz':' '.join([str(_) for _ in mesh_xyz]), 'rpy':'0 0 0'}
            geometry_c = SubElement(collision, 'geometry')
            mesh_c = SubElement(geometry_c, 'mesh')
            mesh_c.attrib = {'filename':'package://' + self.repo + self.mesh_file,'scale':'0.001 0.001 0.001'}

        # print("\n".join(utils.prettify(link).split("\n")[1:]))
        self.link_xml = "\n".join(utils.prettify(link).split("\n")[1:])

def _inertial_entry_from_occurrence(occs, name, source):
    occs_dict = {'name': name, 'source': source}
    prop = occs.getPhysicalProperties(adsk.fusion.CalculationAccuracy.VeryHighCalculationAccuracy)

    mass = prop.mass  # kg
    occs_dict['mass'] = mass
    center_of_mass = [_/100.0 for _ in prop.centerOfMass.asArray()] ## cm to m
    occs_dict['center_of_mass'] = center_of_mass

    # https://help.autodesk.com/view/fusion360/ENU/?guid=GUID-ce341ee6-4490-11e5-b25b-f8b156d7cd97
    (_, xx, yy, zz, xy, yz, xz) = prop.getXYZMomentsOfInertia()
    moment_inertia_world = [_ / 10000.0 for _ in [xx, yy, zz, xy, yz, xz] ] ## kg / cm^2 -> kg/m^2
    occs_dict['inertia'] = utils.origin2center_of_mass(moment_inertia_world, center_of_mass, mass)
    return occs_dict

def _virtual_inertial_entry(name, center_of_mass):
    return {
        'name': name,
        'source': 'virtual_empty_link',
        'mass': 0.001,
        'center_of_mass': center_of_mass,
        'inertia': [1e-9, 1e-9, 1e-9, 0.0, 0.0, 0.0]
    }

def add_virtual_inertials(inertial_dict, joints_dict, target_link_names):
    link_origins = {'base_link': [0, 0, 0]}
    for joint in joints_dict:
        link_origins[joints_dict[joint]['child']] = joints_dict[joint]['xyz']
    for link_name in sorted(target_link_names):
        if link_name in inertial_dict:
            continue
        inertial_dict[link_name] = _virtual_inertial_entry(link_name, link_origins.get(link_name, [0, 0, 0]))
    return inertial_dict


def make_inertial_dict(root, msg, target_link_names=None, export_entries=None):
    """      
    Parameters
    ----------
    root: adsk.fusion.Design.cast(product)
        Root component
    msg: str
        Tell the status
        
    Returns
    ----------
    inertial_dict: {name:{mass, inertia, center_of_mass}}
    
    msg: str
        Tell the status
    """
    inertial_dict = {}

    target_link_names = set(target_link_names) if target_link_names is not None else None
    if export_entries is not None:
        for entry in export_entries:
            name = entry['export_name']
            if target_link_names is not None and name not in target_link_names:
                continue
            inertial_dict[name] = _inertial_entry_from_occurrence(entry['occurrence'], name, 'flattened_export_occurrence')
        return inertial_dict, msg

    # Get component properties.      
    allOccs = root.allOccurrences
    
    for occs in allOccs:
        if not _is_visible(occs):
            continue
        name = utils.occurrence_link_name(occs)
        if target_link_names is not None and name not in target_link_names:
            continue
        if occs.component.name == 'base_link':
            inertial_dict['base_link'] = _inertial_entry_from_occurrence(occs, 'base_link', 'fusion_occurrence')
        else:
            inertial_dict[name] = _inertial_entry_from_occurrence(occs, name, 'fusion_occurrence')

    return inertial_dict, msg
