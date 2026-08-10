---
title: Algèbre linéaire — PCSI / PC
description: Cours d'algèbre linéaire pour la PCSI / PC — systèmes linéaires, matrices, déterminants et espaces vectoriels.
---

L'**algèbre linéaire** de PCSI : systèmes, matrices, déterminants et espaces vectoriels.

---

## 1. Systèmes linéaires

:::tip[📐 Méthode du pivot de Gauss]
Tout système linéaire se résout par échelonnement (pivot de Gauss). Le nombre de pivots est le **rang** du système. Trois cas : solution unique, infinité de solutions, ou aucune.
:::

---

## 2. Calcul matriciel

:::note[📘 Opérations]
Addition, produit, transposition. Le produit n'est **pas commutatif** en général : $AB \neq BA$. Une matrice $A \in \mathcal{M}_n(\mathbb{K})$ est **inversible** s'il existe $B$ telle que $AB = BA = I_n$.
:::

:::tip[📐 Inversibilité]
$A$ inversible $\iff \det A \neq 0 \iff \operatorname{rg}(A) = n \iff$ le système $AX = 0$ n'a que la solution nulle.
:::

---

## 3. Déterminants

:::note[📘 Propriétés]
Le déterminant est **multilinéaire alterné** en les colonnes. Pour $2\times 2$ :

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc.$$

Propriétés : $\det(AB) = \det A \det B$, $\det(A^{-1}) = \dfrac{1}{\det A}$. Développement par rapport à une ligne ou une colonne (cofacteurs).
:::

---

## 4. Espaces vectoriels et dimension

:::tip[📐 Bases et dimension]
Une **base** est une famille libre et génératrice. Théorème du rang :

$$\dim E = \dim \ker f + \operatorname{rg}(f).$$

Rang d'une matrice = dimension de l'espace engendré par ses colonnes.
:::

:::note[📝 Exercice]
Discuter, selon $m \in \mathbb{R}$, le nombre de solutions du système :

$$\begin{cases} x + y + z = 1 \\ x + my + z = 2 \\ x + y + mz = 3 \end{cases}$$

(indication : calculer le déterminant en fonction de $m$).
:::

---

## Ressources & liens

- [Devoirs Surveillés →](/prepas/ds)
- [Analyse & Intégration — PCSI/PC →](/prepas/pcsi-analyse)
- [Retour aux Classes Prépas →](/prepas/)
