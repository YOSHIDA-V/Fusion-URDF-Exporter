# Installed Add-In candidate

- Issue: `FUE-ADDIN-REGISTRATION-001`
- State: `PUSHED_CANDIDATE`
- Run ID: `FUE-ADDIN-REGISTRATION-001-INSTALL-20260903-01`
- Source commit: `9486b1a79fda1fe56149e80cc5a684bf02dbc501`
- Installed path: `C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\AddIns\RobovieZ_URDF_Exporter_AddIn`
- Installed tree SHA-256: `57be08ca5ffd2480f91efc9649d80561a21f3de7ad5b21f1804309900c3ead1c`
- Installed file count: `20`
- Wrapper SHA-256: `0f23fd8d3238512154c921041419e6ae0b445f67f9fabbe7d75326cb07443c03`
- Manifest SHA-256: `ce4b08889399c7091a60b63666790ff30d99447a393aa5678798fdcf841bd094`
- Link-boundary implementation SHA-256: `42020f6c851ed323b1a7c114631dd29d6bcb4226bbf35e683082398d2489e0dd`
- Source/installed wrapper hash match: `true`
- Source/installed manifest hash match: `true`
- Source/installed link-boundary implementation hash match: `true`
- Installed manifest type: `addin`
- Existing `URDF_Exporter` unchanged: `true`
- Existing `RobovieZ_URDF_Exporter` Script candidate retained and unchanged: `true`

Installed-path controlled test:

```powershell
py -3 -m unittest discover -s "C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\AddIns\RobovieZ_URDF_Exporter_AddIn\tests" -v
```

Result: `Ran 38 tests in 1.114s` / `OK` / exit code `0`.

Not yet confirmed:

- Fusion Add-Ins list visibility in the current process.
- Fusion-hosted execution reaching the folder-selection dialog.
