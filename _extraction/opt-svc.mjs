import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
const SRC = '/private/tmp/claude-501/-Users-mac-HS-WEBSITE/204170f4-895e-435f-b698-446ff90aad40/scratchpad/svc';
const OUTBASE = '/Users/mac/HS WEBSITE/public/images/services';
const services = ['kitchen','wardrobe','vanities','media-walls','doors'];
for (const slug of services) {
  const dir = join(SRC, slug); const out = join(OUTBASE, slug); mkdirSync(out, { recursive: true });
  const files = readdirSync(dir).filter(f=>/\.(jpe?g|png)$/i.test(f)).sort((a,b)=>{
    const na=+(a.match(/-(\d+)\./)||[])[1]||0, nb=+(b.match(/-(\d+)\./)||[])[1]||0; return na-nb; });
  let i=0;
  for (const f of files) { i++;
    const m = await sharp(join(dir,f)).metadata();
    await sharp(join(dir,f)).resize({width: Math.min(m.width||1600,1600), withoutEnlargement:true}).webp({quality:80}).toFile(join(out, `${slug}-${i}.webp`));
  }
  console.log(`${slug}: ${i} webp`);
}
// crisp logo
await sharp(join(SRC,'logo-src.png')).trim({threshold:10}).resize({height:160}).png().toFile('/Users/mac/HS WEBSITE/public/logo.png');
console.log('logo refreshed');
