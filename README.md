# Fusion URDF Exporter

Autodesk Fusion 360のコンポーネントとジョイントから、ROS 2で使用できる
Xacro、STLメッシュ、表示用launchファイルを生成するアドオンです。

このリポジトリは、Toshinori Kitamura氏（syuntoku14）のFusion2URDFを基に、
ジョイントツリー検証、親子関係補正、メッシュ再利用、Xacro出力などを追加したものです。

## 主な機能

- FusionコンポーネントをURDF Linkとして出力
- Revolute、Slider、Rigid Jointの変換
- `base_link`からのジョイントツリー検証
- Fusion上の親子関係をURDFツリーに合わせて補正
- 親子反転時の軸・制限値補正
- 同一形状メッシュの再利用
- ROS 2用Xacro、launch、RViz設定の生成
- VS Code URDF Preview用ファイルの生成

## インストール

1. このリポジトリをダウンロードまたはcloneします。
2. `Fusion-URDF-Exporter-public`フォルダを`URDF_Exporter`へ変更します。
3. Fusion 360の`ユーティリティ` > `アドイン` > `スクリプトとアドイン`を開きます。
4. `スクリプト`タブの追加ボタンから`URDF_Exporter`を登録します。
5. Fusionのデザインでルート側コンポーネントを`base_link`に設定して実行します。

## モデル作成時の注意

- URDFへ出力する各部品はFusionのコンポーネントとして作成してください。
- 1コンポーネント内の複数Bodyは、1つのLinkおよび1つのSTLとして出力されます。
- 固定部品にも明示的なRigid Jointを設定してください。
- Slider Jointには下限と上限を設定してください。
- 出力しないコンポーネントはFusion上で非表示にしてください。

## テスト

Fusion APIを使用しない変換ロジックのテストは次のコマンドで実行できます。

```powershell
python -m unittest discover -s tests -p "test_*.py"
```

## ライセンス

MIT Licenseです。原著作者の著作権表示は[LICENSE](LICENSE)を参照してください。

