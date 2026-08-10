---
title: Probabilités & Statistiques — MPSI / MP
description: Cours de probabilités sur un univers fini pour la MPSI / MP — dénombrement, probabilité conditionnelle, variables aléatoires.
---

**Probabilités** sur un univers fini : modélisation, conditionnement et variables aléatoires réelles.

---

## 1. Espaces probabilisés finis

:::note[📘 Définition]
Sur un univers fini $\Omega$, une **probabilité** est une application $P : \mathcal{P}(\Omega) \to [0,1]$ telle que $P(\Omega) = 1$ et $P(A \cup B) = P(A) + P(B)$ pour $A, B$ incompatibles. En cas d'équiprobabilité, $P(A) = \dfrac{|A|}{|\Omega|}$.
:::

---

## 2. Conditionnement et indépendance

:::tip[📐 Formules clés]
$$P_B(A) = \frac{P(A\cap B)}{P(B)}, \qquad P(A) = \sum_i P(B_i)P_{B_i}(A) \ (\text{prob. totales}),$$
$$P_A(B_i) = \frac{P(B_i)P_{B_i}(A)}{\sum_j P(B_j)P_{B_j}(A)} \ (\text{Bayes}).$$

$A$ et $B$ sont **indépendants** ssi $P(A\cap B) = P(A)P(B)$.
:::

---

## 3. Variables aléatoires

:::note[📘 Loi, espérance, variance]
Une **v.a. réelle** $X$ sur $\Omega$ fini a pour loi les $P(X = x_i)$. Son espérance et sa variance :

$$E(X) = \sum_i x_i P(X=x_i), \qquad V(X) = E(X^2) - E(X)^2.$$

**Linéarité :** $E(aX+b) = aE(X)+b$ et $V(aX+b) = a^2 V(X)$.
:::

:::tip[📐 Lois usuelles]
- **Uniforme** sur $\{1,\dots,n\}$ : $E(X) = \dfrac{n+1}{2}$.
- **Bernoulli** $\mathcal{B}(p)$ : $E = p$, $V = p(1-p)$.
- **Binomiale** $\mathcal{B}(n,p)$ : $P(X=k) = \dbinom{n}{k}p^k(1-p)^{n-k}$, $E = np$, $V = np(1-p)$.
:::

:::note[📝 Exercice]
On tire $5$ cartes d'un jeu de $32$. Soit $X$ le nombre d'as obtenus. Donner la loi de $X$ et calculer $E(X)$.
:::

---

## Ressources & liens

- [Devoirs Surveillés →](/prepas/ds)
- [Concours Blancs →](/prepas/concours-blancs)
- [Retour aux Classes Prépas →](/prepas/)
