const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const runtime = path.join(root, 'work/portfolio-demo');
const state = JSON.parse(fs.readFileSync(path.join(runtime, 'runtime.local.json')));
if (state.purpose !== 'monoshop-portfolio-isolated-demo-v1' || state.pg.port !== 55432) throw new Error('Isolation check failed');
const dbUrl = new URL('postgresql://127.0.0.1:55432/' + state.pg.database);
dbUrl.username = state.pg.user;
dbUrl.password = state.pg.password;
const child = spawn(process.execPath, [path.join(root, 'backend/index.js')], {
  cwd: runtime, windowsHide: true, stdio: 'inherit',
  env: { ...process.env, PORT: '3010', DATABASE_URL: dbUrl.href, DB_SSL: 'false', SECRET_KEY: state.secret, NODE_ENV: 'development' },
});
process.on('SIGINT', () => child.kill('SIGINT'));
child.on('exit', code => { process.exitCode = code || 0; });
