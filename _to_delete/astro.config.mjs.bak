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
      // Remplace le pied de page par défaut par notre version qui ajoute
      // le lien « Signaler une erreur » (WhatsApp) sous les pages de chapitre.
      components: {
        Footer: './src/components/Footer.astro',
      },
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
        // Image de partage (Open Graph + Twitter).
        // Starlight génère déjà og:title, og:description, og:url, og:type,
        // og:locale, og:site_name et twitter:card. Il ne manque que l'image :
        // c'est l'aperçu affiché quand un lien est partagé sur WhatsApp,
        // Facebook, etc. L'URL doit être ABSOLUE.
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: `${SITE}/og-image.png` },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:secure_url', content: `${SITE}/og-image.png` },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:type', content: 'image/png' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '1200' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '630' },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: 'MathsElites — cours, exercices corrigés et examens de mathématiques (Première Bac SM, Terminale SM, Prépas).',
          },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: `${SITE}/og-image.png` },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#0C2340' },
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
        // Bouton WhatsApp flottant (numéro dans /wa-button.js)
        {
          tag: 'script',
          attrs: { src: '/wa-button.js', defer: true },
        },
        // Statistiques de fréquentation : nombre total de visiteurs
        // (Abacus) + visiteurs en ligne en temps réel (Worker Cloudflare).
        // Configuration (URL du Worker, mode de comptage) dans le fichier.
        {
          tag: 'script',
          attrs: { src: '/site-stats.js', defer: true },
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
        {
          icon: 'youtube',
          label: 'YouTube',
          // TODO : remplacez par l'URL de votre chaîne YouTube
          href: 'https://www.youtube.com/@mathselites',
        },
        {
          icon: 'instagram',
          label: 'Instagram',
          // TODO : remplacez par l'URL de votre compte Instagram
          href: 'https://www.instagram.com/mathselites',
        },
        {
          icon: 'facebook',
          label: 'Facebook',
          // TODO : remplacez par l'URL de votre page Facebook
          href: 'https://www.facebook.com/mathselites',
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
        { label: 'ℹ️ À propos', link: '/a-propos' },
        { label: '✉️ Contact', link: '/contact' },

        /* ——— PREMIÈRE BAC SM ——— */
        {
          label: '📂 Première Bac SM',
          items: [
            { label: 'Présentation & Chapitres', link: '/premiere/' },

            /* ── Chapitre 1 : Logique et raisonnement ── */
            {
              label: '📗 Logique et raisonnement',
              collapsed: true,
              items: [
                { label: '📖 Cours', link: '/premiere/logique' },
                { label: '❓ QCM', link: '/premiere/logique#qcm' },
              ],
            },

            /* ── Chapitre 2 : Dénombrement ── */
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

            /* ── Chapitre 3 : Arithmétique ── */
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

            /* ── Chapitre : Rédaction mathématique ── */
            {
              label: '✍️ Rédaction mathématique',
              collapsed: true,
              items: [
                { label: '📖 Guide de rédaction', link: '/terminale/redaction-mathematique' },
                { label: '⬇️ Télécharger le PDF', link: '/pdf/terminale/redaction-mathematique/redaction-mathematique.pdf' },
              ],
            },

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
            /* ── Concours d'entrée & Excellence ── */
            {
              label: '🏆 Concours Entrée Prépas d\'Excellence',
              collapsed: true,
              items: [
                { label: 'Présentation', link: '/prepas/concours-entree-excellence' },
                { label: '🏆 Sujet 2025', link: '/prepas/concours-entree-excellence#doc=/pdf/prepas/concours-excellence/concours-entree-mpsi-2025.pdf' },
                { label: '📄 Sujet 2024', link: '/prepas/concours-entree-excellence#doc=/pdf/prepas/concours-excellence/concours-entree-mpsi-2024.pdf' },
                { label: '📄 Sujet 2023', link: '/prepas/concours-entree-excellence#doc=/pdf/prepas/concours-excellence/concours-entree-mpsi-2023.pdf' },
                { label: '📄 Sujet 2022', link: '/prepas/concours-entree-excellence#doc=/pdf/prepas/concours-excellence/concours-entree-mpsi-2022.pdf' },
                { label: '📄 Sujet 2021', link: '/prepas/concours-entree-excellence#doc=/pdf/prepas/concours-excellence/concours-entree-mpsi-2021.pdf' },
                { label: '📄 Sujet 2019', link: '/prepas/concours-entree-excellence#doc=/pdf/prepas/concours-excellence/concours-entree-mpsi-2019.pdf' },
              ],
            },
            {
              label: '🔬 Atelier du Chercheur — MPSI / MP',
              collapsed: true,
              items: [
                { label: '📖 Consulter / télécharger', link: '/prepas/atelier-chercheur' },
              ],
            },
            {
              label: '📖 Continuité, Dérivabilité & Intégrales',
              collapsed: true,
              items: [
                { label: '📖 Consulter / télécharger', link: '/prepas/cours-continuite-derivabilite' },
              ],
            },
            {
              label: '🎯 Préparation Lycées d\'Excellence',
              collapsed: true,
              items: [
                { label: '📖 Consulter / télécharger', link: '/prepas/preparation-lycees-excellence' },
              ],
            },
            /* ── Problèmes & Stage Sup/Spé ── */
            {
              label: '📐 Problèmes & Stage — Sup/Spé',
              collapsed: true,
              items: [
                { label: 'Présentation', link: '/prepas/problemes-stage-sup' },
                { label: "📐 Problèmes d'algèbre linéaire", link: '/prepas/problemes-stage-sup#doc=/pdf/prepas/probl%C3%A8mes_sup.pdf' },
                { label: '📘 Stage Sup/Spé (cours complet)', link: '/prepas/problemes-stage-sup#doc=/pdf/prepas/stage_sup_spe.pdf' },
              ],
            },
            /* ── MPSI / MP ── */
            {
              label: '📗 Ensembles & Applications',
              collapsed: true,
              items: [
                { label: 'Présentation', link: '/prepas/ensembles-applications' },
                { label: '📝 Exercices & problèmes', link: '/prepas/ensembles-applications#doc=/pdf/prepas/Ensembles_Applications_exos_probl%C3%A8mes.pdf' },
                { label: '✅ Corrigés', link: '/prepas/ensembles-applications#doc=/pdf/prepas/Ensembles_Applications_Corriges.pdf' },
              ],
            },
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
    // Sitemap enrichi : lastmod (date du build), changefreq et priority.
    // La fonction serialize hiérarchise les pages pour guider Google :
    // l'accueil et les pages de niveau sont prioritaires, les cours/chapitres
    // sont mis à jour régulièrement, les pages utilitaires le sont peu.
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname;

        // Page d'accueil — priorité maximale
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Pages de présentation d'un niveau (/premiere/, /terminale/, /prepas/)
        else if (/^\/(premiere|terminale|prepas)\/$/.test(path)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Rubriques Examens & Concours
        else if (/^\/(examens-nationaux|concours|olympiades|competitions)\/$/.test(path)) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Pages utilitaires — peu de valeur SEO, rarement modifiées
        else if (path === '/a-propos/' || path === '/contact/') {
          item.priority = 0.4;
          item.changefreq = 'yearly';
        }
        // Tout le reste : cours, chapitres, séries, DS/DM, examens blancs
        else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }

        return item;
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
