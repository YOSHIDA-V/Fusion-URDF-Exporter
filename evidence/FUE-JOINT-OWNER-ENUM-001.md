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

## Baseline Reproduction

- Run: joint-owner-baseline-20261022T021252Z; clean commit
  98fc3e6ce59bd2f4e31783449e15f5c454b0cafd; fixture PID 51396.
- Command: python -B -X utf8 tests/test_joint_diagnostics.py.
- Eight tests ran: the existing five-endpoint-loss reproduction passed;
  seven ownership diagnostic tests failed because no diagnostic exists.
- Exit code: 1. This is a fixture reproduction, not a native Fusion test.
- Test SHA-256: 6d8afef4771add92232e020a0ddd08ac88e1085cf78bb66878fd8a35a97ffb83.
- Control Joint.py SHA-256:
  572b4b381d1fd2485f6c7b44e8aa32d0fa3a66372e26d268ea5005e0b8c70b26.
- Python executable SHA-256:
  4fb049eeddd221e5470cd33177299dd13f85eba25beef7aced7a0890ad85181f.
- Full pre-launch manifest, PID, stdout and stderr are retained privately.
  No actual CAD names, paths or geometry are published with this evidence.
- Export root cause remains unproven; the next stage only adds observation.

## Diagnostic Control

- Clean candidate b353d7a2687bcf9433a134b34b2a91cc70dee1d2.
- Run joint-owner-diagnostics-control-20261022T021641Z; PID 18128.
- python -B -X utf8 -m unittest discover -s tests -v: 56 tests, exit 0.
- JointDiagnostics.py SHA-256:
  4833988268d3ae493b95010ccd029c03fdf9771339f6d52f3d7179850490bc2b.
- This only qualifies read-only diagnostics against fixtures. It does not
  fix the export, determine actual owners, or qualify a Fusion export.
- The failure-only hook preserves the existing unsafe-joint stop. It writes
  observations outside the exported package, not into the CAD document.

## Native Observation And User Contract Amendment

- Actual diagnostic run: FUE-RUNTIME-20261022T022159Z-50144.
- Audit ID: FUE-JOINT-AUDIT-1397f544bb5b4e7bb59c8e3b2d923924.
- The five unreadable joints belong to the root component, are native rather
  than proxies, and are present in its direct 17-item AsBuiltJoints collection.
  The aggregate has 33 items. The aggregate-only hypothesis is disproven.
- All five isVisible getters raise InternalValidationError: parentAssyConstraints;
  one occurrenceOne and four occurrenceTwo getters fail. Their handles report
  isValid true and isSuppressed false. Actual model names remain private.
- The user then explicitly requested visible-model-only export even when
  removed-model references remain. It is NOT proven that these five were deleted.
- Amended pass criteria: record and omit unreadable endpoint references;
  include only visible link occurrences/bodies; never use joint-glyph visibility
  as geometry visibility; require every visible geometry link to remain reachable
  through valid existing connections. Missing visible links, unsupported motion,
  and disconnected valid joint groups must still stop export.
- No guessed links, automatic fixed joints, CAD deletion or preview APIs.
- This is a user-requested contract change, not a silent weakening of a test.

## API References

- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_Component_allAsBuiltJoints.htm
- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_Component_asBuiltJoints.htm
- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_AsBuiltJoint_parentComponent.htm
- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_AsBuiltJoint_nativeObject.htm
- https://help.autodesk.com/cloudhelp/ENU/Fusion-360-API/files/fusion_AsBuiltJoint_createForAssemblyContext.htm
