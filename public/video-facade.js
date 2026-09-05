/* ────────────────────────────────────────────────────────────
   MathsElites — Vignettes vidéo « cliquer pour lire » (facade)
   Injecté sur toutes les pages via astro.config.mjs.

   Objectif : les lecteurs vidéo pleine taille empilés prenaient
   ~50 % de la hauteur des pages. Ce script remplace chaque <video>
   (qui possède un poster) par une carte compacte ; la vidéo n'est
   chargée et affichée en grand qu'au clic.

   → Gain de place important + page beaucoup plus légère (aucune
     métadonnée vidéo téléchargée à l'ouverture).
   → Amélioration progressive : si le JS ne s'exécute pas, les
     lecteurs restent parfaitement fonctionnels (aucun contenu
     n'est supprimé, seulement masqué puis ré-affiché au clic).
   → Idempotent + compatible navigation client Astro (astro:page-load).
   ──────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // Nettoie un titre de section : retire les emojis / symboles de tête
  // (ex. « 🎬 Vidéo — … » → « Vidéo — … »).
  function clean(txt) {
    return (txt || '')
      .replace(/^[^\p{L}\p{N}]+/u, '')
      .trim();
  }

  // Renvoie le texte d'un titre si l'élément EST un titre (H1–H6) ou
  // un conteneur de titre Starlight (.sl-heading-wrapper), sinon null.
  function headingText(el) {
    if (/^H[1-6]$/.test(el.tagName)) return el.textContent;
    if (el.classList && el.classList.contains('sl-heading-wrapper')) {
      var h = el.querySelector('h1,h2,h3,h4,h5,h6');
      if (h) return h.textContent;
    }
    return null;
  }

  // Titre de la carte : pour un « short », le gras de la légende ;
  // sinon le titre de section qui précède la vidéo.
  function titleFor(host, isShort) {
    if (isShort) {
      var sh = host.closest('.me-short');
      var b = sh && sh.querySelector('figcaption b');
      if (b && b.textContent.trim()) return b.textContent.trim();
    }
    var node = host;
    while (node) {
      var p = node.previousElementSibling;
      while (p) {
        var ht = headingText(p);
        if (ht) {
          var t = clean(ht);
          if (t) return t;
        }
        p = p.previousElementSibling;
      }
      node = node.parentElement;
      if (node && node.classList && node.classList.contains('sl-markdown-content')) break;
    }
    return 'Vidéo';
  }

  function buildFacade(video) {
    if (video.dataset.facaded) return;              // déjà traité
    var poster = video.getAttribute('poster');
    if (!poster) return;                            // pas de vignette → on laisse tel quel
    video.dataset.facaded = '1';

    var isShort = !!video.closest('.me-short');
    // Élément « hôte » à masquer : le cadre paysage, la figure du short,
    // ou à défaut le parent direct.
    var host = video.closest('.video-me') ||
               (isShort ? video.closest('figure') : null) ||
               video.parentElement;
    if (!host || !host.parentNode) return;

    var title = titleFor(host, isShort);

    // Empêche tout téléchargement tant que la vidéo n'est pas demandée.
    video.preload = 'none';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'me-vfacade' + (isShort ? ' me-vfacade--short' : '');
    btn.setAttribute('aria-label', 'Lire la vidéo : ' + title);

    var thumb = document.createElement('span');
    thumb.className = 'me-vfacade-thumb';
    thumb.style.backgroundImage = "url('" + poster.replace(/'/g, "%27") + "')";
    var play = document.createElement('span');
    play.className = 'me-vfacade-play';
    play.setAttribute('aria-hidden', 'true');
    play.innerHTML = '<span>&#9654;</span>';
    thumb.appendChild(play);

    var body = document.createElement('span');
    body.className = 'me-vfacade-body';
    var ttl = document.createElement('span');
    ttl.className = 'me-vfacade-title';
    ttl.textContent = title;
    var hint = document.createElement('span');
    hint.className = 'me-vfacade-hint';
    hint.textContent = '▶ Cliquer pour lancer la vidéo';
    body.appendChild(ttl);
    body.appendChild(hint);

    btn.appendChild(thumb);
    btn.appendChild(body);

    host.parentNode.insertBefore(btn, host);
    host.hidden = true;

    btn.addEventListener('click', function () {
      host.hidden = false;
      video.setAttribute('controls', '');
      video.preload = 'metadata';
      if (btn.parentNode) btn.parentNode.removeChild(btn);
      var pr = video.play();
      if (pr && typeof pr.catch === 'function') pr.catch(function () {});
    });
  }

  function init() {
    var vids = document.querySelectorAll('video');
    for (var i = 0; i < vids.length; i++) buildFacade(vids[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Recharge propre lors des navigations client (si activées par Astro/Starlight).
  document.addEventListener('astro:page-load', init);
})();
