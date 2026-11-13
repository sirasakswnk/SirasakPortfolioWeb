const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = __dirname;
const names = fs.readdirSync(root).filter((name) => name.endsWith('.png')).sort();
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
let failed = false;
for (const name of names) {
  const bytes = fs.readFileSync(path.join(root, name));
  if (!bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
    throw new Error(`Not a PNG: ${name}`);
  }
  const actual = {
    width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20),
    sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
  };
  const expected = manifest.images.find((entry) => entry.file === name);
  const pass = expected && actual.width === expected.png.width &&
    actual.height === expected.png.height && actual.sha256 === expected.sha256;
  if (!pass) failed = true;
  console.log(`${pass ? 'PASS' : 'FAIL'} ${name} ${actual.width}x${actual.height} ${actual.sha256}`);
}
if (names.length !== manifest.images.length) failed = true;
console.log(`${names.length} PNG files; manifest ${failed ? 'mismatch' : 'matches'}. Visual review is separate.`);
process.exitCode = failed ? 1 : 0;
