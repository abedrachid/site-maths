# Fiche résumé — Limites et continuité

**Niveau :** Terminale Sciences Mathématiques · **Chapitre :** Limites et continuité · **Prof. R. Abed**

> Synthèse de révision : définitions, limites usuelles, théorèmes (hypothèses → conclusion),
> méthodes-types et erreurs fréquentes. À relire avant tout DS ou examen.

---

## 1. Limites : rappels et techniques

### 1.1 Limites usuelles à connaître par cœur

| Limite | Valeur | Limite | Valeur |
|---|---|---|---|
| $\displaystyle\lim_{x\to 0}\frac{\sin x}{x}$ | $1$ | $\displaystyle\lim_{x\to 0}\frac{\tan x}{x}$ | $1$ |
| $\displaystyle\lim_{x\to 0}\frac{1-\cos x}{x^2}$ | $\dfrac12$ | $\displaystyle\lim_{x\to 0}\frac{\sin(ax)}{x}$ | $a$ |
| $\displaystyle\lim_{x\to 0}\frac{1-\cos x}{x}$ | $0$ | $\displaystyle\lim_{x\to 0}\frac{\sin(ax)}{\sin(bx)}$ | $\dfrac{a}{b}$ |

À l'infini, une **fraction rationnelle** se comporte comme le **rapport des termes de plus haut degré** :
$$\lim_{x\to\pm\infty}\frac{a_p x^{p}+\cdots}{b_q x^{q}+\cdots}=\lim_{x\to\pm\infty}\frac{a_p x^{p}}{b_q x^{q}}.$$

### 1.2 Formes indéterminées et méthodes

Les quatre F.I. : $\dfrac{0}{0},\quad \dfrac{\infty}{\infty},\quad \infty-\infty,\quad 0\times\infty.$

| Situation | Technique | Exemple |
|---|---|---|
| $\frac{0}{0}$ polynomiale | **Factoriser** puis simplifier | $\frac{x^5-1}{x-1}\to 5$ |
| $\frac{\infty}{\infty}$ rationnelle | **Termes dominants** | $\frac{2x+3}{x-1}\to 2$ |
| $\infty-\infty$ avec racines | **Quantité conjuguée** | $\sqrt{x^2+x+1}-x\to \tfrac12$ |
| $\frac{0}{0}$ trigonométrique | **Limites usuelles** | $\frac{\sin x}{x}\to 1$ |
| sous une racine / puissance | **Composition** (continuité de $\sqrt{\;}$, $x^r$) | $\sqrt{\tfrac{x+1}{2x+1}}\to \tfrac{\sqrt2}{2}$ |

> **Astuce.** Face à $\infty-\infty$ avec une racine, multiplier par la quantité conjuguée
> ramène presque toujours à une forme calculable.

---

## 2. Continuité d'une fonction

### 2.1 Continuité en un point

$f$ définie sur $I$, $a\in I$. On dit que **$f$ est continue en $a$** si :
$$\boxed{\ \lim_{x\to a} f(x)=f(a)\ }$$

- **Continue à droite en $a$** : $\displaystyle\lim_{x\to a^+} f(x)=f(a)$.
- **Continue à gauche en $a$** : $\displaystyle\lim_{x\to a^-} f(x)=f(a)$.
- **Théorème.** $f$ est continue en $a$ $\iff$ elle est continue **à droite et à gauche** en $a$.

### 2.2 Opérations et fonctions de référence

Si $f,g$ sont continues en $a$ (resp. sur $I$), alors $f+g$, $f\times g$, $\lambda f$ le sont ;
et $\frac{1}{g}$, $\frac{f}{g}$ le sont là où $g$ ne s'annule pas ; $\sqrt{f}$ l'est là où $f\ge 0$.

**Sont continues sur leur domaine :** les fonctions **polynomiales** ($\mathbb R$), **rationnelles**,
$\sin$, $\cos$ ($\mathbb R$), $\tan$ (sur $\mathbb R\setminus\{\frac\pi2+k\pi\}$), $x\mapsto\sqrt{x}$ (sur $\mathbb R^+$).

### 2.3 Prolongement par continuité *(méthode-type)*

Si $f$ n'est pas définie en $a$ mais que $\displaystyle\lim_{x\to a} f(x)=\ell$ (finie), on **prolonge**
$f$ en posant $f(a)=\ell$. Le prolongement est alors continu en $a$.

> **Exemple.** $f(x)=\dfrac{x^2-4}{x^3-8}$ pour $x\ne2$. On simplifie ($x\ne 2$) :
> $\dfrac{(x-2)(x+2)}{(x-2)(x^2+2x+4)}=\dfrac{x+2}{x^2+2x+4}\to\dfrac{4}{12}=\dfrac13$.
> Donc $f$ se prolonge par continuité en $2$ avec $f(2)=\dfrac13$.

### 2.4 La fonction partie entière $E$

$E(x)=n \iff n\le x < n+1$ (avec $n\in\mathbb Z$). En un entier $n$ : $E$ est **continue à droite**,
**pas à gauche**, donc **non continue** en $n$. $E$ est continue sur tout $[n,\,n+1[$.

### 2.5 Continuité sur un intervalle · composée

- $f$ **continue sur $I$** si elle est continue en tout point de $I$ (avec continuité à droite/à
  gauche aux bornes fermées).
- **Composée.** Si $f$ est continue en $a$ et $g$ continue en $f(a)$, alors $g\circ f$ est continue
  en $a$. (Version limite : si $\lim_{x\to a} f=\ell$ et $g$ continue en $\ell$, alors
  $\lim_{x\to a} g\!\circ\! f = g(\ell)$.)

---

## 3. Théorèmes fondamentaux

### 3.1 Image d'un intervalle / d'un segment

- **L'image d'un intervalle par une fonction continue est un intervalle.**
- **L'image d'un segment $[a,b]$ par une fonction continue est un segment $[m,M]$**, avec
  $m=\min_{[a,b]} f$ et $M=\max_{[a,b]} f$ (une fonction continue sur un segment est **bornée et
  atteint ses bornes**).

**Cas monotone** (à retenir — sens des crochets) :

| $I$ | $f$ ↗ continue | $f$ ↘ continue |
|---|---|---|
| $[a,b]$ | $[f(a),f(b)]$ | $[f(b),f(a)]$ |
| $[a,b[$ | $[f(a),\ \lim_{b^-}f\,[$ | $]\lim_{b^-}f,\ f(a)]$ |
| $]a,b[$ | $]\lim_{a^+}f,\ \lim_{b^-}f[$ | $]\lim_{b^-}f,\ \lim_{a^+}f[$ |
| $]a,+\infty[$ | $]\lim_{a^+}f,\ \lim_{+\infty}f[$ | $]\lim_{+\infty}f,\ \lim_{a^+}f[$ |

> **Attention.** Si $f$ **décroît**, l'ordre des bornes **s'inverse** : ne recopiez jamais
> $[f(a),f(b)]$ sans vérifier le sens de variation.

### 3.2 Théorème des valeurs intermédiaires (TVI)

> **Hypothèses :** $f$ **continue** sur $[a,b]$.
> **Conclusion :** pour tout $\gamma$ compris entre $f(a)$ et $f(b)$, il existe $c\in[a,b]$ tel que $f(c)=\gamma$.

**Corollaires**

1. **Changement de signe.** $f$ continue sur $[a,b]$ et $f(a)\cdot f(b)\le 0$ $\Rightarrow$ $f$ s'annule sur $[a,b]$.
2. **Existence + unicité.** $f$ continue **et strictement monotone** sur $[a,b]$ et $f(a)\cdot f(b)<0$
   $\Rightarrow$ il existe un **unique** $c\in\,]a,b[$ tel que $f(c)=0$.

**Dichotomie.** Pour approcher la solution $\alpha$ de $f(x)=0$ : on partage l'intervalle en deux et
on garde la moitié où $f$ change de signe, jusqu'à la précision voulue ($10^{-1}$, $10^{-2}$…).

### 3.3 Théorème de la bijection

> **Hypothèses :** $f$ **continue** et **strictement monotone** sur l'intervalle $I$.
> **Conclusion :** $f$ réalise une **bijection** de $I$ sur l'intervalle $f(I)$.

**Propriétés de la réciproque $f^{-1}$** (sous les mêmes hypothèses) :

- $f^{-1}$ est **continue** sur $J=f(I)$ et a le **même sens de variation** que $f$ ;
- les courbes $\mathcal C_f$ et $\mathcal C_{f^{-1}}$ sont **symétriques par rapport à $y=x$** ;
- $\forall x\in I,\ f^{-1}\!\circ f(x)=x$ et $\forall x\in J,\ f\circ f^{-1}(x)=x$ ;
- pour trouver $f^{-1}$ : résoudre $y=f(x)$ en $x$, puis échanger les rôles.

> **Exemple.** $f(x)=\dfrac{2x+1}{x-1}$ sur $]1,+\infty[$ est continue et strictement décroissante
> ($f'=\frac{-3}{(x-1)^2}<0$), donc bijective sur $J=\,]2,+\infty[$, de réciproque
> $f^{-1}(x)=\dfrac{x+1}{x-2}$.

---

## 4. Racine $n$-ième et puissances rationnelles

- $x\mapsto x^n$ ($n\in\mathbb N^*$) est une bijection de $\mathbb R^+$ sur $\mathbb R^+$ ; sa réciproque est
  $\sqrt[n]{\;}$, **continue et strictement croissante** sur $\mathbb R^+$, avec $\lim_{+\infty}\sqrt[n]{x}=+\infty$.
- $\forall x\ge 0:\ (\sqrt[n]{x})^n=x,\quad \sqrt[n]{x^n}=x,\quad \sqrt[n]{x}=x^{1/n}$.
- **Règles :** $\sqrt[n]{xy}=\sqrt[n]{x}\,\sqrt[n]{y}$, $\ \sqrt[n]{x/y}=\sqrt[n]{x}/\sqrt[n]{y}$,
  $\ \sqrt[np]{x^p}=\sqrt[n]{x}$, $\ \sqrt[n]{\sqrt[p]{x}}=\sqrt[np]{x}$.
- **Puissance rationnelle** ($r=\frac pq$, $x>0$) : $x^r=\sqrt[q]{x^p}$, avec
  $x^r x^{r'}=x^{r+r'}$, $(x^r)^{r'}=x^{rr'}$, $\frac{x^r}{x^{r'}}=x^{r-r'}$.
- **Continuité :** si $f$ est continue et **positive** sur $I$, alors $\sqrt[n]{f}$ est continue sur $I$ ;
  si $f$ est continue et **strictement positive**, alors $x\mapsto f(x)^r$ l'est aussi.

---

## 5. Méthodes-types (récapitulatif)

1. **Étudier la continuité en $a$** → calculer $\lim_{x\to a} f$ et comparer à $f(a)$ (au besoin,
   limites à droite et à gauche séparément).
2. **Déterminer un paramètre** pour la continuité → poser $\lim = f(a)$ et résoudre.
3. **Montrer qu'une équation a une solution** → TVI (continuité + valeur intermédiaire / signe).
4. **Unicité de la solution** → ajouter la **stricte monotonie** (signe de $f'$).
5. **Approcher une solution** → dichotomie jusqu'à la précision demandée.
6. **Montrer qu'une fonction est bijective / trouver $f^{-1}$** → continuité + stricte monotonie,
   puis résolution de $y=f(x)$.
7. **Déterminer $f(I)$** → sens de variation + limites aux bornes (attention au sens des crochets).

---

## 6. Erreurs fréquentes à éviter

- ❌ Appliquer le **TVI sans justifier la continuité**, ou conclure à l'**unicité sans monotonie**.
- ❌ Simplifier par $x-a$ **sans préciser** $x\ne a$.
- ❌ Écrire $\displaystyle\lim_{x\to a} f=\ell$ **puis conclure la continuité** en oubliant de comparer à $f(a)$.
- ❌ Recopier $[f(a),f(b)]$ pour $f(I)$ **sans vérifier le sens de variation**.
- ❌ Confondre continuité **à droite** et **à gauche** en un entier (cas de $E$).
- ❌ Oublier qu'**image d'un intervalle = intervalle** (mais pas forcément de même nature).

---

*Fiche résumé — Maths & Expert · Prof. R. Abed.*
