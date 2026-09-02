# FUE-SCRIPT-REGISTRATION-001

Issue ID: `FUE-SCRIPT-REGISTRATION-001`

Observed behavior: Fusion's `API\Scripts` directory contains only the original `URDF_Exporter`; the Robovie-Z exporter Script is absent, so the user cannot run it from the Scripts tab.

Failure run ID: `FUE-SCRIPT-INVENTORY-20260903-0315`

Execution target: Autodesk Fusion Scripts and Add-Ins manager on Windows.

Candidate branch HEAD at observation: `e1aae745af02cba8001082543b71e645b4cf2780`

Reproduction values:

- `API\Scripts\URDF_Exporter` exists.
- `API\Scripts\RobovieZ_URDF_Exporter` does not exist.
- A recoverable obsolete copy exists under `API\DisabledScripts\RobovieZ_URDF_Exporter_FUE_RUNTIME_20260903`.
- The repository has an Add-In wrapper and manifest but no maintained Robovie-Z Script wrapper and manifest.

Root cause: The obsolete Robovie-Z Script was removed from Fusion's Script discovery directory to eliminate runtime ambiguity, but no corrected Script entrypoint was installed in its place. The Add-In registration does not satisfy the user's Script-tab workflow.

Files allowed to change:

- `RobovieZ_URDF_Exporter.py`
- `RobovieZ_URDF_Exporter.manifest`
- `tests/test_export_logic.py`
- `evidence/FUE-SCRIPT-REGISTRATION-001/**`
- Installed `API\Scripts\RobovieZ_URDF_Exporter/**`

Files forbidden to change:

- Original `API\Scripts\URDF_Exporter/**`
- Fusion design data
- Existing Add-In candidate source and installation

Controlled-environment pass criteria:

- Repository contains matching `RobovieZ_URDF_Exporter.py` and `RobovieZ_URDF_Exporter.manifest`.
- Manifest type is `script`.
- Script wrapper delegates to the maintained `URDF_Exporter.run` implementation and supplies its own absolute entrypoint path.
- All tests pass.

Target pass criteria:

- `API\Scripts\RobovieZ_URDF_Exporter` exists with matching folder, manifest, and Python entrypoint names.
- Installed Script wrapper and exporter dependency hashes match the source candidate.
- Original `URDF_Exporter` remains byte-identical.
- Fusion executes the Script and generated `runtime_status.json` identifies the Script entrypoint.
- STL and URDF/Xacro package validation succeeds.

Previously verified behaviors that must not regress:

- Component1 remains the URDF child and Component2 remains the URDF parent.
- Closed-loop omission remains reportable and nonfatal.
- Add-In registration remains available.

