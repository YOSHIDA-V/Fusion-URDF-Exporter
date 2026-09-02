# Installed candidate

- Issue: `FUE-RUNTIME-ENTRYPOINT-001`
- State: `PUSHED_CANDIDATE`
- Install run ID: `FUE-RUNTIME-INSTALL-20260903-0311`
- Installed source commit: `863f64ca7a08a0c1ea92be2a55eb7e82d996bd75`
- Add-In path: `C:\Users\yoshi\AppData\Roaming\Autodesk\Autodesk Fusion 360\API\AddIns\RobovieZ_URDF_Exporter_AddIn`
- Deterministic Add-In tree SHA-256 (excluding Python caches): `b7be0bf6b9ab49b3708fdb33b9b624c758c72f8ec50732d46392cf1702424167`
- Source file count: `20`
- Wrapper source/installed SHA-256: `f03f1b16c59f0a795a4898a8dce305488b301040bbfb1b71d7532b616264ebec`
- Exporter source/installed SHA-256: `2ed9293800f32079bea1c34a58944ba6329a72cb447adfc6f7f54e9995baf346`
- Utils source/installed SHA-256: `b2a7104c830d4ebb2402cf617d0814296cf0bb4e2320acf934eee1953a752746`
- Installed-path tests: 41 passed in 1.044 seconds, exit 0.

Launcher migration:

- Obsolete Script moved from `API\Scripts\RobovieZ_URDF_Exporter` to recoverable path `API\DisabledScripts\RobovieZ_URDF_Exporter_FUE_RUNTIME_20260903`.
- Obsolete Script is no longer present under `API\Scripts`.
- Original `API\Scripts\URDF_Exporter\URDF_Exporter.py` SHA-256 before and after: `06bd56c0b8409aec27272dd5c462af0930c962ba5cc8d4dbd100f6a74fee3e53`.

Current target state:

- Fusion PID `15072` still has start time `2026-09-03 02:36:18`, which predates this installation.
- Current output has no `runtime_status.json` and no STL.
- Therefore the currently running Fusion process has not executed this installed candidate and cannot qualify it.
