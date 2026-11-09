// Same Vue source, alias, CSS, and UI; leave the Vue DevTools plugin out of the capture server.
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const frontend = path.join(root, 'frontend/MonoShop');
const require = createRequire(path.join(frontend, 'package.json'));
const { createServer } = await import(pathToFileURL(require.resolve('vite')).href);
const { default: vue } = await import(pathToFileURL(require.resolve('@vitejs/plugin-vue')).href);
const server = await createServer({
  root: frontend, configFile: false, envDir: false,
  plugins: [vue()],
  resolve: { alias: { '@': path.join(frontend, 'src') } },
  define: { 'import.meta.env.VITE_API_BASE': JSON.stringify('http://127.0.0.1:3010') },
  server: { host: '127.0.0.1', port: 5173, strictPort: true },
});
await server.listen();
server.printUrls();
