import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const sourceRoot = join(root, 'src');
const assetRoot = join(sourceRoot, 'assets');
const sourceExtensions = new Set(['.html', '.scss', '.ts']);

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const references = new Map();
for (const filePath of walk(sourceRoot)) {
  if (!sourceExtensions.has(extname(filePath))) {
    continue;
  }

  const contents = readFileSync(filePath, 'utf8');
  for (const match of contents.matchAll(/(?:\/)?assets\/[A-Za-z0-9_./-]+/g)) {
    const assetPath = match[0].replace(/^\//, '').replace(/^assets\//, '');
    if (!references.has(assetPath)) {
      references.set(assetPath, []);
    }
    references.get(assetPath).push(relative(root, filePath));
  }
}

const missing = [...references.entries()].filter(([assetPath]) => !existsSync(join(assetRoot, assetPath)));
if (missing.length > 0) {
  console.error('Missing referenced assets:');
  for (const [assetPath, files] of missing) {
    console.error(`- ${assetPath} (${[...new Set(files)].join(', ')})`);
  }
  process.exit(1);
}

console.log(`Validated ${references.size} referenced assets.`);
