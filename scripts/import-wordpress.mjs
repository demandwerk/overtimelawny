// One-time importer: converts a WordPress (Divi) export into Markdown content.
// Usage: node scripts/import-wordpress.mjs path/to/export.xml
//
// Divi stores each page as nested shortcodes. We keep only the text modules,
// and drop blocks repeated across many pages (shared sections such as the
// practice-area grid, contact forms and CTAs), which the new templates provide.
import fs from 'node:fs';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import TurndownService from 'turndown';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/import-wordpress.mjs <export.xml>');
  process.exit(1);
}

const parser = new XMLParser({ ignoreAttributes: true, cdataPropName: false, processEntities: true, htmlEntities: true });
const channel = parser.parse(fs.readFileSync(file, 'utf8')).rss.channel;
const items = [].concat(channel.item);

const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });
td.remove(['script', 'style', 'iframe']);

const SPANISH = new Set([
  'descripcion-general-de-las-areas-de-practica',
  'horas-adicionales-y-sueldos-no-pagados',
  'acoso-sexual-en-el-lugar-de-trabajo',
  'discriminacion-por-embarazo',
  'discriminacion-en-el-lugar-de-trabajo',
  'represalias-en-el-lugar-de-trabajo',
]);
const PRACTICE = new Set([
  'employment-discrimination', 'whistleblower', 'sexual-harassment', 'retaliation-in-the-workplace',
  'family-medical-leave-act', 'civil-rights', 'overtime-pay-and-unpaid-wages', 'pregnancy-discrimination',
  'employment-agreements', 'employer-defense', 'womens-rights', 'restaurant-workers-and-tipped-employees',
  'gender-discrimination',
]);
const LOCATION = new Set([
  'new-jersey-nyc-overtime-wage-and-sexual-harassment-lawyers',
  'employment-law-attorneys-in-nassau-and-suffolk-counties-in-new-york',
]);
// Rebuilt by hand as templates, so not imported as generic pages.
const SKIP = new Set(['', 'home', 'blog', 'team', 'contact-us', 'thanks-for-reaching-out', 'divi']);

const textOf = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;|\s+/g, ' ').trim();

function textModules(content) {
  const out = [];
  const re = /\[et_pb_(?:text|blurb)\b[^\]]*\]([\s\S]*?)\[\/et_pb_(?:text|blurb)\]/g;
  let m;
  while ((m = re.exec(content))) out.push(m[1].trim());
  // Content written outside Divi (plain posts).
  if (!out.length && !/\[et_pb_/.test(content)) out.push(content);
  return out;
}

const docs = items
  .filter((it) => ['page', 'post'].includes(it['wp:post_type']) && it['wp:status'] === 'publish')
  .map((it) => ({
    type: it['wp:post_type'],
    slug: decodeURIComponent(String(it['wp:post_name'] ?? '')),
    title: String(it.title ?? '').trim(),
    date: String(it['wp:post_date']).slice(0, 10),
    blocks: textModules(String(it['content:encoded'] ?? '')),
  }));

// Count how many documents each block appears in.
const freq = new Map();
for (const d of docs) for (const t of new Set(d.blocks.map(textOf))) freq.set(t, (freq.get(t) ?? 0) + 1);

function keep(block) {
  const t = textOf(block);
  if (t.length < 3) return false;
  if ((freq.get(t) ?? 0) >= 3) return false;              // shared boilerplate
  if (/^<h[14][^>]*>[\s\S]*<\/h[14]>$/i.test(block) && t.length < 60) return false; // hero titles, grid labels
  if (/lorem ipsum/i.test(t)) return false;
  return true;
}

function toMarkdown(blocks) {
  let md = td.turndown(blocks.filter(keep).join('\n\n'));
  return md
    .replace(/https?:\/\/(www\.)?overtimelawny\.com\//g, '/')
    .replace(/\]\(<\s*([^>]*?)\s*>\)/g, ']($1)') // <url > links with stray spaces
    .replace(/^#{1,6}\s*$/gm, '')      // empty headings
    .replace(/^# /gm, '## ')           // page title is the only h1
    .replace(/ /g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const firstParagraph = (md) =>
  (md.split('\n\n').find((p) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ¿"“]/.test(p) && p.length > 80) ?? '')
    .replace(/[*_`\[\]]|\(\/[^)]*\)/g, '')
    .slice(0, 300)
    .replace(/\s+\S*$/, '…');

const yaml = (s) => JSON.stringify(s);
const root = path.resolve('src/content');

let count = { page: 0, post: 0 };
for (const d of docs) {
  if (SKIP.has(d.slug)) continue;
  const body = toMarkdown(d.blocks);
  const kind = d.type === 'post' ? null
    : SPANISH.has(d.slug) ? 'es'
    : PRACTICE.has(d.slug) ? 'practice'
    : LOCATION.has(d.slug) ? 'location'
    : 'page';
  const dir = path.join(root, d.type === 'post' ? 'posts' : 'pages');
  fs.mkdirSync(dir, { recursive: true });
  const fm = [
    '---',
    `title: ${yaml(d.title)}`,
    `description: ${yaml(firstParagraph(body))}`,
    d.type === 'post' ? `date: ${d.date}` : `kind: ${kind}`,
    '---',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(dir, `${d.slug}.md`), fm + body + '\n');
  count[d.type]++;
}
console.log(`Imported ${count.page} pages and ${count.post} posts into src/content/`);
