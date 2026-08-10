---
title: Limites et continuité
description: Cours complet et exercices corrigés sur les limites et la continuité d'une fonction — Terminale Sciences Mathématiques (Maroc).
sidebar:
  order: 1
---

> « La notion de limite est la clé de voûte de toute l'analyse mathématique. Sans elle, ni la dérivée, ni l'intégrale, ni la continuité ne pourraient être définies avec rigueur. »
> — *Augustin-Louis Cauchy*

De l'intuition géométrique à la rigueur formelle : comprendre comment une fonction se comporte lorsque sa variable s'approche d'un point ou part à l'infini.

**Prérequis :** manipulation des fonctions de référence, opérations algébriques.

---

## 1. Limite finie en un point fini

:::note[📘 Définition 1 — Limite finie]
Soit $f$ une fonction définie sur un intervalle $I$ privé éventuellement d'un point $a$. On dit que $f$ admet pour **limite** le réel $\ell$ quand $x$ tend vers $a$, et l'on note

$$\lim_{x \to a} f(x) = \ell,$$

si $f(x)$ peut être rendu aussi proche de $\ell$ que l'on veut, dès que $x$ est suffisamment proche de $a$ (sans lui être égal).
:::

:::tip[📐 Théorème 1 — Unicité]
Si $f$ admet une limite en $a$, alors cette limite est **unique**.
:::

:::tip[📐 Théorème 2 — Limite et continuité]
$f$ est **continue** en $a$ si et seulement si $\displaystyle\lim_{x \to a} f(x) = f(a)$.
:::

:::caution[💡 Remarque]
La limite en $a$ ne dépend **pas** de la valeur de $f$ en $a$ — seulement du comportement de $f$ *au voisinage* de $a$.
:::

### Limites à gauche et à droite

:::note[📘 Définition 2]
$f$ a pour **limite à gauche** $\ell^-$ en $a$ si $\displaystyle\lim_{\substack{x \to a \\ x < a}} f(x) = \ell^-$, et pour **limite à droite** $\ell^+$ si $\displaystyle\lim_{\substack{x \to a \\ x > a}} f(x) = \ell^+$.
:::

:::tip[📐 Théorème 3]
$$\lim_{x \to a} f(x) = \ell \iff \ell^- = \ell^+ = \ell.$$
:::

:::note[✏️ Exemple 1]
Soit $f(x) = \dfrac{x^2 - 1}{x - 1}$ pour $x \neq 1$. On factorise :

$$f(x) = \frac{(x-1)(x+1)}{x-1} = x + 1 \quad (x \neq 1),$$

donc $\displaystyle\lim_{x \to 1} f(x) = 2$.
:::

:::note[📝 Exercice 1 — Calculer les limites]
1. $\displaystyle\lim_{x \to 2} \frac{x^3 - 8}{x - 2}$
2. $\displaystyle\lim_{x \to 0} \frac{\sqrt{x+1} - 1}{x}$
3. $\displaystyle\lim_{x \to 3} \frac{x^2 - x - 6}{x - 3}$
:::

:::tip[✅ Correction 1]
1. $x^3 - 8 = (x-2)(x^2+2x+4)$, donc la limite vaut $\mathbf{12}$.
2. En multipliant par la quantité conjuguée $\dfrac{\sqrt{x+1}+1}{\sqrt{x+1}+1}$, la limite vaut $\mathbf{\frac{1}{2}}$.
3. $x^2 - x - 6 = (x-3)(x+2)$, donc la limite vaut $\mathbf{5}$.
:::

---

## 2. Limite infinie en un point fini

:::note[📘 Définition 3]
On dit que $f$ tend vers $+\infty$ quand $x$ tend vers $a$ si $f(x)$ peut être rendu aussi grand que l'on veut dès que $x$ est suffisamment proche de $a$ :

$$\lim_{x \to a} f(x) = +\infty.$$

On définit de même $\displaystyle\lim_{x \to a} f(x) = -\infty$.
:::

:::caution[💡 Interprétation géométrique]
Lorsque $\displaystyle\lim_{x \to a^+} f(x) = \pm\infty$ ou $\displaystyle\lim_{x \to a^-} f(x) = \pm\infty$, la droite d'équation $x = a$ est une **asymptote verticale** à la courbe de $f$.
:::

:::note[✏️ Exemple 2]
- $f(x) = \dfrac{1}{(x-2)^2}$ : $\displaystyle\lim_{x \to 2} f(x) = +\infty$. La droite $x = 2$ est asymptote verticale.
- $g(x) = \dfrac{1}{x-3}$ : $\displaystyle\lim_{x \to 3^+} g(x) = +\infty$ et $\displaystyle\lim_{x \to 3^-} g(x) = -\infty$.
:::

:::note[📝 Exercice 2]
Déterminer les limites aux points indiqués et interpréter géométriquement.

1. $f(x) = \dfrac{3}{x+1}$ en $x = -1$.
2. $f(x) = \dfrac{x}{x^2 - 4}$ en $x = 2$ et $x = -2$.
3. $f(x) = \tan x$ en $x = \dfrac{\pi}{2}$.
:::

---

## 3. Limites à l'infini

:::note[📘 Définition 4]
$f$ admet la limite $\ell \in \mathbb{R}$ en $+\infty$ si $f(x)$ se rapproche de $\ell$ lorsque $x$ devient arbitrairement grand :

$$\lim_{x \to +\infty} f(x) = \ell.$$

On définit de même les limites en $-\infty$ et les limites infinies à l'infini.
:::

:::tip[📐 Théorème 4 — Fonctions de référence]
- $\displaystyle\lim_{x\to+\infty} x^n = +\infty$ pour $n \geq 1$.
- $\displaystyle\lim_{x\to-\infty} x^n = +\infty$ si $n$ est pair, $-\infty$ si $n$ est impair.
- $\displaystyle\lim_{x\to+\infty} \sqrt{x} = +\infty$.
- $\displaystyle\lim_{x\to+\infty} \frac{1}{x^n} = 0$ pour $n \geq 1$.
- $\displaystyle\lim_{x\to0^+} \frac{1}{x} = +\infty$ et $\displaystyle\lim_{x\to0^-} \frac{1}{x} = -\infty$.
:::

:::note[✏️ Exemple 3 — Limite d'un polynôme]
Pour $\displaystyle\lim_{x\to+\infty}(3x^3 - 5x^2 + 2x - 7)$, on factorise par le terme de plus haut degré :

$$3x^3 - 5x^2 + 2x - 7 = x^3\left(3 - \frac{5}{x} + \frac{2}{x^2} - \frac{7}{x^3}\right).$$

Quand $x \to +\infty$, la parenthèse tend vers $3 > 0$ et $x^3 \to +\infty$, donc la limite vaut $\mathbf{+\infty}$.

**Règle pratique :** à l'infini, un polynôme a la même limite que son terme de plus haut degré.
:::

:::note[📝 Exercice 3]
1. $\displaystyle\lim_{x\to+\infty}(x^4 - 3x^2 + 1)$
2. $\displaystyle\lim_{x\to-\infty}(2x^3 + x - 5)$
3. $\displaystyle\lim_{x\to+\infty}\frac{4x^2 - 3}{2x^2 + x + 1}$
4. $\displaystyle\lim_{x\to+\infty}\left(\sqrt{x+1} - \sqrt{x}\right)$
:::

---

## 4. Opérations sur les limites

Si $\displaystyle\lim_{x\to a} f(x) = \ell$ et $\displaystyle\lim_{x\to a} g(x) = m$ (avec $\ell, m \in \mathbb{R}$ ou $\pm\infty$), les règles suivantes s'appliquent **sauf formes indéterminées** :

| $\lim f$ | $\lim g$ | $\lim (f+g)$ | $\lim (f \times g)$ | $\lim (f/g)$ |
|:---:|:---:|:---:|:---:|:---:|
| $\ell$ | $m$ | $\ell + m$ | $\ell \cdot m$ | $\ell/m$ si $m\neq 0$ |
| $\ell$ | $+\infty$ | $+\infty$ | signe de $\ell\cdot(+\infty)$ | $0$ |
| $+\infty$ | $+\infty$ | $+\infty$ | $+\infty$ | **F.I.** |
| $+\infty$ | $-\infty$ | **F.I.** | $-\infty$ | **F.I.** |
| $\ell \neq 0$ | $0$ | $\ell$ | $0$ | $\pm\infty$ |
| $0$ | $0$ | $0$ | $0$ | **F.I.** |

:::tip[📐 Théorème 5 — Composition des limites]
Si $\displaystyle\lim_{x\to a} f(x) = \ell$ et $g$ est continue en $\ell$, alors

$$\lim_{x\to a} g\big(f(x)\big) = g(\ell).$$
:::

:::note[✏️ Exemple 4]
$\displaystyle\lim_{x\to 0}\sqrt{\sin x + 1}$ : puisque $\displaystyle\lim_{x\to 0}\sin x = 0$ et $\sqrt{\cdot}$ est continue en $1$, la limite vaut $\sqrt{0+1} = \mathbf{1}$.
:::

---

## 5. Formes indéterminées

Une **forme indéterminée** (F.I.) est une expression dont la valeur ne peut pas être déterminée directement par les règles d'opérations. Il faut *lever* l'indétermination par un calcul algébrique. Les quatre formes indéterminées classiques au niveau Terminale sont :

$$\frac{0}{0} \qquad \frac{\infty}{\infty} \qquad 0 \times \infty \qquad \infty - \infty$$

:::note[📘 Technique 1 — Factorisation]
Pour $\dfrac{0}{0}$ en un point : factoriser numérateur et dénominateur pour simplifier le facteur qui s'annule.

$$\frac{x^2-4}{x-2} = \frac{(x-2)(x+2)}{x-2} = x+2 \xrightarrow{\;x\to2\;} 4.$$
:::

:::note[📘 Technique 2 — Division par le terme dominant]
Pour $\dfrac{\infty}{\infty}$ à l'infini : diviser numérateur et dénominateur par la plus grande puissance de $x$.

$$\frac{3x^2+1}{x^2-2} = \frac{3+\frac{1}{x^2}}{1-\frac{2}{x^2}} \xrightarrow{\;x\to+\infty\;} 3.$$
:::

:::note[📘 Technique 3 — Expression conjuguée]
Pour $\infty - \infty$ avec des radicaux : multiplier par l'expression conjuguée.

$$\sqrt{x+1}-\sqrt{x} = \frac{1}{\sqrt{x+1}+\sqrt{x}} \xrightarrow{\;x\to+\infty\;} 0.$$
:::

:::note[📝 Exercice 4 — Lever les formes indéterminées]
1. $\displaystyle\lim_{x\to1}\frac{x^3-1}{x^2-1}$ &nbsp; (F.I. $\tfrac{0}{0}$)
2. $\displaystyle\lim_{x\to+\infty}\frac{2x^3-5x}{x^3+1}$ &nbsp; (F.I. $\tfrac{\infty}{\infty}$)
3. $\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)$ &nbsp; (F.I. $\infty-\infty$)
:::

:::tip[✅ Correction 4]
1. $\dfrac{x^3-1}{x^2-1} = \dfrac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \dfrac{x^2+x+1}{x+1} \to \dfrac{3}{2}$.
2. En divisant par $x^3$ : $\dfrac{2-\frac{5}{x^2}}{1+\frac{1}{x^3}} \to \mathbf{2}$.
3. $\sqrt{x^2+x}-x = \dfrac{x}{\sqrt{x^2+x}+x} = \dfrac{1}{\sqrt{1+\frac{1}{x}}+1} \to \mathbf{\frac{1}{2}}$.
:::

---

## 6. Limites usuelles et théorèmes de comparaison

:::tip[📐 Théorème 6 — Limites trigonométriques fondamentales]
$$\lim_{x \to 0} \frac{\sin x}{x} = 1 \qquad \lim_{x \to 0} \frac{\tan x}{x} = 1 \qquad \lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$$
:::

:::tip[📐 Théorème 7 — Théorème des gendarmes]
Soient $f$, $g$, $h$ trois fonctions telles que, au voisinage de $a$ : $g(x) \leq f(x) \leq h(x)$. Si $\displaystyle\lim_{x\to a} g(x) = \lim_{x\to a} h(x) = \ell$, alors $\displaystyle\lim_{x\to a} f(x) = \ell$.
:::

:::note[✏️ Exemple 5 — Application des gendarmes]
Montrons que $\displaystyle\lim_{x\to+\infty} \frac{\sin x}{x} = 0$. On a $-1 \leq \sin x \leq 1$, donc

$$\frac{-1}{x} \leq \frac{\sin x}{x} \leq \frac{1}{x}.$$

Comme $\dfrac{-1}{x}$ et $\dfrac{1}{x}$ tendent vers $0$, par les gendarmes : $\displaystyle\lim_{x\to+\infty}\frac{\sin x}{x} = \mathbf{0}$.
:::

:::tip[📐 Théorème 8 — Comparaison]
Si $f(x) \leq g(x)$ au voisinage de $a$ et si les deux limites existent, alors $\displaystyle\lim_{x\to a} f(x) \leq \lim_{x\to a} g(x)$.
:::

:::note[📝 Exercice 5]
1. Calculer $\displaystyle\lim_{x\to 0}\frac{\sin(3x)}{x}$.
2. Calculer $\displaystyle\lim_{x\to 0}\frac{1-\cos(2x)}{x^2}$.
3. Montrer par les gendarmes que $\displaystyle\lim_{x\to+\infty}\frac{\cos x}{x^2+1} = 0$.
:::

---

## 7. Asymptotes

:::note[📘 Définition 5 — Asymptote verticale]
La droite $x = a$ est une **asymptote verticale** à la courbe de $f$ si $\displaystyle\lim_{x\to a^+} f(x) = \pm\infty$ ou $\displaystyle\lim_{x\to a^-} f(x) = \pm\infty$.
:::

:::note[📘 Définition 6 — Asymptote horizontale]
La droite $y = \ell$ est une **asymptote horizontale** en $+\infty$ (resp. $-\infty$) si $\displaystyle\lim_{x\to+\infty} f(x) = \ell$ (resp. $\displaystyle\lim_{x\to-\infty} f(x) = \ell$).
:::

:::note[📘 Définition 7 — Asymptote oblique]
La droite $y = mx + p$ est une **asymptote oblique** en $+\infty$ si $\displaystyle\lim_{x\to+\infty}\big[f(x) - (mx+p)\big] = 0$. On détermine $m$ puis $p$ par :

$$m = \lim_{x\to+\infty}\frac{f(x)}{x}, \qquad p = \lim_{x\to+\infty}\big[f(x) - mx\big].$$
:::

:::note[✏️ Exemple 6 — Asymptote oblique]
Soit $f(x) = \dfrac{x^2+2}{x-1}$ pour $x \neq 1$.

$$m = \lim_{x\to+\infty}\frac{x^2+2}{x(x-1)} = 1, \qquad p = \lim_{x\to+\infty}\left[\frac{x^2+2}{x-1} - x\right] = \lim_{x\to+\infty}\frac{x+2}{x-1} = 1.$$

Donc $y = x + 1$ est asymptote oblique (en $+\infty$ et $-\infty$), et $x = 1$ est asymptote verticale.
:::

:::note[📝 Exercice 6 — Étude complète d'asymptotes]
Déterminer toutes les asymptotes de :

1. $f(x) = \dfrac{2x+1}{x-3}$
2. $f(x) = \dfrac{x^2-1}{x}$
3. $f(x) = \dfrac{x^3}{x^2+1}$
:::

---

## 8. Exercices de synthèse

:::note[📝 Exercice 7 — Niveau I]
1. $\displaystyle\lim_{x\to 2}\frac{x^2-3x+2}{x^2-4}$
2. $\displaystyle\lim_{x\to+\infty}\frac{\sqrt{x+1}-1}{x}$
3. $\displaystyle\lim_{x\to0}\frac{\tan x - \sin x}{x^3}$
4. $\displaystyle\lim_{x\to+\infty}\left(x - \sqrt{x^2-3x+1}\right)$
:::

:::note[📝 Exercice 8 — Niveau II]
Soit $f(x) = \dfrac{x^2 - 5x + 6}{x^2 - x - 2}$.

1. Déterminer l'ensemble de définition de $f$.
2. Calculer $\displaystyle\lim_{x\to 2} f(x)$ et $\displaystyle\lim_{x\to -1} f(x)$.
3. Calculer $\displaystyle\lim_{x\to\pm\infty} f(x)$ et en déduire une asymptote horizontale.
4. La droite $x = -1$ est-elle asymptote verticale ? Justifier.
:::

:::note[📝 Exercice 9 — Problème ouvert]
Soit $f(x) = \dfrac{ax^2 + bx + 1}{x - 1}$ où $a, b \in \mathbb{R}$.

1. Déterminer $a$ et $b$ pour que $f$ admette une limite finie en $x = 1$.
2. Avec ces valeurs, calculer la limite en $1$ et étudier les asymptotes de $f$.
3. Montrer que la courbe admet une asymptote oblique et la déterminer.
:::

:::tip[🧭 Méthode générale — Calculer une limite]
1. **Substitution directe :** calculer $f(a)$. Si le résultat est un réel ou $\pm\infty$ sans ambiguïté, c'est la limite.
2. **Forme indéterminée :** lever par factorisation, conjuguée, ou division par le terme dominant.
3. **Gendarmes :** si $f$ est coincée entre deux fonctions de même limite.
4. **Composition :** $\lim g\circ f = g(\lim f)$ si $g$ est continue au point limite.
5. **Limites usuelles :** $\dfrac{\sin x}{x}\to 1$, $\dfrac{\tan x}{x}\to 1$, $\dfrac{1-\cos x}{x^2}\to\frac12$.
:::

---

## 📚 Séries d'exercices (planches)

- 📄 [Série 1 (planche 1)](/pdf/terminale/limites/serie1.pdf)
- 📄 [Série 2 (planche 2)](/pdf/terminale/limites/serie2.pdf)
- 📄 [Série 3 (planche 3)](/pdf/terminale/limites/serie3.pdf)

:::note[Planches en cours d'ajout]
Les planches d'exercices sont mises en ligne progressivement. Déposez vos PDF dans `public/pdf/terminale/limites/`.
:::

---

## Pour aller plus loin

- [Dérivabilité — Rolle, T.A.F, I.A.F →](/terminale/derivabilite)
- [Primitives →](/terminale/primitives)
- [Retour à la Terminale SM →](/terminale/)
