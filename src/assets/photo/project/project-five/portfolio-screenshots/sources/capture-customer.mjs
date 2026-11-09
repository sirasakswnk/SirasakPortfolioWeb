export default async (page) => {
  const h = await import('./capture-helpers.mjs');
  const events = h.watch(page);
  const shots = [];
  await page.context().clearCookies();
  await page.setViewportSize({ width: 1920, height: 1536 });
  await page.goto(h.base);
  await page.locator('.product-card').nth(2).waitFor();
  const apiConfig = await (await page.request.get(h.base + 'src/config/api.js')).text();
  if (!apiConfig.includes('http://127.0.0.1:3010')) throw new Error('Frontend must target the isolated demo backend');
  shots.push(await h.shot(page, 'home.png', 1920, 1536, '/', ['.hero-title', '.hero-img', '.products-section .product-card:last-child']));

  await page.getByPlaceholder('ค้นหาสินค้าที่คุณต้องการ...').fill('figure');
  await page.getByPlaceholder('ค้นหาสินค้าที่คุณต้องการ...').press('Enter');
  await page.getByText('ผลการค้นหา:', { exact: false }).waitFor();
  await page.locator('.product-card').nth(2).waitFor();
  shots.push(await h.shot(page, 'product-catalog.png', 1600, 1050, '/product?q=figure', ['.searchbar', '.search-term', '.product-card-wrapper:last-child']));

  await h.login(page, 'customer');
  await h.product(page, '001');
  shots.push(await h.shot(page, 'product-detail.png', 1600, 1120, '/ProductShow/001 (customer)', ['.product-image', '.specifications', '.action-buttons']));
  await page.locator('.qty-selector').getByRole('button', { name: '+', exact: true }).click();
  await h.addCurrentProduct(page);
  await h.product(page, '004');
  await h.addCurrentProduct(page);
  await h.product(page, '006');
  await h.addCurrentProduct(page);
  await page.locator('button[title="ดูตะกร้าสินค้า"]').click();
  await page.locator('.cart-item-row').nth(2).waitFor();
  shots.push(await h.shot(page, 'cart.png', 1600, 1000, '/cartShow/:cart_id (customer)', ['.order-header', '.btn-action', '.cart-item-row:last-child']));

  // Only the isolated demo cart is confirmed. No payment provider or real payment is involved.
  await page.locator('.btn-action').click();
  await page.getByRole('heading', { name: 'รายการคำสั่งซื้อของฉัน', exact: true }).waitFor();
  await page.locator('.order-card').first().locator('.toggle-btn').click();
  await page.locator('.order-details .detail-row').nth(2).waitFor();
  shots.push(await h.shot(page, 'my-orders.png', 1600, 1050, '/orders (customer; newest order expanded)', ['.order-details', '.orders-page .order-card:last-child']));
  await h.saveEvents('customer-capture-checks.json', events);
  return { captured: shots.map(s => ({ file: s.file, width: s.width, height: s.height })), pageErrors: events.pageErrors, consoleErrors: events.consoleErrors, liveDemoOrderCreated: events.api.some(r => r.method === 'POST' && r.path.startsWith('/carts/confirm/') && r.status === 200) };
}
