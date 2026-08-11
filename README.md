# MathsElites

Plateforme d'accompagnement en **mathématiques** pour la **Première Bac SM**, la **Terminale Sciences Maths** et les **Classes Prépas** (MPSI/MP, PCSI/PC) — programme marocain.

Site construit avec [Astro](https://astro.build) + [Starlight](https://starlight.astro.build), avec rendu des formules mathématiques via **KaTeX** (`remark-math` + `rehype-katex`).

## 🚀 Démarrage

```bash
npm install      # installe les dépendances (à relancer après cette mise à jour)
npm run dev      # serveur de développement sur http://localhost:4321
npm run build    # génère le site statique dans ./dist/
npm run preview  # prévisualise le build de production
```

> ⚠️ Après cette mise à jour, exécutez `npm install` une fois : la dépendance
> `@astrojs/sitemap` (génération automatique du plan de site) a été ajoutée.

## 🌐 Domaine / déploiement

L'URL de production est définie dans `astro.config.mjs` via la variable
d'environnement `SITE` (valeur par défaut : `https://maths-elites.com`).
Sur Netlify / Vercel / GitHub Pages, définissez simplement `SITE` avec votre
domaine réel — le sitemap et les URLs canoniques s'y adapteront.

## 🗂️ Structure

```
public/            Fichiers statiques servis tels quels (PDF, favicon…)
  └── pdf/         Cours, DS, DM, examens et sujets (organisés par niveau)
src/
  ├── content/docs/  Pages du site (Markdown / MDX) — une route par fichier
  │   ├── premiere/  Première Bac SM
  │   ├── terminale/ Terminale Sciences Maths
  │   └── prepas/    Classes Prépas
  ├── pages/404.astro     Page d'erreur personnalisée
  ├── styles/custom.css   Thème + composants pédagogiques réutilisables
  └── content.config.ts
astro.config.mjs   Configuration Astro/Starlight (sidebar, SEO, KaTeX…)
```

## ✍️ Écrire un cours

Les pages de cours utilisent les **admonitions Starlight** pour les encadrés,
car les formules `$...$` **s'y affichent** (contrairement au HTML brut) :

```md
:::note[📘 Définition]
Soit $f$ une fonction… $$\lim_{x \to a} f(x) = \ell$$
:::

:::tip[📐 Théorème]
…
:::
```

Types disponibles : `note` (bleu), `tip` (vert), `caution` (jaune), `danger` (rouge).
Les tableaux Markdown affichent aussi les formules dans leurs cellules.

## 📎 Ressources PDF

Déposez vos fichiers dans `public/pdf/<niveau>/…` ; ils sont accessibles à
l'URL correspondante (ex. `public/pdf/terminale/ds1-2025.pdf` →
`/pdf/terminale/ds1-2025.pdf`). Certains liens des sections « examens / DS / DM »
pointent vers des PDF à téléverser au fur et à mesure.
