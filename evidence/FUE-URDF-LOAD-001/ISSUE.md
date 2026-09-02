# FUE-URDF-LOAD-001

Issue ID: `FUE-URDF-LOAD-001`

Observed behavior: Running the installed `RobovieZ_URDF_Exporter_AddIn` on the Robovie-Z Fusion design at 2026-09-03 02:45 created only joint-tree diagnostics under `C:\Users\yoshi\Downloads\robovie-z_description\robovie-z_description`. No STL, Xacro, or URDF was generated, so the model could not be loaded.

Failure run ID: `FUE-URDF-20260903-024504`

Execution target: Autodesk Fusion on the Robovie-Z design.

Executed source commit: `5a98d9d32d812f0317c7d3399a414def51709747`

Installed Add-In: `C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\AddIns\RobovieZ_URDF_Exporter_AddIn`

Observed evidence:

- `joint_tree_report.txt` SHA-256: `60F0006DA8E5854E74DBE889B7F84617D04958441EE37E7521C944278A09077B`
- `joint_tree_links.csv` SHA-256: `0C5CAD29E27080986829CBA52B839E356E280654B4A3267E33F8FF34AB9A4256`
- `joint_tree_edges.csv` SHA-256: `12C551C677A1CFA53C81DA48A9C0382E1103156DC32E25C3CC4FB0CA00750D76`
- `joints_total_seen: 31`
- `joints_skipped_from_urdf_tree: 1`
- `continuous_joint_18` is `left_knee_rear_link -> left_shank_link` with `skip_reason=cycle_or_duplicate_parent`.
- Fusion AppLog records `20260903T024504 ... VSCode:Running python script`.

Root cause: `Joint._orient_from_base_link` correctly removes one closure edge from the closed left-knee linkage because URDF requires a tree. `URDF_Exporter.run` then classifies every `cycle_or_duplicate_parent` omission as fatal and exits before copying package files, calculating inertials, or exporting STL. The diagnostic report therefore also misleadingly shows zero inertials because it is written before inertial calculation.

Files allowed to change:

- `URDF_Exporter.py`
- `core/Joint.py`
- `utils/utils.py`
- `tests/test_export_logic.py`
- `evidence/FUE-URDF-LOAD-001/**`

Files forbidden to change: all other source and package files.

Controlled-environment pass criteria:

- A regression test proves `cycle_or_duplicate_parent` is an explicitly reportable, nonfatal URDF tree omission.
- `disconnected_from_base_link`, invalid joints, invalid motion, and non-reversible rotated joints remain fatal.
- Successful exports with a closed-loop omission preserve the joint-tree diagnostics instead of deleting the evidence.
- All exporter tests pass.

Target pass criteria:

- The same installed candidate bytes run in Fusion on the Robovie-Z design.
- The output contains Xacro/URDF and STL meshes.
- Xacro expands successfully in WSL when `xacro` is available.
- The expanded URDF loads with an available WSL URDF/MuJoCo loader.
- Every referenced mesh resolves to an existing file.
- The omitted closed-loop joint remains explicitly recorded; it is not represented as an independent URDF degree of freedom.

Previously verified behaviors that must not regress:

- Fusion Component1 remains the URDF child and Component2 remains the URDF parent.
- Nested Joint endpoints resolve to their enclosing top-level link components.
- Top-level Fusion components define semantic URDF link names.
- Existing `URDF_Exporter` installation remains unchanged.

