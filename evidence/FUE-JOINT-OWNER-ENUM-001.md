# FUE-JOINT-OWNER-ENUM-001

## Contract

- State: OBSERVED. Export root cause is not yet established.
- Observed: the active Fusion export stops on five aggregate AsBuiltJoint
  endpoint getter errors, while the user cannot see those five in the browser.
- Failure run: FUE-RUNTIME-20261022T013020Z-50144.
- Executed Joint.py SHA-256:
  7bc294873e43936880827aad1cad9798ddeb0b9fcfc6f01e498aae7bfa03454b.
- Reported API errors: one occurrenceOne and four occurrenceTwo
  InternalValidationError failures. API handles report isValid true.
- Hypothesis: aggregate enumeration and component-owned enumeration differ.
  This is not proof of a broken CAD model or permission to omit joints.
- Proof required: API-returned parentComponent, assemblyContext, nativeObject,
  membership in the owner's direct collection, and actual endpoint errors.
- Allowed: joint collection diagnostics, the proven collection fix, focused
  tests, and minimal integration into Joint.py.
- Forbidden: CAD edits, guessed endpoints, name-based entity identification,
  automatic deletion, mesh reuse changes, joint axis or origin changes.
- Controlled criteria: all diagnostic contract tests pass; direct entity
  identity is preserved; invalid handles are not probed; no API mutation.
- Target criteria: identify all five owners; explain direct/aggregate
  differences; export the same active design; generated model validation
  passes without suppressing unresolved in-scope joints.
- Preserve: distinct copied occurrences, base_link aliases, nested placements,
  hidden-geometry policy, and the existing kinematic/mesh behavior.
- Main is not promoted without the same-artifact target result and user
  confirmation. Real model reports remain local and are not published.

## API References

- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_Component_allAsBuiltJoints.htm
- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_Component_asBuiltJoints.htm
- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_AsBuiltJoint_parentComponent.htm
- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_AsBuiltJoint_nativeObject.htm
- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_AsBuiltJoint_createForAssemblyContext.htm
