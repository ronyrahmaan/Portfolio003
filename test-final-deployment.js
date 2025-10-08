const { chromium } = require('playwright');

async function testFinalDeployment() {
  const browser = await chromium.launch();

  // Test both desktop and mobile
  const devices = [
    { name: 'Desktop', width: 1920, height: 1080 },
    { name: 'Mobile', width: 375, height: 667 }
  ];

  const urls = [
    'https://mdrahman-ai.vercel.app',
    'https://md-rahman-portfolio-ky8zfle3f-md-a-rahmans-projects.vercel.app'
  ];

  for (const url of urls) {
    console.log(`\n🔗 Testing: ${url}`);

    for (const device of devices) {
      const context = await browser.newContext({
        viewport: { width: device.width, height: device.height }
      });

      const page = await context.newPage();

      try {
        console.log(`📱 ${device.name} (${device.width}x${device.height})`);

        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });

        const title = await page.title();

        if (title.includes('Log in') || title.includes('Vercel')) {
          console.log('❌ Redirected to login page');
          continue;
        }

        console.log(`✅ Page loaded: ${title}`);

        // Check if main elements are present
        const hasHeading = await page.$('h1');
        const hasOpenToCollaborate = await page.$('text=Open to Collaborate');
        const hasQuestionButtons = await page.$$('button[data-testid*="question"], .grid button');

        console.log(`   • Main heading: ${hasHeading ? '✅' : '❌'}`);
        console.log(`   • Collaborate button: ${hasOpenToCollaborate ? '✅' : '❌'}`);
        console.log(`   • Question buttons: ${hasQuestionButtons.length > 0 ? `✅ (${hasQuestionButtons.length})` : '❌'}`);

        // Mobile-specific checks
        if (device.name === 'Mobile') {
          const smallTargets = await page.evaluate(() => {
            const elements = document.querySelectorAll('button, a');
            return Array.from(elements).filter(el => {
              const rect = el.getBoundingClientRect();
              return rect.width < 44 || rect.height < 44;
            }).length;
          });
          console.log(`   • Touch targets: ${smallTargets === 0 ? '✅ All good' : `❌ ${smallTargets} too small`}`);
        }

        // Take screenshot
        const filename = `final-${url.split('//')[1].replace(/[^a-zA-Z0-9]/g, '-')}-${device.name.toLowerCase()}.png`;
        await page.screenshot({ path: filename });
        console.log(`   • Screenshot: ${filename}`);

      } catch (error) {
        console.log(`❌ Failed: ${error.message}`);
      }

      await context.close();
    }
  }

  await browser.close();
  console.log('\n🎉 Deployment testing complete!');
}

testFinalDeployment();