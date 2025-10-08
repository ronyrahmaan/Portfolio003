const { chromium } = require('playwright');

async function testLocalMobile() {
  const browser = await chromium.launch();

  // Test multiple device sizes
  const devices = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone 12', width: 390, height: 844 },
    { name: 'Galaxy S21', width: 360, height: 800 }
  ];

  for (const device of devices) {
    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15'
    });

    const page = await context.newPage();

    try {
      console.log(`\n=== Testing ${device.name} (${device.width}x${device.height}) ===`);

      await page.goto('http://localhost:3000', {
        waitUntil: 'networkidle',
        timeout: 10000
      });

      const title = await page.title();
      console.log(`✅ Page loaded: ${title}`);

      // Take screenshot
      const filename = `mobile-${device.name.toLowerCase().replace(/\s+/g, '-')}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`📱 Screenshot saved: ${filename}`);

      // Comprehensive mobile checks
      const mobileIssues = await page.evaluate((deviceWidth) => {
        const issues = [];

        // Check horizontal scroll
        const bodyWidth = document.body.scrollWidth;
        const viewportWidth = window.innerWidth;
        if (bodyWidth > viewportWidth + 5) {
          issues.push(`Horizontal scroll: body ${bodyWidth}px > viewport ${viewportWidth}px`);
        }

        // Check touch target sizes
        const interactiveElements = document.querySelectorAll('button, a, input[type="submit"]');
        let smallTouchTargets = 0;
        interactiveElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.width < 44 || rect.height < 44) {
            smallTouchTargets++;
          }
        });
        if (smallTouchTargets > 0) {
          issues.push(`${smallTouchTargets} touch targets smaller than 44px`);
        }

        // Check text readability
        const allElements = document.querySelectorAll('*');
        let smallText = 0;
        allElements.forEach(el => {
          const style = window.getComputedStyle(el);
          const fontSize = parseFloat(style.fontSize);
          if (fontSize > 0 && fontSize < 14) {
            smallText++;
          }
        });
        if (smallText > 0) {
          issues.push(`${smallText} elements with text smaller than 14px`);
        }

        // Check if content fits in viewport
        const main = document.querySelector('main') || document.body;
        const mainRect = main.getBoundingClientRect();
        if (mainRect.width > deviceWidth + 10) {
          issues.push(`Main content overflows: ${mainRect.width}px > ${deviceWidth}px`);
        }

        // Check spacing between interactive elements
        const buttons = Array.from(document.querySelectorAll('button'));
        let closeButtons = 0;
        for (let i = 0; i < buttons.length - 1; i++) {
          const rect1 = buttons[i].getBoundingClientRect();
          const rect2 = buttons[i + 1].getBoundingClientRect();
          const distance = Math.abs(rect1.bottom - rect2.top);
          if (distance < 8) {
            closeButtons++;
          }
        }
        if (closeButtons > 0) {
          issues.push(`${closeButtons} button pairs with insufficient spacing`);
        }

        return {
          issues,
          bodyWidth,
          viewportWidth,
          mainWidth: mainRect.width
        };
      }, device.width);

      console.log(`Viewport: ${mobileIssues.viewportWidth}px, Body: ${mobileIssues.bodyWidth}px, Main: ${mobileIssues.mainWidth}px`);

      if (mobileIssues.issues.length === 0) {
        console.log('✅ No mobile issues detected!');
      } else {
        console.log('⚠️ Issues found:');
        mobileIssues.issues.forEach(issue => console.log(`  - ${issue}`));
      }

    } catch (error) {
      console.error(`❌ Error testing ${device.name}:`, error.message);
    }

    await context.close();
  }

  await browser.close();
}

testLocalMobile();