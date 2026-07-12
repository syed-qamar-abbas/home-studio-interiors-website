import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
const SRC='/Users/mac/HS WEBSITE/_inbox';
const OUT='/Users/mac/HS WEBSITE/public/images/hero'; mkdirSync(OUT,{recursive:true});
const map=[
  [/monkey blue/i,'statement'],
  [/opulent living/i,'living'],
  [/moody naturalist/i,'kitchen'],
  [/dark bathroom/i,'vanity'],
  [/multimedia tv/i,'media'],
  [/fernsehwand.*haus/i,'media3'],
  [/fernsehwand/i,'media2'],
  [/domestic kitchen/i,'kitchen2'],
  [/^modern kitchen/i,'kitchen3'],
  [/^_ \(2\)/i,'misc'],
];
let done=[];
for(const f of readdirSync(SRC).filter(f=>/\.(jpe?g|png|webp)$/i.test(f))){
  const hit=map.find(([re])=>re.test(f)); const name=hit?hit[1]:f.replace(/\.[^.]+$/,'').replace(/[^a-z0-9]+/gi,'-').slice(0,20).toLowerCase();
  const m=await sharp(join(SRC,f)).metadata();
  await sharp(join(SRC,f)).resize({width:Math.min(m.width||1600,1600),withoutEnlargement:true}).webp({quality:82}).toFile(join(OUT,`${name}.webp`));
  done.push(`${name}.webp  (${m.width}x${m.height})`);
}
console.log(done.join('\n'));
