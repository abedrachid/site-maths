// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// URL de production — changez SITE dans votre plateforme d'hébergement
// (Netlify / Vercel / GitHub Pages) ou ici pour votre domaine définitif.
const SITE = process.env.SITE ?? 'https://mathselites.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Génère automatiquement un sitemap.xml (référencement Google).
  integrations: [
    starlight({
      title: 'MathsElites',
      description:
        "Plateforme marocaine d'accompagnement en mathématiques : cours, exercices corrigés, DS, DM, examens blancs et sujets de Bac pour la Première Bac SM, la Terminale Sciences Maths et les Classes Prépas.",
      // Le favicon du site
      favicon: '/favicon.svg',
      // Logo affiché dans l'en-tête, à côté du titre
      logo: { src: './src/assets/logo.svg', replacesTitle: false },
      // Charge la feuille de style KaTeX sur TOUTES les pages
      // (indispensable pour que les formules mathématiques s'affichent).
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
            crossorigin: 'anonymous',
          },
        },
        // Typographie professionnelle : Fraunces (titres) + Inter (texte)
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap',
          },
        },
        // Balises Open Graph / réseaux sociaux
        {
          tag: 'meta',
          attrs: { property: 'og:type', content: 'website' },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#7c3aed' },
        },
        // Moteur de QCM interactif (chargé sur toutes les pages)
        {
          tag: 'script',
          attrs: { src: '/qcm.js', defer: true },
        },
        // Visionneuse de documents PDF (onglets)
        {
          tag: 'script',
          attrs: { src: '/docviewer.js', defer: true },
        },
        // Compteur de téléchargements PDF (badge « ⬇ N » via Abacus)
        {
          tag: 'script',
          attrs: { src: '/pdf-counter.js', defer: true },
        },
      ],
      // Affiche la date de dernière mise à jour en bas des pages.
      lastUpdated: true,
      // Liens sociaux (optionnel — modifiez ou supprimez).
      social: [
        {
          icon: 'email',
          label: 'Contact',
          href: 'mailto:contact@mathselites.com',
        },
      ],
      disable404Route: true,
      // Français servi à la racine (/) sans préfixe /fr/ :
      // le contenu reste dans src/content/docs/ (pas de sous-dossier fr/).
      locales: {
        root: { label: 'Français', lang: 'fr' },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: '🏠 Accueil du site', link: '/' },

        /* ——— PREMIÈRE BAC SM ——— */
        {
          label: '📂 Première Bac SM',
          items: [
            { label: 'Présentation & Chapitres', link: '/premiere/' },

            /* ── Chapitre 1 : Dénombrement ── */
            {
              label: '📗 Dénombrement',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/premiere/denombrement' },
                { label: '📋 Fiche résumé', link: '/premiere/denombrement#doc=/pdf/premiere/denombrement/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/premiere/denombrement#doc=/pdf/premiere/denombrement/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/premiere/denombrement#qcm' },
                { label: 'Série 1 (planche 1)', link: '/premiere/denombrement#doc=/pdf/denombrement_serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/premiere/denombrement#doc=/pdf/denombrement_serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/premiere/denombrement#doc=/pdf/denombrement_serie3.pdf' },
              ],
            },

            /* ── Chapitre 2 : Arithmétique ── */
            {
              label: '📗 Arithmétique',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/premiere/arithmetique' },
                { label: '📋 Fiche résumé', link: '/premiere/arithmetique#doc=/pdf/premiere/arithmetique/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/premiere/arithmetique#doc=/pdf/premiere/arithmetique/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/premiere/arithmetique#qcm' },
                { label: 'Série 1 (planche 1)', link: '/premiere/arithmetique#doc=/pdf/premiere/arithmetique/serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/premiere/arithmetique#doc=/pdf/premiere/arithmetique/serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/premiere/arithmetique#doc=/pdf/premiere/arithmetique/serie3.pdf' },
              ],
            },
            {
              label: '📝 Devoirs Surveillés (DS)',
              collapsed: true,
              items: [{ label: 'Tous les DS', link: '/premiere/ds' }],
            },
            {
              label: '🏠 Devoirs à la Maison (DM)',
              collapsed: true,
              items: [{ label: 'Tous les DM', link: '/premiere/dm' }],
            },
            {
              label: '📄 Examens Blancs',
              collapsed: true,
              items: [
                { label: 'Tous les Examens Blancs', link: '/premiere/examens-blancs' },
              ],
            },
            {
              label: '🏁 Bacs Blancs',
              collapsed: true,
              items: [
                { label: 'Tous les Bacs Blancs', link: '/premiere/bacs-blancs' },
              ],
            },
          ],
        },

        /* ——— TERMINALE SM ——— */
        {
          label: '🎓 Terminale Sciences Maths',
          items: [
            { label: 'Présentation', link: '/terminale/' },

            /* ── Révision (avant les chapitres) ── */
            { label: '🔄 Révision de 1ère Bac SM', link: '/terminale/revision-premiere' },

            /* ── Chapitre 1 : Limites ── */
            {
              label: '📗 Limites et continuité',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/terminale/limites' },
                { label: '📋 Fiche résumé', link: '/terminale/limites#doc=/pdf/terminale/limites/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/terminale/limites#doc=/pdf/terminale/limites/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/terminale/limites#qcm' },
                { label: 'Série 1 (planche 1)', link: '/terminale/limites#doc=/pdf/terminale/limites/serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/terminale/limites#doc=/pdf/terminale/limites/serie2.pdf' },
              ],
            },

            /* ── Chapitre 2 : Dérivabilité ── */
            {
              label: '📗 Dérivabilité (Rolle, T.A.F, I.A.F)',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/terminale/derivabilite' },
                { label: '📝 Exercices du cours', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/exercices-cours.pdf' },
                { label: '✅ Corrections des exercices', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/corrections-cours.pdf' },
                { label: '📋 Fiche de révision', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/fiche-resume.pdf' },
                { label: '❓ QCM (interactif)', link: '/terminale/derivabilite#qcm' },
                { label: '❓ QCM (PDF)', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/qcm.pdf' },
                { label: 'Série 1 — Dérivabilité en un point', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/serie1.pdf' },
                { label: '↳ Corrigé série 1', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/serie1-corrige.pdf' },
                { label: 'Série 2 — Fonctions & bijections (1)', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/serie2.pdf' },
                { label: '↳ Corrigé série 2', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/serie2-corrige.pdf' },
                { label: 'Série 3 — Fonctions & bijections (2)', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/serie3.pdf' },
                { label: '↳ Corrigé série 3', link: '/terminale/derivabilite#doc=/pdf/terminale/derivabilite/serie3-corrige.pdf' },
              ],
            },

            /* ── Chapitre 3 : Rolle, T.A.F & I.A.F ── */
            {
              label: '📗 Rolle, T.A.F & I.A.F',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/terminale/rolle-taf' },
                { label: '✅ Corrections du cours', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/corrections-cours.pdf' },
                { label: '📋 Fiche de révision', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/fiche-resume.pdf' },
                { label: '❓ QCM (interactif)', link: '/terminale/rolle-taf#qcm' },
                { label: '❓ QCM (PDF)', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/qcm.pdf' },
                { label: '📝 Exercices du chapitre', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/exercices-chapitre.pdf' },
                { label: '✅ Corrigés des exercices', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/exercices-chapitre-corriges.pdf' },
                { label: 'Série 1 — Encadrements & limites (T.A.F)', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie1.pdf' },
                { label: '↳ Corrigé série 1', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie1-corrige.pdf' },
                { label: 'Série 2 — Rolle & fonctions auxiliaires (1)', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie2.pdf' },
                { label: '↳ Corrigé série 2', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie2-corrige.pdf' },
                { label: 'Série 3 — Rolle & fonctions auxiliaires (2)', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie3.pdf' },
                { label: '↳ Corrigé série 3', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie3-corrige.pdf' },
                { label: 'Série 4 — Racines & polynômes (1)', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie4.pdf' },
                { label: '↳ Corrigé série 4', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie4-corrige.pdf' },
                { label: 'Série 5 — Racines & polynômes (2)', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie5.pdf' },
                { label: '↳ Corrigé série 5', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie5-corrige.pdf' },
                { label: 'Série 6 — Cauchy & Taylor-Lagrange', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie6.pdf' },
                { label: '↳ Corrigé série 6', link: '/terminale/rolle-taf#doc=/pdf/terminale/rolle-taf/serie6-corrige.pdf' },
              ],
            },

            /* ── Chapitre 4 : Primitives ── */
            {
              label: '📗 Primitives',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/terminale/primitives' },
                { label: '📋 Fiche résumé', link: '/terminale/primitives#doc=/pdf/terminale/primitives/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/terminale/primitives#doc=/pdf/terminale/primitives/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/terminale/primitives#qcm' },
                { label: 'Série 1 (planche 1)', link: '/terminale/primitives#doc=/pdf/terminale/primitives/serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/terminale/primitives#doc=/pdf/terminale/primitives/serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/terminale/primitives#doc=/pdf/terminale/primitives/serie3.pdf' },
              ],
            },

            /* ── Chapitre 4 : Dénombrement ── */
            {
              label: '📗 Dénombrement',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/terminale/denombrement' },
                { label: '📋 Fiche résumé', link: '/terminale/denombrement#doc=/pdf/terminale/denombrement/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/terminale/denombrement#doc=/pdf/terminale/denombrement/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/terminale/denombrement#qcm' },
                { label: 'Série 1 (planche 1)', link: '/terminale/denombrement#doc=/pdf/denombrement_serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/terminale/denombrement#doc=/pdf/denombrement_serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/terminale/denombrement#doc=/pdf/denombrement_serie3.pdf' },
              ],
            },

            /* ── Chapitre 5 : Probabilités ── */
            {
              label: '📗 Probabilités',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/terminale/probabilites' },
                { label: '📋 Fiche résumé', link: '/terminale/probabilites#doc=/pdf/terminale/probabilites/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/terminale/probabilites#doc=/pdf/terminale/probabilites/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/terminale/probabilites#qcm' },
                { label: 'Série 1 (planche 1)', link: '/terminale/probabilites#doc=/pdf/terminale/probabilites/serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/terminale/probabilites#doc=/pdf/terminale/probabilites/serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/terminale/probabilites#doc=/pdf/terminale/probabilites/serie3.pdf' },
              ],
            },
            { label: '📝 Devoirs surveillés 2026', link: '/terminale/ds-2026' },
            { label: '🗄️ Anciens devoirs surveillés', link: '/terminale/anciens-ds' },
            {
              label: '🏠 Devoirs à la Maison (DM)',
              collapsed: true,
              items: [{ label: 'Tous les DM', link: '/terminale/dm' }],
            },
            {
              label: '📄 Examens Blancs',
              collapsed: true,
              items: [
                { label: 'Tous les Examens Blancs', link: '/terminale/examens-blancs' },
              ],
            },
            { label: '🧩 Problèmes et bacs blancs', link: '/terminale/problemes-bacs-blancs' },
          ],
        },

        /* ——— CLASSES PRÉPAS ——— */
        {
          label: '🏛️ Classes Prépas',
          items: [
            { label: 'Présentation', link: '/prepas/' },
            /* ── MPSI / MP ── */
            {
              label: '📗 MPSI · Algèbre & Analyse',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/prepas/mpsi-algebre' },
                { label: '📋 Fiche résumé', link: '/prepas/mpsi-algebre#doc=/pdf/prepas/mpsi-algebre/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/prepas/mpsi-algebre#doc=/pdf/prepas/mpsi-algebre/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/prepas/mpsi-algebre#qcm' },
                { label: 'Série 1 (planche 1)', link: '/prepas/mpsi-algebre#doc=/pdf/prepas/mpsi-algebre/serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/prepas/mpsi-algebre#doc=/pdf/prepas/mpsi-algebre/serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/prepas/mpsi-algebre#doc=/pdf/prepas/mpsi-algebre/serie3.pdf' },
              ],
            },
            {
              label: '📗 MPSI · Géométrie & Espaces vect.',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/prepas/mpsi-geometrie' },
                { label: '📋 Fiche résumé', link: '/prepas/mpsi-geometrie#doc=/pdf/prepas/mpsi-geometrie/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/prepas/mpsi-geometrie#doc=/pdf/prepas/mpsi-geometrie/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/prepas/mpsi-geometrie#qcm' },
                { label: 'Série 1 (planche 1)', link: '/prepas/mpsi-geometrie#doc=/pdf/prepas/mpsi-geometrie/serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/prepas/mpsi-geometrie#doc=/pdf/prepas/mpsi-geometrie/serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/prepas/mpsi-geometrie#doc=/pdf/prepas/mpsi-geometrie/serie3.pdf' },
              ],
            },
            {
              label: '📗 MPSI · Probabilités & Stats',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/prepas/mpsi-proba' },
                { label: '📋 Fiche résumé', link: '/prepas/mpsi-proba#doc=/pdf/prepas/mpsi-proba/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/prepas/mpsi-proba#doc=/pdf/prepas/mpsi-proba/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/prepas/mpsi-proba#qcm' },
                { label: 'Série 1 (planche 1)', link: '/prepas/mpsi-proba#doc=/pdf/prepas/mpsi-proba/serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/prepas/mpsi-proba#doc=/pdf/prepas/mpsi-proba/serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/prepas/mpsi-proba#doc=/pdf/prepas/mpsi-proba/serie3.pdf' },
              ],
            },

            /* ── PCSI / PC ── */
            {
              label: '📘 PCSI · Analyse & Intégration',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/prepas/pcsi-analyse' },
                { label: '📋 Fiche résumé', link: '/prepas/pcsi-analyse#doc=/pdf/prepas/pcsi-analyse/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/prepas/pcsi-analyse#doc=/pdf/prepas/pcsi-analyse/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/prepas/pcsi-analyse#qcm' },
                { label: 'Série 1 (planche 1)', link: '/prepas/pcsi-analyse#doc=/pdf/prepas/pcsi-analyse/serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/prepas/pcsi-analyse#doc=/pdf/prepas/pcsi-analyse/serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/prepas/pcsi-analyse#doc=/pdf/prepas/pcsi-analyse/serie3.pdf' },
              ],
            },
            {
              label: '📘 PCSI · Algèbre linéaire',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/prepas/pcsi-algebre' },
                { label: '📋 Fiche résumé', link: '/prepas/pcsi-algebre#doc=/pdf/prepas/pcsi-algebre/fiche-resume.pdf' },
                { label: '✅ Corrections des exercices', link: '/prepas/pcsi-algebre#doc=/pdf/prepas/pcsi-algebre/corrections-cours.pdf' },
                { label: '❓ QCM', link: '/prepas/pcsi-algebre#qcm' },
                { label: 'Série 1 (planche 1)', link: '/prepas/pcsi-algebre#doc=/pdf/prepas/pcsi-algebre/serie1.pdf' },
                { label: 'Série 2 (planche 2)', link: '/prepas/pcsi-algebre#doc=/pdf/prepas/pcsi-algebre/serie2.pdf' },
                { label: 'Série 3 (planche 3)', link: '/prepas/pcsi-algebre#doc=/pdf/prepas/pcsi-algebre/serie3.pdf' },
              ],
            },
            {
              label: '📝 Devoirs Surveillés (DS)',
              collapsed: true,
              items: [{ label: 'Tous les DS', link: '/prepas/ds' }],
            },
            {
              label: '🏠 Devoirs à la Maison (DM)',
              collapsed: true,
              items: [{ label: 'Tous les DM', link: '/prepas/dm' }],
            },
            {
              label: '📋 Examens Blancs',
              collapsed: true,
              items: [
                { label: 'Tous les Examens Blancs', link: '/prepas/examens-blancs' },
              ],
            },
            {
              label: '🏁 Concours Blancs',
              collapsed: true,
              items: [
                { label: 'Tous les Concours Blancs', link: '/prepas/concours-blancs' },
              ],
            },
          ],
        },

        /* ——— EXAMENS & CONCOURS ——— */
        {
          label: '🏆 Examens & Concours',
          items: [
            { label: 'Examens Nationaux', link: '/examens-nationaux' },
            { label: 'Concours', link: '/concours' },
            { label: 'Olympiades', link: '/olympiades' },
            { label: 'Compétitions Mathématiques', link: '/competitions' },
          ],
        },
      ],
    }),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
