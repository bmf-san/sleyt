# BMF-CSS

BMF-CSSは、シンプルで軽量、そして使いやすいCSSフレームワークです。モダンなWebアプリケーションや、レスポンシブなWebサイトを素早く構築するために必要な基本的なスタイルとコンポーネントを提供します。

## 特徴

- 軽量：必要最小限のスタイルとユーティリティクラスのみを提供
- モダン：CSSカスタムプロパティ（変数）を活用
- レスポンシブ：モバイルファーストのアプローチとレスポンシブユーティリティクラス
- ダークモード対応：メディアクエリによる自動ダークモードと手動切り替え
- アクセシビリティ：WAI-ARIAに準拠した設計
- カスタマイズ可能：CSSカスタムプロパティを変更するだけで簡単にカスタマイズ可能

## インストール

npmを使用してインストールします：

```bash
npm install bmf-css
```

または、CDNを使用：

```html
<link rel="stylesheet" href="https://unpkg.com/bmf-css@latest/dist/bmf.min.css">
```

## 使い方

HTMLファイルのheadタグ内にCSSファイルを読み込むだけです：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BMF-CSSを使用したWebサイト</title>
  <link rel="stylesheet" href="path/to/bmf.min.css">
</head>
<body>
  <!-- コンテンツ -->
</body>
</html>
```

## コンポーネント

BMF-CSSは以下のコンポーネントとユーティリティを提供します：

- ボタン (`.btn`, `.btn-primary`, `.btn-secondary` など)
- カード (`.card`, `.card-body`, `.card-header` など)
- フォーム要素 (`.input`, `.select`, `.checkbox` など)
- グリッドシステム (`.grid`, `.grid-cols-*` など)
- フレックスボックスユーティリティ (`.flex`, `.items-center`, `.justify-between` など)
- スペーシングユーティリティ (`.m-*`, `.p-*` など)
- テキストユーティリティ (`.text-*`, `.font-*` など)
- カラーユーティリティ (`.bg-*`, `.text-*` など)
- レスポンシブユーティリティ (`.sm:flex`, `.md:hidden` など)

## ドキュメント

完全なドキュメントは[デモページ](./docs/index.html)を参照してください。

## 開発

このプロジェクトを開発するには：

```bash
# 依存関係のインストール
npm install

# 開発モードでの実行（ファイル監視）
npm run dev

# ビルド
npm run build

# ミニファイ版のビルド
npm run build:min

# ドキュメントの生成
npm run docs
```

## ライセンス

MITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。