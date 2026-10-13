import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const browserRoot = join(root, 'dist', 'ragab-adel-portfolio', 'browser');
const indexPath = join(browserRoot, 'index.html');

if (!existsSync(indexPath)) {
  console.error('Missing production index. Run npm run build before validate:seo.');
  process.exit(1);
}

const html = readFileSync(indexPath, 'utf8');
const checks = [
  ['pre-rendered portfolio content', /<app-root[^>]*>\s*<div[\s\S]*Ragab Adel[\s\S]*<\/app-root>/i],
  ['descriptive page title', /<title>Ragab Adel \| \.NET Developer &amp; IT Administrator<\/title>/i],
  ['meta description', /<meta[^>]+name="description"[^>]+content="Portfolio of Ragab Adel in Cairo/i],
  ['indexable robots directive', /<meta[^>]+name="robots"[^>]+content="index, follow/i],
  ['ProfilePage structured data', /"@type"\s*:\s*"ProfilePage"/i],
  ['single visible H1', /<h1\b[^>]*>[\s\S]*?Ragab Adel[\s\S]*?<\/h1>/i],
  ['verified CV download', /assets\/cv\/Ragab-Adel-CV\.pdf/i],
  ['system and firewall role targeting', /System Administrator[\s\S]*Firewall Administrator/i],
  ['documented Windows Server and FortiGate experience', /Windows Server[\s\S]*Fortinet FortiGate/i]
];

const failures = checks.filter(([, pattern]) => !pattern.test(html));
const h1Count = (html.match(/<h1\b/gi) ?? []).length;

if (h1Count !== 1) {
  failures.push([`exactly one H1 (found ${h1Count})`, /./]);
}

if (/transitioning from|moving from/i.test(html)) {
  failures.push(['no outdated career-transition copy', /./]);
}

for (const asset of ['robots.txt', 'favicon.svg', 'assets/cv/Ragab-Adel-CV.pdf']) {
  if (!existsSync(join(browserRoot, asset))) {
    failures.push([`published ${asset}`, /./]);
  }
}

if (failures.length > 0) {
  console.error('SEO validation failed:');
  for (const [label] of failures) {
    console.error(`- ${label}`);
  }
  process.exit(1);
}

console.log(`SEO validation passed (${checks.length + 3} checks).`);
