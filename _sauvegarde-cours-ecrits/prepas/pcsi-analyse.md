---
title: Analyse & Intégration — PCSI / PC
description: Cours d'analyse pour la PCSI / PC — suites, limites, continuité, dérivation, développements limités et intégration.
---

L'**analyse** de première année PCSI : des suites à l'intégration, en passant par la continuité, la dérivation et les développements limités.

---

## 1. Suites numériques

:::tip[📐 Convergence]
Limite monotone (croissante majorée ⟹ convergente), théorème des gendarmes, suites adjacentes. Une suite récurrente $u_{n+1} = f(u_n)$ s'étudie via les **points fixes** de $f$ et le signe de $f(x) - x$.
:::

---

## 2. Continuité

:::note[📘 Théorèmes fondamentaux]
- **TVI** : $f$ continue sur $[a,b]$ prend toute valeur intermédiaire.
- **Bornes atteintes** : $f$ continue sur un segment est bornée et atteint ses bornes.
- Une fonction continue et strictement monotone réalise une **bijection** sur son image.
:::

---

## 3. Dérivation

:::tip[📐 Théorèmes de Rolle et des accroissements finis]
Si $f$ est continue sur $[a,b]$, dérivable sur $]a,b[$ :
- **Rolle** : si $f(a)=f(b)$, alors $\exists c,\ f'(c)=0$.
- **T.A.F** : $\exists c,\ f'(c) = \dfrac{f(b)-f(a)}{b-a}$.
- **I.A.F** : si $|f'|\le k$, alors $|f(b)-f(a)| \le k|b-a|$.
:::

---

## 4. Développements limités

:::note[📘 Formule de Taylor-Young]
Au voisinage de $0$, pour $f$ de classe $\mathcal{C}^n$ :

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!}x^k + o(x^n).$$

DL usuels : $e^x = 1 + x + \frac{x^2}{2} + \cdots$, $\ \dfrac{1}{1-x} = 1 + x + x^2 + \cdots$, $\ \ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$
:::

---

## 5. Intégration

:::tip[📐 Théorème fondamental de l'analyse]
Si $f$ est continue sur $I$ et $F$ une primitive de $f$, alors

$$\int_a^b f(t)\,dt = F(b) - F(a).$$

**Techniques :** intégration par parties $\int u'v = [uv] - \int uv'$, et changement de variable.
:::

:::note[📝 Exercice]
Calculer $\displaystyle\int_0^1 x\,e^{x}\,dx$ par intégration par parties.
:::

---

## Ressources & liens

- [Devoirs Surveillés →](/prepas/ds)
- [Algèbre linéaire — PCSI/PC →](/prepas/pcsi-algebre)
- [Retour aux Classes Prépas →](/prepas/)
