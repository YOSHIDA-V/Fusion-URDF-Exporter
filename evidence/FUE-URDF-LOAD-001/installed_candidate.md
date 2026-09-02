# Installed candidate

- Issue: `FUE-URDF-LOAD-001`
- State: `PUSHED_CANDIDATE`
- Run ID: `FUE-URDF-LOAD-001-INSTALL-20260903-01`
- Source commit: `7e9ed44daff915442c14346b6560c946a209be18`
- Installed path: `C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\AddIns\RobovieZ_URDF_Exporter_AddIn`
- Installed deterministic tree SHA-256 (excluding `__pycache__` and `.pyc`): `0092f15d7257591a20e98aa9af59a2f7625ae7f5d98dc824e8b98b1bc2f90a76`
- Installed source file count: `20`
- `URDF_Exporter.py` source/installed SHA-256: `932beab0595df5f568ec011aa9d1de80bbff3df7aa1dd46f5ad65aa49655a3f8`
- `core/Joint.py` source/installed SHA-256: `53c57e23ac1287487f3a5debabe6efc8e1ceb066b2ac99f8b883aeaa009e1afc`
- `utils/utils.py` source/installed SHA-256: `d3bc11289902fdb9548d734acd7f48b39c0632bb31f7863438a0817cefd1c0cd`
- Manifest SHA-256: `ce4b08889399c7091a60b63666790ff30d99447a393aa5678798fdcf841bd094`
- Wrapper SHA-256: `0f23fd8d3238512154c921041419e6ae0b445f67f9fabbe7d75326cb07443c03`
- Installed manifest type remains `addin`.
- Existing original `URDF_Exporter` Script was not written during this installation.
- Python caches were not deleted; Fusion must be restarted before target execution so the updated modules are loaded.

Installed-path controlled test:

```powershell
python -m unittest discover -s "C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\AddIns\RobovieZ_URDF_Exporter_AddIn\tests" -v
```

Result: `Ran 40 tests in 1.043s` / `OK` / exit code `0`.

WSL loader probe:

- Distro: `Ubuntu-22.04`
- MuJoCo: `3.10.0`
- `xacro`: missing
- `check_urdf`: missing
- ROS 2: missing

Target status: not yet verified. A Fusion restart and one Robovie-Z Add-In export are required before package validation and MuJoCo URDF loading can be executed.
