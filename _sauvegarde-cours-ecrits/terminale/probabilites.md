---
title: Probabilités
description: Cours complet et exercices corrigés sur les probabilités — probabilité conditionnelle, indépendance, formule des probabilités totales et variables aléatoires — Terminale Sciences Mathématiques.
sidebar:
  order: 5
---

Les **probabilités** modélisent le hasard. Ce chapitre s'appuie sur le [dénombrement](/terminale/denombrement) et introduit la probabilité conditionnelle, l'indépendance et les variables aléatoires.

**Prérequis :** dénombrement (combinaisons, arrangements).

---

## 1. Vocabulaire et probabilité d'un événement

:::note[📘 Définition 1]
Une **expérience aléatoire** a un ensemble de résultats possibles $\Omega$ appelé **univers**. Un **événement** est une partie de $\Omega$. Une **probabilité** $P$ associe à chaque événement un réel de $[0,1]$ avec $P(\Omega) = 1$ et, pour des événements incompatibles, $P(A \cup B) = P(A) + P(B)$.
:::

:::tip[📐 Équiprobabilité]
Lorsque tous les résultats sont équiprobables :

$$P(A) = \frac{\operatorname{card}(A)}{\operatorname{card}(\Omega)} = \frac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}.$$
:::

:::tip[📐 Propriétés]
- $P(\bar A) = 1 - P(A)$ (événement contraire).
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
- $P(\varnothing) = 0$.
:::

:::note[✏️ Exemple 1]
On tire une carte d'un jeu de $52$. Probabilité d'obtenir un roi : $P = \dfrac{4}{52} = \dfrac{1}{13}$.
:::

---

## 2. Probabilité conditionnelle

:::note[📘 Définition 2]
Soit $B$ un événement de probabilité non nulle. La **probabilité conditionnelle** de $A$ sachant $B$ est

$$P_B(A) = P(A \mid B) = \frac{P(A \cap B)}{P(B)}.$$
:::

:::tip[📐 Formule des probabilités composées]
$$P(A \cap B) = P(B) \, P_B(A) = P(A) \, P_A(B).$$
:::

:::note[✏️ Exemple 2]
Une urne contient $3$ boules blanches et $2$ noires. On tire deux boules **sans remise**. Probabilité que la seconde soit blanche sachant que la première l'était :

$$P_B(A) = \frac{2}{4} = \frac{1}{2}.$$
:::

---

## 3. Indépendance

:::note[📘 Définition 3]
Deux événements $A$ et $B$ sont **indépendants** si

$$P(A \cap B) = P(A) \times P(B),$$

ce qui équivaut, si $P(B) \neq 0$, à $P_B(A) = P(A)$.
:::

:::caution[💡 Ne pas confondre]
**Indépendants** ≠ **incompatibles**. Deux événements incompatibles de probabilités non nulles ne sont **jamais** indépendants (car $P(A\cap B) = 0 \neq P(A)P(B)$).
:::

---

## 4. Formule des probabilités totales

:::tip[📐 Théorème — Probabilités totales]
Si $\{B_1, B_2, \dots, B_n\}$ forme une **partition** de $\Omega$ (événements incompatibles de réunion $\Omega$, de probabilités non nulles), alors pour tout événement $A$ :

$$P(A) = \sum_{i=1}^{n} P(B_i)\, P_{B_i}(A).$$
:::

:::tip[📐 Formule de Bayes]
$$P_A(B_i) = \frac{P(B_i)\,P_{B_i}(A)}{\displaystyle\sum_{j=1}^{n} P(B_j)\,P_{B_j}(A)}.$$
:::

:::note[✏️ Exemple 3 — Arbre pondéré]
Deux usines fabriquent des pièces : l'usine 1 en produit $60\%$ (dont $5\%$ défectueuses), l'usine 2 les $40\%$ restants (dont $8\%$ défectueuses). Probabilité qu'une pièce prise au hasard soit défectueuse :

$$P(D) = 0{,}6 \times 0{,}05 + 0{,}4 \times 0{,}08 = 0{,}03 + 0{,}032 = 0{,}062.$$
:::

:::note[📝 Exercice 1]
Avec les données de l'exemple 3, une pièce est défectueuse. Quelle est la probabilité qu'elle provienne de l'usine 2 ?
:::

:::tip[✅ Correction 1]
Par Bayes : $P_D(U_2) = \dfrac{0{,}4 \times 0{,}08}{0{,}062} = \dfrac{0{,}032}{0{,}062} \approx 0{,}516$.
:::

---

## 5. Variables aléatoires

:::note[📘 Définition 4]
Une **variable aléatoire** $X$ associe à chaque résultat de $\Omega$ un réel. Sa **loi de probabilité** donne les $P(X = x_i)$ pour chaque valeur $x_i$ prise par $X$.
:::

:::note[📘 Définition 5 — Espérance, variance, écart-type]
$$E(X) = \sum_i x_i\, P(X = x_i), \qquad V(X) = E(X^2) - \big(E(X)\big)^2, \qquad \sigma(X) = \sqrt{V(X)}.$$

L'espérance est la valeur « moyenne » attendue ; l'écart-type mesure la dispersion.
:::

:::note[✏️ Exemple 4]
Un jeu : on gagne $10$ dh avec probabilité $0{,}2$, sinon on perd $3$ dh. Espérance de gain :

$$E(X) = 10 \times 0{,}2 + (-3) \times 0{,}8 = 2 - 2{,}4 = -0{,}4 \text{ dh}.$$

Le jeu est défavorable au joueur.
:::

:::note[📝 Exercice 2]
On lance deux dés équilibrés et $X$ désigne la somme obtenue.

1. Donner la loi de $X$.
2. Calculer $E(X)$.
:::

:::tip[✅ Correction 2]
1. $X$ prend les valeurs $2$ à $12$ ; par exemple $P(X=7) = \dfrac{6}{36} = \dfrac16$ (valeur la plus probable).
2. Par symétrie, $E(X) = 7$.
:::

---

## 6. Loi binomiale (introduction)

:::tip[📐 Schéma de Bernoulli]
On répète $n$ fois, de façon **indépendante**, une épreuve à deux issues (succès de probabilité $p$, échec $1-p$). Le nombre de succès $X$ suit la **loi binomiale** $\mathcal{B}(n, p)$ :

$$P(X = k) = \binom{n}{k} p^k (1-p)^{\,n-k}, \qquad E(X) = np, \quad V(X) = np(1-p).$$
:::

:::note[✏️ Exemple 5]
On lance $10$ fois une pièce équilibrée. Probabilité d'obtenir exactement $4$ « pile » :

$$P(X=4) = \binom{10}{4}\left(\frac12\right)^{10} = \frac{210}{1024} \approx 0{,}205.$$
:::

:::tip[🧭 Méthodes clés]
1. **Comptage :** ramener aux combinaisons/arrangements.
2. **Conditionnel :** dessiner un **arbre pondéré**, multiplier le long des branches.
3. **Probabilités totales :** sommer les branches menant à l'événement.
4. **Bayes :** « remonter » l'arbre.
5. **Espérance :** pondérer chaque valeur par sa probabilité.
:::

---

## 📚 Séries d'exercices (planches)

- 📄 [Série 1 (planche 1)](/pdf/terminale/probabilites/serie1.pdf)
- 📄 [Série 2 (planche 2)](/pdf/terminale/probabilites/serie2.pdf)
- 📄 [Série 3 (planche 3)](/pdf/terminale/probabilites/serie3.pdf)

:::note[Planches en cours d'ajout]
Les planches d'exercices sont mises en ligne progressivement. Déposez vos PDF dans `public/pdf/terminale/probabilites/`.
:::

---

## Pour aller plus loin

- [Le Dénombrement →](/terminale/denombrement)
- [Devoirs Surveillés →](/terminale/ds)
- [Retour à la Terminale SM →](/terminale/)
