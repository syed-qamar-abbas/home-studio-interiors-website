import sharp from 'sharp';
import { readdirSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
const SRC = '/private/tmp/claude-501/-Users-mac-HS-WEBSITE/204170f4-895e-435f-b698-446ff90aad40/scratchpad/rawimg2';
const OUT = '/Users/mac/HS WEBSITE/public/images';
rmSync(OUT, { recursive: true, force: true }); mkdirSync(OUT, { recursive: true });
for (const f of readdirSync(SRC).filter(f => /\.jpe?g$/i.test(f))) {
  const base = f.replace(/\.jpe?g$/i, '');
  const meta = await sharp(join(SRC, f)).metadata();
  await sharp(join(SRC, f)).resize({ width: Math.min(meta.width||1600, 1800), withoutEnlargement: true }).webp({ quality: 80 }).toFile(join(OUT, `${base}.webp`));
  console.log('✓', base + '.webp');
}
