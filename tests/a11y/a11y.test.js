const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('アクセシビリティテスト', () => {
  it('サンプルページがWCAG 2.1 AAに準拠している', async () => {
    await page.goto('http://localhost:8000');
    await page.waitForSelector('body');

    const results = await new AxePuppeteer(page).analyze();

    // 違反を表示
    if (results.violations.length > 0) {
      console.log('アクセシビリティ違反:');
      results.violations.forEach((violation) => {
        console.log(`\n${violation.help} - ${violation.helpUrl}`);
        console.log(`影響: ${violation.impact}`);
        console.log('問題のある要素:');
        violation.nodes.forEach((node) => {
          console.log(`  ${node.html}`);
          console.log(`  ${node.failureSummary}`);
        });
      });
    }

    // 検証
    expect(results.violations.length).toBe(0);
  });

  it('グラフと図表が適切な色のコントラスト比を持っている', async () => {
    await page.goto('http://localhost:8000');
    await page.waitForSelector('.chart-container');

    const contrastResults = await new AxePuppeteer(page)
      .options({
        runOnly: {
          type: 'tag',
          values: ['color-contrast']
        }
      })
      .analyze();

    // 違反を表示
    if (contrastResults.violations.length > 0) {
      console.log('コントラスト比の違反:');
      contrastResults.violations.forEach((violation) => {
        console.log(`\n${violation.help} - ${violation.helpUrl}`);
        console.log('問題のある要素:');
        violation.nodes.forEach((node) => {
          console.log(`  ${node.html}`);
          console.log(`  ${node.failureSummary}`);
        });
      });
    }

    // 検証
    expect(contrastResults.violations.length).toBe(0);
  });

  it('円グラフと折れ線グラフに適切なARIAラベルが設定されている', async () => {
    await page.goto('http://localhost:8000');
    await page.waitForSelector('.chart-container');

    const ariaResults = await new AxePuppeteer(page)
      .options({
        runOnly: {
          type: 'tag',
          values: ['aria', 'label']
        }
      })
      .analyze();

    // 違反を表示
    if (ariaResults.violations.length > 0) {
      console.log('ARIAラベルの違反:');
      ariaResults.violations.forEach((violation) => {
        console.log(`\n${violation.help} - ${violation.helpUrl}`);
        console.log('問題のある要素:');
        violation.nodes.forEach((node) => {
          console.log(`  ${node.html}`);
          console.log(`  ${node.failureSummary}`);
        });
      });
    }

    // 検証
    expect(ariaResults.violations.length).toBe(0);
  });
});