async (page) => {
  const context = await page.context().browser().newContext({ viewport: { width: 1440, height: 1600 }, deviceScaleFactor: 2 });
  const p = await context.newPage();
  p.setDefaultTimeout(10000);
  const out = 'D:/Vscode/BoardGame/Who Are You Really/gemini/who-are-you-really/portfolio-screenshots/';
  const records = [], errors = [];
  p.on('pageerror', error => errors.push(error.message));
  async function open(query) {
    await p.setViewportSize({ width: 1440, height: 1600 });
    await p.goto(`http://127.0.0.1:3000/preview?${query}`, { timeout: 20000 });
    await p.locator('summary').filter({ hasText: 'UI Preview' }).click();
  }
  async function capture(file, selector = '.game-screen-wrapper') {
    await p.evaluate(() => scrollTo(0, 0));
    await p.evaluate(async () => { await document.fonts.ready; });
    let box = await p.locator(selector).boundingBox();
    await p.setViewportSize({ width: 1440, height: Math.max(1600, Math.ceil(box.y + box.height + 60)) });
    await p.waitForFunction(() => [...document.images].filter(i => i.checkVisibility()).every(i => i.complete && i.naturalWidth > 0), null, { timeout: 10000 });
    await p.evaluate(async () => { await Promise.all([...document.images].filter(i => i.checkVisibility()).map(i => i.decode())); });
    await p.mouse.move(1380, 20);
    box = await p.locator(selector).boundingBox();
    const topMargin = selector === '.wrap' ? 52 : 16;
    const clip = { x: Math.floor(box.x - 32), y: Math.floor(box.y - topMargin), width: Math.ceil(box.width + 64), height: Math.ceil(box.height + topMargin + 24) };
    await p.screenshot({ path: out + file, clip, scale: 'device', animations: 'disabled' });
    records.push({ file, url: p.url(), viewport: p.viewportSize(), deviceScaleFactor: await p.evaluate(() => devicePixelRatio), clip, png: [clip.width * 2, clip.height * 2], fontStatus: await p.evaluate(() => document.fonts.status), text: await p.locator(selector).innerText() });
  }
  await open('phase=DECIDING&clue=2&round=2');
  await p.locator('input[type=radio][value=spy]').check();
  await p.locator('.deciding-evidence-review button[aria-expanded]').click();
  await capture('deciding.png');
  await open('phase=LOBBY');
  await p.locator('.lobby-ready-btn').click();
  if (!(await p.locator('.lobby-start-btn').isEnabled())) throw new Error('Lobby start disabled');
  await capture('lobby.png');
  await open('phase=ROUND_REVEAL&round=2');
  for (const disclosure of await p.locator('.round-reason-disclosure summary').all()) {
    if (await disclosure.isVisible()) await disclosure.click();
  }
  await capture('round-reveal.png');
  await open('phase=MATCH_RESULT');
  await capture('match-result.png');
  await p.locator('.match-round summary').nth(1).click();
  await capture('match-history.png');
  await open('phase=ROLE_INTRO&role=spy');
  await capture('role-intro.png');
  await open('phase=ANSWERING&clue=2');
  await p.getByRole('radio').nth(2).click();
  await capture('answering.png');
  await open('phase=ANSWER_REVEAL&clue=2');
  await capture('answer-reveal.png');
  await open('phase=HOME');
  await capture('home.png', '.wrap');
  return { records, errors };
}
