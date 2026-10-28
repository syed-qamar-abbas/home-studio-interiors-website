// A single crawlable list; no duplicate logos, marquee clones or slider library.
document.querySelectorAll<HTMLElement>('.material-brands').forEach((section) => {
  const row = section.querySelector<HTMLElement>('.material-brands__list');
  const button = section.querySelector<HTMLButtonElement>('.material-brands__motion');
  if (!row || !button) return;
  const mobile = matchMedia('(max-width: 639px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  let visible = false;
  let focused = false;
  let frame = 0;
  let previous = 0;
  let position = row.scrollLeft;
  let direction = 1;
  let maximum = 0;
  let dwell = 0;

  const canMove = () => mobile.matches && !reducedMotion.matches && !paused && visible && !focused && !document.hidden && maximum > 0;
  const tick = (now: number) => {
    if (!canMove()) return;
    const elapsed = previous ? Math.min(now - previous, 50) : 0;
    previous = now;
    if (now >= dwell) {
      position = Math.max(0, Math.min(maximum, position + direction * elapsed * .018));
      row.scrollLeft = position;
      if ((direction > 0 && position >= maximum) || (direction < 0 && position <= 0)) {
        direction *= -1;
        dwell = now + 900;
      }
    }
    frame = requestAnimationFrame(tick);
  };
  const update = () => {
    cancelAnimationFrame(frame);
    previous = 0;
    maximum = row.scrollWidth - row.clientWidth;
    position = row.scrollLeft;
    button.hidden = !mobile.matches || reducedMotion.matches || maximum <= 0;
    button.textContent = paused ? 'Resume motion' : 'Pause motion';
    button.setAttribute('aria-pressed', String(paused));
    if (canMove()) frame = requestAnimationFrame(tick);
  };
  button.addEventListener('click', () => { paused = !paused; update(); });
  // Intentional interaction pauses motion until the visitor chooses Resume.
  row.addEventListener('pointerdown', () => { paused = true; update(); }, { passive: true });
  row.addEventListener('wheel', () => { paused = true; update(); }, { passive: true });
  row.addEventListener('focusin', () => { focused = true; update(); });
  row.addEventListener('focusout', () => { focused = false; update(); });
  mobile.addEventListener('change', update);
  reducedMotion.addEventListener('change', update);
  document.addEventListener('visibilitychange', update);
  new ResizeObserver(update).observe(row);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: .1 }).observe(row);
  update();
});
