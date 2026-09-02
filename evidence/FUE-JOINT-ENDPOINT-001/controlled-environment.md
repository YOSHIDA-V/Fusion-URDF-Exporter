# Controlled-environment qualification

- Issue state: `FIXED_IN_CONTROLLED_ENVIRONMENT`
- Run ID: `FUE-JOINT-ENDPOINT-001-QUAL-20260903T015803+09:00`
- Execution target: Python controlled environment
- Branch: `codex/fix-nested-joint-endpoints`
- Candidate commit: `3b3e3a5ded5837054ff7c0ada48e5e93dd57b396`
- Remote commit before qualification: `3b3e3a5ded5837054ff7c0ada48e5e93dd57b396`
- `core/Joint.py` SHA-256: `8ce5163d2d1f7b21366f8548e86a1b1b03be1cb60a74f060ae5a2e9b41e6ec6b`
- `utils/utils.py` SHA-256: `065e5f8999c2f0710fd1a65de9099dc935705f940a1c2b08129a5d55dcee339c`
- `tests/test_export_logic.py` SHA-256: `195271b18409bbff242464545f549061f1526931918f1d3a996dde8b5c7f36a3`
- Reproduction test: 1 passed; exit code 0
- Full exporter suite: 36 passed; exit code 0
- Regression checks: Component1/Component2 mapping, nested target handling, linked-copy naming, `base_link` canonicalization, package validation, and viewer generation tests passed.
- Qualification log: `controlled-qualification.log`
- Qualification log SHA-256: `696e8faab41c83fd48a3f9156d6a8aca5dd63754857670882acfb373e9c0ff9e`
- Missing target evidence: Candidate has not been installed or run inside Fusion against the Robovie-Z design. STL/Xacro generation is not yet target-verified.
- Next allowed transition: Install this exact candidate into the Fusion script directory, rerun the Robovie-Z export, verify generated STL/Xacro and Joint tree, then request user confirmation before promotion.
