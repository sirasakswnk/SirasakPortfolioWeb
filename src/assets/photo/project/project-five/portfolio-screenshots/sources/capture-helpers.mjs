import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const base = 'http://127.0.0.1:5173/';
export const output = path.join(root, 'portfolio-screenshots');
export const state = JSON.parse(await fs.readFile(path.join(root, 'work/portfolio-demo/runtime.local.json'), 'utf8'));
if (state.purpose !== 'monoshop-portfolio-isolated-demo-v1' || state.pg.port !== 55432) throw new Error('Demo isolation check failed');

export function watch(page) {
  for (const event of ['pageerror', 'console', 'response', 'dialog']) page.removeAllListeners(event);
  const events = { pageErrors: [], consoleErrors: [], api: [], dialogs: [] };
  page.on('pageerror', error => events.pageErrors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') events.consoleErrors.push(message.text()); });
  page.on('response', response => {
    const url = new URL(response.url());
    if (url.hostname === '127.0.0.1' && url.port === '3010') events.api.push({ method: response.request().method(), path: url.pathname, status: response.status() });
  });
  page.on('dialog', async dialog => {
    events.dialogs.push(dialog.message());
    await dialog.accept(); // Only run this script against the isolated local demo.
  });
  return events;
}

export async function settle(page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => Array.from(document.images).every(image => image.complete && image.naturalWidth > 0));
  await page.waitForFunction(() => !Array.from(document.querySelectorAll('.spinner-border')).some(el => el.getBoundingClientRect().width > 0));
  await page.mouse.move(1, 1);
}

export async function shot(page, filename, width, height, logicalPage, mustSee = []) {
  await page.setViewportSize({ width, height });
  await page.evaluate(() => window.scrollTo(0, 0));
  await settle(page);
  for (const selector of mustSee) {
    const box = await page.locator(selector).first().boundingBox();
    if (!box || box.y < 0 || box.y + box.height > height || box.x < 0 || box.x + box.width > width) throw new Error(`Required UI is clipped in ${filename}: ${selector}`);
  }
  const layout = await page.evaluate(() => ({ horizontalOverflow: document.documentElement.scrollWidth > innerWidth, fontStatus: document.fonts.status }));
  if (layout.horizontalOverflow) throw new Error(`Horizontal overflow in ${filename}`);
  await page.screenshot({ path: path.join(output, filename), fullPage: false, scale: 'css', animations: 'disabled' });
  let manifest = [];
  try { manifest = JSON.parse(await fs.readFile(path.join(output, 'capture-manifest.json'), 'utf8')); } catch {}
  const row = { file: filename, width, height, logicalPage, actualUrl: page.url(), dataSource: 'Isolated real Express API + PostgreSQL demo database; no mocked API', fontStatus: layout.fontStatus, capturedAt: new Date().toISOString() };
  manifest = manifest.filter(item => item.file !== filename);
  manifest.push(row);
  await fs.writeFile(path.join(output, 'capture-manifest.json'), JSON.stringify(manifest, null, 2));
  return row;
}

export async function login(page, role) {
  await page.getByRole('link', { name: /Login/ }).click();
  await page.locator('#loginName').fill(state.accounts[role].email);
  await page.locator('#password').fill(state.accounts[role].password);
  await page.getByRole('button', { name: /ตกลง/ }).click();
  await page.getByRole('heading', { name: 'Member Profile', exact: true }).waitFor();
  await page.locator('.plant-account').getByText(state.accounts[role].name, { exact: true }).waitFor();
}

export async function product(page, id) {
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.locator(`a[href="/ProductShow/${id}"]`).first().click();
  await page.locator('.view-mode .product-name').waitFor();
  await settle(page);
}

export async function addCurrentProduct(page) {
  await page.locator('.btn-add-cart').click();
  await page.waitForFunction(() => {
    const button = document.querySelector('.btn-add-cart');
    return button && !button.disabled;
  });
}

export async function saveEvents(filename, events) {
  await fs.writeFile(path.join(output, filename), JSON.stringify(events, null, 2));
}
