// Create a separate PostgreSQL cluster; only read schema/catalog from the source DB.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const { Client } = require(path.join(root, 'backend/node_modules/pg'));
const bcrypt = require(path.join(root, 'backend/node_modules/bcrypt'));
const dotenv = require(path.join(root, 'backend/node_modules/dotenv'));
const runtime = path.join(root, 'work/portfolio-demo');
const statePath = path.join(runtime, 'runtime.local.json');
const pgBin = process.env.PG_BIN || 'C:/Program Files/PostgreSQL/17/bin';
const tables = ['brands', 'series', 'producttype', 'products', 'members', 'carts', 'cartDtl', 'orders', 'orderDtl'];
const quote = name => '"' + name.replaceAll('"', '""') + '"';
function runPg(name, args, env) {
  try { return execFileSync(path.join(pgBin, name + '.exe'), args, { env: { ...process.env, ...env }, windowsHide: true, encoding: 'utf8' }); }
  catch (error) { throw new Error(`${name} failed; exit ${error.status}. No credentials were printed.`); }
}

(async () => {
  fs.mkdirSync(runtime, { recursive: true });
  let catalog;
  if (process.argv.includes('--from-snapshot')) {
    catalog = JSON.parse(fs.readFileSync(path.join(__dirname, 'catalog.json')));
  } else {
  const { createDatabaseConfig } = await import(require('node:url').pathToFileURL(path.join(root, 'backend/service/databaseConfig.js')).href);
  const originalEnv = dotenv.parse(fs.readFileSync(path.join(root, 'backend/.env')));
  const sourceConfig = createDatabaseConfig(originalEnv);
  const source = new Client(sourceConfig);
  const sourceTarget = sourceConfig.connectionString ? new URL(sourceConfig.connectionString).hostname : sourceConfig.host;
  if (!['localhost', '127.0.0.1', '::1', '[::1]'].includes(sourceTarget)) throw new Error('Source DB must be local');
  const sourcePg = source.connectionParameters;
  const dumpEnv = { PGHOST: sourcePg.host, PGPORT: String(sourcePg.port), PGUSER: sourcePg.user, PGPASSWORD: sourcePg.password || '', PGDATABASE: sourcePg.database, PGSSLMODE: 'disable' };
  const dumpArgs = ['--schema-only', '--no-owner', '--no-privileges', '--no-comments', '--file', path.join(__dirname, 'schema.sql')];
  tables.forEach(table => dumpArgs.push('--table', `public.${quote(table)}`));
  runPg('pg_dump', dumpArgs, dumpEnv);
  catalog = {};
  try {
    await source.connect();
    await source.query('BEGIN READ ONLY');
    for (const table of ['brands', 'series', 'producttype', 'products']) catalog[table] = (await source.query(`SELECT * FROM ${quote(table)}`)).rows;
    await source.query('ROLLBACK');
  } finally { await source.end(); }
  fs.writeFileSync(path.join(__dirname, 'catalog.json'), JSON.stringify(catalog, null, 2));
  }

  let state;
  if (fs.existsSync(statePath)) state = JSON.parse(fs.readFileSync(statePath));
  else {
    state = {
      purpose: 'monoshop-portfolio-isolated-demo-v1',
      pg: { host: '127.0.0.1', port: 55432, user: 'portfolio_owner', password: crypto.randomBytes(24).toString('hex'), database: 'monoshop_portfolio_demo', ssl: false },
      secret: crypto.randomBytes(32).toString('hex'),
      accounts: {
        customer: { email: 'customer.portfolio@example.invalid', name: 'Portfolio Customer', password: crypto.randomBytes(16).toString('hex') },
        admin: { email: 'admin.portfolio@example.invalid', name: 'Portfolio Admin', password: crypto.randomBytes(16).toString('hex') },
      },
    };
    fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
  }
  if (state.purpose !== 'monoshop-portfolio-isolated-demo-v1' || state.pg.port !== 55432 || state.pg.database !== 'monoshop_portfolio_demo') throw new Error('Invalid demo isolation marker');
  const dataDir = path.join(runtime, 'postgres-data');
  if (!fs.existsSync(path.join(dataDir, 'PG_VERSION'))) {
    const pwFile = path.join(runtime, 'init-password.local');
    fs.writeFileSync(pwFile, state.pg.password);
    try { runPg('initdb', ['-D', dataDir, '-U', state.pg.user, '--pwfile', pwFile, '--auth=scram-sha-256', '--encoding=UTF8', '--locale=C'], {}); }
    finally { fs.unlinkSync(pwFile); }
  }
  const demoPg = { PGHOST: state.pg.host, PGPORT: String(state.pg.port), PGUSER: state.pg.user, PGPASSWORD: state.pg.password, PGDATABASE: 'postgres', PGSSLMODE: 'disable' };
  if (process.argv.includes('--initialize-only')) {
    console.log('Isolated PostgreSQL cluster initialized. Start run-demo-postgres.cjs, then rerun setup-demo.cjs.');
    return;
  }
  const status = require('node:child_process').spawnSync(path.join(pgBin, 'pg_ctl.exe'), ['status', '-D', dataDir], { windowsHide: true, encoding: 'utf8' });
  if (status.status !== 0) throw new Error('Start run-demo-postgres.cjs in another terminal, then rerun setup-demo.cjs');
  const admin = new Client({ ...state.pg, database: 'postgres' });
  let fresh = false;
  try {
    await admin.connect();
    if (!(await admin.query('SELECT 1 FROM pg_database WHERE datname=$1', [state.pg.database])).rowCount) {
      await admin.query(`CREATE DATABASE ${quote(state.pg.database)}`);
      fresh = true;
    }
  } finally { await admin.end(); }
  if (fresh) runPg('psql', ['-v', 'ON_ERROR_STOP=1', '-f', path.join(__dirname, 'schema.sql')], { ...demoPg, PGDATABASE: state.pg.database });
  const demo = new Client(state.pg);
  try {
    await demo.connect();
    if (process.argv.includes('--reset-capture')) {
      const actual = await demo.query('SELECT current_database() AS name');
      if (actual.rows[0].name !== 'monoshop_portfolio_demo') throw new Error('Refusing to reset a non-demo database');
      await demo.query('TRUNCATE "cartDtl", carts, "orderDtl", orders');
    }
    for (const table of ['brands', 'series', 'producttype', 'products']) {
      for (const row of catalog[table]) {
        const columns = Object.keys(row);
        await demo.query(`INSERT INTO ${quote(table)} (${columns.map(quote).join(',')}) VALUES (${columns.map((_, i) => '$' + (i + 1)).join(',')}) ON CONFLICT DO NOTHING`, Object.values(row));
      }
    }
    for (const [role, account] of Object.entries(state.accounts)) {
      await demo.query('INSERT INTO members (mem_email,mem_name,mem_password_hash,mem_phonenumber,role) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (mem_email) DO NOTHING', [account.email, account.name, bcrypt.hashSync(account.password, 10), '0000000000', role]);
    }
    // Fictional historical examples, explicitly documented as seeded data.
    for (const order of [
      { id: 'DEMO202611070001', date: '2026-11-07 10:30:00', status: 'confirmed', items: [['002', 1], ['004', 2]] },
      { id: 'DEMO202611050001', date: '2026-11-05 14:15:00', status: 'shipped', items: [['005', 1], ['006', 1]] },
    ]) {
      const totalQty = order.items.reduce((sum, [, qty]) => sum + qty, 0);
      const totalPrice = order.items.reduce((sum, [id, qty]) => sum + Number(catalog.products.find(p => p.product_id === id).price) * qty, 0);
      await demo.query('INSERT INTO orders ("orderId","cusId","orderDate","totalQty","totalPrice","orderStatus") VALUES ($1,$2,$3,$4,$5,$6) ON CONFLICT DO NOTHING', [order.id, state.accounts.customer.email, order.date, totalQty, totalPrice, order.status]);
      for (const [id, qty] of order.items) await demo.query('INSERT INTO "orderDtl" ("orderId","pdId",qty,price) VALUES ($1,$2,$3,$4) ON CONFLICT DO NOTHING', [order.id, id, qty, catalog.products.find(p => p.product_id === id).price]);
    }
  } finally { await demo.end(); }
  fs.mkdirSync(path.join(runtime, 'img_mem'), { recursive: true });
  fs.mkdirSync(path.join(runtime, 'img_pd'), { recursive: true });
  const defaultAvatar = path.join(root, 'backend/img_mem/default.jpg');
  for (const name of ['default.jpg', ...Object.values(state.accounts).map(a => a.email + '.jpg')]) fs.copyFileSync(defaultAvatar, path.join(runtime, 'img_mem', name));
  for (const row of catalog.products) fs.copyFileSync(path.join(root, 'backend/img_pd', row.product_id + '.jpg'), path.join(runtime, 'img_pd', row.product_id + '.jpg'));
  console.log(JSON.stringify({ isolatedDatabaseReady: true, postgresPort: state.pg.port, products: catalog.products.length, demoAccounts: 2, seededHistoricalOrders: 2, copiedPersonalRecords: 0 }));
})().catch(error => { console.error(error.message); process.exitCode = 1; });
