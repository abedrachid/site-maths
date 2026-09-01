/* ────────────────────────────────────────────────────────────
   MathsElites — Pastille « ✨ N » sur le lien « Nouveautés »
   Affiche, à côté du lien « ✨ Nouveautés » du menu, le nombre
   de nouveautés que l'élève n'a PAS ENCORE vues. La date du
   dernier ajout consulté est mémorisée dans le navigateur.
   Quand l'élève ouvre la page /nouveautes, la pastille disparaît.
   Données : /nouveautes.json (généré depuis src/nouveautes.mjs).
   ──────────────────────────────────────────────────────────── */
(function () {
  var SEEN_KEY = 'me-nouveautes-vu';

  function styleOnce() {
    if (document.getElementById('me-nv-badge-style')) return;
    var s = document.createElement('style');
    s.id = 'me-nv-badge-style';
    s.textContent =
      '.me-nv-badge{display:inline-block;min-width:1.15rem;padding:0 .35rem;' +
      'margin-left:.4rem;border-radius:9999px;background:#e11d48;color:#fff;' +
      'font-size:.7rem;font-weight:800;line-height:1.25rem;text-align:center;' +
      'vertical-align:middle;}';
    document.head.appendChild(s);
  }

  function liensNouveautes() {
    return Array.prototype.slice.call(
      document.querySelectorAll('a[href="/nouveautes/"], a[href="/nouveautes"]')
    );
  }

  function retirerBadges() {
    var b = document.querySelectorAll('.me-nv-badge');
    for (var i = 0; i < b.length; i++) b[i].remove();
  }

  function poserBadges(n) {
    styleOnce();
    liensNouveautes().forEach(function (a) {
      if (a.querySelector('.me-nv-badge')) return;
      var span = document.createElement('span');
      span.className = 'me-nv-badge';
      span.textContent = n > 99 ? '99+' : String(n);
      span.setAttribute('aria-label', n + ' nouveauté(s) non vue(s)');
      a.appendChild(span);
    });
  }

  function surPageNouveautes() {
    return /\/nouveautes\/?$/.test(location.pathname);
  }

  function maj() {
    fetch('/nouveautes.json', { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var latest = (data && data.latest) || '';
        if (surPageNouveautes()) {
          // L'élève consulte la page : tout est « vu ».
          try { localStorage.setItem(SEEN_KEY, latest); } catch (e) {}
          retirerBadges();
          return;
        }
        var vu = '';
        try { vu = localStorage.getItem(SEEN_KEY) || ''; } catch (e) {}
        var items = (data && data.items) || [];
        var n = 0;
        for (var i = 0; i < items.length; i++) {
          if (items[i].date > vu) n++;
        }
        retirerBadges();
        if (n > 0) poserBadges(n);
      })
      .catch(function () {});
  }

  document.addEventListener('DOMContentLoaded', maj);
  document.addEventListener('astro:page-load', maj);
  if (document.readyState !== 'loading') maj();
})();
