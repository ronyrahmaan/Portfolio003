const { chromium } = require('playwright');

async function testMobileLayout() {
  const browser = await chromium.launch();

  const devices = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone 12', width: 390, height: 844 },
    { name: 'Galaxy S21', width: 360, height: 800 },
    { name: 'iPad Mini', width: 768, height: 1024 }
  ];

  for (const device of devices) {
    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
    });

    const page = await context.newPage();

    try {
      console.log(`\n📱 Testing ${device.name} (${device.width}x${device.height})`);

      await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 10000 });

      // Check for overlapping elements
      const hasOverlap = await page.evaluate(() => {
        const portrait = document.querySelector('img[alt*="Professional Portrait"]');
        const buttons = document.querySelectorAll('.grid button');

        if (!portrait || buttons.length === 0) return false;

        const portraitRect = portrait.getBoundingClientRect();
        for (const button of buttons) {
          const buttonRect = button.getBoundingClientRect();

          // Check if elements overlap
          if (!(portraitRect.bottom < buttonRect.top ||
                portraitRect.top > buttonRect.bottom ||
                portraitRect.right < buttonRect.left ||
                portraitRect.left > buttonRect.right)) {
            return true;
          }
        }
        return false;
      });

      console.log(`   • Content overlap: ${hasOverlap ? '❌ Found' : '✅ None'}`);

      // Check input field accessibility
      const inputInfo = await page.evaluate(() => {
        const input = document.querySelector('input[placeholder*="Ask me"]');
        if (!input) return null;

        const rect = input.getBoundingClientRect();
        return {
          height: rect.height,
          width: rect.width,
          minHeight: rect.height >= 44
        };
      });

      if (inputInfo) {
        console.log(`   • Input field: ${inputInfo.minHeight ? '✅' : '❌'} ${Math.round(inputInfo.height)}px height`);
      }

      // Check button sizes
      const buttonSizes = await page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        const smallButtons = Array.from(buttons).filter(btn => {
          const rect = btn.getBoundingClientRect();
          return rect.width < 44 || rect.height < 44;
        });
        return {
          total: buttons.length,
          small: smallButtons.length
        };
      });

      console.log(`   • Touch targets: ${buttonSizes.small === 0 ? '✅' : '❌'} ${buttonSizes.small}/${buttonSizes.total} too small`);

      // Check spacing
      const spacing = await page.evaluate(() => {
        const portrait = document.querySelector('img[alt*="Professional Portrait"]');
        const buttonContainer = document.querySelector('.grid');

        if (!portrait || !buttonContainer) return null;

        const portraitRect = portrait.getBoundingClientRect();
        const buttonRect = buttonContainer.getBoundingClientRect();

        return {
          gap: buttonRect.top - portraitRect.bottom,
          adequate: (buttonRect.top - portraitRect.bottom) > 20
        };
      });

      if (spacing) {
        console.log(`   • Element spacing: ${spacing.adequate ? '✅' : '❌'} ${Math.round(spacing.gap)}px gap`);
      }

      // Take screenshot
      const filename = `mobile-${device.name.toLowerCase().replace(' ', '-')}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`   • Screenshot: ${filename}`);

    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }

    await context.close();
  }

  await browser.close();
  console.log('\n🎉 Mobile layout testing complete!');
}

testMobileLayout();