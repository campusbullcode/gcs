// Globe Consulting Services — interactions
// Ported from the original app.js. Exposed as an init function that runs after
// the markup is mounted, and returns a cleanup that detaches window listeners.
export function initInteractions() {
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = document.querySelector('.nav');

  function syncNavTone() {
    if (!nav) return;
    nav.classList.toggle('is-stuck', window.scrollY > 24);
  }

  /* ---------------------------------------------------- direction + accent */
  const params = new URLSearchParams(location.search);
  const savedDir = params.get('dir') || localStorage.getItem('gcs-dir') || 'A';
  const savedAccent = params.get('accent') || localStorage.getItem('gcs-accent') || 'royal';

  function applyDir(d, save) {
    root.setAttribute('data-dir', d);
    document.querySelectorAll('[data-hero]').forEach(h => {
      h.setAttribute('data-hero', d === 'B' ? 'dark' : 'light');
    });
    document.querySelectorAll('.seg[data-seg="dir"] button').forEach(b =>
      b.classList.toggle('on', b.dataset.val === d));
    if (save) localStorage.setItem('gcs-dir', d);
    syncNavTone();
    buildGlobes();
  }
  function applyAccent(a, save) {
    if (a === 'royal') root.removeAttribute('data-accent');
    else root.setAttribute('data-accent', a);
    document.querySelectorAll('.swatch').forEach(s => s.classList.toggle('on', s.dataset.val === a));
    if (save) localStorage.setItem('gcs-accent', a);
    buildGlobes();
  }
  window.__applyDir = applyDir;
  window.__applyAccent = applyAccent;

  /* ---------------------------------------------------- reveal + counters */
  const revs = Array.from(document.querySelectorAll('.reveal'));
  const counters = Array.from(document.querySelectorAll('[data-count]'));

  if (reduce) {
    revs.forEach(r => r.classList.add('in'));
    counters.forEach(el => { el.textContent = fmt(parseFloat(el.dataset.count), parseFloat(el.dataset.count)) + (el.dataset.suffix || ''); });
  }

  function inView(el, margin) {
    const r = el.getBoundingClientRect();
    return r.top < (window.innerHeight - margin) && r.bottom > 0;
  }
  function fmt(v, target) {
    if (target % 1 !== 0) return v.toFixed(0);
    return Math.round(v).toLocaleString();
  }
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const dur = 1600, start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased, target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(target, target) + suffix;
    })(start);
  }
  function checkInView() {
    if (reduce) return;
    const m = window.innerHeight * 0.08;
    for (let i = revs.length - 1; i >= 0; i--) {
      if (inView(revs[i], m)) { revs[i].classList.add('in'); revs.splice(i, 1); }
    }
    for (let i = counters.length - 1; i >= 0; i--) {
      const r = counters[i].getBoundingClientRect();
      if (r.top < window.innerHeight - 40 && r.bottom > 0) { animateCount(counters[i]); counters.splice(i, 1); }
    }
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => { checkInView(); syncNavTone(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  /* mobile drawer */
  const drawer = document.querySelector('.drawer');
  document.querySelector('.nav__toggle')?.addEventListener('click', () => drawer.classList.add('open'));
  drawer?.querySelector('.drawer__close')?.addEventListener('click', () => drawer.classList.remove('open'));
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

  /* smooth scroll for in-page links */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      const y = t.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ---------------------------------------------------- globe network */
  function accentColor() {
    return getComputedStyle(root).getPropertyValue('--accent').trim() || '#2563EB';
  }
  function buildGlobes() {
    document.querySelectorAll('.globe[data-globe]').forEach(buildGlobe);
  }
  function buildGlobe(host) {
    const dark = host.closest('[data-hero]')?.getAttribute('data-hero') === 'dark';
    const ac = accentColor();
    const blue = getComputedStyle(root).getPropertyValue('--blue').trim() || '#2C9BD6';
    const line = dark ? 'rgba(255,255,255,0.16)' : 'rgba(24,25,28,0.12)';
    const lineStrong = dark ? 'rgba(91,188,234,0.55)' : ac;
    const dotIdle = dark ? 'rgba(255,255,255,0.5)' : 'rgba(24,25,28,0.42)';
    const NS = 'http://www.w3.org/2000/svg';
    const size = 400, cx = 200, cy = 200, R = 150;

    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

    // soft outer ring
    const ring = document.createElementNS(NS, 'circle');
    ring.setAttribute('cx', cx); ring.setAttribute('cy', cy); ring.setAttribute('r', R);
    ring.setAttribute('fill', 'none'); ring.setAttribute('stroke', line); ring.setAttribute('stroke-width', '1');
    svg.appendChild(ring);

    // blue orbit ring (echoes the logo) with a travelling node
    const orbitR = R + 30, orbitRy = R * 0.4, tilt = -22;
    const og = document.createElementNS(NS, 'g');
    og.setAttribute('transform', `rotate(${tilt} ${cx} ${cy})`);
    const orbit = document.createElementNS(NS, 'ellipse');
    orbit.setAttribute('cx', cx); orbit.setAttribute('cy', cy);
    orbit.setAttribute('rx', orbitR); orbit.setAttribute('ry', orbitRy);
    orbit.setAttribute('fill', 'none'); orbit.setAttribute('stroke', blue);
    orbit.setAttribute('stroke-width', '1.6'); orbit.setAttribute('opacity', dark ? '0.85' : '0.7');
    og.appendChild(orbit);
    const orbitPath = `M${cx - orbitR},${cy} a${orbitR},${orbitRy} 0 1,0 ${orbitR * 2},0 a${orbitR},${orbitRy} 0 1,0 ${-orbitR * 2},0`;
    const onode = document.createElementNS(NS, 'circle');
    onode.setAttribute('r', '5'); onode.setAttribute('fill', blue);
    if (!reduce) {
      const omo = document.createElementNS(NS, 'animateMotion');
      omo.setAttribute('dur', '9s'); omo.setAttribute('repeatCount', 'indefinite');
      omo.setAttribute('path', orbitPath);
      onode.appendChild(omo);
    } else { onode.setAttribute('cx', cx + orbitR); onode.setAttribute('cy', cy); }
    og.appendChild(onode);
    svg.appendChild(og);

    // latitude lines (ellipses)
    [-90, -45, 0, 45, 90].forEach((deg, i) => {
      const ry = R * Math.cos(deg * Math.PI / 180);
      if (ry < 2 && i !== 2) { /* poles thin */ }
      const e = document.createElementNS(NS, 'ellipse');
      e.setAttribute('cx', cx); e.setAttribute('cy', cy);
      e.setAttribute('rx', R); e.setAttribute('ry', Math.max(2, Math.abs(ry)));
      e.setAttribute('fill', 'none'); e.setAttribute('stroke', line); e.setAttribute('stroke-width', '1');
      svg.appendChild(e);
    });
    // longitude lines
    [20, 60, 100, 140].forEach((rx) => {
      const e = document.createElementNS(NS, 'ellipse');
      e.setAttribute('cx', cx); e.setAttribute('cy', cy);
      e.setAttribute('rx', rx); e.setAttribute('ry', R);
      e.setAttribute('fill', 'none'); e.setAttribute('stroke', line); e.setAttribute('stroke-width', '1');
      svg.appendChild(e);
    });

    // nodes on the sphere surface
    const seed = [
      [-0.6, -0.45], [0.55, -0.3], [0.1, -0.7], [-0.35, 0.35],
      [0.62, 0.4], [-0.7, 0.1], [0.25, 0.62], [0.0, -0.05], [0.78, 0.02]
    ];
    const pts = seed.map(([nx, ny]) => {
      const x = cx + nx * R, y = cy + ny * R;
      return { x, y };
    });

    // connection arcs between selected nodes
    const links = [[0,7],[7,1],[1,2],[7,4],[3,7],[5,3],[4,6],[7,8],[8,1]];
    links.forEach((lk, i) => {
      const a = pts[lk[0]], b = pts[lk[1]];
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const dx = b.x - a.x, dy = b.y - a.y;
      const nx = -dy, ny = dx; const len = Math.hypot(nx, ny) || 1;
      const bow = 26;
      const cxp = mx + (nx / len) * bow, cyp = my + (ny / len) * bow;
      const d = `M${a.x},${a.y} Q${cxp},${cyp} ${b.x},${b.y}`;
      const path = document.createElementNS(NS, 'path');
      path.setAttribute('d', d); path.setAttribute('fill', 'none');
      path.setAttribute('stroke', lineStrong); path.setAttribute('stroke-width', '1.4');
      path.setAttribute('stroke-linecap', 'round'); path.setAttribute('opacity', dark ? '0.7' : '0.55');
      const total = path.getTotalLength?.() || 200;
      if (!reduce) {
        path.style.strokeDasharray = total;
        path.style.strokeDashoffset = total;
        path.style.animation = `dash 2.4s ${0.2 + i * 0.18}s var(--ease, ease) forwards`;
      }
      svg.appendChild(path);

      // travelling pulse
      if (!reduce) {
        const pulse = document.createElementNS(NS, 'circle');
        pulse.setAttribute('r', '3'); pulse.setAttribute('fill', dark ? '#5BBCEA' : ac);
        const mo = document.createElementNS(NS, 'animateMotion');
        mo.setAttribute('dur', (2.6 + (i % 3) * 0.6) + 's');
        mo.setAttribute('repeatCount', 'indefinite');
        mo.setAttribute('begin', (i * 0.4) + 's');
        mo.setAttribute('path', d);
        mo.setAttribute('rotate', 'auto');
        pulse.appendChild(mo);
        svg.appendChild(pulse);
      }
    });

    // node dots (on top)
    pts.forEach((p, i) => {
      const isHub = i === 7;
      const g = document.createElementNS(NS, 'g');
      const halo = document.createElementNS(NS, 'circle');
      halo.setAttribute('cx', p.x); halo.setAttribute('cy', p.y);
      halo.setAttribute('r', isHub ? 11 : 7); halo.setAttribute('fill', ac); halo.setAttribute('opacity', '0.14');
      const dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y);
      dot.setAttribute('r', isHub ? 6 : 3.4);
      dot.setAttribute('fill', isHub ? ac : dotIdle);
      if (isHub) dot.setAttribute('stroke', dark ? '#fff' : '#fff'), dot.setAttribute('stroke-width', '1.5');
      if (!reduce) {
        const an = document.createElementNS(NS, 'animate');
        an.setAttribute('attributeName', 'opacity');
        an.setAttribute('values', '0.06;0.2;0.06'); an.setAttribute('dur', (2.5 + i * 0.3) + 's');
        an.setAttribute('repeatCount', 'indefinite');
        halo.appendChild(an);
      }
      g.appendChild(halo); g.appendChild(dot);
      svg.appendChild(g);
    });

    host.innerHTML = '';
    const halo = document.createElement('div');
    halo.className = 'globe__halo';
    host.appendChild(halo);
    host.appendChild(svg);
  }

  // inject keyframe for dash if missing
  if (!document.getElementById('gcs-kf')) {
    const st = document.createElement('style'); st.id = 'gcs-kf';
    st.textContent = '@keyframes dash{to{stroke-dashoffset:0}}';
    document.head.appendChild(st);
  }

  /* ---------------------------------------------------- switcher panel */
  const fab = document.querySelector('.switcher__fab');
  const panel = document.querySelector('.switcher__panel');
  fab?.addEventListener('click', () => panel.classList.toggle('hidden'));
  document.querySelectorAll('.seg[data-seg="dir"] button').forEach(b =>
    b.addEventListener('click', () => applyDir(b.dataset.val, true)));
  document.querySelectorAll('.swatch').forEach(s =>
    s.addEventListener('click', () => applyAccent(s.dataset.val, true)));

  /* hide floating controls + disable scroll-gated reveals when embedded (compare view) */
  const embedded = params.get('chrome') === 'off';
  if (embedded) {
    const sw = document.querySelector('.switcher');
    if (sw) sw.style.display = 'none';
    const st = document.createElement('style');
    st.textContent = '.reveal{opacity:1 !important;transform:none !important;transition:none !important}';
    document.head.appendChild(st);
    document.querySelectorAll('.reveal').forEach(r => r.classList.add('in'));
    counters.forEach(el => { el.textContent = fmt(parseFloat(el.dataset.count), parseFloat(el.dataset.count)) + (el.dataset.suffix || ''); });
    counters.length = 0;
  }

  /* form (no backend — friendly confirm) */
  document.querySelector('.form')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn');
    const orig = btn.innerHTML;
    btn.innerHTML = 'Message sent ✓';
    btn.style.background = 'var(--accent-600)';
    setTimeout(() => { btn.innerHTML = orig; e.target.reset(); btn.style.background = ''; }, 2600);
  });

  /* apply saved prefs + initial paint */
  applyDir(savedDir, false);
  applyAccent(savedAccent, false);
  buildGlobes();
  checkInView();
  syncNavTone();
  requestAnimationFrame(checkInView);
  window.addEventListener('load', checkInView);

  // cleanup for React lifecycle (e.g. StrictMode double-mount in dev)
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    window.removeEventListener('load', checkInView);
  };
}
