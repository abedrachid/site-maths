/* MathsElites — bloc "Outils interactifs" (cartes-boutons)
 * Injecte 3 cartes (Desmos, GeoGebra, SageMathCell) dans chaque
 * placeholder <div class="me-outils" data-niveau="…"></div>.
 * data-niveau : "premiere" | "terminale" | "prepas" | "general" (défaut).
 * Les cartes reprennent le style .me-card du site (thème clair/sombre).
 */
(function () {
  var TOOLS = [
    { href: '/outils/desmos.html',   color: '#1d4ed8', kicker: 'GRAPHEUR',        icon: '📈', name: 'Desmos',        desc: 'Calculatrice graphique' },
    { href: '/outils/geogebra.html', color: '#059669', kicker: 'DYNAMIQUE',       icon: '📐', name: 'GeoGebra',      desc: 'Grapheur & géométrie' },
    { href: '/outils/sagecell.html', color: '#C9A227', kicker: 'CALCUL EN DIRECT', icon: '🧮', name: 'SageMathCell', desc: 'Dérive, intègre, factorise' }
  ];

  function cardHTML(t, hash) {
    return '' +
      '<a href="' + t.href + hash + '" class="me-card" style="text-decoration:none;">' +
        '<div style="height:100%;padding:1rem 1.15rem;border:1px solid var(--sl-color-gray-5);border-left:4px solid ' + t.color + ';border-radius:12px;background:var(--sl-color-black);">' +
          '<p style="margin:0 0 .3rem;font-size:.72rem;font-weight:700;color:' + t.color + ';letter-spacing:.05em;">' + t.kicker + '</p>' +
          '<p style="margin:0 0 .25rem;font-size:1rem;font-weight:600;color:var(--sl-color-white);">' + t.icon + ' ' + t.name + '</p>' +
          '<p style="margin:0;font-size:.8rem;color:var(--sl-color-gray-3);">' + t.desc + '</p>' +
        '</div>' +
      '</a>';
  }

  function build(el) {
    var niveau = (el.getAttribute('data-niveau') || 'general').toLowerCase();
    var isCpge = (niveau === 'prepas' || niveau === 'cpge');
    var hash = isCpge ? '#cpge' : '';
    var subtitle = isCpge ? '🧮 OUTILS INTERACTIFS · NIVEAU CPGE'
                          : '🧮 OUTILS INTERACTIFS';

    var cards = '';
    for (var i = 0; i < TOOLS.length; i++) cards += cardHTML(TOOLS[i], hash);

    el.innerHTML =
      '<section style="margin:1.5rem 0 2rem;">' +
        '<p style="margin:0 0 .2rem;font-size:.82rem;font-weight:700;color:#0891b2;letter-spacing:.05em;">' + subtitle + '</p>' +
        '<p style="margin:0 0 .8rem;font-size:.85rem;color:var(--sl-color-gray-3);">Tracer, manipuler et vérifier — les outils s’ouvrent en plein écran.</p>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:.9rem;">' +
          cards +
        '</div>' +
      '</section>';
  }

  function init() {
    var nodes = document.querySelectorAll('.me-outils');
    for (var i = 0; i < nodes.length; i++) build(nodes[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
