// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { sidebar } from './src/sidebar.mjs';

// URL de production — changez SITE dans votre plateforme d'hébergement
// (Netlify / Vercel / GitHub Pages) ou ici pour votre domaine définitif.
const SITE = process.env.SITE ?? 'https://mathselites.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Anciennes pages de devoirs → nouveaux espaces « Devoirs & Examens »
  // (les liens déjà partagés aux élèves continuent de fonctionner).
  redirects: {
    '/premiere/ds': '/devoirs-surveilles?niveau=premiere',
    '/premiere/dm': '/devoirs-maison?niveau=premiere',
    '/premiere/examens-blancs': '/examens-blancs?niveau=premiere',
    '/premiere/bacs-blancs': '/examens-blancs?niveau=premiere',
    '/terminale/ds-2026': '/devoirs-surveilles?niveau=terminale',
    '/terminale/anciens-ds': '/devoirs-surveilles?niveau=terminale',
    '/terminale/dm': '/devoirs-maison?niveau=terminale',
    '/terminale/examens-blancs': '/examens-blancs?niveau=terminale',
    '/terminale/examens-nationaux': '/examens-nationaux',
    '/prepas/ds': '/devoirs-surveilles?niveau=prepas',
    '/prepas/dm': '/devoirs-maison?niveau=prepas',
    '/prepas/examens-blancs': '/examens-blancs?niveau=prepas',
    '/prepas/concours-blancs': '/examens-blancs?niveau=prepas',
  },
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
        // Bandeau global d'annonce (cours accélérés & stages) — voir src/annonce.mjs
        Banner: './src/components/Banner.astro',
      },
      // Le favicon du site
      favicon: '/favicon.svg',
      // Logo affiché dans l'en-tête, à côté du titre
      logo: { src: './src/assets/logo.svg', replacesTitle: false },
      // Charge la feuille de style KaTeX sur TOUTES les pages
      // (indispensable pour que les formules mathématiques s'affichent).
      head: [
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
        // Cartes « Outils interactifs » (Desmos, GeoGebra, SageMathCell)
        {
          tag: 'script',
          attrs: { src: '/outils-cards.js', defer: true },
        },
        // Accès aux corrigés : verrou souple + inscription Brevo. Placé AVANT
        // la visionneuse pour intercepter l'onglet « Corrections » même lors
        // de l'ouverture automatique (lien #doc=…). Config dans le fichier.
        {
          tag: 'script',
          attrs: { src: '/corriges-gate.js?v=6', defer: true },
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
          // Le ?v=N force le navigateur à recharger le script quand on le
          // modifie : incrémentez ce numéro à chaque changement de site-stats.js.
          attrs: { src: '/site-stats.js?v=3', defer: true },
        },
        // Pastille « ✨ Nouveautés » sur le lien de la sidebar :
        // affiche le nombre d'ajouts que l'élève n'a pas encore vus.
        {
          tag: 'script',
          attrs: { src: '/nouveautes-badge.js?v=1', defer: true },
        },
        // Vignettes vidéo « cliquer pour lire » : remplace chaque
        // lecteur par une carte compacte ; la vidéo n'est chargée qu'au
        // clic (gain de place + page plus légère). Voir public/video-facade.js.
        {
          tag: 'script',
          attrs: { src: '/video-facade.js?v=1', defer: true },
        },
        // Verrou email sur les vidéos : même accès que les corrigés
        // (une seule inscription débloque les deux). Voir public/video-gate.js.
        {
          tag: 'script',
          attrs: { src: '/video-gate.js?v=2', defer: true },
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
          // Chaîne YouTube @MathsElites (handle insensible à la casse : OK)
          href: 'https://www.youtube.com/@mathselites',
        },
        {
          icon: 'instagram',
          label: 'Instagram',
          // Compte Instagram @mathselites.pro (mathselites etait pris)
          href: 'https://www.instagram.com/mathselites.pro',
        },
        {
          icon: 'facebook',
          label: 'Facebook',
          // Page Facebook MathsElites - lien par ID pour l'instant ; remplacer par https://www.facebook.com/mathselites quand le nom d'utilisateur sera dispo
          href: 'https://www.facebook.com/profile.php?id=1308180605710026',
        },
      ],
      disable404Route: true,
      // Français servi à la racine (/) sans préfixe /fr/ :
      // le contenu reste dans src/content/docs/ (pas de sous-dossier fr/).
      locales: {
        root: { label: 'Français', lang: 'fr' },
      },
      customCss: [
        // Polices et KaTeX servis en local (aucune requête vers un CDN externe)
        '@fontsource-variable/inter',
        '@fontsource-variable/fraunces',
        'katex/dist/katex.min.css',
        './src/styles/custom.css',
        './src/styles/me-home.css',
        './src/styles/me-chapitres.css',
      ],
      // Navigation : voir src/sidebar.mjs (4 entrées principales)
      sidebar,
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
