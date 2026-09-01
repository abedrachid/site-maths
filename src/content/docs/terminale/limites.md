---
title: Limites et continuité
description: "Cours, fiche résumé, corrections, QCM et planches consultables en ligne — Limites et continuité (Terminale SM)."
sidebar:
  order: 1
---

Tous les documents du chapitre **Limites et continuité** sont consultables directement ci-dessous. Cliquez sur un onglet pour afficher le document, ou téléchargez-le.

<div id="video-tvi" style="scroll-margin-top:5rem;"></div>

## 🎬 Vidéo — Le théorème des valeurs intermédiaires (T.V.I) en animation

<div class="video-me" style="max-width:760px;margin:1.5rem auto;border:2px solid #C8932B;border-radius:12px;overflow:hidden;box-shadow:0 6px 24px rgba(27,58,107,.25);">
  <video controls preload="metadata" poster="/videos/tvi-extrema-poster.jpg" style="display:block;width:100%;height:auto;background:#1B3A6B;">
    <source src="/videos/tvi-extrema.mp4" type="video/mp4" />
    Votre navigateur ne peut pas lire cette vidéo — <a href="/videos/tvi-extrema.mp4">télécharger la vidéo</a>.
  </video>
</div>

*Illustration animée : l’énoncé du T.V.I — pour f continue sur [a, b] et k compris entre f(a) et f(b), il existe c ∈ [a, b] tel que f(c) = k.*

<div id="video-tvi-solutions" style="scroll-margin-top:5rem;"></div>

## 🎬 Vidéo — T.V.I : combien de solutions pour f(x) = k ?

<div class="video-me" style="max-width:760px;margin:1.5rem auto;border:2px solid #C8932B;border-radius:12px;overflow:hidden;box-shadow:0 6px 24px rgba(27,58,107,.25);">
  <video controls preload="metadata" poster="/videos/tvi-multisolutions-poster.jpg" style="display:block;width:100%;height:auto;background:#1B3A6B;">
    <source src="/videos/tvi-multisolutions.mp4" type="video/mp4" />
    Votre navigateur ne peut pas lire cette vidéo — <a href="/videos/tvi-multisolutions.mp4">télécharger la vidéo</a>.
  </video>
</div>

*Méthode animée : dénombrer les solutions de l’équation f(x) = k selon la position de k par rapport aux extrema locaux de la fonction.*

<div id="video-image-segment" style="scroll-margin-top:5rem;"></div>

## 🎬 Vidéo — L’image d’un segment par une fonction continue

<div class="video-me" style="max-width:760px;margin:1.5rem auto;border:2px solid #C8932B;border-radius:12px;overflow:hidden;box-shadow:0 6px 24px rgba(27,58,107,.25);">
  <video controls preload="metadata" poster="/videos/image-segment-poster.jpg" style="display:block;width:100%;height:auto;background:#1B3A6B;">
    <source src="/videos/image-segment.mp4" type="video/mp4" />
    Votre navigateur ne peut pas lire cette vidéo — <a href="/videos/image-segment.mp4">télécharger la vidéo</a>.
  </video>
</div>

*Illustration animée : l’image d’un segment [a, b] par une fonction continue est le segment [m, M], où m et M sont le minimum et le maximum atteints par f sur [a, b].*

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
    <p class="qcm-question">1. Une fonction f est continue en un point a si et seulement si… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">f(a) = 0</button>
      <button class="qcm-opt" data-correct>lim<sub>x→a</sub> f(x) = f(a)</button>
      <button class="qcm-opt">f est dérivable en a</button>
    </div>
    <p class="qcm-exp">Définition du cours : f est continue en a lorsque <b>lim<sub>x→a</sub> f(x) = f(a)</b> (la limite existe et vaut la valeur de la fonction).</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">2. Soit f(x) = (x² − 4)/(x³ − 8) pour x ≠ 2. Quelle valeur α = f(2) rend f continue en 2 ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">1/2</button>
      <button class="qcm-opt">1/6</button>
      <button class="qcm-opt" data-correct>1/3</button>
    </div>
    <p class="qcm-exp">On factorise : (x−2)(x+2) / [(x−2)(x²+2x+4)] = (x+2)/(x²+2x+4). En x = 2 : 4/12 = <b>1/3</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">3. En un entier n, la fonction partie entière E est… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>continue à droite mais pas à gauche</button>
      <button class="qcm-opt">continue à gauche mais pas à droite</button>
      <button class="qcm-opt">continue en n</button>
    </div>
    <p class="qcm-exp">D'après le cours, E est <b>continue à droite</b> de n mais <b>pas continue à gauche</b>, donc non continue en n.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">4. lim<sub>x→0</sub> (cos x − x·sin(3x) − 1) / x² = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">−1/2</button>
      <button class="qcm-opt">3</button>
      <button class="qcm-opt" data-correct>−7/2</button>
    </div>
    <p class="qcm-exp">On sépare : (cos x − 1)/x² → −1/2 et −sin(3x)/x → −3. Somme : −1/2 − 3 = <b>−7/2</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">5. Par composition, lim<sub>x→0</sub> √( sin x / x ) = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">0</button>
      <button class="qcm-opt" data-correct>1</button>
      <button class="qcm-opt">+∞</button>
    </div>
    <p class="qcm-exp">Comme sin x / x → 1 et que √ est continue en 1, la limite vaut √1 = <b>1</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">6. lim<sub>x→+∞</sub> √( (x + 1) / (2x + 1) ) = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>√2 / 2</button>
      <button class="qcm-opt">1/2</button>
      <button class="qcm-opt">1</button>
    </div>
    <p class="qcm-exp">Le quotient tend vers 1/2, et √ étant continue : √(1/2) = 1/√2 = <b>√2/2</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">7. Si f est continue sur [a, b] et f(a)·f(b) < 0, alors l'équation f(x) = 0… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">n'admet aucune solution</button>
      <button class="qcm-opt">admet une solution unique</button>
      <button class="qcm-opt" data-correct>admet au moins une solution dans ]a, b[</button>
    </div>
    <p class="qcm-exp">Corollaire du T.V.I. : le changement de signe garantit <b>au moins une</b> racine. L'unicité exigerait en plus la stricte monotonie.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">8. Théorème de la bijection : si f est continue et strictement monotone sur un intervalle I, alors f est… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">une fonction paire</button>
      <button class="qcm-opt" data-correct>une bijection de I sur f(I)</button>
      <button class="qcm-opt">une fonction constante</button>
    </div>
    <p class="qcm-exp">Continuité + stricte monotonie ⟹ f réalise une <b>bijection de I sur l'intervalle f(I)</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">9. L'image d'un segment [a, b] par une fonction continue est… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>un segment [m, M]</button>
      <button class="qcm-opt">un intervalle ouvert</button>
      <button class="qcm-opt">une demi-droite</button>
    </div>
    <p class="qcm-exp">L'image d'un segment par une fonction continue est <b>un segment [m, M]</b>, avec m le minimum et M le maximum de f sur [a, b].</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">10. Sur ℝ⁺, la fonction racine n-ième x ↦ <sup>n</sup>√x est… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">continue et strictement décroissante</button>
      <button class="qcm-opt" data-correct>continue et strictement croissante</button>
      <button class="qcm-opt">discontinue en 0</button>
    </div>
    <p class="qcm-exp">Réciproque de x ↦ xⁿ (bijection croissante de ℝ⁺), la fonction <sup>n</sup>√ est <b>continue et strictement croissante</b> sur ℝ⁺.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">11. f(x) = x + a si x &lt; 1, 2x − 3 si 1 ≤ x ≤ 3, bx + 1 si x &gt; 3. Pour que f soit continue à gauche en 1 et à droite en 3 : ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">a = 2 et b = −2/3</button>
      <button class="qcm-opt">a = −1 et b = 1/3</button>
      <button class="qcm-opt" data-correct>a = −2 et b = 2/3</button>
    </div>
    <p class="qcm-exp">Gauche en 1 : 1 + a = f(1) = −1 ⟹ a = −2. Droite en 3 : 3b + 1 = f(3) = 3 ⟹ <b>a = −2, b = 2/3</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">12. lim<sub>x→0</sub> ( √(x + 1) − 1 ) / x = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>1/2</button>
      <button class="qcm-opt">1</button>
      <button class="qcm-opt">0</button>
    </div>
    <p class="qcm-exp">Quantité conjuguée : (√(x+1) − 1)/x = 1 / (√(x+1) + 1) → 1/(1+1) = <b>1/2</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">13. f(x) = 1/x² + a si x ≤ −1, x + b si −1 &lt; x ≤ 1, 2a/x si x &gt; 1. Pour que f soit continue sur ℝ : ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">a = 1 et b = 3</button>
      <button class="qcm-opt" data-correct>a = 3 et b = 5</button>
      <button class="qcm-opt">a = 2 et b = 4</button>
    </div>
    <p class="qcm-exp">En −1 : 1 + a = −1 + b ⟹ b = a + 2. En 1 : 1 + b = 2a ⟹ 1 + a + 2 = 2a ⟹ <b>a = 3, b = 5</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">14. lim<sub>x→+∞</sub> ( √(x² + x + 1) − x ) = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">0</button>
      <button class="qcm-opt">+∞</button>
      <button class="qcm-opt" data-correct>1/2</button>
    </div>
    <p class="qcm-exp">Conjugué : (x + 1)/(√(x²+x+1) + x). En divisant par x : (1 + 1/x)/(√(1+1/x+1/x²) + 1) → 1/2 = <b>1/2</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">15. f(x) = (2x + 1)/(x − 1) est une bijection de ]1, +∞[ sur J. Sa réciproque f<sup>−1</sup> est ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>f<sup>−1</sup>(x) = (x + 1)/(x − 2)</button>
      <button class="qcm-opt">f<sup>−1</sup>(x) = (x − 1)/(x + 2)</button>
      <button class="qcm-opt">f<sup>−1</sup>(x) = (2x + 1)/(x − 1)</button>
    </div>
    <p class="qcm-exp">On résout y = (2x+1)/(x−1) : x(y − 2) = y + 1 ⟹ x = (y+1)/(y−2). Donc <b>f<sup>−1</sup>(x) = (x+1)/(x−2)</b> (avec J = ]2, +∞[).</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">16. Sur [0, π], l'équation 2·cos x − x = 0 admet… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">aucune solution</button>
      <button class="qcm-opt">deux solutions</button>
      <button class="qcm-opt" data-correct>exactement une solution</button>
    </div>
    <p class="qcm-exp">g(x) = 2cos x − x : g(0) = 2 &gt; 0, g(π) = −2 − π &lt; 0, et g′(x) = −2sin x − 1 &lt; 0 (stricte décroissance) ⟹ <b>une seule</b> racine.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">17. lim<sub>x→+∞</sub> ( (x − 1)/(x + 1) )<sup>3/2</sup> = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>1</button>
      <button class="qcm-opt">0</button>
      <button class="qcm-opt">+∞</button>
    </div>
    <p class="qcm-exp">(x−1)/(x+1) → 1, et t ↦ t<sup>3/2</sup> est continue en 1, donc la limite vaut 1<sup>3/2</sup> = <b>1</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">18. Sur quel domaine la fonction f(x) = √( (x + 1)/(x − 1) ) est-elle continue ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">]−1, 1[</button>
      <button class="qcm-opt" data-correct>]−∞, −1] ∪ ]1, +∞[</button>
      <button class="qcm-opt">[1, +∞[</button>
    </div>
    <p class="qcm-exp">Il faut (x+1)/(x−1) ≥ 0 (et x ≠ 1) : le quotient est positif pour x ≤ −1 ou x &gt; 1, d'où <b>]−∞, −1] ∪ ]1, +∞[</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">19. lim<sub>x→1</sub> (x⁵ − 1)/(x − 1) = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">1</button>
      <button class="qcm-opt">4</button>
      <button class="qcm-opt" data-correct>5</button>
    </div>
    <p class="qcm-exp">x⁵ − 1 = (x − 1)(x⁴ + x³ + x² + x + 1). Après simplification, en x = 1 : 1+1+1+1+1 = <b>5</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">20. Si f est continue et strictement monotone sur I, les courbes de f et f<sup>−1</sup> sont symétriques par rapport à… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">l'axe des abscisses</button>
      <button class="qcm-opt" data-correct>la droite y = x</button>
      <button class="qcm-opt">l'origine du repère</button>
    </div>
    <p class="qcm-exp">Les courbes 𝒞<sub>f</sub> et 𝒞<sub>f⁻¹</sub> sont symétriques par rapport à la <b>première bissectrice</b>, la droite d'équation y = x.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">21. lim<sub>x→0</sub> ( <sup>3</sup>√(1 + x) − <sup>3</sup>√(1 − x) ) / x = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>2/3</button>
      <button class="qcm-opt">1/3</button>
      <button class="qcm-opt">0</button>
    </div>
    <p class="qcm-exp">Au voisinage de 0, <sup>3</sup>√(1 ± x) ≈ 1 ± x/3. La différence vaut ≈ 2x/3, donc le quotient tend vers <b>2/3</b> (on peut aussi factoriser par a³ − b³).</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">22. Toute fonction continue f : [0, 1] → [0, 1] admet… ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">aucun point fixe en général</button>
      <button class="qcm-opt">exactement un point fixe</button>
      <button class="qcm-opt" data-correct>au moins un point fixe (f(c) = c)</button>
    </div>
    <p class="qcm-exp">On pose g(x) = f(x) − x : g(0) = f(0) ≥ 0 et g(1) = f(1) − 1 ≤ 0. Par le T.V.I., g s'annule ⟹ <b>au moins un point fixe</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">23. lim<sub>x→+∞</sub> ( <sup>3</sup>√(x³ + x²) − x ) = ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">0</button>
      <button class="qcm-opt" data-correct>1/3</button>
      <button class="qcm-opt">+∞</button>
    </div>
    <p class="qcm-exp"><sup>3</sup>√(x³ + x²) = x·<sup>3</sup>√(1 + 1/x) ≈ x(1 + 1/(3x)) = x + 1/3. En retranchant x, la limite vaut <b>1/3</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">24. lim<sub>x→0⁺</sub> x · E(1/x) = ? (E : partie entière)</p>
    <div class="qcm-opts">
      <button class="qcm-opt" data-correct>1</button>
      <button class="qcm-opt">0</button>
      <button class="qcm-opt">+∞</button>
    </div>
    <p class="qcm-exp">Encadrement : 1/x − 1 &lt; E(1/x) ≤ 1/x. En multipliant par x &gt; 0 : 1 − x &lt; x·E(1/x) ≤ 1. Par le théorème des gendarmes, la limite est <b>1</b>.</p>
  </div>
  <div class="qcm-q">
    <p class="qcm-question">25. Soit f(x) = (x² + 1)/(x² − 1). L'image f( ]−1, 1[ ) est ?</p>
    <div class="qcm-opts">
      <button class="qcm-opt">[−1, +∞[</button>
      <button class="qcm-opt">]−1, 1[</button>
      <button class="qcm-opt" data-correct>]−∞, −1]</button>
    </div>
    <p class="qcm-exp">Avec t = x² ∈ [0, 1[, f = (t+1)/(t−1) est décroissante : en t = 0 elle vaut −1, et t → 1⁻ donne −∞. D'où f( ]−1, 1[ ) = <b>]−∞, −1]</b>.</p>
  </div>
  <button class="qcm-submit">Valider</button>
  <p class="qcm-score"></p>
</div>

---

## Pour aller plus loin

- [Dérivabilité — Rolle, T.A.F, I.A.F →](/terminale/derivabilite)
- [Primitives →](/terminale/primitives)
- [Retour à la Terminale SM →](/terminale/)
