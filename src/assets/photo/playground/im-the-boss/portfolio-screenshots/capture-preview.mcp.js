async (page) => {
  // Load this file with Playwright MCP browser_run_code_unsafe.filename.
  // Only existing Preview controls are used; app state, DOM and CSS are not patched.
  const baseURL = 'http://127.0.0.1:5180';
  const output = 'D:/Vscode/BoardGame/Im the boss/portfolio-screenshots';
  const context = await page.context().browser().newContext({
    viewport: { width: 1440, height: 1100 },
    deviceScaleFactor: 2,
  });
  const preview = await context.newPage();
  const captured = [];

  async function ready() {
    await preview.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((image) => image.decode().catch(() => {})));
      window.scrollTo(0, 0);
    });
    await preview.mouse.move(4, 4);
    await preview.waitForTimeout(800);
  }

  async function screenshot(name, options) {
    await preview.screenshot({ path: `${output}/${name}`, scale: 'device', ...options });
    captured.push({ name, viewport: preview.viewportSize(), url: preview.url(), ...options });
  }

  async function modal(name, testId) {
    await ready();
    const box = await preview.getByTestId(testId).boundingBox();
    if (!box) throw new Error(`Missing modal: ${testId}`);
    await screenshot(name, {
      clip: {
        x: Math.floor(box.x - 24), y: Math.floor(box.y - 24),
        width: Math.ceil(box.width + 48), height: Math.ceil(box.height + 48),
      },
    });
  }

  await preview.goto(`${baseURL}/preview/game`);
  await preview.getByTestId('preview-state-dealConflict').click();
  await preview.getByTestId('offer-review-open').click();
  await modal('boss-offers.png', 'offer-review-modal');
  await preview.keyboard.press('Escape');

  await preview.getByTestId('preview-state-gameOverFifteen').click();
  await preview.getByTestId('gameover-overlay').waitFor();
  const reveal = preview.getByTestId('gameover-reveal-all');
  if (await reveal.isVisible()) await reveal.click();
  await preview.getByTestId('final-score-p4').getByText('12 ล้าน', { exact: true }).waitFor();
  await modal('final-score.png', 'gameover-overlay');

  await preview.goto(`${baseURL}/preview/cards`);
  await preview.getByTestId('cards-gallery').waitFor();
  await ready();
  await screenshot('cards-gallery.png', { fullPage: true });
  await screenshot('cards-family.png', { clip: { x: 8, y: 173, width: 1424, height: 269 } });
  // A taller viewport keeps the last two action cards inside the capture area.
  await preview.setViewportSize({ width: 1440, height: 1400 });
  await ready();
  await screenshot('cards-action.png', { clip: { x: 8, y: 453, width: 1424, height: 831 } });

  await preview.setViewportSize({ width: 1440, height: 1100 });
  await preview.goto(`${baseURL}/preview/home`);
  await preview.getByTestId('preview-home').waitFor();
  await ready();
  await screenshot('home.png', { fullPage: true });
  return { captured, provenance: 'Design Preview with sample data; no Firebase gameplay' };
}
