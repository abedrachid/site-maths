/* ────────────────────────────────────────────────────────────
   MathsElites — Statistiques de fréquentation
   Affiche une petite barre discrète en bas de page avec :
     • 👁  le nombre TOTAL de visiteurs (cumul, via Abacus — gratuit)
     • 🟢  le nombre de visiteurs EN LIGNE maintenant (temps réel,
           via votre Worker Cloudflare + Durable Object)

   ── CONFIGURATION ──────────────────────────────────────────────
   ONLINE_API : laissez '' tant que le Worker temps réel n'est pas
   déployé (la pastille « en ligne » reste alors masquée, le total
   fonctionne quand même). Après `wrangler deploy`, collez ici l'URL
   du Worker, SANS slash final, par ex. :
     var ONLINE_API = 'https://mathselites-presence.VOTRE-SOUS-DOMAINE.workers.dev';

   COUNT_MODE : 'unique' = un visiteur compté une seule fois par jour
   (recommandé, correspond à « nombre de visiteurs »). Mettez 'views'
   pour compter chaque chargement de page (pages vues).
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

  // Valeurs mémorisées pour éviter de re-solliciter les API à chaque
  // navigation interne (Starlight utilise des transitions de vue).
  var cachedTotal = null;
  var heartbeatStarted = false;
  var sid = null;

  // ─── Utilitaires ───
  function fmt(n) {
    try { return Number(n).toLocaleString('fr-FR'); } catch (e) { return String(n); }
  }

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
      // Nettoyage léger des anciennes clés de jours précédents.
      for (var i = localStorage.length - 1; i >= 0; i--) {
        var k = localStorage.key(i);
        if (k && k.indexOf('me-visit-') === 0 && k !== todayKey()) {
          localStorage.removeItem(k);
        }
      }
    } catch (e) {}
  }

  // ─── Barre d'affichage ───
  function ensureBar() {
    var bar = document.getElementById('me-stats');
    if (bar) return bar;

    bar = document.createElement('div');
    bar.id = 'me-stats';
    bar.setAttribute('aria-live', 'polite');
    bar.style.cssText =
      'display:flex;flex-wrap:wrap;justify-content:center;align-items:center;' +
      'gap:.4rem 1.1rem;margin:1.5rem auto .25rem;padding:.35rem .5rem;' +
      'font-size:.8rem;line-height:1.5;color:var(--sl-color-gray-3,#8891a5);' +
      'text-align:center;';

    var total = document.createElement('span');
    total.id = 'me-stat-total';
    total.hidden = true;
    total.style.cssText = 'display:inline-flex;align-items:center;gap:.35em;white-space:nowrap;';

    var online = document.createElement('span');
    online.id = 'me-stat-online';
    online.hidden = true;
    online.style.cssText = 'display:inline-flex;align-items:center;gap:.35em;white-space:nowrap;';

    bar.appendChild(total);
    bar.appendChild(online);

    // Emplacement : le créneau dédié du pied de page (pages de cours),
    // sinon la fin du contenu (page d'accueil « splash »), sinon <body>.
    var slot = document.getElementById('me-stats-slot')
      || document.querySelector('.sl-markdown-content')
      || document.querySelector('main')
      || document.body;
    slot.appendChild(bar);
    return bar;
  }

  function renderTotal(n) {
    var el = document.getElementById('me-stat-total');
    if (!el) return;
    if (n === null || n === undefined) { el.hidden = true; return; }
    el.innerHTML = '👁️ <strong style="color:var(--sl-color-gray-2,#c2c9d6);font-weight:600;">'
      + fmt(n) + '</strong>&nbsp;visiteurs';
    el.hidden = false;
  }

  function renderOnline(n) {
    var el = document.getElementById('me-stat-online');
    if (!el) return;
    if (n === null || n === undefined) { el.hidden = true; return; }
    var label = n <= 1 ? 'en ligne' : 'en ligne';
    el.innerHTML = '<span style="color:#22c55e;">●</span> <strong '
      + 'style="color:var(--sl-color-gray-2,#c2c9d6);font-weight:600;">'
      + fmt(n) + '</strong>&nbsp;' + label;
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
    if (document.hidden) return; // on ne compte pas les onglets en arrière-plan
    getJSON(ONLINE_API + '/ping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: getSid() }),
      keepalive: true,
    }, function (d) {
      if (d && typeof d.online === 'number') {
        ensureBar();
        renderOnline(d.online);
      }
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
  function init() {
    loadTotal();
    startHeartbeat();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Rejoue l'affichage après chaque navigation interne Starlight.
  document.addEventListener('astro:page-load', function () {
    ensureBar();
    if (cachedTotal !== null) renderTotal(cachedTotal); else loadTotal();
    if (ONLINE_API && !heartbeatStarted) startHeartbeat();
  });
})();
