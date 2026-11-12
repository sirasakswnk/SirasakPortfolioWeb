async (page) => {
  const context = await page.context().browser().newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const p = await context.newPage();
  p.setDefaultTimeout(10000);
  const errors = [], records = [];
  p.on('pageerror', error => errors.push(error.message));
  await p.goto('http://127.0.0.1:3000/preview?phase=DECIDING&clue=2&round=2');
  await p.locator('summary').filter({ hasText: 'UI Preview' }).click();
  await p.locator('input[type=radio][value=spy]').check();
  await p.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].filter(i => i.checkVisibility()).map(i => i.decode())); });
  // Hide the development badge through its own UI; no DOM/CSS alteration.
  await p.getByRole('button', { name: 'Open Next.js Dev Tools' }).click();
  await p.getByRole('menuitem', { name: 'Preferences' }).click();
  await p.getByRole('button', { name: 'Hide', exact: true }).click();
  for (const [file, y] of [['mobile-gameplay.png', 210], ['mobile-gameplay-02.png', 650]]) {
    await p.evaluate(y => scrollTo(0, y), y);
    await p.screenshot({ path: 'D:/Vscode/BoardGame/Who Are You Really/gemini/who-are-you-really/portfolio-screenshots/' + file, scale: 'device', animations: 'disabled' });
    records.push({ file, url: p.url(), viewport: p.viewportSize(), deviceScaleFactor: await p.evaluate(() => devicePixelRatio), png: [780, 1688], fontStatus: await p.evaluate(() => document.fonts.status), scrollY: await p.evaluate(() => scrollY), footer: await p.locator('.deciding-footer').boundingBox(), evidence: await p.locator('.deciding-evidence-review').boundingBox(), cards: await p.locator('.suspect-card').evaluateAll(cs => cs.map(c => c.getBoundingClientRect().toJSON())), documentWidth: await p.evaluate(() => document.documentElement.scrollWidth) });
  }
  // Verify the final card can be completely scrolled above the fixed footer.
  await p.locator('.suspect-card').last().scrollIntoViewIfNeeded();
  const lastCard = await p.locator('.suspect-card').last().boundingBox();
  const footer = await p.locator('.deciding-footer').boundingBox();
  return { records, errors, lastCardReachable: lastCard.y + lastCard.height <= footer.y, lastCard, footer };
}
