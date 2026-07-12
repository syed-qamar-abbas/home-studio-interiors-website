// Convert curated raw JPGs -> optimized WebP (max 1600px, q78) into public/images/
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const SRC = '/private/tmp/claude-501/-Users-mac-HS-WEBSITE/204170f4-895e-435f-b698-446ff90aad40/scratchpad/rawimg';
const OUT = '/Users/mac/HS WEBSITE/public/images';
mkdirSync(OUT, { recursive: true });

let total = 0, saved = 0;
for (const f of readdirSync(SRC).filter((f) => /\.jpe?g$/i.test(f))) {
  const base = f.replace(/\.jpe?g$/i, '');
  const inPath = join(SRC, f);
  const outPath = join(OUT, `${base}.webp`);
  const meta = await sharp(inPath).metadata();
  await sharp(inPath)
    .resize({ width: Math.min(meta.width || 1600, 1600), withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(outPath);
  const before = meta.size || 0;
  const after = (await sharp(outPath).metadata()).size || 0;
  total++; saved += before - after;
  console.log(`✓ ${base}.webp  ${(before/1024|0)}KB → ${(after/1024|0)}KB`);
}
console.log(`\n${total} images, saved ~${(saved/1048576).toFixed(1)}MB`);
