// Execute with Playwright MCP browser_run_code_unsafe, filename below.
// Start Firebase Emulators + dev:emulator, and run verify-emulators.mjs first.
async (page) => {
  const context = await page.context().browser().newContext({
    viewport: { width: 430, height: 932 }, deviceScaleFactor: 2,
    colorScheme: 'light', reducedMotion: 'no-preference',
  });
  const p = await context.newPage();
  const origin = 'http://localhost:3000';
  const shots = [];
  const diagnostics = [];
  const network = [];
  p.on('console', m => {
    if (['error', 'warning'].includes(m.type())) diagnostics.push({
      screen: new URL(p.url()).searchParams.get('screen') ?? 'home',
      level: m.type(), message: m.text(),
    });
  });
  p.on('pageerror', e => diagnostics.push({ level: 'pageerror', message: e.message }));
  p.on('response', r => {
    const u = new URL(r.url());
    if (u.port === '9099' || u.port === '9000' || u.pathname === '/api/profile')
      network.push({ host: u.host, path: u.pathname, status: r.status() });
  });
  p.on('websocket', ws => {
    const u = new URL(ws.url());
    network.push({ protocol: u.protocol, host: u.host, path: u.pathname });
  });
  const ready = async () => {
    await p.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
    });
    await p.waitForTimeout(700); // finite entry/card animations; ambient artwork remains native
  };
  const open = async (screen, height) => {
    await p.setViewportSize({ width: 430, height });
    await p.goto(`${origin}${screen === 'home' ? '/' : `/dev/preview?screen=${screen}`}`);
    await ready();
  };
  const shot = async (filename, notes) => {
    await ready();
    await p.evaluate(() => scrollTo(0, 0));
    await p.mouse.move(429, p.viewportSize().height - 1);
    const state = await p.evaluate(() => ({
      viewport: { width: innerWidth, height: innerHeight },
      deviceScaleFactor: devicePixelRatio, zoom: visualViewport.scale,
      fontStatus: document.fonts.status,
      fontFamily: getComputedStyle(document.body).fontFamily,
      notoSansThaiLoaded: [...document.fonts].filter(f => f.family.includes('Noto Sans Thai') && f.status === 'loaded').length,
      brokenImages: [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src')),
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      bodyText: document.body.innerText,
    }));
    if (state.brokenImages.length || state.scrollWidth > 430 || state.scrollHeight > state.viewport.height) throw Error(`Image/overflow check failed: ${filename}`);
    if (await p.locator('nextjs-portal').getByRole('dialog').count()) throw Error(`Dev overlay: ${filename}`);
    const png = await p.screenshot({ path: `portfolio-screenshots/${filename}`, scale: 'device', type: 'png' });
    shots.push({ filename, url: p.url(), capturedAt: new Date().toISOString(),
      png: { width: png.readUInt32BE(16), height: png.readUInt32BE(20) }, ...state, notes });
  };
  const place = async (labels) => {
    for (const [i, label] of labels.entries()) {
      await p.getByRole('button', { name: `ไพ่ “${label}” ในมือ`, exact: true }).click();
      await p.getByRole('button', { name: `อันดับ ${i + 1}: ว่าง`, exact: true }).click();
    }
  };
  await open('guess', 844);
  // Use the development tool's own session preference; no CSS or source modification.
  if (await p.getByRole('button', { name: 'Open Next.js Dev Tools', exact: true }).count()) {
    await p.getByRole('button', { name: 'Open Next.js Dev Tools', exact: true }).click();
    await p.getByRole('menuitem', { name: 'Preferences', exact: true }).click();
    await p.getByRole('button', { name: 'Hide', exact: true }).click();
  }
  await place(['เมืองใหญ่', 'ภูเขา', 'ทะเล', 'สวนสนุก', 'เมืองเก่า']);
  if (!await p.getByRole('button', { name: 'ล็อกคำทาย', exact: true }).isEnabled()) throw Error('Guess incomplete');
  await shot('guess-ranking.png', 'Design Preview; ต้นกล้า guesses มะปราง; 5/5 placed through UI; not submitted.');
  await open('lobby', 1180);
  await shot('lobby.png', 'Design Preview; host มะปราง ready, ต้นกล้า not ready; start disabled by existing fixture.');
  await open('reveal', 1260);
  await p.getByText('เปิดครบแล้ว · ไหนขอดูหน่อยสิ๊', { exact: true }).waitFor();
  await shot('round-reveal.png', 'Design Preview; มะปราง setter; all five naturally revealed; 8/10.');
  await open('results', 1260);
  await shot('game-results.png', 'Design Preview; มะปราง 16/30, ต้นกล้า 22/30; exact hits 7 each.');
  await open('self', 932);
  await place(['เมืองใหญ่', 'ภูเขา', 'สวนสนุก']);
  await shot('self-ranking.png', 'Design Preview; มะปราง setter; 3 placed, 2 in hand; confirm disabled; no selection obscuring instruction.');
  await open('watch', 932);
  await shot('watch-guess.png', 'Design Preview; มะปราง setter watches simulated ต้นกล้า 3/5 layout; own answers visible; no real realtime session.');
  const profileResponse = p.waitForResponse(r => r.url() === `${origin}/api/profile` && r.request().method() === 'GET');
  await open('home', 1260);
  const profile = await profileResponse;
  if (profile.status() !== 200) throw Error('Emulator profile failed');
  await p.getByRole('textbox', { name: 'ชื่อเล่นของคุณ', exact: true }).fill('มะปราง');
  await p.locator('label').filter({ has: p.locator('input[type="radio"][value="bunny"]') }).click();
  await p.getByRole('heading', { name: 'เตรียมตัวเข้าโต๊ะ', exact: true }).click();
  await shot('home.png', 'Firebase Emulators; anonymous Auth; demo name/avatar entered in form, not saved or used to create/join a room.');
  return { shots, diagnostics, network, browserVersion: context.browser().version() };
}
