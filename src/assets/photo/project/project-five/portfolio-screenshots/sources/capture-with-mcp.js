// Run this orchestration source through functions.exec, after compile-mcp-capture.cjs.
// Raw MCP code results contain private demo credentials: do not print them.
const records = [];
for (const role of ['customer', 'admin']) {
  const result = await tools.mcp__playwright__browser_run_code_unsafe({ filename: `work/portfolio-demo/capture-${role}.local.js` });
  const block = result.content.find(item => item.type === 'text' && item.text.includes('### Result\n'));
  if (!block) throw new Error('Capture failed. Inspect only the error message, not raw code.');
  const safe = block.text.split('### Ran Playwright code')[0].split('### Result\n')[1].trim();
  const record = JSON.parse(safe);
  records.push(record);
  text({ role, files: record.screenshots.map(s => s.file), pageErrors: record.summary.pageErrors, consoleErrors: record.summary.consoleErrors });
}
const root = 'D:/Vscode/Monoshop-main/Monoshop-main/portfolio-screenshots/';
const files = [{ name: 'capture-manifest.json', data: records.flatMap(r => r.screenshots) }];
for (const record of records) for (const [name, data] of Object.entries(record.checks)) files.push({ name, data });
const code = "var screenshotFs = await import('node:fs/promises');\n" + files.map(f => `await screenshotFs.writeFile(${JSON.stringify(root + f.name)}, ${JSON.stringify(JSON.stringify(f.data, null, 2))});`).join('\n');
await tools.mcp__node_repl__js({ code, title: 'Saving screenshot provenance' });
text('Saved the seven final screenshots and redacted capture records.');
