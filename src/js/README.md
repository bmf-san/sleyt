# BMF-CSS JavaScript サポート

BMF-CSSには、インタラクティブなコンポーネントをサポートするための軽量JavaScriptライブラリが含まれています。このJavaScriptは、CSSだけでは実現できない機能（モーダル、ツールチップ、ドロップダウンなど）を提供します。

## 使い方

1. HTMLの`<head>`セクション内で、BMF-CSSのCSSファイルの後にJavaScriptファイルを読み込みます：

```html
<link rel="stylesheet" href="path/to/bmf-css.min.css">
<script src="path/to/bmf-css.js" defer></script>
```

2. 対応するdata属性を使用して、インタラクティブなコンポーネントを実装します：

## サポートされているコンポーネント

### モーダル

```html
<!-- モーダルを開くボタン -->
<button data-modal-open="my-modal">モーダルを開く</button>

<!-- モーダル本体 -->
<div id="my-modal" data-modal>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">モーダルタイトル</h3>
        <button data-modal-close="my-modal" class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        モーダルの内容
      </div>
      <div class="modal-footer">
        <button data-modal-close="my-modal" class="button secondary-button">キャンセル</button>
        <button data-modal-close="my-modal" class="button primary-button">確認</button>
      </div>
    </div>
  </div>
</div>
```

### ツールチップ

```html
<!-- 基本的なツールチップ -->
<button data-tooltip="ヘルプテキスト">ヘルプ</button>

<!-- ポジションを指定したツールチップ -->
<button data-tooltip="ボタンの下に表示" data-tooltip-position="bottom">下に表示</button>
<button data-tooltip="ボタンの右に表示" data-tooltip-position="right">右に表示</button>
```

### ドロップダウン

```html
<!-- ドロップダウンボタン -->
<button data-dropdown-toggle="my-dropdown">ドロップダウン</button>

<!-- ドロップダウンメニュー -->
<div id="my-dropdown" class="dropdown-menu">
  <a href="#" class="dropdown-item">メニュー1</a>
  <a href="#" class="dropdown-item">メニュー2</a>
  <a href="#" class="dropdown-item">メニュー3</a>
</div>
```

### タブ

```html
<!-- タブナビゲーション -->
<div class="tabs" data-tabs="my-tabs">
  <button data-tab="tab1" class="tab active">タブ1</button>
  <button data-tab="tab2" class="tab">タブ2</button>
  <button data-tab="tab3" class="tab">タブ3</button>
</div>

<!-- タブコンテンツ -->
<div data-tab-content="my-tabs">
  <div data-tab-panel="tab1" class="tab-panel active">タブ1の内容</div>
  <div data-tab-panel="tab2" class="tab-panel">タブ2の内容</div>
  <div data-tab-panel="tab3" class="tab-panel">タブ3の内容</div>
</div>
```

### アコーディオン

```html
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-trigger">
      <h3 class="accordion-title">アコーディオン1</h3>
      <span class="accordion-icon"></span>
    </div>
    <div class="accordion-content">
      アコーディオン1の内容
    </div>
  </div>
</div>
```

### テーマ切り替え

```html
<!-- チェックボックスによるテーマ切り替え -->
<input type="checkbox" id="theme-toggle" class="theme-toggle">
<label for="theme-toggle">ダークモード</label>

<!-- ボタンによるテーマ切り替え -->
<button class="theme-toggle">テーマ切り替え</button>
```

## カスタマイズ

BMF-CSS JavaScriptは、独自の初期化タイミングでも使用できます：

```javascript
// 特定のタイミングで初期化
document.addEventListener('DOMContentLoaded', function() {
  BMFCSS.init(); // すべてのコンポーネントを初期化

  // または特定のコンポーネントだけを初期化
  BMFCSS.initModals();
  BMFCSS.initTooltips();
});