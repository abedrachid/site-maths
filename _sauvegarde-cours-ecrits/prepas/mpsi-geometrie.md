---
title: Géométrie & Espaces vectoriels — MPSI / MP
description: Cours de géométrie et d'algèbre linéaire pour la MPSI / MP — espaces vectoriels, applications linéaires, matrices.
---

Introduction à l'**algèbre linéaire** et à la **géométrie** : espaces vectoriels, applications linéaires et représentation matricielle.

---

## 1. Espaces vectoriels

:::note[📘 Définition]
Un **espace vectoriel** sur $\mathbb{K}$ ($=\mathbb{R}$ ou $\mathbb{C}$) est un ensemble muni d'une addition et d'une multiplication par un scalaire vérifiant les huit axiomes usuels. Exemples : $\mathbb{K}^n$, $\mathbb{K}[X]$, les fonctions de $\mathbb{R}$ dans $\mathbb{R}$.
:::

:::tip[📐 Sous-espaces, familles]
- Un **sous-espace vectoriel** est stable par combinaison linéaire et contient $0$.
- **Famille libre** : aucune combinaison linéaire nulle non triviale.
- **Famille génératrice** : engendre tout l'espace.
- Une **base** est libre et génératrice ; toutes les bases d'un e.v. de dimension finie ont le même cardinal, la **dimension**.
:::

---

## 2. Applications linéaires

:::note[📘 Définition]
$f : E \to F$ est **linéaire** si $f(\lambda u + \mu v) = \lambda f(u) + \mu f(v)$. On note $\ker f = f^{-1}(\{0\})$ (noyau) et $\operatorname{Im} f$ (image).
:::

:::tip[📐 Théorème du rang]
Pour $f : E \to F$ linéaire avec $\dim E$ finie :

$$\dim E = \dim \ker f + \operatorname{rg}(f), \qquad \operatorname{rg}(f) = \dim \operatorname{Im} f.$$

$f$ est injective $\iff \ker f = \{0\}$.
:::

---

## 3. Matrices

:::note[📘 Représentation]
Toute application linéaire entre espaces de dimension finie se représente par une **matrice** dans des bases données. Le produit matriciel correspond à la composition des applications linéaires.
:::

:::tip[📐 Matrice inversible]
$M \in \mathcal{M}_n(\mathbb{K})$ est **inversible** ssi $\operatorname{rg}(M) = n$ ssi $\det M \neq 0$ ssi ses colonnes forment une base de $\mathbb{K}^n$.
:::

:::note[📝 Exercice]
Soit $f : \mathbb{R}^3 \to \mathbb{R}^2$, $(x,y,z) \mapsto (x+y,\ y-z)$. Déterminer $\ker f$, une base de $\operatorname{Im} f$, et vérifier le théorème du rang.
:::

---

## 4. Géométrie du plan et de l'espace

:::tip[📐 Produit scalaire et produit vectoriel]
$\vec{u}\cdot\vec{v} = \|\vec u\|\,\|\vec v\|\cos\theta$ : orthogonalité, projections. Dans l'espace : **produit vectoriel** $\vec u \wedge \vec v$ (norme = aire du parallélogramme) et **produit mixte** (volume du parallélépipède).
:::

---

## Ressources & liens

- [Devoirs Surveillés →](/prepas/ds)
- [Algèbre linéaire — PCSI/PC →](/prepas/pcsi-algebre)
- [Retour aux Classes Prépas →](/prepas/)
