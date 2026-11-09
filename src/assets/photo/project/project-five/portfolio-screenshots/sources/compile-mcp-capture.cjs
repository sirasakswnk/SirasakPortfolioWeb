// Credentials are loaded locally into ignored temporary files, never printed.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const runtime = path.join(root, 'work/portfolio-demo');
const state = JSON.parse(fs.readFileSync(path.join(runtime, 'runtime.local.json')));
if (state.purpose !== 'monoshop-portfolio-isolated-demo-v1') throw new Error('Not the isolated demo');
const out = path.join(root, 'portfolio-screenshots').replaceAll('\\', '/');
const helpers = `
const results = { screenshots: [], checks: {} };
const base = 'http://127.0.0.1:5173/';
const state = ${JSON.stringify({ accounts: state.accounts })};
const h = {
  base,
  watch(page) {
    for (const event of ['pageerror','console','response','dialog']) page.removeAllListeners(event);
    const events = { pageErrors:[], consoleErrors:[], api:[], dialogs:[] };
    page.on('pageerror', error => events.pageErrors.push(error.message));
    page.on('console', message => { if(message.type()==='error') events.consoleErrors.push(message.text()); });
    page.on('response', response => { if(response.url().startsWith('http://127.0.0.1:3010/')) events.api.push({ method:response.request().method(), path:response.url().replace('http://127.0.0.1:3010','').split('?')[0], status:response.status() }); });
    page.on('dialog', async dialog => { events.dialogs.push(dialog.message()); await dialog.accept(); });
    return events;
  },
  async settle(page) {
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => Array.from(document.images).every(i => i.complete && i.naturalWidth > 0));
    await page.waitForFunction(() => !Array.from(document.querySelectorAll('.spinner-border')).some(el => el.getBoundingClientRect().width > 0));
    await page.mouse.move(1,1);
  },
  async shot(page, file, width, height, logicalPage, mustSee=[]) {
    await page.setViewportSize({width,height});
    await page.evaluate(() => window.scrollTo(0,0));
    await h.settle(page);
    for(const selector of mustSee) {
      const box=await page.locator(selector).first().boundingBox();
      if(!box || box.y<0 || box.y+box.height>height || box.x<0 || box.x+box.width>width) throw new Error('Clipped required UI: '+file+' '+selector);
    }
    const quality=await page.evaluate(()=>({ horizontalOverflow:document.documentElement.scrollWidth>innerWidth, fontStatus:document.fonts.status, fonts:Array.from(document.fonts).filter(f=>f.status==='loaded').map(f=>f.family), brokenImages:Array.from(document.images).filter(i=>!i.complete||!i.naturalWidth).length }));
    if(quality.horizontalOverflow||quality.brokenImages)throw new Error('Invalid layout/images: '+file);
    await page.screenshot({path:${JSON.stringify(out)}+'/'+file,fullPage:false,scale:'css',animations:'disabled'});
    const row={file,width,height,logicalPage,actualUrl:page.url(),dataSource:'Real UI + real Express API + isolated PostgreSQL demo; no mock API',capturedAt:new Date().toISOString(),...quality};
    results.screenshots.push(row);
    return row;
  },
  async login(page,role) {
    await page.getByRole('link',{name:/Login/}).click();
    await page.locator('#loginName').fill(state.accounts[role].email);
    await page.locator('#password').fill(state.accounts[role].password);
    await page.getByRole('button',{name:/ตกลง/}).click();
    await page.getByRole('heading',{name:'Member Profile',exact:true}).waitFor();
    await page.locator('.plant-account').getByText(state.accounts[role].name,{exact:true}).waitFor();
  },
  async product(page,id) {
    await page.getByRole('link',{name:'Products',exact:true}).click();
    await page.locator('a[href="/ProductShow/'+id+'"]').first().click();
    await page.locator('.view-mode .product-name').waitFor();
    await h.settle(page);
  },
  async addCurrentProduct(page) {
    await page.locator('.btn-add-cart').click();
    await page.waitForFunction(()=>{const b=document.querySelector('.btn-add-cart');return b&&!b.disabled});
  },
  async saveEvents(file,events) { results.checks[file]=events; }
};`;
for (const role of ['customer', 'admin']) {
  let source = fs.readFileSync(path.join(__dirname, `capture-${role}.mjs`), 'utf8');
  source = source.replace('export default ', '').replace("  const h = await import('./capture-helpers.mjs');", '');
  const code = `async (page) => {\n${helpers}\nconst summary = await (${source})(page);\nreturn {...results, summary};\n}`;
  fs.writeFileSync(path.join(runtime, `capture-${role}.local.js`), code);
}
console.log('Compiled private MCP scripts. Do not print raw Playwright code or share work/portfolio-demo/.');
