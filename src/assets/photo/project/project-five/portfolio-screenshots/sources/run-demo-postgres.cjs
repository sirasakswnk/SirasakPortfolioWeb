const path = require('node:path');
const { spawn } = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const pgBin = process.env.PG_BIN || 'C:/Program Files/PostgreSQL/17/bin';
const child = spawn(path.join(pgBin, 'postgres.exe'), ['-D', path.join(root, 'work/portfolio-demo/postgres-data'), '-h', '127.0.0.1', '-p', '55432'], { windowsHide: true, stdio: 'inherit' });
process.on('SIGINT', () => child.kill('SIGINT'));
child.on('exit', code => { process.exitCode = code || 0; });
