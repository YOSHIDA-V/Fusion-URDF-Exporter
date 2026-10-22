"""Read-only diagnostics for documented Fusion joint collections and owners."""

from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import uuid


_UNAVAILABLE = object()


def _read(item, field, errors, label=None):
    try:
        return getattr(item, field)
    except Exception as exc:
        errors.append({'field': label or field, 'message': str(exc)})
        return _UNAVAILABLE


def _items(collection, errors, label):
    if collection is _UNAVAILABLE or collection is None:
        return None
    try:
        return list(collection)
    except Exception as exc:
        errors.append({'field': label, 'message': str(exc)})
        return None


def _valid(item, errors, label):
    return item is not None and item is not _UNAVAILABLE and _read(
        item, 'isValid', errors, label + '.isValid') is True


def _name(item, errors, label):
    if not _valid(item, errors, label):
        return None
    name = _read(item, 'name', errors, label + '.name')
    return None if name is _UNAVAILABLE else name


def _native(item, errors, label):
    if not _valid(item, errors, label):
        return None
    native = _read(item, 'nativeObject', errors, label + '.nativeObject')
    if native is _UNAVAILABLE:
        return None
    return item if native is None else native


def describe_joint(joint, source):
    errors = []
    record = {
        'source': source, 'name': None, 'is_valid': None,
        'owner_component': None, 'native_owner_component': None,
        'assembly_context': None, 'is_proxy': None,
        'in_direct_collection': None, 'direct_collection_count': None,
        'direct_collection_index': None, 'direct_collection_joint_names': None,
        'occurrence_one': None, 'occurrence_two': None, 'errors': errors,
    }
    valid = _read(joint, 'isValid', errors)
    record['is_valid'] = None if valid is _UNAVAILABLE else valid
    if valid is not True:
        return record
    record['name'] = _name(joint, errors, 'joint')
    for field, output in (('isSuppressed', 'is_suppressed'),
                          ('isVisible', 'is_visible'),
                          ('isLightBulbOn', 'light_bulb_on')):
        value = _read(joint, field, errors)
        record[output] = None if value is _UNAVAILABLE else value

    owner = _read(joint, 'parentComponent', errors)
    record['owner_component'] = _name(owner, errors, 'parentComponent')
    context = _read(joint, 'assemblyContext', errors)
    if _valid(context, errors, 'assemblyContext'):
        path = _read(context, 'fullPathName', errors, 'assemblyContext.fullPathName')
        record['assembly_context'] = None if path is _UNAVAILABLE else path

    native = _native(joint, errors, 'joint')
    if _valid(native, errors, 'nativeObject'):
        record['is_proxy'] = native != joint
        native_owner = _read(native, 'parentComponent', errors,
                             'nativeObject.parentComponent')
        record['native_owner_component'] = _name(
            native_owner, errors, 'nativeObject.parentComponent')
        if _valid(native_owner, errors, 'nativeObject.parentComponent'):
            field = 'asBuiltJoints' if source == 'as_built' else 'joints'
            members = _items(_read(native_owner, field, errors, 'owner.' + field),
                             errors, 'owner.' + field)
            if members is not None:
                record['direct_collection_count'] = len(members)
                record['direct_collection_joint_names'] = [
                    _name(item, errors, 'owner.{}[{}]'.format(field, index))
                    for index, item in enumerate(members)]
                record['in_direct_collection'] = False
                for index, member in enumerate(members):
                    candidate = _native(member, errors,
                                        'owner.{}[{}]'.format(field, index))
                    if candidate is not None and candidate == native:
                        record['in_direct_collection'] = True
                        record['direct_collection_index'] = index
                        break

    for field, output in (('occurrenceOne', 'occurrence_one'),
                          ('occurrenceTwo', 'occurrence_two')):
        endpoint = _read(joint, field, errors)
        if _valid(endpoint, errors, field):
            path = _read(endpoint, 'fullPathName', errors, field + '.fullPathName')
            record[output] = None if path is _UNAVAILABLE else path
    return record


def write_audit(root, joints=None, directory=None, caller_file=None):
    errors = []
    if joints is None:
        joints = []
        for field, source in (('allJoints', 'joint'), ('allAsBuiltJoints', 'as_built')):
            collection = _items(_read(root, field, errors), errors, field)
            if collection is not None:
                joints.extend((item, source) for item in collection)
    direct = _items(_read(root, 'asBuiltJoints', errors), errors, 'asBuiltJoints')
    sources = [Path(__file__)]
    if caller_file:
        sources.append(Path(caller_file))
    report = {
        'run_id': 'FUE-JOINT-AUDIT-' + uuid.uuid4().hex,
        'created_at': datetime.now(timezone.utc).isoformat(),
        'pid': os.getpid(), 'root_component': _name(root, errors, 'root'),
        'model_mutation_requested': False,
        'source_sha256': {path.name: hashlib.sha256(path.read_bytes()).hexdigest()
                          for path in sources},
        'root_as_built_count': None if direct is None else len(direct),
        'root_as_built_names': None if direct is None else [
            _name(item, errors, 'root.asBuiltJoints[{}]'.format(index))
            for index, item in enumerate(direct)],
        'joints': [describe_joint(item, source) for item, source in joints],
        'errors': errors,
    }
    if directory is None:
        local = Path(os.environ.get('LOCALAPPDATA', str(Path.home() / '.local' / 'share')))
        directory = local / 'FusionURDFExporter' / 'diagnostics'
    directory = Path(directory)
    directory.mkdir(parents=True, exist_ok=True)
    path = directory / (report['run_id'] + '.json')
    path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    return str(path)
