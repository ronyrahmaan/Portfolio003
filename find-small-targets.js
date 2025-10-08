const { chromium } = require('playwright');

async function findSmallTargets() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }
  });
  const page = await context.newPage();

  await page.goto('http://localhost:3000');

  const smallTargets = await page.evaluate(() => {
    const elements = document.querySelectorAll('button, a, input[type="submit"], [role="button"]');
    const small = [];

    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(el);

      if (rect.width < 44 || rect.height < 44) {
        small.push({
          index,
          tag: el.tagName,
          className: el.className,
          id: el.id,
          text: el.textContent?.trim().substring(0, 30),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          selector: el.getAttribute('data-testid') || el.className || el.tagName
        });
      }
    });

    return small;
  });

  console.log('Small touch targets found:');
  smallTargets.forEach(target => {
    console.log(`- ${target.tag}.${target.className}: "${target.text}" (${target.width}x${target.height}px)`);
  });

  await browser.close();
  return smallTargets;
}

findSmallTargets();