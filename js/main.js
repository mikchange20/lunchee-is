(() => {
  const COPY = window.LUNCHEE_COPY;
  const AUDS = ['rentals', 'crews', 'drivers', 'companies', 'diet', 'stores'];
  const LANGS = ['en', 'pl', 'is'];
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Translations of the shared (static) sections, keyed by data-i18n (see content.js). English lives in the HTML.
  const SHARED = window.LUNCHEE_SHARED || {};

  // A language counts as ready once it has any copy; until then its button stays hidden.
  const ready = (l) => l === 'en' || Object.keys(SHARED[l] || {}).length > 0 || Object.keys(COPY[l] || {}).length > 0;

  // Outline icons (24×24, stroke = currentColor)
  const ICON = {
    coins: '<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/><path d="M9 15v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.7-2.7-3-6-3"/>',
    tool: '<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3z"/><path d="M14.5 6.5 17 4l3 3-2.5 2.5"/><path d="M5 5l4 4"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    flame: '<path d="M12 21a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-3 3-5 5-5 8a7 7 0 0 0 7 7z"/><path d="M12 21a3 3 0 0 0 3-3c0-2-1.5-3-3-5-1.5 2-3 3-3 5a3 3 0 0 0 3 3z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    truck: '<path d="M2 6h12v10H2zM14 9h4l4 4v3h-8z"/><circle cx="6" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>',
    plug: '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v4"/>',
    wallet: '<path d="M4 7h15a1 1 0 0 1 1 1v11H5a1 1 0 0 1-1-1z"/><path d="M4 7l11-3v3"/><path d="M15 12h5v4h-5a2 2 0 0 1 0-4z"/>',
    gift: '<path d="M4 10h16v11H4zM3 7h18v3H3zM12 7v14"/><path d="M12 7c-2-4-6-4-6-1.5S9 7 12 7c3 0 6-.5 6-1.5S14 3 12 7z"/>',
    box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
    bus: '<rect x="4" y="3" width="16" height="15" rx="2"/><path d="M4 11h16M8 7h8"/><circle cx="8" cy="14.5" r="1"/><circle cx="16" cy="14.5" r="1"/><path d="M6.5 18v2.5M17.5 18v2.5"/>',
    taxi: '<path d="M3 17v-4l2-5h14l2 5v4z"/><path d="M3 13h18M9 8l.5-3h5l.5 3"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="16.5" cy="17.5" r="2"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    tree: '<path d="M12 3 7 9h3l-4 5h4l-5 6h14l-5-6h4l-4-5h3z"/><path d="M12 20v2"/>',
    leaf: '<path d="M5 20c0-9 6-15 15-15 0 9-6 15-15 15z"/><path d="M5 20 14 11"/>',
    dumbbell: '<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>',
    flake: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7"/><path d="m9 4 3 2 3-2M9 20l3-2 3 2M4 10.5l3.5-.5L6 7M18 14l-1.5 3 3.5-.5M4 13.5l3.5.5L6 17M18 10l-1.5-3 3.5.5"/>'
  };
  const icon = (n, cls = 'ico') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICON[n] || ''}</svg>`;

  const COLOURS = [['pearl', 'Pearl'], ['nature', 'Nature'], ['city', 'City'], ['glamour', 'Glamour']];
  // Label shown on every section that changes with the chosen industry: "● Car rentals · change"
  const audPill = (variant = '') => {
    const t = $(`.tile[data-aud="${aud}"] b`);
    return `<p class="pill pill--aud ${variant}"><i class="pill__dot" aria-hidden="true"></i><span>${t ? t.textContent : ''}</span><a href="#tabs" class="pill__change" data-change>${ui().change}</a></p>`;
  };
  const visualCard = (v) => `<figure class="vcard reveal"><img src="assets/img/${v.img}.jpg" alt="" width="900" height="900" loading="lazy"><figcaption><span class="vcard__tag">${v.tag}</span><b>${v.h}</b><p>${v.p}</p></figcaption></figure>`;
  const placeholder = (label, ui) => `<figure class="ph" role="img" aria-label="${ui.placeholder}: ${label}">${icon('camera')}<b>${ui.placeholder}</b><span>${label}</span></figure>`;

  // Scroll reveal. After a tile/language swap the new content shows at once (the person is already looking at it).
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let swapping = false;
  const io = 'IntersectionObserver' in window && !reduce ? new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
  const watchReveals = () => $$('.reveal:not(.is-in)').forEach((el) => {
    if (io && !(swapping && el.closest('[data-dyn]'))) io.observe(el); else el.classList.add('is-in');
  });

  // ---------- Falling snow (companies / Christmas campaign only) ----------
  const snow = (() => {
    let cv, ctx, flakes = [], raf = 0, active = false, userOn = true;
    const make = () => {
      const w = innerWidth, h = innerHeight, n = Math.min(90, Math.round(w * h / 14000));
      flakes = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, r: 1 + Math.random() * 3, s: .3 + Math.random() * .9, d: Math.random() * Math.PI * 2 }));
    };
    const size = () => { const dpr = Math.min(devicePixelRatio || 1, 2); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); make(); };
    const tick = () => {
      const w = innerWidth, h = innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(255,255,255,.9)';
      ctx.shadowColor = 'rgba(0,60,120,.35)'; ctx.shadowBlur = 3;
      for (const f of flakes) {
        f.y += f.s; f.d += .01; f.x += Math.sin(f.d) * .4;
        if (f.y > h + 5) { f.y = -5; f.x = Math.random() * w; }
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (raf || reduce) return;
      if (!cv) {
        cv = document.createElement('canvas'); cv.className = 'snow'; cv.setAttribute('aria-hidden', 'true');
        document.body.appendChild(cv); ctx = cv.getContext('2d');
        addEventListener('resize', () => cv && size());
      }
      cv.hidden = false; size(); raf = requestAnimationFrame(tick);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; if (cv) cv.hidden = true; };
    document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (active && userOn) start(); });
    return {
      get on() { return userOn; },
      enable(v) { active = v; if (active && userOn) start(); else stop(); },
      toggle() { userOn = !userOn; this.enable(active); }
    };
  })();

  // ---------- Analytics: works once the GA4 tag (gtag.js) is pasted into <head>; until then events just queue in dataLayer ----------
  window.dataLayer = window.dataLayer || [];
  const track = (event, params = {}) => {
    if (typeof window.gtag === 'function') window.gtag('event', event, params);
    else window.dataLayer.push({ event, ...params });
  };

  const goToForm = (e) => {
    e.preventDefault();
    const el = e.currentTarget instanceof Element ? e.currentTarget : null;
    const f = $('.form');
    f.cta.value = (el && (el.dataset.track || el.textContent.trim())) || '';
    f.segment.value = aud;
    $('#contact').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(() => $('.form [name="name"]').focus({ preventScroll: true }), 600);
  };

  // Christmas campaign – all dates live in LUNCHEE_CAMPAIGN (content.js). ?date=YYYY-MM-DD previews another day.
  const CAMP = window.LUNCHEE_CAMPAIGN || {};
  const pad = (n) => String(n).padStart(2, '0');
  const now = new Date();
  const qDate = new URLSearchParams(location.search).get('date');
  const TODAY = /^\d{4}-\d{2}-\d{2}$/.test(qDate || '') ? qDate : `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const inCampaign = !!CAMP.start && TODAY >= CAMP.start && !(CAMP.b2bFrom && TODAY >= CAMP.b2bFrom);
  // Christmas content: Christmas hero, gift tile, snow, gift bar on the other versions
  const XMAS_ON = inCampaign && !!CAMP.end && TODAY <= CAMP.end;
  // Companies tab first and the default version
  const COMPANIES_FIRST = inCampaign;
  // Delivery before Christmas is promised only with a confirmed order-by date, and only until that day
  const ORDER_BY = CAMP.orderBy && TODAY <= CAMP.orderBy ? CAMP.orderBy : null;
  // Christmas order deadline: until closeBy "orders close on …", after it "missed it? ask anyway" (until the campaign ends)
  const CLOSE_BY = CAMP.closeBy || null;
  const CLOSED = !!CLOSE_BY && TODAY > CLOSE_BY;

  let lang = 'en';
  let aud = COMPANIES_FIRST ? 'companies' : 'rentals';
  const t = () => {
    if (!COPY.en[aud]) aud = 'rentals'; // never break the page if an audience has no copy (e.g. stale cached script)
    return Object.assign({}, COPY.en[aud], (COPY[lang] || {})[aud]);
  };
  const ui = () => Object.assign({}, COPY.en.ui, (COPY[lang] || {}).ui);

  // ---------- Dynamic sections ----------
  const mock = (m) => `<div class="mock" aria-hidden="true"><p class="mock__title">${m.title}</p>
    ${m.rows.map((r, i) => `<p class="mock__row mock__row--${m.type}${i === m.rows.length - 1 ? ' is-on' : ''}"><span class="box"></span>${r}</p>`).join('')}</div>`;

  const renderHow = (h, u) => {
    let body = '';
    if (h.kind === 'rentals' || h.kind === 'cards') {
      body = `<div class="models__grid">${h.cards.map((c) => `
        <article class="model-card reveal"><h3>${c.h}</h3><p>${c.p}</p>${mock(c.mock)}</article>`).join('')}</div>`;
      if (h.calc) body += renderCalc(h.calc);
    } else if (h.kind === 'crews') {
      body = `<div class="models__grid">
        <article class="model-card reveal">
          <ol class="timeline">${h.timeline.map(([time, txt], i) => `<li${i === h.timeline.length - 1 ? ' class="is-on"' : ''}><b>${time}</b><span>${txt}</span></li>`).join('')}</ol>
          <p>${h.p}</p>
          <ul class="names" aria-hidden="true">${COLOURS.map(([f], i) => `<li><img src="assets/img/${f}.jpg" alt="" width="900" height="900" loading="lazy"><span>${h.names[i]}</span></li>`).join('')}</ul>
        </article>
        ${visualCard(h.visual)}
      </div>`;
    } else if (h.kind === 'drivers' || h.kind === 'diet') {
      body = `<div class="models__grid models__grid--3">${h.cards.map(([ic, ttl, p]) => `
        <article class="model-card reveal">${icon(ic)}<h3>${ttl}</h3><p>${p}</p></article>`).join('')}</div>
        ${visualCard(h.visual)}`;
    } else if (h.kind === 'stores') {
      body = `<div class="models__grid">
        <article class="model-card reveal"><h3>${h.shelf}</h3>
          <div class="mock shelf" aria-hidden="true">
            <span class="shelf__tag">${h.badge} · Lunchee</span>
            <div class="shelf__row">${COLOURS.map(([f]) => `<img src="assets/img/${f}.jpg" alt="" width="900" height="900" loading="lazy">`).join('')}</div>
            <div class="shelf__plank"></div>
          </div>
        </article>
        <article class="model-card reveal"><h3>${h.online}</h3>
          <div class="mock shop" aria-hidden="true">
            <div class="shop__img"><img src="assets/img/city.jpg" alt="" width="900" height="900" loading="lazy"><span class="shop__badge">${h.badge}</span></div>
            <div class="shop__info"><b>${h.product}</b><small>${h.productSub}</small>
              <span class="shop__dots">${COLOURS.map(([f]) => `<i class="dot dot--${f}"></i>`).join('')}</span>
              <span class="shop__stock">${h.stock}</span></div>
          </div>
        </article>
      </div>`;
    }
    // every audience section ends with its own call to action (rentals: the calculator has it)
    const end = h.calc ? '' : `<div class="how__cta reveal"><a class="btn" href="#contact" data-to-form data-track="section_${aud}">${t().cta}</a></div>`;
    return `<div class="how__head reveal">${audPill()}<h2>${h.h}</h2></div>${body}${end}`;
  };

  // Rentals: break-even calculator. No prices are filled in – the rental company enters its own numbers.
  const renderCalc = (k) => `
    <div class="calc reveal" data-calc>
      <div class="calc__copy"><h3>${twoTone(k.h)}</h3><p>${k.p}</p></div>
      <div class="calc__box">
        <label><span>${k.cost}</span><input type="text" inputmode="numeric" autocomplete="off" data-calc-cost placeholder="ISK"></label>
        <label><span>${k.price}</span><input type="text" inputmode="numeric" autocomplete="off" data-calc-price placeholder="ISK"></label>
        <output class="calc__out" data-calc-out aria-live="polite"></output>
        <a class="btn btn--block" href="#contact" data-to-form data-track="rentals_calculator">${k.cta}</a>
      </div>
    </div>`;
  const nf = new Intl.NumberFormat('de-DE'); // Icelandic style: 12.000
  const num = (el) => Number(String(el.value).replace(/[^\d]/g, '')) || 0;
  const bindCalc = (k) => {
    const box = $('[data-calc]');
    if (!box) return;
    const cost = $('[data-calc-cost]', box), price = $('[data-calc-price]', box), out = $('[data-calc-out]', box);
    const update = () => {
      [cost, price].forEach((el) => { const n = num(el); el.value = n ? nf.format(n) : ''; });
      const c = num(cost), p = num(price);
      if (!c || !p) { out.innerHTML = `<small>${k.empty}</small>`; return; }
      const n = Math.ceil(c / p);
      out.innerHTML = `<span>${k.result}</span><b>${n} ${n === 1 ? k.one : k.many}</b><small>${k.after.replace('{x}', nf.format(p))}</small>`;
    };
    cost.addEventListener('input', update);
    price.addEventListener('input', update);
    update();
  };

  // Christmas campaign for companies: the gift options (four colours) – price and ordering follow in #pricing
  const renderXmas = (x) => `
    <div class="xmas__inner">
      <div class="xmas__head reveal">
        <p class="pill pill--xmas">${icon('tree')}${x.pill}</p>
        <h2>${twoTone(x.h)}</h2>
        <p class="lead">${x.lead}</p>
      </div>
      <ul class="guide">${x.guide.map(([f, h, p]) => `
        <li class="reveal"><span class="guide__tag">${icon('gift')}</span><img src="assets/img/${f}.jpg" alt="" width="900" height="900" loading="lazy"><b>${h}</b><p>${p}</p></li>`).join('')}</ul>
      <div class="xmas__foot reveal">
        <a class="btn btn--yellow" href="#pricing" data-track="xmas_see_prices">${x.cta}</a>
        <em>${x.greeting}</em>
        <button type="button" class="snow-toggle" data-snow-toggle aria-pressed="true">${icon('flake')}<span>${x.snowOn}</span></button>
      </div>
    </div>`;

  // Companies: price per quantity (50+ highlighted) next to the three ordering steps
  const renderPricing = (p) => `
    <div class="pricing__inner">
      <div class="pricing__head reveal"><h2>${p.h}</h2><p class="lead">${p.lead}</p></div>
      <div class="pricing__grid">
        <div class="price-card reveal">
          <table class="price-table">
            <thead><tr><th scope="col">${p.qty}</th><th scope="col">${p.unit}</th></tr></thead>
            <tbody>${p.rows.map(([q, v], i) => {
              const best = i === p.rows.length - 1;
              return `<tr${best ? ' class="is-best"' : ''}><th scope="row">${q}${best ? ` <span class="price-best">${p.best}</span>` : ''}</th><td>${v}</td></tr>`;
            }).join('')}</tbody>
          </table>
          <p class="price-note">${p.note}</p>
          <a class="btn btn--block" href="#contact" data-to-form data-track="pricing_quote">${p.cta}</a>
        </div>
        <div class="order-steps reveal"><h3>${p.stepsH}</h3>
          <ol>${p.steps.map(([h, s]) => `<li><b>${h}</b><span>${s}</span></li>`).join('')}</ol>
        </div>
      </div>
    </div>`;

  const fmtDate = (iso) => new Intl.DateTimeFormat(lang === 'pl' ? 'pl-PL' : 'en-GB', { day: 'numeric', month: 'long' }).format(new Date(`${iso}T12:00`));
  // [headline, small print] for the order deadline, or null without one
  const xmasDeadline = (x) => {
    const d = CLOSE_BY && (CLOSED ? x.late : x.closeBy);
    return d ? d.map((s) => s.replace('{date}', fmtDate(CLOSE_BY))) : null;
  };
  const xmasDelivery = (x) => {
    if (ORDER_BY) return x.orderBy.replace('{date}', fmtDate(ORDER_BY));
    const d = xmasDeadline(x);
    return d ? `${d[0]}${CLOSED ? '' : '.'} ${d[1]}` : x.delivery;
  };

  // Section order. Companies get a short path: benefits → gift options → pricing → form, then FAQ and the details.
  const ORDER = {
    default: ['why', 'how', 'xmas', 'pricing', 'benefits', 'product', 'steps', 'specs', 'trust', 'faq', 'contact'],
    companiesXmas: ['why', 'xmas', 'pricing', 'contact', 'faq', 'trust', 'product', 'how', 'steps', 'specs', 'benefits'],
    companies: ['why', 'product', 'pricing', 'contact', 'faq', 'trust', 'how', 'steps', 'specs', 'xmas', 'benefits']
  };

  // Brand headline: first part blue, the rest white ("Twój czas na / ciepły posiłek")
  const twoTone = (txt) => {
    const m = txt.match(/^(.+?)\s*\|\s*(.+)$/) || txt.match(/^(.+?[.?!])\s+(.+)$/) || txt.match(/^(.+?\s[–—])\s+(.+)$/);
    return m ? `<span class="tt-blue">${m[1]}</span> <span class="tt-white">${m[2]}</span>` : `<span class="tt-blue">${txt}</span>`;
  };

  // Big see-through line drawings on the right of the coloured "why" band, one per audience (white, like a reflection)
  const flake = (x, y, r = 12) => `<path d="M${x - r} ${y}h${2 * r}M${x} ${y - r}v${2 * r}M${x - r * .7} ${y - r * .7}l${r * 1.4} ${r * 1.4}M${x + r * .7} ${y - r * .7}l${-r * 1.4} ${r * 1.4}"/>`;
  const ART = {
    rentals: `<rect class="f" x="200" y="10" width="140" height="122" rx="16"/>
      <rect x="218" y="34" width="16" height="16" rx="4"/><path d="m221 42 4 4 7-8M246 42h76"/>
      <rect x="218" y="64" width="16" height="16" rx="4"/><path d="m221 72 4 4 7-8M246 72h60"/>
      <rect class="f2" x="218" y="94" width="16" height="16" rx="4"/><path class="b" d="m221 102 4 4 7-8M246 102h70"/>
      <path class="f" d="M24 222v-30q0-10 10-12l32-6 30-32q8-8 20-8h74q12 0 20 8l30 32 28 4q12 2 12 14v32z"/>
      <path d="M100 172l22-24q4-4 10-4h28v28zM172 144h20q6 0 10 4l22 24h-52z"/>
      <circle class="f" cx="80" cy="224" r="22"/><circle cx="80" cy="224" r="8"/><circle class="f" cx="226" cy="224" r="22"/><circle cx="226" cy="224" r="8"/>`,
    crews: `<path class="f" d="M40 178q0-74 74-74t74 74z"/><path class="f" d="M22 178h184q0 16-16 16H38q-16 0-16-16z"/><path d="M98 106v44M130 106v44"/>
      <path class="f" d="M276 56l-42 178h84z"/><path d="M262 112h28M249 168h54M218 234h116"/>
      <circle class="f" cx="150" cy="40" r="26"/><path d="M150 26v14l10 8"/>`,
    drivers: `<rect class="f" x="36" y="36" width="156" height="184" rx="24"/><rect x="56" y="58" width="116" height="84" rx="12"/>
      <circle cx="72" cy="186" r="11"/><circle cx="156" cy="186" r="11"/><path d="M98 186h32M36 82H20v34M192 82h16v34M64 220v22M164 220v22"/>
      <path d="M232 250 288 30M352 250 312 30"/><path class="b" d="M292 238v-26M295 186v-20M298 140v-16M300 102v-12M302 70v-9"/>`,
    companies: `<rect class="f" x="62" y="112" width="180" height="130" rx="12"/><rect class="f" x="48" y="80" width="208" height="38" rx="10"/>
      <path class="b" d="M152 80v162"/><path class="f" d="M152 80c-20-42-74-42-64-10 6 18 42 12 64 10 22 2 58 8 64-10 10-32-44-32-64 10z"/>
      ${flake(304, 56, 16)}${flake(322, 176, 11)}${flake(24, 40, 10)}${flake(280, 236, 8)}`,
    diet: `<path class="f" d="M64 246q24-92 46-140 20-12 36 12-30 56-82 128z"/><path d="M128 104q-8-32 6-50M134 108q12-28 36-32M140 112q24-10 42 2M96 170l14 6M84 204l12 5"/>
      <circle class="f" cx="212" cy="168" r="26"/><circle class="f" cx="248" cy="146" r="30"/><circle class="f" cx="282" cy="172" r="24"/><path d="M232 250q4-32-8-60M260 250q-2-32 12-56M228 250h36"/>
      <circle class="f" cx="186" cy="64" r="30"/><path d="M174 38l12 8 12-8M186 46V32"/>
      <path class="f" d="M284 36c42 0 60 20 60 62-42 0-60-20-60-62z"/><path d="M284 36l46 46"/>`
  };
  const artSvg = (a) => ART[a] ? `<div class="why__art" aria-hidden="true"><svg viewBox="0 0 360 260">${ART[a]}</svg></div>` : '';

  const render = () => {
    const c = t();
    const u = ui();
    const tile = $(`.tile[data-aud="${aud}"] b`);
    const x = XMAS_ON ? c.xmas : null;

    // Hero: companies have their own (Christmas offer during the campaign, year-round offer after it); the rest share one
    const hero = (x && x.hero) || c.hero;
    const sh = SHARED[lang] || {};
    $$('.hero [data-i18n^="hero."]').forEach((el) => {
      el.innerHTML = (hero && hero[el.dataset.i18n.slice(5)]) || sh[el.dataset.i18n] || originals.get(el);
    });
    const cta2 = $('[data-hero-cta2]');
    cta2.setAttribute('href', hero ? hero.cta2To : '#steps');
    cta2.dataset.track = hero ? 'hero_offer' : 'hero_how_it_works';
    const price = $('[data-hero-price]');
    price.hidden = !(hero && hero.price);
    price.innerHTML = hero && hero.price ? `<b>${hero.price}</b><span>${hero.priceNote}</span>` : '';
    const deadline = $('[data-hero-deadline]');
    const dl = x && !ORDER_BY ? xmasDeadline(x) : null;
    deadline.hidden = !dl;
    deadline.innerHTML = dl ? `${icon('calendar')}<span><b>${dl[0]}</b><small>${dl[1]}</small></span>` : '';

    const main = $('main');
    (aud !== 'companies' ? ORDER.default : x ? ORDER.companiesXmas : ORDER.companies).forEach((id) => main.appendChild($(`#${id}`)));
    $('#benefits').hidden = aud === 'companies'; // its points are already in the companies "why" block
    const pr = $('[data-dyn="pricing"]');
    pr.hidden = !c.pricing;
    pr.innerHTML = c.pricing ? renderPricing(c.pricing) : '';

    $('[data-dyn="why"]').innerHTML = `${artSvg(aud)}
      <div class="why__head reveal">${audPill('pill--on-color')}<h2>${twoTone(c.why.h)}</h2><p class="lead">${c.why.lead}</p></div>
      <ul class="why__list">${c.why.items.map(([ic, h, p]) => `<li class="reveal">${icon(ic)}<h3>${h}</h3><p>${p}</p></li>`).join('')}</ul>`;
    $('[data-dyn="how"]').innerHTML = renderHow(c.how, u);
    const xm = $('[data-dyn="xmas"]');
    xm.hidden = !x;
    xm.innerHTML = x ? renderXmas(x) : '';
    const tag = $('[data-xmas-tag]');
    tag.hidden = !x;
    tag.innerHTML = x ? `${icon('gift')}<span>${x.tag}</span>` : '';
    if (x) {
      const tg = $('[data-snow-toggle]');
      const syncToggle = () => { tg.setAttribute('aria-pressed', String(snow.on)); tg.querySelector('span').textContent = snow.on ? x.snowOn : x.snowOff; };
      syncToggle();
      tg.addEventListener('click', () => { snow.toggle(); syncToggle(); });
    }
    // Snow starts only once the gift tile has been opened
    snow.enable(!!x && document.documentElement.classList.contains('gift-open'));
    const bar = $('[data-xbar]');
    bar.hidden = !XMAS_ON || aud === 'companies';
    $('[data-xbar-text]').textContent = u.xbar;
    $('[data-xbar-link]').textContent = u.xbarLink;
    $('[data-dyn="faq"]').innerHTML = `<div class="faq__head reveal">${audPill()}<h2>${u.faq}</h2></div>
      <div class="faq__list reveal">${[...((x && x.faq) || []), ...c.faq].map(([q, a]) => `<details class="qa"><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
    // Closing section: one shared B2B message; the individual (diet) version has its own
    const fc = c.b2c ? c.form : c.final || { h: u.finalH, lead: u.finalP };
    $('[data-dyn="cta"]').innerHTML = `${audPill('pill--on-dark')}<h2>${fc.h}</h2><p>${fc.lead}</p>${x ? `<p class="cta__note">${icon('gift')}${xmasDelivery(x)}</p>` : ''}`;
    $$('[data-go-aud]').forEach((a) => (a.dataset.goAud === aud ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));

    // Form: one B2B form; "Interested in" follows the chosen industry. Company is optional only for individuals (diet).
    const form = $('.form');
    const sel = form.segment;
    sel.innerHTML = AUDS.map((a) => { const b = $(`.tile[data-aud="${a}"] b`); return `<option value="${a}">${b ? b.textContent : a}</option>`; }).join('');
    sel.value = aud;
    // Companies: quote request – company first, quantity as a required range, colours, no "Interested in"
    const q = c.quote;
    const fu = Object.assign({}, u, q);
    $$('[data-ui]', form).forEach((el) => { el.innerHTML = fu[el.dataset.ui]; });
    $$('[data-ui-ph]', form).forEach((el) => { el.placeholder = fu[el.dataset.uiPh]; });
    form.classList.toggle('form--quote', !!q);
    $('[data-f-segment]', form).hidden = !!q;
    const qtyText = $('[data-f-qty] input', form), qtyRange = $('[data-qty-range]', form), colours = $('[data-f-colours]', form);
    $('[data-f-qty]', form).hidden = qtyText.disabled = !!q;
    $('[data-f-qty-range]', form).hidden = qtyRange.disabled = !q;
    qtyRange.required = !!q;
    if (q) {
      const keep = qtyRange.value;
      qtyRange.innerHTML = `<option value="">${q.qtyPh}</option>${q.qty.map((o) => `<option>${o}</option>`).join('')}`;
      qtyRange.value = keep;
    }
    colours.hidden = colours.disabled = !q;
    form.company.required = !c.b2c;
    $('[data-company-opt]', form).hidden = !c.b2c;
    $('.form__head').hidden = !!c.b2c;
    $('[data-submit]').textContent = c.b2c ? c.form.button : (q && q.submit) || u.submit;

    $$('[data-cta]').forEach((a) => {
      // Phones get a short label so the header button stays on one line
      a.innerHTML = '<span class="cta-long"></span><span class="cta-short"></span>';
      a.firstChild.textContent = c.cta;
      a.lastChild.textContent = c.b2c ? c.cta : u.navShort;
    });
    $$('.tile').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.aud === aud)));
    // Unlisted audiences: no tile on the page, but their direct link (e.g. /stores) still works
    $$('.tile[data-unlisted]').forEach((el) => { el.hidden = el.dataset.aud !== aud; });
    document.title = `${c.title} | Lunchee.is`;
    // Search engines: a direct link to a version (/companies) gets its own canonical address and description
    if (initial || USES) {
      $('link[rel="canonical"]').href = `https://lunchee.is/${initial || 'uses'}`;
      if (c.desc) $('meta[name="description"]').content = c.desc;
    }
    document.documentElement.dataset.aud = aud;
    if (c.how.calc) bindCalc(c.how.calc);
    watchReveals();
  };

  // ---------- Routing: /rentals, /crews, /drivers, /stores (stub folders redirect to ?for=…) ----------
  const base = location.pathname.replace(/[^/]*$/, '').replace(new RegExp(`/(${AUDS.join('|')}|uses)/$`), '/');
  const fromUrl = () => {
    const q = new URLSearchParams(location.search).get('for');
    const h = location.hash.slice(1);
    const p = location.pathname.split('/').filter(Boolean).pop();
    return [q, h, p].find((x) => AUDS.includes(x));
  };
  const setUrl = () => {
    const params = new URLSearchParams(location.search);
    params.delete('for');
    const qs = params.toString();
    const hash = AUDS.includes(location.hash.slice(1)) ? '' : location.hash;
    history.replaceState(null, '', `${base}${aud}${qs ? `?${qs}` : ''}${hash}`);
  };

  const initial = fromUrl();
  // /uses: the page with all industries (tiles + menu). During the Christmas campaign the home page is the companies offer.
  const USES = !initial && [new URLSearchParams(location.search).get('for'), location.pathname.split('/').filter(Boolean).pop()].includes('uses');
  if (initial) { aud = initial; setUrl(); }
  if (USES) {
    aud = 'rentals';
    const params = new URLSearchParams(location.search);
    params.delete('for');
    history.replaceState(null, '', `${base}uses${params.toString() ? `?${params}` : ''}${location.hash}`);
  }
  // Focused landing page (a direct link like /companies, or the home page during the campaign): one offer, no industry tiles, menu or Christmas bar
  const FOCUS = !!initial || (COMPANIES_FIRST && !USES);
  document.documentElement.classList.toggle('focus', FOCUS);
  $$('[data-uses]').forEach((a) => { a.href = `${base}uses`; });
  // There is no gift tile to open there, so the Christmas snow is on from the start (the toggle can switch it off)
  if (FOCUS && XMAS_ON) document.documentElement.classList.add('gift-open');

  // Unwrap the gift tile: bow flies off, ribbon drops, confetti
  const unwrap = (el) => {
    el.classList.add('is-open');
    document.documentElement.classList.add('gift-open');
    if (aud === 'companies') snow.enable(true);
    if (reduce) return;
    el.classList.remove('is-unwrapping'); void el.offsetWidth; el.classList.add('is-unwrapping');
    const colors = ['#F2B90C', '#F26A3D', '#0054A6', '#BCDD3F', '#7693DF', '#FFFFFF'];
    for (let i = 0; i < 18; i++) {
      const c = document.createElement('i');
      c.className = 'confetti';
      const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 90;
      c.style.cssText = `background:${colors[i % colors.length]};--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d - 30}px;--rot:${Math.random() * 720 - 360}deg`;
      el.appendChild(c);
      setTimeout(() => c.remove(), 1000);
    }
    setTimeout(() => el.classList.remove('is-unwrapping'), 900);
  };

  // Switch industry (tabs, header menu). Optionally scroll to the tabs so the change is visible.
  const scrollToTabs = () => $('#tabs').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  const select = (next, { scroll = false } = {}) => {
    if (next !== aud && AUDS.includes(next)) {
      const tile = $(`.tile[data-aud="${next}"]`);
      if (tile && tile.classList.contains('tile--gift')) unwrap(tile);
      // Leaving the Christmas version wraps the gift again (and drops the snowflake cursor)
      if (aud === 'companies') { $('.tile--gift')?.classList.remove('is-open'); document.documentElement.classList.remove('gift-open'); }
      aud = next;
      track('segment_select', { segment: next });
      document.body.classList.add('is-swapping');
      swapping = true;
      render();
      swapping = false;
      setUrl();
      requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove('is-swapping')));
    }
    if (scroll) scrollToTabs();
  };
  // After the Christmas content ends the companies tile is a normal tile (no wrapping, no snow)
  if (!XMAS_ON) {
    const g = $('.tile--gift');
    $$('.gift__ribbon, .gift__bow', g).forEach((el) => el.remove());
    g.classList.remove('tile--gift');
  }
  if (COMPANIES_FIRST && !USES) {
    $('#tabs').prepend($('.tile[data-aud="companies"]'));
    $('#menu-uses').prepend($('[data-go-aud="companies"]').closest('li'));
  }
  $$('.tile').forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    // The gift starts wrapped even when it is the default version – the first click opens it
    if (el.dataset.aud === aud && el.classList.contains('tile--gift') && !el.classList.contains('is-open')) unwrap(el);
    select(el.dataset.aud);
  }));
  // Christmas bar: switch to the companies version and go straight to the offer form
  $('[data-xbar]').addEventListener('click', (e) => {
    select('companies');
    track('cta_click', { cta: 'xmas_bar', segment: 'companies' });
    goToForm(e);
  });
  document.addEventListener('click', (e) => {
    const ch = e.target instanceof Element && e.target.closest('[data-change]');
    if (ch) { e.preventDefault(); scrollToTabs(); }
  });

  // ---------- Language (EN / IS) ----------
  const originals = new Map();
  const applyShared = () => {
    const d = SHARED[lang] || {};
    $$('[data-i18n]').forEach((el) => {
      if (!originals.has(el)) originals.set(el, el.innerHTML);
      el.innerHTML = d[el.dataset.i18n] || originals.get(el);
    });
    $$('[data-i18n-alt]').forEach((el) => {
      const k = `alt:${el.dataset.i18nAlt}`;
      if (!originals.has(k)) originals.set(k, el.alt);
      el.alt = d[el.dataset.i18nAlt] || originals.get(k);
    });
  };
  const setLang = (l) => {
    if (!LANGS.includes(l) || !ready(l)) l = 'en';
    lang = l;
    document.documentElement.lang = l;
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    try { localStorage.setItem('lunchee-lang', l); } catch (e) { /* storage blocked */ }
    applyShared();
    swapping = started;
    render();
    swapping = false;
    started = true;
  };
  let started = false;
  $$('.lang button').forEach((b) => {
    if (!ready(b.dataset.lang)) b.hidden = true;
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  let saved = null;
  try { saved = localStorage.getItem('lunchee-lang'); } catch (e) { /* storage blocked */ }
  // ?lang=pl in a link wins over the remembered choice
  setLang(new URLSearchParams(location.search).get('lang') || saved || 'en');

  // ---------- Every "to the form" button (header, hero, sections, calculator, Christmas) ----------
  document.addEventListener('click', (e) => {
    const a = e.target instanceof Element && e.target.closest('[data-cta], [data-to-form], [data-cta-xmas]');
    if (!a) return;
    track('cta_click', { cta: a.dataset.track || (a.matches('[data-cta]') ? 'header' : 'xmas'), segment: aud });
    goToForm({ preventDefault: () => e.preventDefault(), currentTarget: a });
  });
  $$('[data-track]:not([data-to-form])').forEach((a) => a.addEventListener('click', () => track('cta_click', { cta: a.dataset.track, segment: aud })));

  // Soft glow that follows the mouse on .glow sections (mouse only, off with reduced motion) – as on the Flavo LP
  if (!reduce) {
    $$('.glow').forEach((el) => { const l = document.createElement('span'); l.className = 'glow__layer'; l.setAttribute('aria-hidden', 'true'); el.prepend(l); });
    let last = null, graf = 0;
    addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const el = e.target instanceof Element ? e.target.closest('.glow') : null;
      if (last && last !== el) last.classList.remove('is-glow');
      last = el;
      if (!el) return;
      cancelAnimationFrame(graf);
      graf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
        el.classList.add('is-glow');
      });
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => last && last.classList.remove('is-glow'));
  }

  // Header shadow after scrolling
  const nav = $('#nav');

  // ---------- Header menu: "Use cases" dropdown + mobile burger ----------
  const burger = $('.burger');
  const drop = $('.menu__btn');
  const closeMenu = () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    drop.setAttribute('aria-expanded', 'false');
  };
  burger.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  drop.addEventListener('click', () => drop.setAttribute('aria-expanded', String(drop.getAttribute('aria-expanded') !== 'true')));
  document.addEventListener('click', (e) => { if (!(e.target instanceof Element) || !e.target.closest('.nav')) closeMenu(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  $$('.menu__link').forEach((a) => a.addEventListener('click', closeMenu));
  $$('[data-go-aud]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); closeMenu(); select(a.dataset.goAud, { scroll: true }); }));
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Form (api/send.php on lunchee.is; FormSubmit as a backup – its first request triggers an activation email) ----------
  const form = $('.form');
  const status = $('.form__status');
  // Where the enquiry came from: campaign tags (utm_*) or the referring site, plus the first page they landed on
  const qs = new URLSearchParams(location.search);
  const utm = ['utm_source', 'utm_medium', 'utm_campaign'].map((k) => qs.get(k)).filter(Boolean).join(' / ');
  let ref = '';
  try { ref = document.referrer ? new URL(document.referrer).hostname : ''; } catch (err) { /* bad referrer */ }
  form.source.value = utm || (ref && ref !== location.hostname ? ref : 'direct');
  form.landing_page.value = location.pathname + location.search;
  // Companies: pick colours, then units for each ("City × 30, Pearl × 20"); the total also picks the matching quantity range
  const colourInputs = $$('[data-colour]', form);
  const picked = (el) => !el.hidden;
  const colourList = () => colourInputs.filter(picked).map((el) => (Number(el.value) > 0 ? `${el.dataset.colour} × ${Number(el.value)}` : el.dataset.colour)).join(', ');
  const syncRange = () => {
    const total = colourInputs.filter(picked).reduce((n, i) => n + (Math.max(0, Number(i.value)) || 0), 0);
    const range = $('[data-qty-range]', form);
    if (!total || range.disabled) return;
    const opt = [...range.options].find((o) => { const [lo, hi] = o.value.split(/[–+-]/).map(Number); return o.value && total >= lo && (!hi || total <= hi); });
    if (opt) range.value = opt.value;
  };
  const showColour = (box, on) => {
    const qty = $('[data-colour]', box);
    box.classList.toggle('is-on', on);
    qty.hidden = !on;
    if (!on) qty.value = '';
  };
  $$('[data-colour-pick]', form).forEach((cb) => cb.addEventListener('change', () => {
    const box = cb.closest('.colour-opt');
    showColour(box, cb.checked);
    if (cb.checked) $('[data-colour]', box).focus();
    syncRange();
  }));
  colourInputs.forEach((el) => el.addEventListener('input', syncRange));
  form.addEventListener('reset', () => setTimeout(() => $$('.colour-opt', form).forEach((b) => showColour(b, false))));
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    form._subject.value = `Lunchee Iceland: new ${form.classList.contains('form--quote') ? 'quote' : 'offer'} request (${form.segment.value})`;
    form.colours.value = colourList();
    form.campaign.value = XMAS_ON && form.segment.value === 'companies' ? 'christmas' : '';
    const u = ui();
    const btn = $('[data-submit]');
    status.classList.remove('is-error', 'is-ok');
    status.textContent = u.sending;
    btn.disabled = true;
    // Our own mail script on lunchee.is first; FormSubmit as a backup (and on the GitHub Pages copy, which has no PHP)
    const post = async (url) => {
      const r = await fetch(url, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || String(data.success) !== 'true') throw new Error(data.message || r.status);
    };
    try {
      try { await post(`${base}api/send.php`); } catch (err) { await post(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/')); }
      track('generate_lead', { segment: form.segment.value, cta: form.cta.value, source: form.source.value });
      const src = form.source.value, land = form.landing_page.value;
      form.reset();
      form.segment.value = aud;
      form.source.value = src; form.landing_page.value = land;
      status.classList.add('is-ok');
      status.textContent = (t().quote || {}).ok || u.ok;
    } catch (err) {
      status.classList.add('is-error');
      status.innerHTML = u.err;
    } finally {
      btn.disabled = false;
    }
  });
})();
