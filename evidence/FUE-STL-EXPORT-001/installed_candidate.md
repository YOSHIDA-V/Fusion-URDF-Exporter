# Installed candidate

- Run ID: `FUE-STL-EXPORT-001-INSTALL-20260903-01`
- Installed source commit: `d7248a626517635d3623656db94e740ae77a5c5c`
- Local tracking commit at installation: `d7248a626517635d3623656db94e740ae77a5c5c`
- Installed path: `C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\Scripts\RobovieZ_URDF_Exporter`
- Previous installed tree SHA-256: `ca6dc3f542c550719666e7d43abf3018a165ff9c6e597485c5e4003eb6c2d526`
- Updated installed tree SHA-256: `b96f4ab50bb410b2db083d7872eec84a78e75530d71f691a3156a14e7434a100`
- Previous installed `utils/utils.py` SHA-256: `065e5f8999c2f0710fd1a65de9099dc935705f940a1c2b08129a5d55dcee339c`
- Updated source and installed `utils/utils.py` SHA-256: `42020f6c851ed323b1a7c114631dd29d6bcb4226bbf35e683082398d2489e0dd`
- Source/install test file hash match: `true`
- Existing `URDF_Exporter` tree SHA-256 before and after: `0878341101dcc8545f7e5e5fa4a4a74ac423a99bc248561ada215d6bdf35d01a`
- Existing `URDF_Exporter` unchanged: `true`
- Fusion process running during installation: `true`

Installed-path controlled test:

```powershell
py -3 -m unittest discover -s "C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\Scripts\RobovieZ_URDF_Exporter\tests" -v
```

Result: `Ran 37 tests in 1.066s` / `OK` / exit code `0`.

State remains `PUSHED_CANDIDATE`. Fusion-hosted STL and URDF output are not yet target-verified.
