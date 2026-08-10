---
title: Primitives
description: Cours complet et exercices corrigés sur les primitives d'une fonction continue — Terminale Sciences Mathématiques (Maroc).
sidebar:
  order: 3
---

Une **primitive** est l'opération inverse de la dérivation : à partir d'une fonction $f$, on cherche une fonction $F$ dont la dérivée est $f$. C'est la porte d'entrée du calcul intégral.

**Prérequis :** dérivation, dérivées des fonctions usuelles.

---

## 1. Définition et premières propriétés

:::note[📘 Définition 1 — Primitive]
Soit $f$ une fonction définie sur un intervalle $I$. Une fonction $F$ dérivable sur $I$ est une **primitive** de $f$ sur $I$ si

$$F'(x) = f(x) \quad \text{pour tout } x \in I.$$
:::

:::tip[📐 Théorème 1 — Existence]
Toute fonction **continue** sur un intervalle $I$ admet des primitives sur $I$.
:::

:::tip[📐 Théorème 2 — Ensemble des primitives]
Si $F$ est une primitive de $f$ sur $I$, alors **toutes** les primitives de $f$ sur $I$ sont les fonctions

$$x \mapsto F(x) + k, \quad k \in \mathbb{R}.$$

Deux primitives d'une même fonction diffèrent d'une constante.
:::

:::tip[📐 Théorème 3 — Primitive avec condition initiale]
Pour tout $x_0 \in I$ et tout $y_0 \in \mathbb{R}$, il existe une **unique** primitive $F$ de $f$ telle que $F(x_0) = y_0$.
:::

:::note[✏️ Exemple 1]
Les primitives de $f(x) = 2x$ sont $F(x) = x^2 + k$. Celle qui vérifie $F(1) = 3$ : $1 + k = 3 \Rightarrow k = 2$, donc $F(x) = x^2 + 2$.
:::

---

## 2. Primitives des fonctions usuelles

| Fonction $f(x)$ | Primitive $F(x)$ | Intervalle |
|---|---|---|
| $a$ (constante) | $ax$ | $\mathbb{R}$ |
| $x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n+1}$ | $\mathbb{R}$ (ou $\mathbb{R}^*$) |
| $\dfrac{1}{x^2}$ | $-\dfrac{1}{x}$ | $x \neq 0$ |
| $\dfrac{1}{\sqrt{x}}$ | $2\sqrt{x}$ | $x > 0$ |
| $\sin x$ | $-\cos x$ | $\mathbb{R}$ |
| $\cos x$ | $\sin x$ | $\mathbb{R}$ |
| $1 + \tan^2 x = \dfrac{1}{\cos^2 x}$ | $\tan x$ | $x \neq \tfrac{\pi}{2}+k\pi$ |

:::caution[💡 À retenir]
Chaque ligne se vérifie en dérivant la colonne de droite : on doit retomber sur la colonne de gauche. À une primitive, on ajoute toujours la constante $+k$.
:::

---

## 3. Opérations et formes composées

:::tip[📐 Théorème 4 — Linéarité]
Si $F$ et $G$ sont des primitives de $f$ et $g$, alors $\alpha F + \beta G$ est une primitive de $\alpha f + \beta g$ (pour $\alpha, \beta \in \mathbb{R}$).
:::

En lisant « à l'envers » les règles de dérivation d'une composée, on obtient les **formes usuelles** (où $u$ est une fonction dérivable) :

| Forme $f = $ | Primitive $F = $ |
|---|---|
| $u' \, u^n$ ($n \neq -1$) | $\dfrac{u^{n+1}}{n+1}$ |
| $\dfrac{u'}{u^2}$ | $-\dfrac{1}{u}$ |
| $\dfrac{u'}{\sqrt{u}}$ | $2\sqrt{u}$ |
| $u' \cos u$ | $\sin u$ |
| $u' \sin u$ | $-\cos u$ |

:::note[✏️ Exemple 2]
Primitive de $f(x) = 2x\,(x^2+1)^3$ : on reconnaît $u' u^3$ avec $u = x^2+1$, donc

$$F(x) = \frac{(x^2+1)^4}{4} + k.$$
:::

:::note[✏️ Exemple 3]
Primitive de $f(x) = \dfrac{x}{\sqrt{x^2+1}}$ : on reconnaît $\dfrac{u'}{2\sqrt u}$ avec $u = x^2+1$ (car $u' = 2x$), donc

$$F(x) = \sqrt{x^2 + 1} + k.$$
:::

---

## 4. Méthode générale

:::tip[🧭 Comment trouver une primitive]
1. **Reconnaître une forme usuelle** du tableau (directe ou composée).
2. **Développer ou simplifier** l'expression si nécessaire (ex. distribuer un produit).
3. **Faire apparaître $u'$** au numérateur en ajustant par une constante multiplicative.
4. **Vérifier** en dérivant le résultat.
:::

:::note[📝 Exercice 1 — Primitives directes]
Déterminer une primitive de :

1. $f(x) = 3x^2 - 4x + 5$
2. $g(x) = \dfrac{1}{x^2} + \sqrt{x}$ &nbsp; $(x > 0)$
3. $h(x) = \cos x - 2\sin x$
:::

:::tip[✅ Correction 1]
1. $F(x) = x^3 - 2x^2 + 5x + k$.
2. $G(x) = -\dfrac{1}{x} + \dfrac{2}{3}x^{3/2} + k$.
3. $H(x) = \sin x + 2\cos x + k$.
:::

:::note[📝 Exercice 2 — Formes composées]
Déterminer une primitive de :

1. $f(x) = (2x+1)(x^2 + x + 3)^5$
2. $g(x) = \dfrac{3x^2}{(x^3+1)^2}$
3. $h(x) = \sin x \cos^4 x$
:::

:::tip[✅ Correction 2]
1. $u = x^2+x+3$, $u' = 2x+1$ : $F(x) = \dfrac{(x^2+x+3)^6}{6} + k$.
2. $u = x^3+1$, $u' = 3x^2$ : $G(x) = -\dfrac{1}{x^3+1} + k$.
3. $u = \cos x$, $u' = -\sin x$ : $H(x) = -\dfrac{\cos^5 x}{5} + k$.
:::

---

## 5. Application avec condition initiale

:::note[📝 Exercice 3]
Soit $f(x) = 3x^2 - 2$. Déterminer la primitive $F$ de $f$ telle que $F(1) = 4$.
:::

:::tip[✅ Correction 3]
$F(x) = x^3 - 2x + k$. La condition $F(1) = 1 - 2 + k = 4$ donne $k = 5$, d'où $F(x) = x^3 - 2x + 5$.
:::

:::note[📝 Exercice 4 — Problème]
Un mobile a pour accélération $a(t) = 6t - 4$ (en m·s⁻²). À $t = 0$, sa vitesse est $v(0) = 2$ m·s⁻¹ et sa position $x(0) = 0$.

1. Déterminer la vitesse $v(t)$ (primitive de l'accélération).
2. En déduire la position $x(t)$.
:::

:::tip[✅ Correction 4]
1. $v(t) = 3t^2 - 4t + k$ ; $v(0) = 2 \Rightarrow k = 2$, donc $v(t) = 3t^2 - 4t + 2$.
2. $x(t) = t^3 - 2t^2 + 2t + k'$ ; $x(0) = 0 \Rightarrow k' = 0$, donc $x(t) = t^3 - 2t^2 + 2t$.
:::

---

## 📚 Séries d'exercices (planches)

- 📄 [Série 1 (planche 1)](/pdf/terminale/primitives/serie1.pdf)
- 📄 [Série 2 (planche 2)](/pdf/terminale/primitives/serie2.pdf)
- 📄 [Série 3 (planche 3)](/pdf/terminale/primitives/serie3.pdf)

:::note[Planches en cours d'ajout]
Les planches d'exercices sont mises en ligne progressivement. Déposez vos PDF dans `public/pdf/terminale/primitives/`.
:::

---

## Pour aller plus loin

- [Dérivabilité →](/terminale/derivabilite)
- [Limites et continuité →](/terminale/limites)
- [Retour à la Terminale SM →](/terminale/)
