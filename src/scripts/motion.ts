// Cinematic motion: Lenis smooth scroll + reveals + parallax + progress + count-up + magnetic + spotlight.
import Lenis from 'lenis';

export function initMotion() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const header = document.querySelector<HTMLElement>('[data-header]');
  const setHeader = (y: number) => { if (header) header.classList.toggle('is-scrolled', y > 40); };
  setHeader(0);

  // ---- Scroll progress bar ----
  const bar = document.querySelector<HTMLElement>('.scroll-progress');
  const setProgress = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    if (bar) bar.style.width = (p * 100).toFixed(2) + '%';
  };

  // ---- Scroll reveals ----
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!reduce && !isMobile && 'IntersectionObserver' in window) {
    const vh = window.innerHeight;
    els.forEach((el) => { if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add('is-in'); });
    const io = new IntersectionObserver((entries) => {
      // Cascade elements that enter together for a smooth, coordinated reveal
      const incoming = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement)
        .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
      incoming.forEach((el, idx) => {
        if (!el.style.getPropertyValue('--reveal-delay')) el.style.transitionDelay = Math.min(idx, 6) * 0.09 + 's';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -12% 0px' });
    els.forEach((el) => { if (!el.classList.contains('is-in')) io.observe(el); });
  } else {
    els.forEach((el) => el.classList.add('is-in'));
  }

  // ---- Count-up numbers ----
  const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
  const runCount = (el: HTMLElement) => {
    const target = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const dur = 1600; const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(target * eased);
      el.textContent = val.toLocaleString('en-US') + suffix;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (!reduce && !isMobile && 'IntersectionObserver' in window) {
    counters.forEach((c) => { c.textContent = '0' + (c.dataset.suffix || ''); });
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { runCount(e.target as HTMLElement); cio.unobserve(e.target); } });
    }, { threshold: 0.4 });
    counters.forEach((c) => cio.observe(c));
  }

  // ---- Magnetic buttons ----
  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    // ---- Custom luxury cursor ----
    const luxCursor = document.querySelector<HTMLElement>('.lux-cursor');
    if (luxCursor) {
      let cursorX = window.innerWidth / 2;
      let cursorY = window.innerHeight / 2;
      let ringX = cursorX;
      let ringY = cursorY;
      const moveCursor = () => {
        ringX += (cursorX - ringX) * 0.22;
        ringY += (cursorY - ringY) * 0.22;
        luxCursor.style.setProperty('--cursor-x', ringX.toFixed(1) + 'px');
        luxCursor.style.setProperty('--cursor-y', ringY.toFixed(1) + 'px');
        requestAnimationFrame(moveCursor);
      };
      requestAnimationFrame(moveCursor);
      window.addEventListener('pointermove', (ev) => {
        cursorX = ev.clientX;
        cursorY = ev.clientY;
        luxCursor.classList.add('is-visible');
      }, { passive: true });
      document.addEventListener('pointerleave', () => luxCursor.classList.remove('is-visible'));
      document.addEventListener('pointerdown', () => luxCursor.classList.add('is-clicking'));
      document.addEventListener('pointerup', () => luxCursor.classList.remove('is-clicking'));
      const hoverTargets = 'a, button, summary, input, textarea, select, [role="button"], [data-lightbox], .card-hover, .spotlight';
      document.querySelectorAll<HTMLElement>(hoverTargets).forEach((el) => {
        el.addEventListener('pointerenter', () => luxCursor.classList.add('is-hovering'));
        el.addEventListener('pointerleave', () => luxCursor.classList.remove('is-hovering'));
      });
    }

    document.querySelectorAll<HTMLElement>('[data-magnetic], .btn').forEach((el) => {
      el.addEventListener('pointermove', (ev) => {
        const r = el.getBoundingClientRect();
        const mx = (ev.clientX - r.left - r.width / 2) * 0.25;
        const my = (ev.clientY - r.top - r.height / 2) * 0.35;
        el.style.transform = `translate(${mx.toFixed(1)}px, ${my.toFixed(1)}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
    // ---- Card spotlight tracking ----
    document.querySelectorAll<HTMLElement>('.spotlight').forEach((el) => {
      el.addEventListener('pointermove', (ev) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((ev.clientX - r.left) / r.width * 100).toFixed(1) + '%');
        el.style.setProperty('--my', ((ev.clientY - r.top) / r.height * 100).toFixed(1) + '%');
      });
    });
    // ---- Hero cursor glow ----
    const glow = document.querySelector<HTMLElement>('[data-cursor-glow]');
    if (glow) {
      glow.addEventListener('pointermove', (ev) => {
        const r = glow.getBoundingClientRect();
        glow.style.setProperty('--gx', (ev.clientX - r.left) + 'px');
        glow.style.setProperty('--gy', (ev.clientY - r.top) + 'px');
      });
    }
  }

  // ---- Parallax ----
  const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  const applyParallax = () => {
    const vh = window.innerHeight;
    for (const el of parallax) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) continue;
      const speed = parseFloat(el.dataset.parallax || '0.15');
      const scale = parseFloat(el.dataset.parallaxScale || '1.08');
      const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(${scale})`;
    }
  };

  // ---- Lenis ----
  if (!reduce) {
    const lenis = new Lenis({ duration: 1.15, lerp: 0.085, smoothWheel: true });
    lenis.on('scroll', (e: { scroll: number }) => { setHeader(e.scroll); applyParallax(); setProgress(); });
    applyParallax(); setProgress();
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (ev) => {
        const id = a.getAttribute('href');
        if (id && id.length > 1) { const target = document.querySelector(id); if (target) { ev.preventDefault(); lenis.scrollTo(target as HTMLElement, { offset: -80 }); } }
      });
    });
  } else {
    setHeader(window.scrollY); setProgress();
    window.addEventListener('scroll', () => { setHeader(window.scrollY); setProgress(); }, { passive: true });
  }

  // ---- Lightweight gallery lightbox ----
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector<HTMLImageElement>('[data-lightbox-image]');
  const lightboxCaption = lightbox?.querySelector<HTMLElement>('[data-lightbox-caption]');
  const lightboxWa = lightbox?.querySelector<HTMLAnchorElement>('[data-lightbox-whatsapp]');
  const lightboxClose = lightbox?.querySelector<HTMLButtonElement>('[data-lightbox-close]');
  const lightboxPrev = lightbox?.querySelector<HTMLButtonElement>('[data-lightbox-prev]');
  const lightboxNext = lightbox?.querySelector<HTMLButtonElement>('[data-lightbox-next]');
  const lightboxItems = Array.from(document.querySelectorAll<HTMLElement>('[data-lightbox]'));
  let lightboxIndex = 0;

  const openLightbox = (index: number) => {
    if (!lightbox || !lightboxImg || lightboxItems.length === 0) return;
    lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
    const item = lightboxItems[lightboxIndex];
    const image = item.dataset.lightbox || item.getAttribute('src') || item.querySelector('img')?.getAttribute('src') || '';
    const caption = item.dataset.lightboxTitle || item.getAttribute('alt') || item.querySelector('img')?.getAttribute('alt') || 'Home Studio Interiors';
    lightboxImg.src = image;
    lightboxImg.alt = caption;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    if (lightboxWa) {
      const text = encodeURIComponent(`Hi Home Studio, I am interested in this design: ${caption}`);
      lightboxWa.href = `https://wa.me/923392001959?text=${text}`;
    }
    lightbox.classList.remove('hidden');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    lightbox.setAttribute('aria-hidden', 'true');
    if (lightboxImg) lightboxImg.src = '';
    document.body.style.overflow = '';
  };
  const stepLightbox = (dir: number) => openLightbox(lightboxIndex + dir);
  lightboxItems.forEach((item, index) => {
    item.addEventListener('click', (ev) => {
      ev.preventDefault();
      openLightbox(index);
    });
  });
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (ev) => { if (ev.target === lightbox) closeLightbox(); });
  lightboxPrev?.addEventListener('click', () => stepLightbox(-1));
  lightboxNext?.addEventListener('click', () => stepLightbox(1));
  window.addEventListener('keydown', (ev) => {
    if (!lightbox || lightbox.classList.contains('hidden')) return;
    if (ev.key === 'Escape') closeLightbox();
    if (ev.key === 'ArrowLeft') stepLightbox(-1);
    if (ev.key === 'ArrowRight') stepLightbox(1);
  });
}
