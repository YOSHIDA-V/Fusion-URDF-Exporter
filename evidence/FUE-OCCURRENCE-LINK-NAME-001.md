# FUE-OCCURRENCE-LINK-NAME-001

- State: ROOT_CAUSE_PROVEN.
- Failure run: occurrence-names-baseline-20261022T004006Z, clean commit 9e8d935. Six tests ran: three failures, two errors, one pass.
- Reproduced result: four occurrences collapse to two link sources/joint children; the Japanese-name pair is rejected by preflight. First-instance semantic names and shared mesh-part identity pass as a control.
- Observed failure: distinct occurrence names ending in :1 and :2 are rejected as duplicate top-level URDF links.
- Root-cause hypothesis: top_level_link_name uses only Component.name, discarding the occurrence instance number.
- Baseline: 42b67e1 plus a byte-identical snapshot of the current utils/utils.py; pre-existing changes in that file are not part of this fix.
- Baseline source utils SHA-256: ca4e143a6d79029da78291f3ecb42e4c03e8d0621e0f04736e0f2c87598a3f2a.
- Reproduction: two component definitions with two occurrences each; keep four links, four joint children and four body-source lists.
- Cause proof: component names are equal within a pair, occurrence names differ, but the exported link map loses one member of each pair or preflight rejects it.
- Allowed changes: top_level_link_name, its regression tests, the obsolete shared-instance rejection test and evidence. Apply the same function change to installed copies that contain the same faulty function.
- Forbidden changes: Fusion model, joint topology/poses, physical properties, STL reuse logic, existing unrelated source changes and unrelated entrypoints.
- Fixed acceptance criteria: all six new tests pass; default semantic names and base_link aliases stay compatible; copied occurrences keep separate sources/joint children; existing geometry-based mesh reuse tests continue to pass.
- Target criteria: a new Fusion export using the patched function no longer rejects the reported distinct instance names and retains each occurrence in the link/joint/source tables.
- Runtime execution must use clean candidate worktrees with durable manifests and hashes.
- Do not promote to main or claim a Fusion export passed based only on fixtures.
- No CAD names, paths or model geometry are included in public reproduction data.
