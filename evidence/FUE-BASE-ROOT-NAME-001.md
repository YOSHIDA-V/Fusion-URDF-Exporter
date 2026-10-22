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

## Reproduction

- Clean test checkpoint: `ad0044d98ccaa587e32270189d11b75e2e298b34`.
- Run: `base-link-scope-baseline-20261022T055526Z`, test PID `16048`.
- Command: `python -B -X utf8 -m unittest discover -s tests -p test_*.py -v`.
- Runtime: mock Fusion API fixtures; this is not a native Fusion export.
- Result: 80 tests, 8 failures and 1 error. The previous 65 tests still pass.
- Utility SHA-256:
  `e32e5d05b2a2837de9842dd0c226603ca0fcaffbf549380d11fbb948653341c4`.
- New test SHA-256:
  `1d19b4cb1df5fca1180582d1e53563586041949463bea09a811ee26ff44e8a0d`.
- The ten fixed joints reproduce the same disconnected classification when the
  top-level base has the numeric Fusion copy suffix.
- Renaming the fixture root to the canonical base name instead produces a
  collision with an unrelated nested base member.
- The nested member body is also excluded by the current string-based base
  normalization. This is a controlled-fixture observation, not a claim that a
  native mesh was generated incorrectly in the failed export.
- Root cause: robot-base naming does not distinguish a direct design-root
  occurrence from an internal occurrence of another exported link assembly.
- Redacted failure output is retained in `FUE-BASE-ROOT-NAME-001-baseline.txt`.
