export default async (page) => {
  const h = await import('./capture-helpers.mjs');
  const events = h.watch(page);
  const shots = [];
  await page.context().clearCookies();
  await page.goto(h.base);
  await h.login(page, 'admin');
  await page.locator('.plant-account').click();
  await page.getByRole('link', { name: 'Admin Orders', exact: false }).click();
  await page.locator('.order-card-admin').first().locator('.toggle-btn').click();
  await page.locator('.order-details-admin .detail-row-admin').nth(2).waitFor();
  shots.push(await h.shot(page, 'admin-orders.png', 1600, 1280, '/admin/orders (admin; newest order expanded)', ['.order-details-admin', '.orders-page-admin .order-card-admin:last-child', '.admin-actions']));
  await h.product(page, '001');
  await page.locator('.btn-edit').click();
  await page.getByRole('heading', { name: 'แก้ไขข้อมูลสินค้า', exact: false }).waitFor();
  shots.push(await h.shot(page, 'product-edit.png', 1600, 1240, '/ProductShow/001 (admin; edit form open, unsaved)', ['.edit-form', '.form-actions', '.image-container']));
  await h.saveEvents('admin-capture-checks.json', events);
  return { captured: shots.map(s => ({ file: s.file, width: s.width, height: s.height })), pageErrors: events.pageErrors, consoleErrors: events.consoleErrors, productWrites: events.api.filter(r => ['PUT', 'DELETE'].includes(r.method)), adminOrderWrites: events.api.filter(r => ['PUT', 'DELETE'].includes(r.method) && r.path.startsWith('/orders/')) };
}
