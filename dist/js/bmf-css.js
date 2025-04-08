/**
 * BMF-CSS JavaScript サポート
 * インタラクティブなコンポーネントのための軽量スクリプト
 */

/**
 * BMF-CSS 名前空間を定義
 */
const BMFCSS = {
  /**
   * 初期化メソッド
   */
  init: function() {
    this.initModals();
    this.initTooltips();
    this.initDropdowns();
    this.initTabs();
    this.initAccordions();
    this.initThemeToggle();
  },

  /**
   * モーダルの初期化
   */
  initModals: function() {
    // モーダルを開く
    document.querySelectorAll('[data-modal-open]').forEach(button => {
      button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal-open');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add('is-open');
          document.body.classList.add('modal-open');
        }
      });
    });

    // モーダルを閉じる
    document.querySelectorAll('[data-modal-close]').forEach(button => {
      button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal-close');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.remove('is-open');
          document.body.classList.remove('modal-open');
        }
      });
    });

    // オーバーレイクリックでモーダルを閉じる
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function(e) {
        if (e.target === this) {
          const modal = this.closest('[data-modal], .modal-container');
          if (modal) {
            modal.classList.remove('is-open');
            document.body.classList.remove('modal-open');
          }
        }
      });
    });

    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const openModal = document.querySelector('[data-modal].is-open, .modal-container.is-open');
        if (openModal) {
          openModal.classList.remove('is-open');
          document.body.classList.remove('modal-open');
        }
      }
    });
  },

  /**
   * ツールチップの初期化
   */
  initTooltips: function() {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = element.getAttribute('data-tooltip');
      tooltip.style.display = 'none';
      document.body.appendChild(tooltip);

      // ツールチップを表示
      element.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        tooltip.style.display = 'block';

        // 位置の計算
        const tooltipRect = tooltip.getBoundingClientRect();
        const position = element.getAttribute('data-tooltip-position') || 'top';

        switch(position) {
          case 'top':
            tooltip.style.top = `${rect.top - tooltipRect.height - 10 + window.scrollY}px`;
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltipRect.width / 2) + window.scrollX}px`;
            break;
          case 'bottom':
            tooltip.style.top = `${rect.bottom + 10 + window.scrollY}px`;
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltipRect.width / 2) + window.scrollX}px`;
            break;
          case 'left':
            tooltip.style.top = `${rect.top + (rect.height / 2) - (tooltipRect.height / 2) + window.scrollY}px`;
            tooltip.style.left = `${rect.left - tooltipRect.width - 10 + window.scrollX}px`;
            break;
          case 'right':
            tooltip.style.top = `${rect.top + (rect.height / 2) - (tooltipRect.height / 2) + window.scrollY}px`;
            tooltip.style.left = `${rect.right + 10 + window.scrollX}px`;
            break;
        }

        tooltip.setAttribute('data-show', '');
      });

      // ツールチップを非表示
      element.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
        tooltip.removeAttribute('data-show');
      });
    });
  },

  /**
   * ドロップダウンの初期化
   */
  initDropdowns: function() {
    document.querySelectorAll('[data-dropdown-toggle]').forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        const targetId = this.getAttribute('data-dropdown-toggle');
        const dropdownMenu = document.getElementById(targetId);

        if (dropdownMenu) {
          // 他のすべてのドロップダウンを閉じる
          document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            if (menu.id !== targetId) {
              menu.classList.remove('show');
            }
          });

          // このドロップダウンを開閉
          dropdownMenu.classList.toggle('show');
        }
      });
    });

    // 外側をクリックしたらドロップダウンを閉じる
    document.addEventListener('click', function() {
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
    });
  },

  /**
   * タブの初期化
   */
  initTabs: function() {
    document.querySelectorAll('[data-tabs]').forEach(tabsContainer => {
      const tabsId = tabsContainer.getAttribute('data-tabs');
      const tabs = tabsContainer.querySelectorAll('[data-tab]');
      const tabPanels = document.querySelectorAll(`[data-tab-content="${tabsId}"] [data-tab-panel]`);

      tabs.forEach(tab => {
        tab.addEventListener('click', function() {
          const tabId = this.getAttribute('data-tab');

          // すべてのタブの active クラスを削除
          tabs.forEach(t => t.classList.remove('active'));
          // クリックされたタブに active クラスを追加
          this.classList.add('active');

          // すべてのタブパネルを非表示
          tabPanels.forEach(panel => {
            panel.classList.remove('active');
          });

          // 対応するタブパネルを表示
          const activePanel = document.querySelector(`[data-tab-content="${tabsId}"] [data-tab-panel="${tabId}"]`);
          if (activePanel) {
            activePanel.classList.add('active');
          }
        });
      });
    });
  },

  /**
   * アコーディオンの初期化
   */
  initAccordions: function() {
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', function() {
        const accordionItem = this.closest('.accordion-item');
        accordionItem.classList.toggle('active');

        const content = accordionItem.querySelector('.accordion-content');
        if (accordionItem.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
      });
    });
  },

  /**
   * ダークモードトグルの初期化
   */
  initThemeToggle: function() {
    const themeToggleButtons = document.querySelectorAll('.theme-toggle');

    // Check for saved theme preference or prefer-color-scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('bmf-theme');

    // Apply theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
      document.documentElement.classList.add('dark-mode');
      themeToggleButtons.forEach(btn => {
        if (btn.type === 'checkbox') {
          btn.checked = true;
        }
      });
    }

    // Toggle theme when buttons are clicked
    themeToggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark-mode');

        // Sync other toggle buttons
        const isDark = document.documentElement.classList.contains('dark-mode');
        themeToggleButtons.forEach(btn => {
          if (btn.type === 'checkbox') {
            btn.checked = isDark;
          }
        });

        // Save preference to localStorage
        localStorage.setItem('bmf-theme', isDark ? 'dark' : 'light');
      });
    });
  }
};

// DOMの読み込みが完了したら初期化
document.addEventListener('DOMContentLoaded', function() {
  BMFCSS.init();
});