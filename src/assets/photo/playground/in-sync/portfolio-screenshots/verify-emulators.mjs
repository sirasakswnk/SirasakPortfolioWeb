// Read-only preflight: run before opening Firebase-connected UI.
const origin = 'http://localhost:3000';
const hub = await fetch('http://127.0.0.1:4400/emulators').then(r => r.json());
console.log('Emulator endpoints:', JSON.stringify(hub));
if (hub.auth?.host !== '127.0.0.1' || hub.auth?.port !== 9099 || hub.database?.host !== '127.0.0.1' || hub.database?.port !== 9000) throw Error('Unexpected emulator endpoints');
console.log('Health:', await fetch(`${origin}/api/health`).then(r => r.text()));
const html = await fetch(`${origin}/dev/preview?screen=guess`).then(r => r.text());
const paths = [...html.matchAll(/<script[^>]+src="([^"]+)/g)].map(m => m[1].replaceAll('&amp;', '&'));
let checked = false;
for (const path of paths) {
  const source = await fetch(origin + path).then(r => r.text());
  const start = source.indexOf('const config = {');
  if (start < 0 || !source.includes('function clientAuth()')) continue;
  const config = source.slice(start, start + 1400);
  const auth = source.slice(source.indexOf('function clientAuth()'), source.indexOf('let pendingUser', source.indexOf('function clientAuth()')));
  console.log('Compiled public Firebase config and emulator flag:', config);
  console.log('Compiled emulator connections:', auth);
  if (!config.includes('demo-heart-sync') || !config.includes('127.0.0.1') || !auth.includes('9099') || !auth.includes('9000')) throw Error('Compiled client endpoint verification failed');
  checked = true;
}
if (!checked) throw Error('Compiled Firebase client not located');
