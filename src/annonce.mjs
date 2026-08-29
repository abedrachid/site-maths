/* ══════════════════════════════════════════════════════════════════
   MathsElites — ANNONCE (cours accélérés & stages)
   ------------------------------------------------------------------
   C'EST LE SEUL FICHIER À MODIFIER pour changer l'annonce.
   Il alimente à la fois :
     • le bandeau affiché en haut de TOUTES les pages
       (src/components/Banner.astro)
     • la page détaillée « Stages & cours accélérés » (/stages)

   • Pour MASQUER le bandeau partout    : mettez  actif: false
   • Pour RÉ-AFFICHER le bandeau à ceux qui l'ont fermé (nouvelle
     annonce) : changez la valeur de  version  (ex. '2026-02').
   ══════════════════════════════════════════════════════════════════ */

export const annonce = {
  // Mettre à false pour désactiver complètement le bandeau.
  actif: false,

  // Changez cette valeur à chaque nouvelle annonce : le bandeau
  // réapparaîtra même chez les élèves qui l'avaient fermé.
  version: '2026-01',

  // Petit pictogramme au début du bandeau.
  emoji: '🚀',

  // Texte court affiché dans le bandeau (gardez-le concis).
  texte: 'Stages intensifs & cours accélérés pendant les vacances — Première SM, Terminale SM & Prépas. Places limitées.',

  // Bouton du bandeau → renvoie vers la page détaillée.
  lienTexte: 'Voir les dates & s’inscrire',
  lien: '/stages',
};
