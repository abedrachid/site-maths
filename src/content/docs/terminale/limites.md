---
title: Limites et continuité
description: "Cours, fiche résumé, corrections, QCM et planches consultables en ligne — Limites et continuité (Terminale SM)."
sidebar:
  order: 1
---

Tous les documents du chapitre **Limites et continuité** sont consultables directement ci-dessous. Cliquez sur un onglet pour afficher le document, ou téléchargez-le.

## 📄 Documents du chapitre

<div class="doc-viewer">
  <div class="doc-tabs">
    <button class="doc-tab active" data-title="Cours" data-src="/pdf/terminale/limites/cours.pdf">📖 Cours</button>
    <button class="doc-tab" data-title="Corrections des exercices" data-src="/pdf/terminale/limites/corrections-cours.pdf">✅ Corrections</button>
    <button class="doc-tab" data-title="Fiche résumé" data-src="/pdf/terminale/limites/fiche-resume.pdf">📋 Fiche résumé</button>
    <button class="doc-tab" data-title="Série 1 — Calcul de limites" data-src="/pdf/terminale/limites/serie1.pdf">📄 Série 1</button>
    <button class="doc-tab" data-title="Série 2 — Continuité et prolongement" data-src="/pdf/terminale/limites/serie2.pdf">📄 Série 2</button>
  </div>
  <div class="doc-toolbar">
    <span class="doc-current">Cours</span>
    <a class="doc-download" href="/pdf/terminale/limites/cours.pdf" download>⬇️ Télécharger ce document</a>
  </div>
  <iframe class="doc-frame" src="/pdf/terminale/limites/cours.pdf" title="Document — Limites et continuité"></iframe>
</div>

<div id="qcm" style="scroll-margin-top:5rem;"></div>

## ❓ QCM — Limites et continuité

Testez vos connaissances, puis validez pour voir votre score.

<div class="qcm">
  <div class="qcm-q">
    <p class="qcm-question">1. lim<sub>x→0</sub> sin(x) / x = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">0</button>
      <button class="qcm-opt" data-correct>1</button>
      <button class="qcm-opt">+∞</button>
    </div>
    <p class="qcm-exp">Limite usuelle de référence : sin(x)/x → <b>1</b> quand x → 0 (le sinus est équivalent à x au voisinage de 0).</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">2. lim<sub>x→+∞</sub> (4x² − 3) / (2x² + x + 1) = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">0</button>
      <button class="qcm-opt" data-correct>2</button>
      <button class="qcm-opt">4</button>
    </div>
    <p class="qcm-exp">À l'infini, une fraction rationnelle se comporte comme le rapport des termes de plus haut degré : 4x²/2x² = <b>2</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">3. Si lim<sub>x→a⁺</sub> f(x) = +∞, la droite x = a est une… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>asymptote verticale</button>
      <button class="qcm-opt">asymptote horizontale</button>
      <button class="qcm-opt">asymptote oblique</button>
    </div>
    <p class="qcm-exp">Une limite infinie en un point fini <b>a</b> signale une <b>asymptote verticale</b> d'équation x = a.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">4. lim<sub>x→0</sub> (1 − cos x) / x² = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">1</button>
      <button class="qcm-opt" data-correct>1/2</button>
      <button class="qcm-opt">0</button>
    </div>
    <p class="qcm-exp">Limite usuelle : 1 − cos x ≈ x²/2 au voisinage de 0, donc le quotient tend vers <b>1/2</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">5. lim<sub>x→+∞</sub> (√(x² + 1) − x) = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>0</button>
      <button class="qcm-opt">+∞</button>
      <button class="qcm-opt">1</button>
    </div>
    <p class="qcm-exp">On multiplie par la quantité conjuguée : √(x²+1) − x = 1 / (√(x²+1) + x) → <b>0</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">6. lim<sub>x→0⁺</sub> x·ln(x) = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">−∞</button>
      <button class="qcm-opt" data-correct>0</button>
      <button class="qcm-opt">1</button>
    </div>
    <p class="qcm-exp">Croissances comparées : x l'emporte sur ln(x). La forme « 0 × (−∞) » se lève et donne <b>0</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">7. Le théorème des valeurs intermédiaires s'applique à une fonction… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>continue sur un intervalle</button>
      <button class="qcm-opt">dérivable partout</button>
      <button class="qcm-opt">croissante</button>
    </div>
    <p class="qcm-exp">Le T.V.I. ne requiert que la <b>continuité</b> sur un intervalle : toute valeur entre f(a) et f(b) est atteinte.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">8. lim<sub>x→+∞</sub> (2x + 3) / (x − 1) = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">1</button>
      <button class="qcm-opt" data-correct>2</button>
      <button class="qcm-opt">+∞</button>
    </div>
    <p class="qcm-exp">Rapport des termes dominants : 2x / x = <b>2</b>. La droite y = 2 est asymptote horizontale.</p>
  </div>
  <button class="qcm-submit">Valider</button>
  <p class="qcm-score"></p>
</div>

---

## Pour aller plus loin

- [Dérivabilité — Rolle, T.A.F, I.A.F →](/terminale/derivabilite)
- [Primitives →](/terminale/primitives)
- [Retour à la Terminale SM →](/terminale/)
