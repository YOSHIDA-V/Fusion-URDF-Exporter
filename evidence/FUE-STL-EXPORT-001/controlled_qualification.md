# Controlled qualification

- Issue: `FUE-STL-EXPORT-001`
- State: `FIXED_IN_CONTROLLED_ENVIRONMENT`
- Run ID: `FUE-STL-EXPORT-001-CONTROLLED-20260903-01`
- Branch: `codex/fix-nested-joint-endpoints`
- Candidate commit: `6fe90a73e3f110f1a73067b97a2cddaa1a9f6eb3`
- Local tracking commit: `6fe90a73e3f110f1a73067b97a2cddaa1a9f6eb3`
- Worktree before test: clean
- `utils/utils.py` SHA-256: `42020f6c851ed323b1a7c114631dd29d6bcb4226bbf35e683082398d2489e0dd`
- `tests/test_export_logic.py` SHA-256: `e7b5edb52b12bfdfffa3c56ee4a07f401ee8788bcfc0b27af976798f6c8e3805`

Command:

```powershell
py -3 -m unittest discover -s tests -v
```

Result: `Ran 37 tests in 1.095s` / `OK` / exit code `0`.

Confirmed in the controlled test:

- A top-level `base_link` assembly is found through `root.occurrences` even when `root.allOccurrences` contains only nested servo/horn leaves.
- A top-level component named `neck_link` remains `neck_link`; the Fusion `:1` instance suffix is not included in the URDF link name.
- Visible nested bodies are grouped under the top-level `base_link` and `neck_link` STL export sources.
- Fusion Component1 remains the URDF child and Component2 remains the URDF parent.

Not confirmed by this run:

- Fusion-hosted STL generation on the Robovie-Z design.
- URDF/Xacro package completion on the Robovie-Z design.
