import sharp from 'sharp';
const SP = '/private/tmp/claude-501/-Users-mac-HS-WEBSITE/204170f4-895e-435f-b698-446ff90aad40/scratchpad/logos';
const OUT = '/Users/mac/HS WEBSITE/public';
// Trim whitespace around the white-home wordmark -> crisp logo for dark backgrounds
await sharp(`${SP}/wordmark-transparent.png`).trim({ threshold: 10 }).resize({ height: 120 }).png().toFile(`${OUT}/logo.png`);
const m = await sharp(`${OUT}/logo.png`).metadata();
console.log('logo.png', m.width + 'x' + m.height);
// Apple touch icon: orange square with the trimmed mark region isn't clean; build from svg later
