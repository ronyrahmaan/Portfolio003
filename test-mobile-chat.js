const { chromium } = require('playwright');

async function testMobileChatFunctionality() {
  const browser = await chromium.launch();

  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
  });

  const page = await context.newPage();

  try {
    console.log('📱 Testing mobile chat functionality...');

    // Go to homepage
    await page.goto('https://mdrahman-ai.vercel.app', { waitUntil: 'networkidle', timeout: 15000 });
    console.log('✅ Homepage loaded');

    // Test input field
    const input = await page.$('input[placeholder*="Ask me about"]');
    if (input) {
      await input.fill('Tell me about your AI research');
      console.log('✅ Input field works');
    }

    // Test submit button
    const submitButton = await page.$('button[type="submit"]');
    if (submitButton) {
      await submitButton.click();
      console.log('✅ Submit button clicked');

      // Wait for navigation to chat page
      await page.waitForURL('**/chat**', { timeout: 10000 });
      console.log('✅ Navigated to chat page');

      // Check if chat interface loads
      await page.waitForSelector('.chat-bubble, [class*="chat"]', { timeout: 10000 });
      console.log('✅ Chat interface loaded');
    }

    // Go back to test quick question buttons
    await page.goto('https://mdrahman-ai.vercel.app');

    // Test quick question buttons
    const questionButtons = await page.$$('.grid button');
    if (questionButtons.length > 0) {
      console.log(`✅ Found ${questionButtons.length} question buttons`);

      // Test first button
      await questionButtons[0].click();
      await page.waitForURL('**/chat**', { timeout: 10000 });
      console.log('✅ Quick question button works');
    }

    // Test collaboration modal
    await page.goto('https://mdrahman-ai.vercel.app');
    const collabButton = await page.$('text=Open to Collaborate');
    if (collabButton) {
      await collabButton.click();
      await page.waitForSelector('[role="dialog"], .modal', { timeout: 5000 });
      console.log('✅ Collaboration modal opens');
    }

    // Check touch target sizes
    const smallTargets = await page.evaluate(() => {
      const elements = document.querySelectorAll('button, a, input[type="submit"]');
      return Array.from(elements).filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width < 44 || rect.height < 44;
      }).length;
    });

    console.log(`✅ Touch targets: ${smallTargets === 0 ? 'All good' : `${smallTargets} may be too small`}`);

    // Test scrolling and overflow
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    console.log(`✅ Horizontal overflow: ${hasHorizontalScroll ? '❌ Present' : '✅ None'}`);

    await page.screenshot({ path: 'mobile-chat-test.png' });
    console.log('✅ Screenshot saved: mobile-chat-test.png');

  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }

  await context.close();
  await browser.close();
  console.log('🎉 Mobile chat testing complete!');
}

testMobileChatFunctionality();