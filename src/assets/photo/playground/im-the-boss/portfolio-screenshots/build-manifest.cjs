// Capture-session metadata below describes 2026-11-12 only. Before rebuilding
// after a recapture, inspect every PNG and update dates, evidence and metadata.
// Rehashing files alone does not establish their provenance or visual quality.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');

const root = __dirname;
const desktop = { width: 1440, height: 1100 };
const table = { width: 1600, height: 1320 };
const mobile = { width: 390, height: 844 };
const live = 'http://127.0.0.1:5180/89824';
const preview = 'http://127.0.0.1:5180/preview/';
const metadata = {
  'game-table.png': { viewport: table, source: 'Firebase Emulators', url: live, role: 'ฟ้า Demo / boss', state: 'dealOpen; space 4; accepted มะปราง 2 shares, pending ต้นกล้า 1 share', mode: 'fullPage' },
  'boss-offers.png': { viewport: desktop, source: 'Design Preview / sample fixture', url: preview + 'game', role: 'นก / boss', state: 'dealConflict -> offer-review-open; accepted มิ้นท์ red, pending โอ๊ต red', mode: 'modal bounding box plus 24 CSS px margin' },
  'action-card.png': { viewport: desktop, source: 'Firebase Emulators', url: live, role: 'ภูมิ Demo / participant', state: 'travel-blue-1 selected; target ฟ้า Demo blue investor; before enabled action-submit click', mode: 'modal bounding box plus 24 CSS px margin' },
  'final-score.png': { viewport: desktop, source: 'Design Preview / sample fixture', url: preview + 'game', role: 'นก / host', state: 'gameOverFifteen; reveal 4/4; scores 55/41/36/12', mode: 'modal bounding box plus 24 CSS px margin' },
  'lobby.png': { viewport: desktop, source: 'Firebase Emulators', url: live, role: 'มะปราง Demo / host', state: 'lobby; 4/6 seats; all 4 online; before start-game', mode: 'fullPage' },
  'offer-modal.png': { viewport: desktop, source: 'Firebase Emulators', url: live, role: 'มะปราง Demo / participant', state: 'yellow table investor + green hand clan; amount 2; before enabled offer-submit click', mode: 'modal bounding box plus 24 CSS px margin' },
  'cards-gallery.png': { viewport: desktop, source: 'Design Preview / sample cards', url: preview + 'cards', state: 'complete CardsPreview gallery', mode: 'fullPage' },
  'mobile-gameplay.png': { viewport: mobile, source: 'Firebase Emulators', url: live, role: 'ฟ้า Demo / boss', state: 'same accepted/pending deal as game-table; closed hand dock', mode: 'viewport', scrollY: 160 },
  'mobile-hand.png': { viewport: mobile, source: 'Firebase Emulators', url: live, role: 'ฟ้า Demo / boss', state: 'same deal; hand-dock-toggle open; 5 cards', mode: 'viewport', scrollY: 200 },
  'cards-family.png': { viewport: desktop, source: 'Design Preview / sample cards', url: preview + 'cards', state: 'six clan colors', mode: 'clip', clip: { x: 8, y: 173, width: 1424, height: 269 } },
  'cards-action.png': { viewport: { width: 1440, height: 1400 }, source: 'Design Preview / sample cards', url: preview + 'cards', state: 'travel, recruitment, stop, imTheBoss', mode: 'clip', clip: { x: 8, y: 453, width: 1424, height: 831 } },
  'home.png': { viewport: desktop, source: 'Design Preview / sample data', url: preview + 'home', state: 'PreviewHome; nickname มิ้นท์; create/join disabled in Preview', mode: 'fullPage' },
  'interrupt-window.png': { viewport: table, source: 'Firebase Emulators', url: live, role: 'ฟ้า Demo / boss', state: 'ภูมิ played blue travel; target ฟ้า investor; pending; UI 5 seconds and 0/3 passes', remainingMsBeforeCapture: 4332, mode: 'fullPage' },
};

const images = Object.entries(metadata).map(([file, entry]) => {
  const filename = path.join(root, file);
  const bytes = fs.readFileSync(filename);
  return {
    file, ...entry, deviceScaleFactor: 2, screenshotScale: 'device',
    png: { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20), bytes: bytes.length },
    sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
    fileModifiedAt: fs.statSync(filename).mtime.toISOString(),
    visualReview: 'opened and inspected final PNG in this capture session',
  };
});

const manifest = {
  capturedOn: '2026-11-12', timezone: 'Asia/Bangkok', captureTool: 'Playwright MCP',
  browserVersion: '157.0.8103.51',
  sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: path.dirname(root), encoding: 'utf8' }).trim(),
  generatedAt: new Date().toISOString(),
  captureNotes: 'Original screenshots; no application, DOM, CSS, score or network fixture patches. Sample data only on existing Preview routes.',
  verification: {
    compiledDevTrue: true, compiledUseEmulatorsTrue: true,
    compiledAuthEmulator: 'http://127.0.0.1:9099', compiledDatabaseEmulator: '127.0.0.1:9000 (compiled literal 9e3)',
    hubChecked: 'http://127.0.0.1:4400/emulators', fourDistinctPlayerUids: true,
    liveContextFontStatus: 'loaded in all four contexts', brokenImgElementsAtFinalCheck: 0,
    observedAuthResourceOrigin: 'http://127.0.0.1:9099',
    mobileDocumentScrollWidth: 375, mobileInnerWidth: 390,
    applicationTestsRun: false, applicationSourceModified: false,
  },
  images,
};
fs.writeFileSync(path.join(root, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Wrote manifest for ${images.length} original PNG screenshots.`);
