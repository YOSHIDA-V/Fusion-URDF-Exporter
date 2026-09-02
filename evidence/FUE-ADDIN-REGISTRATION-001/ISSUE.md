# FUE-ADDIN-REGISTRATION-001

Issue ID: `FUE-ADDIN-REGISTRATION-001`

Observed behavior: `RobovieZ_URDF_Exporter` does not appear as a Fusion Add-In.

Failure run ID: `FUE-ADDIN-REGISTRATION-001-OBSERVED-20260903-01`

Execution target: Autodesk Fusion Add-Ins registration on Windows.

Observed source commit: `fe5ca6eab98ac8278524b8ebcd14a2703a4c71d5`

Reproduction values:

- Installed path is `C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\Scripts\RobovieZ_URDF_Exporter`.
- Installed manifest contains `"type": "script"`.
- Installed entrypoint defines `run(context)` but not `stop(context)`.
- `C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\AddIns\RobovieZ_URDF_Exporter_AddIn` does not exist.

Root cause: the candidate was installed as a Fusion Script, not as a Fusion Add-In.

Files allowed to change:

- `RobovieZ_URDF_Exporter_AddIn.py`
- `RobovieZ_URDF_Exporter_AddIn.manifest`
- `tests/test_export_logic.py`
- `evidence/FUE-ADDIN-REGISTRATION-001/**`

Files forbidden to change: exporter core, link/joint logic, package templates, and the existing `URDF_Exporter` installation.

Controlled-environment pass criteria:

- A dedicated manifest exists with `type=addin`, `runOnStartup=false`, and stable ID `516b21c1-a7b7-45c4-82fb-e7013624dfef`.
- A matching Python entrypoint exists with both `run(context)` and `stop(context)`.
- `run(context)` forwards to the already qualified exporter implementation.
- Full exporter tests pass.

Target pass criteria:

- The Add-In is installed under `API\AddIns\RobovieZ_URDF_Exporter_AddIn` with matching folder, Python, and manifest names.
- Source and installed hashes match.
- Fusion shows `RobovieZ_URDF_Exporter_AddIn` in the Add-Ins list.
- Running it reaches the exporter folder-selection workflow.

Previously verified behaviors that must not regress:

- Existing `URDF_Exporter` remains unchanged.
- The separately installed Script candidate is retained until the Add-In is target-verified.
- The top-level Robovie-Z link-boundary correction remains byte-identical.

