// Downloads the few WordPress uploads still referenced by the content into
// public/, keeping the same /wp-content/uploads/... paths so links keep working.
// Run once while the old site is still online: node scripts/fetch-uploads.mjs
import fs from 'node:fs';
import path from 'node:path';

const ORIGIN = 'https://overtimelawny.com';
const files = fs.readdirSync('src/content', { recursive: true }).filter((f) => f.endsWith('.md'));
const urls = new Set();
for (const f of files) {
  const text = fs.readFileSync(path.join('src/content', f), 'utf8');
  for (const m of text.matchAll(/\/wp-content\/uploads\/[^)\s"]+/g)) urls.add(m[0]);
}
for (const u of urls) {
  const dest = path.join('public', u);
  if (fs.existsSync(dest)) continue;
  const res = await fetch(ORIGIN + u);
  if (!res.ok) { console.warn(`skip ${u}: ${res.status}`); continue; }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  console.log(`saved ${dest}`);
}
