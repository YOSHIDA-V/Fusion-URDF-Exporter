# FUE-BASE-ROOT-NAME-001

## Contract

- State: OBSERVED; production code is unchanged.
- Target: the native Fusion Script exporter, not a standalone mock application.
- Observed result: ten readable fixed joints were rejected as disconnected.
- The recorded edge list forms one tree with eleven vertices. Its root is a
  top-level occurrence whose Fusion component name has a numeric copy suffix.
- User requirement: prioritize that design-root base over base-like names in
  nested component assemblies. Do not merge those nested components into the
  robot base or discard their visible geometry.
- Allowed code scope: base-name recognition and occurrence hierarchy checks in
  `utils/utils.py`; associated tests and evidence.
- Forbidden: CAD mutations, invented fixed joints, changed axes or transforms,
  mesh deduplication changes, and Inspector changes.

## Fixed Acceptance Criteria

- One top-level `base_link (n)` occurrence resolves to the robot `base_link`.
- Existing supported base aliases remain compatible.
- Nested base-like members retain full occurrence-path identity and remain in
  the geometry of their enclosing link.
- The ten-edge reproduction exports one eleven-link tree without inventing
  connections or dropping body sources.
- Ambiguous top-level base candidates are rejected rather than merged.
- Previously passing tests remain passing.
- Native export and generated-file validation must pass before target success
  is reported. Mock tests alone do not satisfy this condition.

## Evidence Handling

Actual model names, diagnostic JSON, and native runtime manifests remain local.
The regression fixture uses generic assembly and frame names. No CAD data is
included here. The public candidate is separate from the private deployed-runtime
snapshot, and `main` must not be promoted from an unverified candidate.
