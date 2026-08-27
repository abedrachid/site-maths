/* ────────────────────────────────────────────────────────────
   MathsElites — Statistiques de fréquentation
   Affiche une barre bien visible EN HAUT de chaque page avec :
     • 👁️  le nombre TOTAL de visiteurs (cumul, via Abacus — gratuit)
     • 🟢  le nombre de visiteurs EN LIGNE maintenant (temps réel,
           via le Worker Cloudflare + Durable Object)

   ── CONFIGURATION ──────────────────────────────────────────────
   ONLINE_API : URL du Worker temps réel. Laissez '' pour masquer la
   pastille « en ligne » (le total continue de fonctionner).

   COUNT_MODE : 'unique' = un visiteur compté une seule fois par jour
   (recommandé). 'views' = chaque chargement de page (pages vues).
   ──────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // ─── Configuration ───
  var ONLINE_API = 'https://mathselites-presence.abedrachidigr.workers.dev'; // URL du Worker déployé
  var COUNT_MODE = 'unique'; // 'unique' ou 'views'
  var HEARTBEAT_MS = 30000; // fréquence des battements (30 s). 60000 = moins de requêtes.

  var ABACUS = 'https://abacus.jasoncameron.dev';

  // Namespace = domaine du site (même logique que pdf-counter.js).
  var host = (location.hostname || 'site').toLowerCase();
  var NS = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(host)
    ? 'mathselites-dev'
    : host.replace(/[^a-z0-9_.-]/g, '-');
  if (NS.length < 3) NS = 'mathselites';
  if (NS.length > 64) NS = NS.slice(0, 64);

  var KEY = 'visiteurs'; // clé Abacus du compteur global

  var cachedTotal = null;
  var heartbeatStarted = false;
  var sid = null;

  // ─── Utilitaires ───
  function fmt(n) {
    try { return Number(n).toLocaleString('fr-FR'); } catch (e) { return String(n); }
  }
  // Accord singulier / pluriel.
  function plural(n, mot) { return Number(n) > 1 ? mot + 's' : mot; }

  function getJSON(url, opts, cb) {
    try {
      fetch(url, opts || {})
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) { cb(d); })
        .catch(function () { cb(null); });
    } catch (e) { cb(null); }
  }

  function todayKey() {
    var d = new Date();
    return 'me-visit-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }
  function alreadyCountedToday() {
    try { return localStorage.getItem(todayKey()) === '1'; } catch (e) { return false; }
  }
  function markCountedToday() {
    try {
      localStorage.setItem(todayKey(), '1');
      for (var i = localStorage.length - 1; i >= 0; i--) {
        var k = localStorage.key(i);
        if (k && k.indexOf('me-visit-') === 0 && k !== todayKey()) localStorage.removeItem(k);
      }
    } catch (e) {}
  }

  // ─── Styles (injectés une seule fois) ───
  function ensureStyle() {
    if (document.getElementById('me-stats-style')) return;
    var st = document.createElement('style');
    st.id = 'me-stats-style';
    st.textContent =
      '#me-stats{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;' +
      'gap:.5rem .75rem;padding:.55rem 1rem;margin:0 0 1.5rem;border-radius:12px;' +
      'border:1px solid var(--sl-color-gray-6,#e4e7ec);' +
      'background:var(--sl-color-gray-7,#f6f7f9);}' +
      '.me-chip{display:inline-flex;align-items:center;gap:.4em;' +
      'padding:.28em .8em;border-radius:999px;font-size:.9rem;font-weight:600;' +
      'line-height:1.4;white-space:nowrap;}' +
      '.me-chip strong{font-weight:800;}' +
      '.me-chip--total{background:rgba(124,58,237,.14);color:#6d28d9;}' +
      '.me-chip--online{background:rgba(22,163,74,.15);color:#15803d;}' +
      '.me-dot{width:.6em;height:.6em;border-radius:50%;background:#22c55e;' +
      'box-shadow:0 0 0 0 rgba(34,197,94,.6);animation:me-pulse 1.6s infinite;}' +
      '@keyframes me-pulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.55);}' +
      '70%{box-shadow:0 0 0 .5em rgba(34,197,94,0);}100%{box-shadow:0 0 0 0 rgba(34,197,94,0);}}' +
      '@media (prefers-color-scheme:dark){#me-stats{background:rgba(255,255,255,.03);' +
      'border-color:var(--sl-color-gray-5,#2a2f3a);}' +
      '.me-chip--total{background:rgba(139,92,246,.20);color:#c4b5fd;}' +
      '.me-chip--online{background:rgba(34,197,94,.18);color:#86efac;}}';
    document.head.appendChild(st);
  }

  // ─── Barre d'affichage (EN HAUT de la page) ───
  function ensureBar() {
    ensureStyle();
    var bar = document.getElementById('me-stats');
    if (bar) return bar;

    bar = document.createElement('div');
    bar.id = 'me-stats';
    bar.setAttribute('aria-live', 'polite');

    var total = document.createElement('span');
    total.id = 'me-stat-total';
    total.className = 'me-chip me-chip--total';
    total.hidden = true;

    var online = document.createElement('span');
    online.id = 'me-stat-online';
    online.className = 'me-chip me-chip--online';
    online.hidden = true;

    bar.appendChild(total);
    bar.appendChild(online);

    // Placement : tout EN HAUT du contenu de la page (juste au-dessus du
    // titre), un emplacement fiable qui n'est pas masqué par l'en-tête fixe.
    var slot = document.querySelector('.sl-markdown-content')
      || document.querySelector('main')
      || document.body;
    slot.insertBefore(bar, slot.firstChild);
    return bar;
  }

  function renderTotal(n) {
    var el = document.getElementById('me-stat-total');
    if (!el) return;
    if (n === null || n === undefined) { el.hidden = true; return; }
    el.innerHTML = '👁️ <strong>' + fmt(n) + '</strong>&nbsp;' + plural(n, 'visiteur');
    el.hidden = false;
  }

  function renderOnline(n) {
    var el = document.getElementById('me-stat-online');
    if (!el) return;
    if (n === null || n === undefined) { el.hidden = true; return; }
    el.innerHTML = '<span class="me-dot" aria-hidden="true"></span> <strong>'
      + fmt(n) + '</strong>&nbsp;en ligne';
    el.hidden = false;
  }

  // ─── Compteur TOTAL (Abacus) ───
  function loadTotal() {
    ensureBar();
    if (cachedTotal !== null) { renderTotal(cachedTotal); return; }

    var shouldHit = (COUNT_MODE === 'views') || !alreadyCountedToday();
    var endpoint = shouldHit ? '/hit/' : '/get/';
    getJSON(ABACUS + endpoint + NS + '/' + KEY, null, function (d) {
      if (d && typeof d.value === 'number') {
        cachedTotal = d.value;
        if (shouldHit && COUNT_MODE === 'unique') markCountedToday();
        renderTotal(cachedTotal);
      }
    });
  }

  // ─── Compteur EN LIGNE (Worker Cloudflare) ───
  function getSid() {
    if (sid) return sid;
    try {
      sid = sessionStorage.getItem('me-sid');
      if (!sid) {
        sid = (crypto && crypto.randomUUID) ? crypto.randomUUID()
          : String(Date.now()) + '-' + Math.random().toString(36).slice(2);
        sessionStorage.setItem('me-sid', sid);
      }
    } catch (e) {
      sid = sid || (String(Date.now()) + '-' + Math.random().toString(36).slice(2));
    }
    return sid;
  }

  function ping() {
    if (!ONLINE_API) return;
    if (document.hidden) return;
    getJSON(ONLINE_API + '/ping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: getSid() }),
      keepalive: true,
    }, function (d) {
      if (d && typeof d.online === 'number') { ensureBar(); renderOnline(d.online); }
    });
  }

  function startHeartbeat() {
    if (!ONLINE_API || heartbeatStarted) return;
    heartbeatStarted = true;
    ping();
    setInterval(ping, HEARTBEAT_MS);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) ping();
    });
  }

  // ─── Initialisation (compatible transitions Starlight) ───
  function init() { loadTotal(); startHeartbeat(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  document.addEventListener('astro:page-load', function () {
    ensureBar();
    if (cachedTotal !== null) renderTotal(cachedTotal); else loadTotal();
    if (ONLINE_API && !heartbeatStarted) startHeartbeat();
  });
})();
