---
title: Arithmétique
description: Cours complet et exercices corrigés d'arithmétique dans ℤ — divisibilité, PGCD, PPCM, nombres premiers, congruences — Première Bac SM (Maroc).
sidebar:
  order: 2
---

L'**arithmétique** étudie les propriétés des entiers relatifs $\mathbb{Z}$ : divisibilité, décomposition en facteurs premiers, et calcul modulo $n$. C'est un pilier du programme de Première Bac SM et un outil essentiel pour les olympiades.

**Prérequis :** raisonnement par récurrence, manipulation des entiers.

📥 [Télécharger la fiche de cours (PDF)](/pdf/arithmetique.pdf)

---

## 1. Divisibilité dans ℤ

:::note[📘 Définition 1 — Divisibilité]
Soient $a, b \in \mathbb{Z}$. On dit que $b$ **divise** $a$ (noté $b \mid a$) s'il existe $k \in \mathbb{Z}$ tel que $a = kb$. On dit alors que $a$ est un **multiple** de $b$, et que $b$ est un **diviseur** de $a$.
:::

:::tip[📐 Propriétés]
Pour tous $a, b, c \in \mathbb{Z}$ :
- $a \mid a$ (réflexivité) et $1 \mid a$, $a \mid 0$.
- Si $a \mid b$ et $b \mid c$, alors $a \mid c$ (transitivité).
- Si $a \mid b$ et $a \mid c$, alors $a \mid (ub + vc)$ pour tous $u, v \in \mathbb{Z}$.
- Si $a \mid b$ et $b \mid a$, alors $a = \pm b$.
:::

:::note[✏️ Exemple 1]
Montrons que pour tout $n \in \mathbb{N}$, $3 \mid (n^3 - n)$.

$n^3 - n = n(n-1)(n+1)$ est le produit de trois entiers consécutifs. Parmi trois entiers consécutifs, l'un au moins est divisible par $3$, donc $3 \mid (n^3-n)$.
:::

---

## 2. Division euclidienne

:::tip[📐 Théorème 1 — Division euclidienne]
Pour tous $a \in \mathbb{Z}$ et $b \in \mathbb{N}^*$, il existe un **unique** couple $(q, r) \in \mathbb{Z} \times \mathbb{N}$ tel que

$$a = bq + r \quad \text{avec} \quad 0 \leq r < b.$$

$q$ est le **quotient** et $r$ le **reste** de la division euclidienne de $a$ par $b$.
:::

:::note[✏️ Exemple 2]
Division de $47$ par $6$ : $47 = 6 \times 7 + 5$, donc $q = 7$ et $r = 5$.
:::

:::note[📝 Exercice 1]
1. Effectuer la division euclidienne de $2026$ par $17$.
2. Quels sont les entiers $n$ tels que la division de $n$ par $5$ donne un quotient égal au reste ?
:::

:::tip[✅ Correction 1]
1. $2026 = 17 \times 119 + 3$, donc $q = 119$, $r = 3$.
2. On cherche $n = 5q + r$ avec $q = r$ et $0 \leq r < 5$, soit $n = 5r + r = 6r$ pour $r \in \{0,1,2,3,4\}$ : $n \in \{0, 6, 12, 18, 24\}$.
:::

---

## 3. PGCD et PPCM

:::note[📘 Définition 2]
Le **PGCD** de deux entiers $a, b$ (non tous deux nuls), noté $\operatorname{pgcd}(a,b)$ ou $a \wedge b$, est le plus grand entier positif divisant à la fois $a$ et $b$. Le **PPCM**, noté $a \vee b$, est le plus petit entier positif multiple commun de $a$ et $b$.
:::

:::tip[📐 Algorithme d'Euclide]
Pour $a \geq b > 0$, on a $\operatorname{pgcd}(a, b) = \operatorname{pgcd}(b, r)$ où $r$ est le reste de $a$ par $b$. On répète jusqu'à obtenir un reste nul : le dernier reste non nul est le PGCD.
:::

:::note[✏️ Exemple 3 — Calcul du PGCD de 252 et 105]
$$252 = 105 \times 2 + 42 \qquad 105 = 42 \times 2 + 21 \qquad 42 = 21 \times 2 + 0.$$
Le dernier reste non nul est $21$, donc $\operatorname{pgcd}(252, 105) = 21$.
:::

:::tip[📐 Théorème 2 — Relation fondamentale]
Pour tous $a, b \in \mathbb{N}^*$ :

$$(a \wedge b) \times (a \vee b) = a \times b.$$
:::

:::note[📝 Exercice 2]
1. Calculer $\operatorname{pgcd}(1071, 462)$ par l'algorithme d'Euclide.
2. En déduire $\operatorname{ppcm}(1071, 462)$.
:::

:::tip[✅ Correction 2]
1. $1071 = 462\times2 + 147$ ; $462 = 147\times3 + 21$ ; $147 = 21\times7 + 0$. Donc $\operatorname{pgcd} = 21$.
2. $\operatorname{ppcm} = \dfrac{1071 \times 462}{21} = 51 \times 462 = 23\,562$.
:::

---

## 4. Nombres premiers entre eux — Théorèmes de Bézout et Gauss

:::note[📘 Définition 3]
Deux entiers $a$ et $b$ sont **premiers entre eux** si $\operatorname{pgcd}(a, b) = 1$.
:::

:::tip[📐 Théorème 3 — Bézout]
$a$ et $b$ sont premiers entre eux **si et seulement si** il existe $u, v \in \mathbb{Z}$ tels que

$$au + bv = 1.$$
:::

:::tip[📐 Théorème 4 — Gauss]
Si $a \mid bc$ et $\operatorname{pgcd}(a, b) = 1$, alors $a \mid c$.
:::

:::note[✏️ Exemple 4 — Coefficients de Bézout]
Pour $a = 17$ et $b = 5$ : en remontant l'algorithme d'Euclide, $17 \times (-2) + 5 \times 7 = -34 + 35 = 1$. Donc $u = -2$, $v = 7$.
:::

---

## 5. Nombres premiers

:::note[📘 Définition 4]
Un entier $p \geq 2$ est **premier** si ses seuls diviseurs positifs sont $1$ et $p$.
:::

:::tip[📐 Théorème 5 — Décomposition en facteurs premiers]
Tout entier $n \geq 2$ s'écrit de manière **unique** (à l'ordre près) sous la forme

$$n = p_1^{\alpha_1} \, p_2^{\alpha_2} \cdots p_r^{\alpha_r},$$

où les $p_i$ sont des nombres premiers distincts et $\alpha_i \in \mathbb{N}^*$.
:::

:::caution[💡 Test de primalité]
Pour vérifier que $n$ est premier, il suffit de tester les diviseurs premiers $p$ tels que $p \leq \sqrt{n}$. Si aucun ne divise $n$, alors $n$ est premier.
:::

:::note[✏️ Exemple 5]
$360 = 2^3 \times 3^2 \times 5$. Le nombre de diviseurs positifs est $(3+1)(2+1)(1+1) = 24$.
:::

:::note[📝 Exercice 3]
1. Décomposer $2520$ en produit de facteurs premiers.
2. En déduire son nombre de diviseurs positifs.
3. Le nombre $221$ est-il premier ?
:::

:::tip[✅ Correction 3]
1. $2520 = 2^3 \times 3^2 \times 5 \times 7$.
2. Nombre de diviseurs : $(3+1)(2+1)(1+1)(1+1) = 48$.
3. $221 = 13 \times 17$ : il **n'est pas** premier.
:::

---

## 6. Congruences modulo n

:::note[📘 Définition 5]
Soit $n \in \mathbb{N}^*$. On dit que $a$ est **congru** à $b$ modulo $n$, noté $a \equiv b \pmod{n}$, si $n \mid (a - b)$.
:::

:::tip[📐 Propriétés — Compatibilité]
Si $a \equiv b \pmod n$ et $c \equiv d \pmod n$, alors :
- $a + c \equiv b + d \pmod n$ ;
- $a \times c \equiv b \times d \pmod n$ ;
- $a^k \equiv b^k \pmod n$ pour tout $k \in \mathbb{N}$.
:::

:::note[✏️ Exemple 6 — Reste d'une puissance]
Déterminons le reste de $3^{100}$ modulo $7$. On a $3^6 \equiv 1 \pmod 7$ (petit théorème de Fermat). Or $100 = 6 \times 16 + 4$, donc

$$3^{100} = (3^6)^{16} \times 3^4 \equiv 1^{16} \times 81 \equiv 81 \equiv 4 \pmod 7.$$

Le reste est $\mathbf{4}$.
:::

:::note[📝 Exercice 4]
1. Déterminer le reste de la division de $2^{2026}$ par $5$.
2. Montrer que pour tout $n \in \mathbb{N}$, $7 \mid (3^{2n+1} + 2^{n+2})$.
:::

:::tip[✅ Correction 4]
1. $2^4 \equiv 1 \pmod 5$ et $2026 = 4 \times 506 + 2$, donc $2^{2026} \equiv 2^2 \equiv 4 \pmod 5$. Reste : $\mathbf{4}$.
2. $3^{2n+1} = 3\cdot 9^n \equiv 3\cdot 2^n \pmod 7$ et $2^{n+2} = 4\cdot 2^n$, d'où $3^{2n+1}+2^{n+2} \equiv 7\cdot 2^n \equiv 0 \pmod 7$.
:::

---

## 7. Exercices de synthèse

:::note[📝 Exercice 5]
Soit $n \in \mathbb{N}^*$. Montrer que $\operatorname{pgcd}(n+1,\, n) = 1$, puis que $\operatorname{pgcd}(2n+1,\, n) = 1$.
:::

:::note[📝 Exercice 6 — Chiffrement (ouverture)]
On code un message en associant à chaque lettre un entier $x \in \{0,\dots,25\}$ puis en calculant $y \equiv 7x + 3 \pmod{26}$.

1. Coder la lettre correspondant à $x = 4$.
2. Le décodage existe-t-il ? Justifier à l'aide de $\operatorname{pgcd}(7, 26)$.
:::

:::tip[🧭 Méthodes clés à retenir]
1. **Divisibilité :** factoriser, ou raisonner sur des entiers consécutifs.
2. **PGCD :** algorithme d'Euclide ; coefficients de Bézout en remontant.
3. **Congruences :** chercher une puissance $\equiv 1$ pour réduire les grands exposants.
4. **Nombres premiers :** décomposition unique, test jusqu'à $\sqrt{n}$.
:::

---

## Pour aller plus loin

- [Dénombrement →](/premiere/denombrement)
- [Examens Blancs — Arithmétique →](/premiere/examens-blancs)
- [Retour à la Première Bac SM →](/premiere/)
