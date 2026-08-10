---
title: Le Dénombrement
description: Cours complet et exercices corrigés sur le dénombrement — principes de comptage, arrangements, permutations et combinaisons — Première Bac Sciences Mathématiques.
sidebar:
  order: 1
---

Le **dénombrement** apprend à compter le nombre d'éléments d'un ensemble fini de manière méthodique, sans énumération. C'est un chapitre clé de la Première Bac SM et la base du calcul des probabilités.

📥 [Télécharger la fiche de cours (PDF)](/pdf/denombrement.pdf)

---

## 1. Cardinal et principes de comptage

:::note[📘 Définition 1 — Cardinal]
Le **cardinal** d'un ensemble fini $E$, noté $\operatorname{card}(E)$ ou $|E|$, est son nombre d'éléments.
:::

:::tip[📐 Principe additif]
Si $A$ et $B$ sont **disjoints** ($A \cap B = \varnothing$), alors $\operatorname{card}(A \cup B) = \operatorname{card}(A) + \operatorname{card}(B)$. Dans le cas général :

$$\operatorname{card}(A \cup B) = \operatorname{card}(A) + \operatorname{card}(B) - \operatorname{card}(A \cap B).$$
:::

:::tip[📐 Principe multiplicatif]
Le nombre de couples $(x, y)$ avec $x \in A$ et $y \in B$ est $\operatorname{card}(A) \times \operatorname{card}(B)$. Plus généralement, une suite de $k$ choix indépendants offrant respectivement $n_1, n_2, \dots, n_k$ possibilités donne $n_1 \times n_2 \times \cdots \times n_k$ résultats.
:::

:::note[✏️ Exemple 1]
Une plaque d'immatriculation est formée de $2$ lettres suivies de $3$ chiffres. Nombre de plaques possibles : $26^2 \times 10^3 = 676\,000$.
:::

---

## 2. p-listes (tirages ordonnés avec répétition)

:::note[📘 Définition 2]
Une **$p$-liste** d'un ensemble $E$ à $n$ éléments est une suite ordonnée de $p$ éléments de $E$, **avec répétition possible**. Leur nombre est

$$n^p.$$
:::

:::note[✏️ Exemple 2]
Un code PIN de $4$ chiffres : $10^4 = 10\,000$ codes possibles.
:::

---

## 3. Arrangements (ordonnés sans répétition)

:::note[📘 Définition 3]
Un **arrangement** de $p$ éléments parmi $n$ est une suite ordonnée de $p$ éléments **distincts**. Leur nombre est

$$A_n^p = n(n-1)\cdots(n-p+1) = \frac{n!}{(n-p)!}, \quad 0 \leq p \leq n.$$
:::

:::note[✏️ Exemple 3]
Élire un président, un secrétaire et un trésorier parmi $10$ membres : $A_{10}^3 = 10 \times 9 \times 8 = 720$.
:::

---

## 4. Permutations

:::note[📘 Définition 4]
Une **permutation** de $n$ éléments est un arrangement des $n$ éléments (cas $p = n$). Leur nombre est

$$n! = A_n^n.$$
:::

:::note[✏️ Exemple 4]
Nombre de façons d'asseoir $6$ personnes sur $6$ chaises : $6! = 720$.
:::

---

## 5. Combinaisons (non ordonnées sans répétition)

:::note[📘 Définition 5]
Une **combinaison** de $p$ éléments parmi $n$ est un sous-ensemble à $p$ éléments (l'ordre n'intervient pas). Leur nombre est

$$\binom{n}{p} = C_n^p = \frac{A_n^p}{p!} = \frac{n!}{p!\,(n-p)!}.$$
:::

:::tip[📐 Propriétés]
$$\binom{n}{0} = \binom{n}{n} = 1, \qquad \binom{n}{p} = \binom{n}{n-p}, \qquad \binom{n}{p} + \binom{n}{p+1} = \binom{n+1}{p+1} \; (\text{Pascal}).$$
:::

:::note[✏️ Exemple 5]
Tirer simultanément $2$ cartes d'un jeu de $32$ : $\dbinom{32}{2} = \dfrac{32 \times 31}{2} = 496$.
:::

:::note[📝 Exercice 1]
Une classe compte $15$ garçons et $10$ filles. On choisit un groupe de $4$ élèves.

1. Combien de groupes possibles ?
2. Combien de groupes de $2$ garçons et $2$ filles ?
:::

:::tip[✅ Correction 1]
1. $\dbinom{25}{4} = 12\,650$.
2. $\dbinom{15}{2}\dbinom{10}{2} = 105 \times 45 = 4725$.
:::

---

## 6. Tableau récapitulatif

| Type de tirage | Ordre | Répétition | Nombre |
|---|:---:|:---:|---|
| $p$-liste | oui | oui | $n^p$ |
| Arrangement | oui | non | $A_n^p = \dfrac{n!}{(n-p)!}$ |
| Permutation | oui | non (tous) | $n!$ |
| Combinaison | non | non | $\dbinom{n}{p}$ |

:::tip[🧭 Comment choisir la bonne formule ?]
1. L'**ordre** compte-t-il ? Si non → combinaison.
2. Y a-t-il **répétition** ? Si oui et ordonné → $n^p$.
3. Prend-on **tous** les éléments ? Si oui et ordonné → permutation $n!$.
:::

---

## 📚 Séries d'exercices

- [Série d'exercices 1](/pdf/denombrement_serie1.pdf)
- [Série d'exercices 2](/pdf/denombrement_serie2.pdf)
- [Série d'exercices 3](/pdf/denombrement_serie3.pdf)

## Pour aller plus loin

- [Arithmétique →](/premiere/arithmetique)
- [Retour à la Première Bac SM →](/premiere/)
