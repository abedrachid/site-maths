/* ────────────────────────────────────────────────────────────
   MathsElites — Visionneuse de documents
   • <div class="doc-viewer"> + <button class="doc-tab" data-src>
     + <iframe class="doc-frame"> : onglets qui changent le document.
   • Liens class="doc-open" data-src : chargent dans la visionneuse
     de la page (pages ressources).
   • Cible via l'URL : #doc=/pdf/…  (préféré, fiable) ou ?doc=/pdf/…
   ──────────────────────────────────────────────────────────── */
(function () {
  function loadInto(viewer, src, title) {
    if (!viewer || !src) return;
    var frame = viewer.querySelector('.doc-frame');
    var dl = viewer.querySelector('.doc-download');
    var nt = viewer.querySelector('.doc-newtab');
    var cur = viewer.querySelector('.doc-current');
    if (frame) frame.setAttribute('src', src);
    if (dl) dl.setAttribute('href', src);
    if (nt) nt.setAttribute('href', src);
    if (cur && title) cur.textContent = title;
  }

  function injectNewTab(viewer) {
    var bar = viewer.querySelector('.doc-toolbar');
    if (!bar || bar.querySelector('.doc-newtab')) return;
    var a = document.createElement('a');
    a.className = 'doc-newtab';
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = '↗ Ouvrir';
    a.href = '#';
    var dl = bar.querySelector('.doc-download');
    if (dl) bar.insertBefore(a, dl); else bar.appendChild(a);
  }

  function initViewer(v) {
    injectNewTab(v);
    var tabs = v.querySelectorAll('.doc-tab');
    tabs.forEach(function (tab) {
      tab.setAttribute('type', 'button');
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        loadInto(v, tab.getAttribute('data-src'),
          (tab.getAttribute('data-title') || tab.textContent || '').trim());
      });
    });
    var initial = v.querySelector('.doc-tab.active') || tabs[0];
    if (initial) initial.click();
  }

  function bindOpeners() {
    document.querySelectorAll('.doc-open:not([data-bound])').forEach(function (link) {
      link.setAttribute('data-bound', '1');
      link.addEventListener('click', function (e) {
        var src = link.getAttribute('data-src') || link.getAttribute('href');
        var viewer = document.querySelector('.doc-viewer');
        if (!viewer || !src) return;
        e.preventDefault();
        var title = (link.getAttribute('data-title') || link.textContent || '').trim();
        viewer.querySelectorAll('.doc-tab').forEach(function (t) { t.classList.remove('active'); });
        loadInto(viewer, src, title);
        try { viewer.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e2) {}
      });
    });
  }

  // Cible depuis l'URL : #doc=… (prioritaire) ou ?doc=…
  function targetFromUrl() {
    var h = location.hash || '';
    if (h.indexOf('#doc=') === 0) {
      try { return decodeURIComponent(h.slice(5)); } catch (e) { return h.slice(5); }
    }
    try {
      var q = new URLSearchParams(location.search).get('doc');
      if (q) return q;
    } catch (e) {}
    return null;
  }

  function applyTarget() {
    var doc = targetFromUrl();
    if (!doc) return;
    var viewer = document.querySelector('.doc-viewer');
    if (!viewer) return;
    var tabs = viewer.querySelectorAll('.doc-tab');
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].getAttribute('data-src') === doc) {
        tabs[i].click();
        try { viewer.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
        return;
      }
    }
    // Aucun onglet correspondant : on charge quand même le document
    loadInto(viewer, doc, '');
    try { viewer.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
  }

  function initAll() {
    document.querySelectorAll('.doc-viewer:not([data-init])').forEach(function (v) {
      v.dataset.init = '1';
      initViewer(v);
    });
    bindOpeners();
    applyTarget();
  }

  document.addEventListener('DOMContentLoaded', initAll);
  document.addEventListener('astro:page-load', initAll);
  window.addEventListener('hashchange', applyTarget);
  if (document.readyState !== 'loading') initAll();
})();
