---
title: Dérivabilité — Rolle, T.A.F et I.A.F
description: Cours complet et exercices corrigés sur la dérivabilité, le théorème de Rolle, le théorème des accroissements finis (T.A.F) et l'inégalité des accroissements finis (I.A.F) — Terminale Sciences Mathématiques.
sidebar:
  order: 2
---

La **dérivabilité** raffine la notion de continuité : elle mesure la vitesse de variation d'une fonction. Ce chapitre aboutit à trois théorèmes majeurs de l'analyse — **Rolle**, les **accroissements finis** (T.A.F) et leur **inégalité** (I.A.F) — outils indispensables à l'étude des fonctions.

**Prérequis :** limites et continuité, opérations sur les fonctions.

---

## 1. Nombre dérivé et fonction dérivée

:::note[📘 Définition 1 — Nombre dérivé]
Soit $f$ définie sur un intervalle $I$ et $a \in I$. On dit que $f$ est **dérivable en $a$** si le taux d'accroissement admet une limite finie :

$$f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a} = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}.$$

Ce réel $f'(a)$ est le **nombre dérivé** de $f$ en $a$.
:::

:::caution[💡 Interprétation géométrique]
$f'(a)$ est le **coefficient directeur de la tangente** à la courbe de $f$ au point d'abscisse $a$. L'équation de cette tangente est :

$$y = f'(a)(x - a) + f(a).$$
:::

:::tip[📐 Théorème 1 — Dérivabilité ⟹ continuité]
Si $f$ est dérivable en $a$, alors $f$ est **continue** en $a$. **La réciproque est fausse** : $x \mapsto |x|$ est continue mais non dérivable en $0$.
:::

:::note[✏️ Exemple 1]
Pour $f(x) = x^2$ en $a = 3$ :

$$\frac{f(3+h)-f(3)}{h} = \frac{(3+h)^2 - 9}{h} = \frac{6h + h^2}{h} = 6 + h \xrightarrow{\;h\to 0\;} 6.$$

Donc $f'(3) = 6$ et la tangente en $3$ a pour équation $y = 6x - 9$.
:::

---

## 2. Dérivabilité à gauche, à droite

:::note[📘 Définition 2]
$f$ est **dérivable à droite** en $a$ si $\displaystyle\lim_{h\to 0^+}\frac{f(a+h)-f(a)}{h} = f'_d(a)$ existe ; de même à gauche pour $f'_g(a)$.
:::

:::tip[📐 Théorème 2]
$f$ est dérivable en $a$ **si et seulement si** $f'_g(a) = f'_d(a)$ (finis et égaux). Sinon, la courbe présente un **point anguleux**.
:::

---

## 3. Opérations sur les dérivées

| Fonction | Dérivée | Condition |
|---|---|---|
| $x^n$ | $n\,x^{n-1}$ | $n \in \mathbb{Z}$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $x > 0$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ | $x \neq 0$ |
| $\sin x$ | $\cos x$ | |
| $\cos x$ | $-\sin x$ | |
| $\tan x$ | $1 + \tan^2 x = \dfrac{1}{\cos^2 x}$ | $x \neq \tfrac{\pi}{2} + k\pi$ |

:::tip[📐 Théorème 3 — Règles de dérivation]
$$(u+v)' = u' + v' \qquad (uv)' = u'v + uv' \qquad \left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$

**Dérivée d'une composée :** $\big(g \circ u\big)' = u' \times (g' \circ u)$. En particulier :

$$\big(u^n\big)' = n\,u'\,u^{n-1}, \qquad \big(\sqrt{u}\big)' = \frac{u'}{2\sqrt{u}}.$$
:::

:::note[✏️ Exemple 2]
Pour $f(x) = \sqrt{x^2 + 1}$ : avec $u = x^2+1$, $u' = 2x$, on obtient

$$f'(x) = \frac{2x}{2\sqrt{x^2+1}} = \frac{x}{\sqrt{x^2+1}}.$$
:::

:::note[📝 Exercice 1]
Calculer la dérivée de :

1. $f(x) = (3x^2 - 1)^4$
2. $g(x) = \dfrac{2x+1}{x^2+3}$
3. $h(x) = \sin(2x) \cos x$
:::

:::tip[✅ Correction 1]
1. $f'(x) = 4(3x^2-1)^3 \times 6x = 24x(3x^2-1)^3$.
2. $g'(x) = \dfrac{2(x^2+3) - (2x+1)(2x)}{(x^2+3)^2} = \dfrac{-2x^2 - 2x + 6}{(x^2+3)^2}$.
3. $h'(x) = 2\cos(2x)\cos x - \sin(2x)\sin x$.
:::

---

## 4. Dérivée et sens de variation

:::tip[📐 Théorème 4 — Monotonie]
Soit $f$ dérivable sur un intervalle $I$.
- Si $f'(x) > 0$ sur $I$, alors $f$ est **strictement croissante** sur $I$.
- Si $f'(x) < 0$ sur $I$, alors $f$ est **strictement décroissante** sur $I$.
- Si $f'(x) = 0$ sur $I$, alors $f$ est **constante** sur $I$.
:::

:::tip[📐 Théorème 5 — Extremum local]
Si $f$ admet un extremum local en un point intérieur $a$ où elle est dérivable, alors $f'(a) = 0$. (Condition **nécessaire**, non suffisante : voir $x\mapsto x^3$ en $0$.)
:::

---

## 5. Théorème de Rolle

:::tip[📐 Théorème 6 — Rolle]
Soit $f$ une fonction **continue** sur $[a, b]$, **dérivable** sur $]a, b[$, et telle que $f(a) = f(b)$. Alors il existe **au moins un** $c \in\ ]a, b[$ tel que

$$f'(c) = 0.$$
:::

:::caution[💡 Interprétation]
Entre deux points de même hauteur, la courbe possède au moins une tangente horizontale.
:::

:::note[✏️ Exemple 3]
$f(x) = x^2 - 4x + 3$ sur $[1, 3]$ : $f$ est continue et dérivable, $f(1) = f(3) = 0$. Rolle garantit un $c$ avec $f'(c) = 0$. Ici $f'(x) = 2x - 4 = 0 \Rightarrow c = 2 \in\ ]1, 3[$. ✓
:::

---

## 6. Théorème des accroissements finis (T.A.F)

:::tip[📐 Théorème 7 — T.A.F]
Soit $f$ **continue** sur $[a, b]$ et **dérivable** sur $]a, b[$. Alors il existe $c \in\ ]a, b[$ tel que

$$f'(c) = \frac{f(b) - f(a)}{b - a}.$$
:::

:::caution[💡 Interprétation]
Il existe un point où la **tangente est parallèle à la corde** joignant $\big(a, f(a)\big)$ et $\big(b, f(b)\big)$. Le théorème de Rolle est le cas particulier $f(a) = f(b)$.
:::

:::note[✏️ Exemple 4]
$f(x) = x^3$ sur $[0, 2]$ : $\dfrac{f(2)-f(0)}{2-0} = \dfrac{8}{2} = 4$. On résout $f'(c) = 3c^2 = 4$, soit $c = \dfrac{2}{\sqrt3} \approx 1{,}15 \in\ ]0,2[$. ✓
:::

---

## 7. Inégalité des accroissements finis (I.A.F)

:::tip[📐 Théorème 8 — I.A.F]
Soit $f$ dérivable sur un intervalle $I$. S'il existe $m, M \in \mathbb{R}$ tels que $m \leq f'(x) \leq M$ pour tout $x \in I$, alors pour tous $a, b \in I$ avec $a < b$ :

$$m(b - a) \leq f(b) - f(a) \leq M(b - a).$$

En particulier, si $|f'(x)| \leq k$ sur $I$, alors $|f(b) - f(a)| \leq k\,|b - a|$ ($f$ est **$k$-lipschitzienne**).
:::

:::note[✏️ Exemple 5 — Encadrement]
Montrons que $|\sin b - \sin a| \leq |b - a|$ pour tous réels $a, b$. Comme $(\sin)' = \cos$ et $|\cos x| \leq 1$, l'I.A.F donne directement le résultat avec $k = 1$.
:::

:::note[📝 Exercice 2]
En appliquant l'I.A.F à $f(x) = \sqrt{x}$ sur $[100, 101]$, encadrer $\sqrt{101}$.
:::

:::tip[✅ Correction 2]
$f'(x) = \dfrac{1}{2\sqrt x}$ est décroissante ; sur $[100,101]$ : $\dfrac{1}{2\sqrt{101}} \leq f'(x) \leq \dfrac{1}{2\sqrt{100}} = \dfrac{1}{20}$. Donc

$$\sqrt{101} - 10 \leq \frac{1}{20} \times 1 = 0{,}05 \quad\Rightarrow\quad 10 < \sqrt{101} \leq 10{,}05.$$
:::

---

## 8. Exercices de synthèse

:::note[📝 Exercice 3]
Soit $f(x) = x^3 - 3x + 1$.

1. Étudier les variations de $f$ sur $\mathbb{R}$.
2. Montrer que l'équation $f(x) = 0$ admet exactement trois solutions réelles.
:::

:::note[📝 Exercice 4 — Application de Rolle]
Soit $f$ dérivable sur $[0,1]$ avec $f(0) = f(1) = 0$. Montrer que l'équation $f'(x) + f(x) = 0$ admet une solution dans $]0,1[$.

*(Indication : appliquer Rolle à $g(x) = e^{x} f(x)$.)*
:::

:::note[📝 Exercice 5 — I.A.F et suites]
Soit $f$ dérivable telle que $|f'(x)| \leq \tfrac{1}{2}$ sur $\mathbb{R}$, et $(u_n)$ définie par $u_{n+1} = f(u_n)$. Montrer que $|u_{n+1} - u_n| \leq \tfrac12 |u_n - u_{n-1}|$ et en déduire que $(u_n)$ converge.
:::

:::tip[🧭 Méthodes clés]
1. **Dérivabilité en un point :** revenir au taux d'accroissement (limite).
2. **Variations :** étudier le signe de $f'$.
3. **Rolle :** deux valeurs égales ⟹ dérivée nulle quelque part.
4. **T.A.F :** transformer un écart $f(b)-f(a)$ en $f'(c)(b-a)$.
5. **I.A.F :** borner $f'$ pour encadrer ou majorer un écart.
:::

---

## 📚 Séries d'exercices (planches)

- 📄 [Série 1 (planche 1)](/pdf/terminale/derivabilite/serie1.pdf)
- 📄 [Série 2 (planche 2)](/pdf/terminale/derivabilite/serie2.pdf)
- 📄 [Série 3 (planche 3)](/pdf/terminale/derivabilite/serie3.pdf)

:::note[Planches en cours d'ajout]
Les planches d'exercices sont mises en ligne progressivement. Déposez vos PDF dans `public/pdf/terminale/derivabilite/`.
:::

---

## Pour aller plus loin

- [Limites et continuité →](/terminale/limites)
- [Primitives →](/terminale/primitives)
- [Retour à la Terminale SM →](/terminale/)
