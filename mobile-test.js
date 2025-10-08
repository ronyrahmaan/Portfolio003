const { chromium } = require('playwright');

async function testMobile() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }, // iPhone SE size
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15'
  });

  const page = await context.newPage();

  try {
    console.log('Loading portfolio on mobile...');
    await page.goto('https://mdrahman-ai.vercel.app', { waitUntil: 'networkidle' });

    // Take a screenshot
    await page.screenshot({ path: 'mobile-screenshot.png', fullPage: true });
    console.log('Mobile screenshot saved as mobile-screenshot.png');

    // Check for common mobile issues
    const issues = [];

    // Check viewport meta tag
    const viewportMeta = await page.$('meta[name="viewport"]');
    if (!viewportMeta) {
      issues.push('Missing viewport meta tag');
    }

    // Check if content overflows
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    if (bodyWidth > viewportWidth) {
      issues.push(`Content overflow detected: ${bodyWidth}px > ${viewportWidth}px`);
    }

    // Check button sizes (should be at least 44px for touch)
    const smallButtons = await page.$$eval('button', buttons =>
      buttons.filter(btn => {
        const rect = btn.getBoundingClientRect();
        return rect.width < 44 || rect.height < 44;
      }).length
    );

    if (smallButtons > 0) {
      issues.push(`${smallButtons} buttons are too small for touch`);
    }

    console.log('Mobile Analysis Results:');
    if (issues.length === 0) {
      console.log('✅ No mobile issues detected');
    } else {
      console.log('❌ Issues found:');
      issues.forEach(issue => console.log(`  - ${issue}`));
    }

  } catch (error) {
    console.error('Error testing mobile:', error.message);
  }

  await browser.close();
}

testMobile();