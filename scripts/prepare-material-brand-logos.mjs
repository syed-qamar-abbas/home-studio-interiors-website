// Normalize the owner-supplied artwork without redrawing or recoloring it.
// Usage: node scripts/prepare-material-brand-logos.mjs /path/to/source-folder
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = process.argv[2];
if (!source) throw new Error('Provide the folder containing the original logos.');
const destination = resolve('public/images/material-brands');
const files = [
  ['unihopper', 'Image_20241122160341.webp'],
  ['amica', 'Amica-Wronki-Logo.png'],
  ['blum', 'Blum_transparant-01_0.png.webp'],
  ['salice', 'images.jpeg'],
  ['dupont', 'DuPont-logo.png'],
  ['hafele', '400x150_px.png'],
  ['bosch', 'Bosch-Logo-2001.png'],
];

await mkdir(destination, { recursive: true });
for (const [slug, filename] of files) {
  // Flatten first so transparent padding is measured against the same white
  // canvas as opaque source files when trimming (Sharp's operation order matters).
  const flattened = await sharp(resolve(source, filename))
    .flatten({ background: '#ffffff' })
    .png()
    .toBuffer();
  const { data, info } = await sharp(flattened)
    .trim({ background: '#ffffff', threshold: 12 })
    .resize(432, 144, { fit: 'contain', background: '#ffffff' })
    .extend({ top: 24, bottom: 24, left: 24, right: 24, background: '#ffffff' })
    .webp({ lossless: true, effort: 6 })
    .toBuffer({ resolveWithObject: true });
  // A second pipeline retains exact dimensions and strips source metadata.
  const output = await sharp(data).toFile(resolve(destination, `${slug}.webp`));
  console.log(`${slug}: ${info.width}×${info.height}, ${output.size} bytes`);
}
