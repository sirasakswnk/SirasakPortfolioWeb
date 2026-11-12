import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
const dir = fileURLToPath(new URL('.', import.meta.url));
const metadata = JSON.parse(readFileSync(join(dir, 'capture-metadata.json'), 'utf8'));
const files = readdirSync(dir).filter(f => f.endsWith('.png')).sort();
if (files.length !== metadata.records.length) throw new Error('PNG count mismatch');
const verified = files.map(file => {
  const bytes = readFileSync(join(dir, file));
  if (bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error(`Invalid PNG: ${file}`);
  const png = [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
  const record = metadata.records.find(r => r.file === file);
  if (!record || png.join('x') !== record.png.join('x') || record.deviceScaleFactor !== 2) throw new Error(`Dimension mismatch: ${file}`);
  return { file, width: png[0], height: png[1], bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') };
});
writeFileSync(join(dir, 'png-verification.json'), JSON.stringify({ sourceCommit: metadata.sourceCommit, verified }, null, 2) + '\n');
console.log(JSON.stringify(verified, null, 2));
