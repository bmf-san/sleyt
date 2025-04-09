# sleyt

ミニマルでモダンなCSSフレームワーク

## 特徴

- 透明感のあるモダンなデザイン
- アクセシビリティを考慮
- シンプルで使いやすいコンポーネント
- レスポンシブデザイン対応
- ダークモード対応

## インストール

```bash
npm install
```

## ドキュメント
<!-- TODO: docs/index.htmlをgithub pagesとして配信、リンク  -->

## 開発

### CSSのビルド

```bash
# ビルド
npm run build:css

# 監視モード（変更を監視して自動的にビルド）
npm run watch:css
```

### Stylelint

コードの品質を保つために、CSSのlintツール（Stylelint）を導入しています。

```bash
# lintを実行
npm run lint:css

# lintのエラーを自動修正
npm run lint:css:fix
```