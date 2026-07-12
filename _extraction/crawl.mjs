// Content extractor for homestudiointeriors.pk
// Fetches rendered pages, strips chrome, saves clean copy + image URLs per page.
import { writeFileSync, mkdirSync } from 'node:fs';

const BASE = 'https://homestudiointeriors.pk';
const PAGES = [
  { slug: '', name: 'home', url: '/' },
  { slug: 'about-2', name: 'about', url: '/about-2/' },
  { slug: 'services-2', name: 'services', url: '/services-2/' },
  { slug: 'kitchen', name: 'kitchen', url: '/kitchen/' },
  { slug: 'wardrobe', name: 'wardrobe', url: '/wardrobe/' },
  { slug: 'vanities', name: 'vanities', url: '/vanities/' },
  { slug: 'media-walls', name: 'media-walls', url: '/media-walls/' },
  { slug: 'doors', name: 'doors', url: '/doors/' },
  { slug: 'projects', name: 'projects', url: '/projects/' },
  { slug: 'blog', name: 'blog', url: '/blog/' },
  { slug: 'testimonials', name: 'testimonials', url: '/testimonials/' },
  { slug: 'careers', name: 'careers', url: '/careers/' },
  { slug: 'contact-2', name: 'contact', url: '/contact-2/' },
];

const OUT = new URL('./out/', import.meta.url);
mkdirSync(OUT, { recursive: true });

function decode(s) {
  return s.replace(/&amp;/g, '&').replace(/&#8217;/g, '’').replace(/&#8211;/g, '–')
    .replace(/&#8230;/g, '…').replace(/&#038;/g, '&').replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&[a-z]+;/gi, ' ');
}
function textFrom(html, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const out = [];
  let m;
  while ((m = re.exec(html))) {
    const t = decode(m[1].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
    if (t && t.length > 1) out.push(t);
  }
  return out;
}

const meta = {};

for (const p of PAGES) {
  try {
    const res = await fetch(BASE + p.url, { headers: { 'User-Agent': 'Mozilla/5.0 HSI-Extract' } });
    const html = await res.text();

    // isolate main content (drop head/header/footer/scripts/styles roughly)
    let body = html;
    const bodyMatch = html.match(/<body[\s\S]*<\/body>/i);
    if (bodyMatch) body = bodyMatch[0];
    body = body.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<header[\s\S]*?<\/header>/gi, '').replace(/<footer[\s\S]*?<\/footer>/gi, '')
      .replace(/<nav[\s\S]*?<\/nav>/gi, '');

    // SEO
    const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '';
    const metaDesc = (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || '';

    // headings & paragraphs
    const h1 = textFrom(body, 'h1');
    const h2 = textFrom(body, 'h2');
    const h3 = textFrom(body, 'h3');
    const p_ = textFrom(body, 'p').filter(t => t.length > 20);
    const li = textFrom(body, 'li').filter(t => t.length > 3 && t.length < 160);
    const buttons = [
      ...textFrom(body, 'a').filter(t => t.length < 40 && /[a-z]/i.test(t)),
    ];

    // images (uploads only, dedupe, strip size suffix duplicates)
    const imgs = [...new Set(
      [...body.matchAll(/(?:src|data-src)="([^"]*\/wp-content\/uploads\/[^"]+\.(?:jpg|jpeg|png|webp))"/gi)]
        .map(m => m[1].replace(/^http:/, 'https:'))
    )];

    const rec = { name: p.name, url: BASE + p.url, title: decode(title), metaDesc: decode(metaDesc), h1, h2, h3, paragraphs: p_, listItems: [...new Set(li)], ctas: [...new Set(buttons)], images: imgs };
    meta[p.name] = { title: rec.title, metaDesc: rec.metaDesc, h1, imageCount: imgs.length, h2Count: h2.length, pCount: p_.length };

    const md = [
      `# ${p.name}  (${BASE + p.url})`, '',
      `**Title:** ${rec.title}`, `**Meta:** ${rec.metaDesc}`, '',
      `## H1`, ...h1.map(t => `- ${t}`), '',
      `## H2`, ...h2.map(t => `- ${t}`), '',
      `## H3`, ...h3.map(t => `- ${t}`), '',
      `## Paragraphs`, ...p_.map(t => `- ${t}`), '',
      `## List items`, ...[...new Set(li)].map(t => `- ${t}`), '',
      `## CTAs / link labels`, ...[...new Set(buttons)].map(t => `- ${t}`), '',
      `## Images (${imgs.length})`, ...imgs.map(u => `- ${u}`),
    ].join('\n');

    writeFileSync(new URL(`${p.name}.json`, OUT), JSON.stringify(rec, null, 2));
    writeFileSync(new URL(`${p.name}.md`, OUT), md);
    console.log(`✓ ${p.name.padEnd(14)} h1:${h1.length} h2:${h2.length} p:${p_.length} imgs:${imgs.length}`);
  } catch (e) {
    console.log(`✗ ${p.name}: ${e.message}`);
  }
}
writeFileSync(new URL('_index.json', OUT), JSON.stringify(meta, null, 2));
console.log('\nDone. Output in _extraction/out/');
