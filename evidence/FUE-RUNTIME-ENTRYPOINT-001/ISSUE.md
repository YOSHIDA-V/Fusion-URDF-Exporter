# FUE-RUNTIME-ENTRYPOINT-001

Issue ID: `FUE-RUNTIME-ENTRYPOINT-001`

Observed behavior: The user ran the Robovie-Z exporter at 2026-09-03 02:56, but the output directory again contained only three joint-tree diagnostic files and no STL, Xacro, or URDF.

Failure run ID: `FUE-RUNTIME-20260903-025622`

Execution target: Autodesk Fusion on the Robovie-Z design.

Candidate branch HEAD at observation: `2372a4a44744a3b44e16f04d110f028f21b07de9`

Reproduction values:

- Fusion AppLog records `20260903T025622 ... VSCode:Running python script`.
- Output files were created at `2026-09-03 02:56:26`, four seconds after the run entry.
- Output contains exactly three files and no STL/Xacro/URDF.
- The three file hashes are identical to the earlier fatal closed-loop run.
- Installed Add-In `URDF_Exporter.py` SHA-256 is `932beab0595df5f568ec011aa9d1de80bbff3df7aa1dd46f5ad65aa49655a3f8` and contains `Joint.partition_skipped_joints`.
- Fusion PID `15072` started at `2026-09-03 02:36:18`, before the corrected Add-In source was installed.
- Obsolete Script `API\Scripts\RobovieZ_URDF_Exporter` remains selectable and its entrypoint SHA-256 is `f001edfabccd1233ce83ddae140e8f53923a6cb0d45121588a043c33e35fd278`; it still treats `cycle_or_duplicate_parent` as fatal.
- The output contains no runtime identity that distinguishes the stale in-memory Add-In from the obsolete Script.

Root cause: The Robovie-Z export runtime is not bound to one identifiable entrypoint. A stale Fusion process and an obsolete selectable Script can both execute bytes other than the installed candidate, while the generated files do not record the loaded entrypoint or hashes. The 02:56 output therefore cannot be qualified as an execution of the corrected candidate.

Files allowed to change:

- `RobovieZ_URDF_Exporter_AddIn.py`
- `URDF_Exporter.py`
- `utils/utils.py`
- `tests/test_export_logic.py`
- `evidence/FUE-RUNTIME-ENTRYPOINT-001/**`
- Installed `API\AddIns\RobovieZ_URDF_Exporter_AddIn/**`
- Obsolete installed `API\Scripts\RobovieZ_URDF_Exporter` may be moved to a recoverable disabled location.

Files forbidden to change:

- Original `API\Scripts\URDF_Exporter/**`
- Fusion design data
- All other source/package files

Controlled-environment pass criteria:

- Every candidate run writes `runtime_status.json` immediately after the destination is selected.
- The status records run ID, phase, PID, entrypoint path, and SHA-256 for the loaded exporter, Joint, and utils modules.
- The Add-In wrapper passes its own `__file__` as the entrypoint identity.
- Phase updates make preflight, link flattening, STL export, URDF writing, completion, and failure distinguishable.
- All tests pass.
- The obsolete Robovie-Z Script is no longer executable from Fusion's `API\Scripts` directory, while the original `URDF_Exporter` remains unchanged.

Target pass criteria:

- A fresh Fusion process runs the installed candidate.
- `runtime_status.json` identifies the Add-In path and matches the installed source hashes.
- Status reaches `complete`.
- STL and Xacro/URDF output exists and package validation passes.

Previously verified behaviors that must not regress:

- Fusion Component1 remains the URDF child and Component2 remains the URDF parent.
- Top-level Fusion components define semantic URDF link names.
- Closed-loop omission remains reportable and nonfatal.
- Original `URDF_Exporter` is not modified.

