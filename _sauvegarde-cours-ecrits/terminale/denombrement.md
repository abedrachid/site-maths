---
title: Le Dénombrement
description: Cours complet et exercices corrigés sur le dénombrement — principes de comptage, arrangements, permutations, combinaisons et binôme de Newton — Terminale Sciences Mathématiques.
sidebar:
  order: 4
---

Le **dénombrement** est l'art de compter les éléments d'un ensemble fini sans les énumérer un à un. Il fonde le calcul des probabilités.

📥 [Télécharger la fiche de cours (PDF)](/pdf/denombrement.pdf)

---

## 1. Principes fondamentaux

:::tip[📐 Principe additif]
Si une situation se réalise de $p$ façons **ou** de $q$ façons **incompatibles** (aucun choix commun), alors le nombre total de possibilités est $p + q$.
:::

:::tip[📐 Principe multiplicatif]
Si une action se décompose en deux étapes successives, la première offrant $p$ choix et la seconde $q$ choix (indépendamment du premier), alors le nombre total de possibilités est $p \times q$.
:::

:::note[✏️ Exemple 1]
Un menu propose $3$ entrées, $4$ plats et $2$ desserts. Le nombre de repas complets possibles est $3 \times 4 \times 2 = 24$.
:::

:::tip[📐 Cardinal d'une réunion]
Pour deux ensembles finis $A$ et $B$ :

$$\operatorname{card}(A \cup B) = \operatorname{card}(A) + \operatorname{card}(B) - \operatorname{card}(A \cap B).$$
:::

---

## 2. Factorielle et permutations

:::note[📘 Définition 1 — Factorielle]
Pour $n \in \mathbb{N}^*$, on note $n! = 1 \times 2 \times \cdots \times n$, avec la convention $0! = 1$.
:::

:::note[📘 Définition 2 — Permutation]
Une **permutation** d'un ensemble à $n$ éléments est un rangement ordonné de ses $n$ éléments. Le nombre de permutations est

$$n!.$$
:::

:::note[✏️ Exemple 2]
De combien de façons peut-on ranger $5$ livres sur une étagère ? Réponse : $5! = 120$.
:::

---

## 3. Arrangements

:::note[📘 Définition 3 — Arrangement]
Un **arrangement** de $k$ éléments parmi $n$ est une liste **ordonnée** de $k$ éléments **distincts** choisis parmi $n$. Leur nombre est

$$A_n^k = \frac{n!}{(n-k)!} = n(n-1)\cdots(n-k+1), \quad 0 \leq k \leq n.$$
:::

:::caution[💡 Ordre et répétition]
- **Ordonné, sans répétition** → arrangement $A_n^k$.
- **Ordonné, avec répétition** → $n^k$ (chaque place a $n$ choix).
:::

:::note[✏️ Exemple 3]
Un podium (or, argent, bronze) parmi $8$ athlètes : $A_8^3 = 8 \times 7 \times 6 = 336$ podiums possibles.
:::

---

## 4. Combinaisons

:::note[📘 Définition 4 — Combinaison]
Une **combinaison** de $k$ éléments parmi $n$ est un sous-ensemble (**non ordonné**) de $k$ éléments choisis parmi $n$. Leur nombre est

$$\binom{n}{k} = C_n^k = \frac{n!}{k!\,(n-k)!} = \frac{A_n^k}{k!}.$$
:::

:::tip[📐 Propriétés des combinaisons]
$$\binom{n}{0} = \binom{n}{n} = 1, \qquad \binom{n}{k} = \binom{n}{n-k}, \qquad \binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}.$$

La dernière est la **relation de Pascal**, base du triangle de Pascal.
:::

:::note[✏️ Exemple 4]
Choisir une délégation de $3$ élèves parmi $20$ (sans hiérarchie) : $\dbinom{20}{3} = \dfrac{20 \times 19 \times 18}{6} = 1140$.
:::

:::note[📝 Exercice 1]
Une urne contient $5$ boules rouges et $4$ boules vertes. On tire simultanément $3$ boules.

1. Combien y a-t-il de tirages possibles ?
2. Combien contiennent exactement $2$ rouges ?
:::

:::tip[✅ Correction 1]
1. Tirage simultané = combinaison : $\dbinom{9}{3} = 84$.
2. Choisir $2$ rouges parmi $5$ **et** $1$ verte parmi $4$ : $\dbinom{5}{2}\dbinom{4}{1} = 10 \times 4 = 40$.
:::

---

## 5. Binôme de Newton

:::tip[📐 Théorème — Formule du binôme]
Pour tous réels $a, b$ et tout $n \in \mathbb{N}$ :

$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{k} b^{\,n-k}.$$
:::

:::note[✏️ Exemple 5]
$(x + 2)^3 = \dbinom{3}{0}x^3 + \dbinom{3}{1}x^2\cdot 2 + \dbinom{3}{2}x\cdot 4 + \dbinom{3}{3}\cdot 8 = x^3 + 6x^2 + 12x + 8$.
:::

:::caution[💡 Conséquences remarquables]
En posant $a = b = 1$, puis $a = 1, b = -1$ :

$$\sum_{k=0}^{n}\binom{n}{k} = 2^n, \qquad \sum_{k=0}^{n}(-1)^k\binom{n}{k} = 0.$$
:::

---

## 6. Tableau récapitulatif

| Situation | Ordonné ? | Répétition ? | Formule |
|---|:---:|:---:|---|
| Permutation | oui | non (tous) | $n!$ |
| Arrangement | oui | non | $A_n^k = \dfrac{n!}{(n-k)!}$ |
| $k$-liste | oui | oui | $n^k$ |
| Combinaison | non | non | $\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}$ |

---

## 7. Exercices de synthèse

:::note[📝 Exercice 2 — Anagrammes]
Combien d'anagrammes (mots ayant un sens ou non) peut-on former avec les lettres du mot **MATHS** ? Et avec le mot **SUITES** ?
:::

:::tip[✅ Correction 2]
- MATHS : $5$ lettres distinctes → $5! = 120$.
- SUITES : $6$ lettres dont deux **S** → $\dfrac{6!}{2!} = 360$.
:::

:::note[📝 Exercice 3 — Comité]
Dans une classe de $30$ élèves ($18$ filles, $12$ garçons), on forme un comité de $4$ élèves.

1. Combien de comités possibles ?
2. Combien comptent au moins une fille ?
:::

:::tip[✅ Correction 3]
1. $\dbinom{30}{4} = 27\,405$.
2. Complémentaire (aucune fille = 4 garçons) : $\dbinom{30}{4} - \dbinom{12}{4} = 27\,405 - 495 = 26\,910$.
:::

---

## 📚 Séries d'exercices (planches)

- 📄 [Série 1 (planche 1)](/pdf/denombrement_serie1.pdf)
- 📄 [Série 2 (planche 2)](/pdf/denombrement_serie2.pdf)
- 📄 [Série 3 (planche 3)](/pdf/denombrement_serie3.pdf)

## Pour aller plus loin

- [Probabilités →](/terminale/probabilites)
- [Retour à la Terminale SM →](/terminale/)
