# FUE-STL-EXPORT-001

Issue ID: `FUE-STL-EXPORT-001`

Observed behavior: Running the separately installed `RobovieZ_URDF_Exporter` created only joint-tree diagnostic files under `C:\Users\yoshi\Downloads\robovie-z_description\robovie-z_description`; no `meshes` directory, STL files, or URDF/Xacro files were created.

Failure run ID: `FUE-STL-20260903-021901`

Execution target: Autodesk Fusion on the Robovie-Z design.

Executed source commit: `3f6fd7ce4d23e78decccaeb11b4176e78304b62b`

Installed script: `C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\Scripts\RobovieZ_URDF_Exporter`

Reproduction values:

- Fusion log contains `20260903T021901 ... VSCode:Running python script`.
- Output directory contains exactly `joint_tree_report.txt`, `joint_tree_links.csv`, and `joint_tree_edges.csv`.
- `joint_tree_report.txt` records `base_link_found: no` and `joints_total_seen: 31`.
- Joint endpoints resolve the base as `base_link`, while non-base top-level links are written with occurrence-instance suffixes such as `neck_link_1` and `left_shoulder_link_1`.
- No `meshes` directory exists.

Root-cause hypothesis: Joint endpoint resolution uses top-level `root.occurrences`, but preflight link discovery and STL source selection use `root.allOccurrences` plus sanitized `fullPathName`. A top-level link assembly can therefore be absent from preflight discovery, and the same component can receive an occurrence-instance name instead of its semantic component name.

Values that would prove the cause:

- A regression fixture with top-level link assemblies in `root.occurrences` and nested leaf occurrences in `root.allOccurrences` fails to find `base_link` before the correction.
- The same fixture maps a top-level component named `neck_link` to `neck_link_1` before the correction.
- After the correction, both joint endpoints and STL source selection use `base_link` and `neck_link` from the top-level component boundary.

Files allowed to change:

- `tests/test_export_logic.py`
- `utils/utils.py`
- `evidence/FUE-STL-EXPORT-001/**`

Files forbidden to change: all other source and package files.

Controlled-environment pass criteria:

- The new Robovie-Z top-level component regression test passes.
- All existing exporter tests pass.
- Top-level component names remain semantic URDF link names without Fusion `:1` instance suffixes.
- Nested servo/horn bodies remain grouped into their enclosing top-level link.

Target pass criteria:

- The same installed candidate bytes run in Fusion on the Robovie-Z design.
- The export completes and creates URDF/Xacro output plus a `meshes` directory.
- `export_structure_report.csv` contains no failed STL export status.
- Every export entry with `body_count > 0` has a generated mesh.

Previously verified behaviors that must not regress:

- Fusion Component1 remains the URDF child and Component2 remains the URDF parent.
- Nested Joint endpoints resolve to their enclosing top-level link components.
- Temporary export occurrences are cleaned up after execution.
- Existing `URDF_Exporter` installation remains unchanged.

