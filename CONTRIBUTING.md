# miyamoto-portfolio 開発ルール
このプロジェクトは個人開発ですが、ルールを整理します。

## コミットルール

- コミットメッセージは命令形で書く
- 形式: `type(scope): メッセージ`
  - **type の例**
    - `feat`: 新機能
    - `change`: 変更
    - `fix`: バグ修正
    - `docs`: ドキュメント
    - `style`: 書式変更のみ（コードは変更しない）
    - `refactor`: リファクタリング
    - `test`: テスト追加・修正
    - `chore`: メンテナンス作業
  - **例**: `feat(homepage): ヒーローセクションを追加`
- Push 前に lint やテストを実行

## ブランチルール
- 変更は main で作業してOK
- 必要あればブランチを作成してください。
  ```bash
  git checkout -b feature/機能名