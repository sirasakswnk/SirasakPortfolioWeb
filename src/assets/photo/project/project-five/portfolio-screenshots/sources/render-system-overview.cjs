const path = require('node:path');
const { pathToFileURL } = require('node:url');
const root = path.resolve(__dirname, '../..');
const { chromium } = require(path.join(root, 'work/verification/monocraft/node_modules/playwright'));
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.EDGE_EXE || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1280 }, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(path.join(root, 'portfolio-screenshots/system-overview.svg')).href);
    await page.screenshot({ path: path.join(root, 'portfolio-screenshots/system-overview.png'), scale: 'css' });
    console.log('Rendered system-overview.png: 1920 x 1280');
  } finally { await browser.close(); }
})().catch(error => { console.error(error.message); process.exitCode = 1; });
