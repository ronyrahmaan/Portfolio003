const { chromium } = require('playwright');

async function testMobileDirect() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }, // iPhone SE size
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15'
  });

  const page = await context.newPage();

  const urls = [
    'https://portfolio001-6ppwz4xek-md-a-rahmans-projects.vercel.app',
    'https://mdrahman-ai.vercel.app',
    'https://md-rahman-portfolio.vercel.app'
  ];

  for (const url of urls) {
    try {
      console.log(`\nTesting: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });

      const title = await page.title();
      console.log(`Page title: ${title}`);

      if (title.includes('Log in') || title.includes('Vercel')) {
        console.log('❌ Redirected to login page');
        continue;
      }

      // Take a screenshot
      const filename = `mobile-${url.split('//')[1].replace(/[^a-zA-Z0-9]/g, '-')}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`✅ Screenshot saved: ${filename}`);

      // Check mobile responsiveness
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);
      console.log(`Viewport: ${viewportWidth}px, Body: ${bodyWidth}px`);

      if (bodyWidth > viewportWidth + 10) {
        console.log('⚠️ Horizontal scroll detected');
      } else {
        console.log('✅ No horizontal scroll');
      }

      break; // Exit on first successful load

    } catch (error) {
      console.log(`❌ Failed to load: ${error.message}`);
    }
  }

  await browser.close();
}

testMobileDirect();