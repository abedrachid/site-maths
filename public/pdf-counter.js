/* ────────────────────────────────────────────────────────────
   MathsElites — Compteur de téléchargements PDF
   Service : Abacus (https://abacus.jasoncameron.dev) — gratuit,
   sans inscription, remplaçant de CountAPI.

   Fonctionnement :
   • Au chargement, chaque lien <a href="…​.pdf"> reçoit un petit
     badge « ⬇ N » indiquant le nombre de téléchargements (via /get,
     qui N'incrémente PAS).
   • Au clic sur le lien, on appelle /hit pour incrémenter le
     compteur, puis on met le badge à jour.

   Aucune donnée personnelle n'est collectée : on compte uniquement
   les clics. Les valeurs sont publiques pour qui connaît la clé.
   ──────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = 'https://abacus.jasoncameron.dev';

  // Namespace = domaine du site (recommandé par Abacus).
  // En local (localhost/127.0.0.1) on garde un namespace de test
  // pour ne pas polluer les compteurs de production.
  var host = (location.hostname || 'site').toLowerCase();
  var NS = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(host)
    ? 'maths-elites-dev'
    : host.replace(/[^a-z0-9_.-]/g, '-');
  if (NS.length < 3) NS = 'maths-elites';
  if (NS.length > 64) NS = NS.slice(0, 64);

  // Transforme un chemin de PDF en clé valide pour Abacus.
  // Contrainte : ^[A-Za-z0-9_-.]{3,64}$
  function keyFor(path) {
    var s = path
      .replace(/^\/+/, '')
      .replace(/\.pdf$/i, '')
      .replace(/[^A-Za-z0-9_.-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
    if (s.length < 3) s = 'pdf-' + s;
    if (s.length > 64) {
      // Hash simple pour éviter les collisions après troncature.
      var h = 0;
      for (var i = 0; i < path.length; i++) {
        h = (h * 31 + path.charCodeAt(i)) >>> 0;
      }
      s = s.slice(0, 55) + '-' + h.toString(36);
    }
    return s;
  }

  function fmt(n) {
    // Séparateur de milliers, format français (espace insécable).
    try {
      return Number(n).toLocaleString('fr-FR');
    } catch (e) {
      return String(n);
    }
  }

  function request(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = function () {
      var r = xhr.response;
      if (r && typeof r.value === 'number') cb(r.value);
      else cb(null);
    };
    xhr.onerror = function () { cb(null); };
    xhr.send();
  }

  function makeBadge() {
    var b = document.createElement('span');
    b.className = 'pdf-dl-count';
    b.setAttribute('aria-label', 'Nombre de téléchargements');
    b.style.cssText =
      'display:inline-flex;align-items:center;gap:.25em;' +
      'margin-left:.5em;padding:.05em .5em;border-radius:999px;' +
      'font-size:.78em;font-weight:600;line-height:1.6;' +
      'background:rgba(124,58,237,.12);color:#7c3aed;' +
      'vertical-align:middle;white-space:nowrap;';
    b.textContent = '⬇ …';
    return b;
  }

  function setBadge(badge, n) {
    if (n === null || n === undefined) {
      badge.textContent = '⬇ 0';
    } else {
      badge.textContent = '⬇ ' + fmt(n);
    }
  }

  var seen = new WeakSet();

  function initLink(a) {
    if (seen.has(a)) return;
    seen.add(a);

    // .pathname résout les liens relatifs ET absolus de façon
    // cohérente → même clé quelle que soit l'écriture du lien.
    var key = keyFor(a.pathname || a.getAttribute('href') || '');
    var badge = makeBadge();
    a.insertAdjacentElement('afterend', badge);

    // Valeur initiale (sans incrémenter).
    request(API + '/get/' + NS + '/' + key, function (v) {
      setBadge(badge, v === null ? 0 : v);
    });

    // Incrément au clic (téléchargement / ouverture).
    a.addEventListener('click', function () {
      request(API + '/hit/' + NS + '/' + key, function (v) {
        if (v !== null) setBadge(badge, v);
      });
    });
  }

  function scan() {
    var links = document.querySelectorAll('a[href$=".pdf"], a[href*=".pdf?"], a[href*=".pdf#"]');
    links.forEach(function (a) {
      // On ignore les boutons de la visionneuse (onglets) : ce sont
      // des <button>, pas des <a>, donc déjà exclus.
      initLink(a);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }
})();
