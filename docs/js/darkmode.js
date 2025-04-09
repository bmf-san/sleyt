/**
 * BMF-CSS ダークモード切り替え機能
 * ダークモードトグルを実装するJavaScript
 */

// DOM読み込み完了時の処理
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkmode-toggle');

  if (!darkModeToggle) return; // 要素が見つからない場合は何もしない

  // ダークモード状態を切り替える関数
  function toggleDarkMode(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }

  // ページ読み込み時のダークモード設定を復元
  const darkMode = localStorage.getItem('darkMode');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // 保存された設定またはシステム設定に基づいてダークモードを適用
  if (darkMode === 'enabled' || (darkMode === null && prefersDarkScheme.matches)) {
    darkModeToggle.checked = true;
    toggleDarkMode(true);
  }

  // システムの設定が変更されたときに自動的に切り替え（明示的な設定がない場合）
  prefersDarkScheme.addEventListener('change', (e) => {
    if (localStorage.getItem('darkMode') === null) {
      darkModeToggle.checked = e.matches;
      toggleDarkMode(e.matches);
    }
  });

  // チェックボックスのchange監視
  darkModeToggle.addEventListener('change', function() {
    toggleDarkMode(this.checked);
  });
});