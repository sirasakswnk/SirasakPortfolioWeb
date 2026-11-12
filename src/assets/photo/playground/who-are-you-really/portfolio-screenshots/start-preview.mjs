// Launch from the repository root. This config uses only a fictional demo project.
import { spawn } from 'node:child_process';
const project = 'demo-wayr-portfolio';
const databaseURL = `http://127.0.0.1:19000/?ns=${project}-default-rtdb`;
const env = { ...process.env,
  NEXT_PUBLIC_FIREBASE_API_KEY: 'emulator-only',
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: project,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: `${project}.firebaseapp.com`,
  NEXT_PUBLIC_FIREBASE_DATABASE_URL: databaseURL,
  NEXT_PUBLIC_FIREBASE_APP_ID: '1:123456789:web:abcdef',
  NEXT_PUBLIC_USE_FIREBASE_EMULATOR: 'true',
  NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST: 'http://127.0.0.1:19099',
  NEXT_PUBLIC_FIREBASE_DATABASE_EMULATOR_HOST: '127.0.0.1',
  NEXT_PUBLIC_FIREBASE_DATABASE_EMULATOR_PORT: '19000',
  FIREBASE_PROJECT_ID: project, FIREBASE_DATABASE_URL: databaseURL,
  FIREBASE_AUTH_EMULATOR_HOST: '127.0.0.1:19099', FIREBASE_DATABASE_EMULATOR_HOST: '127.0.0.1:19000',
  FIREBASE_CLIENT_EMAIL: '', FIREBASE_PRIVATE_KEY: '', GOOGLE_APPLICATION_CREDENTIALS: '',
};
const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '--hostname', '127.0.0.1', '--port', '3000'], { env, stdio: 'inherit', windowsHide: true });
child.on('exit', code => { process.exitCode = code ?? 1; });
