# Codex Brief — Extract ALL content & images from homestudiointeriors.pk

## Your mission
Connect to the live WordPress site **homestudiointeriors.pk** over SSH and extract a **complete, structured dump of every page's content and every image**, saved locally so it can be reused to build/populate a new static site. Do NOT modify the live site — read only.

## Project context (why)
There is a from-scratch **Astro + Tailwind v4** static rebuild of this site at `/Users/mac/HS WEBSITE` (luxury DARK theme, brand orange `#F27025`, Playfair Display + Inter, dark hero, tabbed "What We Do", etc.). It currently uses a partial set of real images/content. Your job is to give it the **full** content + image library so nothing is missing. Output goes into `/Users/mac/HS WEBSITE/_extraction/`.

The live site is **WordPress 6.8.5 + Astra theme + Elementor** on **Hostinger LiteSpeed** shared hosting. Content lives in Elementor (postmeta `_elementor_data`), so the rendered HTML is the most reliable source of copy; images live in `wp-content/uploads`.

---

## Access (read-only; rotate after use)
**SSH**
```
Host: 145.79.28.194
Port: 65002
User: u700603111
Pass: Crea8iv@2026
```
Non-interactive: `sshpass -e ssh -p 65002 -o StrictHostKeyChecking=no u700603111@145.79.28.194 '<cmd>'` with `SSHPASS` env var set. (`brew install sshpass` if missing.)

**WordPress root:** `/home/u700603111/domains/homestudiointeriors.pk/public_html`
**WP admin (only if needed):** user `crea8ivmedia` / pass `homestudio@2026`
**WP-CLI** is available on the server. **Site URL:** https://homestudiointeriors.pk

---

## Known page inventory (published)
| Page | URL | Notes |
|---|---|---|
| Home | `/` | hero, why-choose, service tabs, process, about, testimonials, FAQ |
| About | `/about-2/` | |
| Services | `/services-2/` | |
| Kitchen | `/kitchen/` | h1 "…" — ~68 images (gallery-heavy) |
| Wardrobe | `/wardrobe/` | h1 "Luxury behind every door" |
| Vanities | `/vanities/` | h1 "Elegant & Functional Vanity Designs" |
| Media Walls | `/media-walls/` | h1 "Your world, on display" |
| Doors | `/doors/` | h1 "The doors that define your home" |
| Projects | `/projects/` | |
| Blog | `/blog/` | 0 posts currently |
| Testimonials | `/testimonials/` | |
| Careers | `/careers/` | |
| Contact | `/contact-2/` | info@homestudiointeriors.pk · 0339 2001959 |
| Privacy | `/privacy-policy/` · Terms `/terms-condition/` | |

Nav (Main Menu): Home, About, Services ▸ (Kitchen, Wardrobe, Vanities, Media Walls, Doors), Blog, Contact.

---

## Step 1 — Content (per page)
For **every** published page/post, capture: title, meta description, canonical, H1/H2/H3 in order, all paragraphs, list items, button/CTA labels, and the ordered section hierarchy.

Best method = fetch the **rendered HTML** and strip chrome (Elementor renders copy into HTML; `post_content` is often empty). Two options:
1. **From the server:** `curl -s https://homestudiointeriors.pk/<slug>/` per page, then parse.
2. **WP-CLI for structure:** `wp --path=<root> --skip-plugins --skip-themes post list --post_type=page --post_status=publish --fields=ID,post_name,post_title --format=csv` and `wp ... menu item list "Main Menu"`.

Also grab site identity: `wp option get blogname`, `blogdescription`, and business NAP from the contact page (email `info@homestudiointeriors.pk`, phone `0339 2001959`, "Islamabad Capital Territory", rating 4.95/260+).

Save each page as `_extraction/out/<slug>.json` and `<slug>.md` with the fields above, plus `_extraction/out/_index.json` (ordered section headings per page).

## Step 2 — Images (per page + full library)
1. **Per-page image list (accurate):** parse each page's rendered HTML for `img src`/`data-src` and CSS `background-image url(...)` under `wp-content/uploads`; strip the `-WxH` size suffix to get the base filename. (Lazy-load means you must read `data-src` too, or scroll the page in a headless browser.) Save `_extraction/out/<slug>.images.txt`.
2. **Download the real files from the filesystem** (avoids 404s — many `-scaled.jpg` public URLs 404). On the server, for each referenced base path try: exact file → `<name>-scaled.<ext>` → largest `<name>-NxM.<ext>`. `cp` matches into `/tmp/hsi-extract/<slug>/`, then `tar czf /tmp/hsi-extract.tgz -C /tmp/hsi-extract .`, `scp` it down to `_extraction/raw/`.
3. **Optimize** with `sharp`: resize max 1600px, WebP q80, into `_extraction/optimized/<slug>/<slug>-N.webp`. Keep a `manifest.json` mapping optimized → original filename + which page(s) use it.
4. **(Optional) whole library:** `find wp-content/uploads -type f \( -iname '*.jpg' -o -iname '*.png' \)` for a full inventory; note total is ~2.2 GB, so only bulk-download if asked.

## Step 3 — Deliverable
Write `_extraction/SUMMARY.md`: per page → content file path, image count, list of optimized image paths, and the H1/tagline. This lets the Astro site (`src/data/site.ts`) be repopulated confidently.

---

## Gotchas (learned the hard way)
- **`wp db export` is broken on this CageFS host** (produces no file). Use `mysqldump --no-tablespaces --single-transaction` with creds from `wp config get DB_NAME/DB_USER/DB_PASSWORD/DB_HOST`.
- **`-scaled.jpg` and size-suffixed URLs often 404** over HTTP — always pull from the filesystem via SSH, not by downloading the URL.
- **Elementor lazy-loads images** — rendered HTML `src` may be a placeholder; read `data-src`/`data-lazy-src` or scroll a headless page before scraping.
- **Server is heavily loaded (load avg ~30) and has LVE CPU limits** — bulk PHP/`sharp` jobs can get killed; process images in small batches; do heavy image work locally after download, not on the server.
- Service-page galleries: numbered files live in `wp-content/uploads/2025/10/` (e.g., vanities use `2-8.jpg`, kitchen uses `9-41.jpg`) and `2025/09/` for named photos.
- **Do not edit the live site.** Read-only. There is a preview-gated `hsi-luxury-layer` plugin already installed (harmless, off by default) — ignore it.
- Node 25 + `sharp` are available locally for optimization.

## Guardrails
- Read-only on the server. No plugin/theme/DB writes. No deletions.
- Keep credentials out of committed files where possible; treat as secrets.
- If a step fails (timeout, killed process), retry in smaller batches and report what completed.
