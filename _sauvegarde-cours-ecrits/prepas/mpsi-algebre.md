---
title: Algèbre & Analyse — MPSI / MP
description: Cours d'algèbre et d'analyse pour la MPSI / MP — logique, structures, polynômes, suites et fonctions.
---

Panorama des notions fondamentales d'**algèbre et d'analyse** de première année MPSI, avec les définitions et théorèmes clés à maîtriser.

---

## 1. Logique et raisonnement

:::note[📘 Connecteurs et quantificateurs]
Implication $P \Rightarrow Q$, équivalence $P \Leftrightarrow Q$, quantificateurs $\forall$ (pour tout) et $\exists$ (il existe). La négation échange les quantificateurs :

$$\neg\big(\forall x,\, P(x)\big) \equiv \exists x,\, \neg P(x).$$
:::

:::tip[📐 Modes de raisonnement]
- **Récurrence :** initialisation + hérédité $P(n) \Rightarrow P(n+1)$.
- **Par l'absurde :** supposer $\neg P$ et aboutir à une contradiction.
- **Par contraposée :** $P \Rightarrow Q$ équivaut à $\neg Q \Rightarrow \neg P$.
- **Par analyse-synthèse** pour les problèmes d'existence et d'unicité.
:::

---

## 2. Structures algébriques

:::note[📘 Définitions]
- Un **groupe** $(G, *)$ : loi associative, élément neutre, tout élément inversible.
- Un **anneau** $(A, +, \times)$ : $(A,+)$ groupe abélien, $\times$ associative et distributive.
- Un **corps** : anneau commutatif où tout élément non nul est inversible (ex. $\mathbb{Q}, \mathbb{R}, \mathbb{C}$).
:::

---

## 3. Nombres complexes

:::tip[📐 Forme et module]
Tout $z \in \mathbb{C}^*$ s'écrit $z = r e^{i\theta}$ avec $r = |z|$ et $\theta = \arg(z)$. Formule de **Moivre** :

$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta).$$

Les racines $n$-ièmes de l'unité sont $e^{2ik\pi/n}$, $k = 0,\dots,n-1$.
:::

---

## 4. Polynômes

:::note[📘 Anneau $\mathbb{K}[X]$]
Degré, division euclidienne, racines et factorisation. Un polynôme de degré $n$ a **au plus** $n$ racines. Théorème de **d'Alembert-Gauss** : tout polynôme non constant de $\mathbb{C}[X]$ est scindé.
:::

:::tip[📐 Relations coefficients-racines]
Pour $aX^2 + bX + c$ de racines $x_1, x_2$ : $x_1 + x_2 = -\dfrac{b}{a}$ et $x_1 x_2 = \dfrac{c}{a}$.
:::

---

## 5. Suites numériques

:::tip[📐 Convergence]
Une suite croissante et **majorée** converge (théorème de la limite monotone). Théorème des **gendarmes**, suites adjacentes, suites extraites (Bolzano-Weierstrass en dimension finie).
:::

:::note[📘 Suites usuelles]
Arithmétiques ($u_{n+1} = u_n + r$), géométriques ($u_{n+1} = q\,u_n$), et récurrentes $u_{n+1} = f(u_n)$ étudiées via les points fixes de $f$.
:::

---

## 6. Limites et continuité des fonctions

:::tip[📐 Théorèmes majeurs]
- **Théorème des valeurs intermédiaires (TVI)** : une fonction continue sur $[a,b]$ atteint toute valeur entre $f(a)$ et $f(b)$.
- **Théorème des bornes** : une fonction continue sur un segment est bornée et atteint ses bornes.
:::

:::note[📝 Exercice]
Montrer que tout polynôme réel de degré impair admet au moins une racine réelle (utiliser le TVI et les limites en $\pm\infty$).
:::

---

## Ressources & liens

- [Devoirs Surveillés MPSI →](/prepas/ds)
- [Devoirs à la Maison →](/prepas/dm)
- [Retour aux Classes Prépas →](/prepas/)
