const { chromium } = require('playwright');

async function testNewMobile() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }, // iPhone SE
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15'
  });

  const page = await context.newPage();

  try {
    console.log('Testing new deployment on mobile...');
    await page.goto('https://portfolio001-a3vu57y0x-md-a-rahmans-projects.vercel.app', {
      waitUntil: 'networkidle',
      timeout: 15000
    });

    const title = await page.title();
    console.log(`Page title: ${title}`);

    if (title.includes('Log in') || title.includes('Vercel')) {
      console.log('❌ Still redirected to login page');
      return;
    }

    // Take mobile screenshot
    await page.screenshot({ path: 'mobile-portfolio.png', fullPage: true });
    console.log('✅ Mobile screenshot saved: mobile-portfolio.png');

    // Check mobile responsiveness issues
    const issues = [];

    // Check viewport width
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    console.log(`Viewport: ${viewportWidth}px, Body width: ${bodyWidth}px`);

    if (bodyWidth > viewportWidth + 10) {
      issues.push('Horizontal scroll detected');
    }

    // Check element spacing on mobile
    const elementChecks = await page.evaluate(() => {
      const results = [];

      // Check if text is readable (not too small)
      const smallText = Array.from(document.querySelectorAll('*')).filter(el => {
        const style = window.getComputedStyle(el);
        const fontSize = parseFloat(style.fontSize);
        return fontSize > 0 && fontSize < 14;
      });

      if (smallText.length > 0) {
        results.push(`${smallText.length} elements with text smaller than 14px`);
      }

      // Check button sizes for touch
      const buttons = Array.from(document.querySelectorAll('button, a'));
      const smallButtons = buttons.filter(btn => {
        const rect = btn.getBoundingClientRect();
        return rect.width < 44 || rect.height < 44;
      });

      if (smallButtons.length > 0) {
        results.push(`${smallButtons.length} touch targets smaller than 44px`);
      }

      return results;
    });

    issues.push(...elementChecks);

    console.log('\nMobile Analysis:');
    if (issues.length === 0) {
      console.log('✅ Portfolio looks good on mobile!');
    } else {
      console.log('⚠️ Mobile issues detected:');
      issues.forEach(issue => console.log(`  - ${issue}`));
    }

  } catch (error) {
    console.error('Error:', error.message);
  }

  await browser.close();
}

testNewMobile();