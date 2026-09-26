/* ══════════════════════════════════════════════════════════════════
   MathsElites — CATALOGUE DES DEVOIRS & EXAMENS
   ------------------------------------------------------------------
   C'EST LE SEUL FICHIER À MODIFIER pour publier un devoir.

   Il alimente les 4 pages d'archives :
     • /devoirs-surveilles   (type 'ds')
     • /devoirs-maison       (type 'dm')
     • /examens-blancs       (type 'eb')
     • /examens-nationaux    (liste générée automatiquement plus bas)

   POUR PUBLIER UN DEVOIR :
     1. Déposez le(s) PDF dans public/pdf/… (voir les chemins conseillés).
     2. Ajoutez une entrée dans le tableau « devoirs » ci-dessous.
     3. C'est tout : au prochain build, le devoir apparaît dans la bonne
        année et le bon niveau, les compteurs se mettent à jour.

   ASTUCE : vous pouvez déclarer un devoir AVANT d'avoir le PDF.
   Tant que le fichier n'existe pas dans public/, le site affiche
   « Bientôt » au lieu d'un lien cassé. Dès que vous déposez le PDF
   au bon chemin, le lien s'active tout seul au build suivant.

   Champs d'une entrée :
     type      : 'ds' | 'dm' | 'eb'
     niveau    : 'premiere' | 'terminale' | 'terminale-pc' | 'prepas'
     annee     : ANNÉE DE RENTRÉE de l'année scolaire
                 (ex. 2026 = année scolaire 2026–2027)
     titre     : 'DS 1', 'DM 3', 'Examen blanc 2', 'Bac blanc 1'…
     chapitres : chapitres couverts (facultatif)
     duree     : '2 h' (facultatif)
     categorie : sous-rubrique facultative, ex. 'Entraînement',
                 'Bac blanc', 'Concours blanc', 'MPSI', 'PCSI'
     sujet     : chemin du PDF de l'énoncé (commence par /pdf/…)
     corrige   : chemin du PDF du corrigé (facultatif)
     ajout     : 'AAAA-MM-JJ' date de mise en ligne → badge « Nouveau »
                 pendant 30 jours (facultatif)

   Chemins conseillés pour les nouveaux fichiers :
     public/pdf/<niveau>/ds/<annee>/ds1-sujet.pdf   (+ ds1-corrige.pdf)
     public/pdf/<niveau>/dm/<annee>/dm1-sujet.pdf   (+ dm1-corrige.pdf)
     public/pdf/<niveau>/eb/<annee>/eb1-sujet.pdf   (+ eb1-corrige.pdf)
   ══════════════════════════════════════════════════════════════════ */

/* ── Nombre d'années affichées sur chaque page ── */
export const NB_ANNEES = 15;

/* ── Année de rentrée en cours (bascule automatiquement en septembre) ── */
const now = new Date();
export const RENTREE_COURANTE = now.getMonth() >= 8 ? now.getFullYear() : now.getFullYear() - 1;
/* ── Dernière session du Bac national (bascule en juin) ── */
export const SESSION_COURANTE = now.getMonth() >= 5 ? now.getFullYear() : now.getFullYear() - 1;

/* ── Niveaux ── */
export const NIVEAUX = {
  premiere:       { label: '1ère Bac SM',      court: '1ère SM',  couleur: '#0891b2' },
  terminale:      { label: 'Terminale SM',     court: 'Term. SM', couleur: '#1d4ed8' },
  'terminale-pc': { label: 'Terminale PC/SVT', court: 'Term. PC', couleur: '#b3922e' },
  prepas:         { label: 'Classes Prépas',   court: 'Prépas',   couleur: '#059669' },
};

/* ── Les quatre espaces (textes des pages) ── */
export const TYPES = {
  ds: {
    emoji: '📝', titre: 'Devoirs surveillés', court: 'DS', url: '/devoirs-surveilles',
    accroche: 'Tous les devoirs surveillés, classés par année scolaire et par niveau — énoncés et corrigés détaillés.',
  },
  dm: {
    emoji: '🏠', titre: 'Devoirs à la maison', court: 'DM', url: '/devoirs-maison',
    accroche: 'Les devoirs libres pour approfondir le cours à votre rythme — énoncés et corrigés, classés par année.',
  },
  eb: {
    emoji: '🏁', titre: 'Examens blancs', court: 'Examens blancs', url: '/examens-blancs',
    accroche: 'Examens blancs, bacs blancs et concours blancs : entraînez-vous en conditions réelles, année après année.',
  },
  national: {
    emoji: '🎓', titre: 'Examens nationaux', court: 'Bac national', url: '/examens-nationaux',
    accroche: 'Les sujets officiels du Baccalauréat marocain — session normale et rattrapage — sur les 15 dernières sessions.',
  },
};

/* ══════════════════════════════════════════════════════════════════
   DEVOIRS SURVEILLÉS · DEVOIRS À LA MAISON · EXAMENS BLANCS
   (l'ordre n'a pas d'importance : le tri est automatique)
   ══════════════════════════════════════════════════════════════════ */
export const devoirs = [
  /* ───────────── TERMINALE SM ───────────── */
  // Année 2026–2027
  { type: 'ds', niveau: 'terminale', annee: 2026, categorie: 'Entraînement', titre: "DS 1 d'entraînement",
    chapitres: 'Continuité · Fonction réciproque · Arctangente', duree: '2 h', ajout: '2026-09-23',
    sujet: '/pdf/terminale/ds-2026/ds1-entrainement-sujet.pdf', corrige: '/pdf/terminale/ds-2026/ds1-entrainement-corrige.pdf' },
  { type: 'ds', niveau: 'terminale', annee: 2026, categorie: 'Entraînement', titre: "DS 2 d'entraînement",
    chapitres: 'Limites et continuité · Arctangente', duree: '4 h', ajout: '2026-09-23',
    sujet: '/pdf/terminale/ds-2026/ds2-entrainement-sujet.pdf', corrige: '/pdf/terminale/ds-2026/ds2-entrainement-corrige.pdf' },
  { type: 'ds', niveau: 'terminale', annee: 2026, titre: 'DS 1', chapitres: 'Limites et continuité',
    sujet: '/pdf/terminale/ds-2026/ds1-sujet.pdf', corrige: '/pdf/terminale/ds-2026/ds1-corrige.pdf' },
  { type: 'ds', niveau: 'terminale', annee: 2026, titre: 'DS 2', chapitres: 'Dérivabilité',
    sujet: '/pdf/terminale/ds-2026/ds2-sujet.pdf', corrige: '/pdf/terminale/ds-2026/ds2-corrige.pdf' },
  { type: 'ds', niveau: 'terminale', annee: 2026, titre: 'DS 3', chapitres: 'Primitives · Dénombrement',
    sujet: '/pdf/terminale/ds-2026/ds3-sujet.pdf', corrige: '/pdf/terminale/ds-2026/ds3-corrige.pdf' },
  { type: 'ds', niveau: 'terminale', annee: 2026, titre: 'DS 4', chapitres: 'Probabilités',
    sujet: '/pdf/terminale/ds-2026/ds4-sujet.pdf', corrige: '/pdf/terminale/ds-2026/ds4-corrige.pdf' },
  // Année 2025–2026
  { type: 'ds', niveau: 'terminale', annee: 2025, titre: 'DS 1', chapitres: 'Limites et continuité',
    sujet: '/pdf/terminale/anciens-ds/ds1-2025.pdf' },
  { type: 'ds', niveau: 'terminale', annee: 2025, titre: 'DS 2', chapitres: 'Dérivabilité',
    sujet: '/pdf/terminale/anciens-ds/ds2-2025-sujet.pdf', corrige: '/pdf/terminale/anciens-ds/ds2-2025-corrige.pdf' },
  // Année 2024–2025
  { type: 'ds', niveau: 'terminale', annee: 2024, titre: 'DS 1', chapitres: 'Limites · Dérivabilité',
    sujet: '/pdf/terminale/anciens-ds/ds1-2024-sujet.pdf', corrige: '/pdf/terminale/anciens-ds/ds1-2024-corrige.pdf' },
  { type: 'ds', niveau: 'terminale', annee: 2024, titre: 'DS 2', chapitres: 'Primitives · Probabilités',
    sujet: '/pdf/terminale/anciens-ds/ds2-2024-sujet.pdf', corrige: '/pdf/terminale/anciens-ds/ds2-2024-corrige.pdf' },

  // Examens blancs par chapitre
  { type: 'eb', niveau: 'terminale', annee: 2026, titre: 'Examen blanc 1', chapitres: 'Dénombrement', duree: '1 h 30',
    sujet: '/pdf/terminale/examens-blancs/eb1-sujet.pdf', corrige: '/pdf/terminale/examens-blancs/eb1-corrige.pdf' },
  { type: 'eb', niveau: 'terminale', annee: 2026, titre: 'Examen blanc 2', chapitres: 'Probabilités conditionnelles · Bayes', duree: '1 h 30',
    sujet: '/pdf/terminale/examens-blancs/eb2-sujet.pdf', corrige: '/pdf/terminale/examens-blancs/eb2-corrige.pdf' },
  { type: 'eb', niveau: 'terminale', annee: 2026, titre: 'Examen blanc 3', chapitres: 'Suites numériques', duree: '1 h 30',
    sujet: '/pdf/terminale/examens-blancs/eb3-sujet.pdf', corrige: '/pdf/terminale/examens-blancs/eb3-corrige.pdf' },
  { type: 'eb', niveau: 'terminale', annee: 2026, titre: 'Examen blanc 4', chapitres: 'Limites · Dérivées · Étude de fonctions', duree: '1 h 30',
    sujet: '/pdf/terminale/examens-blancs/eb4-sujet.pdf', corrige: '/pdf/terminale/examens-blancs/eb4-corrige.pdf' },
  { type: 'eb', niveau: 'terminale', annee: 2026, titre: 'Examen blanc 5', chapitres: 'Primitives · Intégration', duree: '1 h 30',
    sujet: '/pdf/terminale/examens-blancs/eb5-sujet.pdf', corrige: '/pdf/terminale/examens-blancs/eb5-corrige.pdf' },
  { type: 'eb', niveau: 'terminale', annee: 2026, titre: 'Examen blanc 6', chapitres: 'Nombres complexes', duree: '1 h 30',
    sujet: '/pdf/terminale/examens-blancs/eb6-sujet.pdf', corrige: '/pdf/terminale/examens-blancs/eb6-corrige.pdf' },
  { type: 'eb', niveau: 'terminale', annee: 2026, titre: 'Examen blanc 7', chapitres: 'Arithmétique', duree: '1 h',
    sujet: '/pdf/terminale/examens-blancs/eb7-sujet.pdf', corrige: '/pdf/terminale/examens-blancs/eb7-corrige.pdf' },
  // Bacs blancs complets
  { type: 'eb', niveau: 'terminale', annee: 2026, categorie: 'Bac blanc', titre: 'Bac blanc 1', chapitres: 'Programme couvert à date', duree: '3 h',
    sujet: '/pdf/terminale/problemes-bacs-blancs/bb1-sujet.pdf', corrige: '/pdf/terminale/problemes-bacs-blancs/bb1-corrige.pdf' },
  { type: 'eb', niveau: 'terminale', annee: 2026, categorie: 'Bac blanc', titre: 'Bac blanc 2', chapitres: 'Programme couvert à date', duree: '3 h',
    sujet: '/pdf/terminale/problemes-bacs-blancs/bb2-sujet.pdf', corrige: '/pdf/terminale/problemes-bacs-blancs/bb2-corrige.pdf' },
  { type: 'eb', niveau: 'terminale', annee: 2026, categorie: 'Bac blanc', titre: 'Bac blanc 3', chapitres: 'Tout le programme', duree: '3 h',
    sujet: '/pdf/terminale/problemes-bacs-blancs/bb3-sujet.pdf', corrige: '/pdf/terminale/problemes-bacs-blancs/bb3-corrige.pdf' },

  // DM — modèle à dupliquer :
  // { type: 'dm', niveau: 'terminale', annee: 2026, titre: 'DM 1', chapitres: '…',
  //   sujet: '/pdf/terminale/dm/2026/dm1-sujet.pdf', corrige: '/pdf/terminale/dm/2026/dm1-corrige.pdf' },

  /* ───────────── PREMIÈRE BAC SM ───────────── */
  { type: 'ds', niveau: 'premiere', annee: 2026, titre: 'DS 1', chapitres: 'Logique mathématique',
    sujet: '/pdf/premiere/ds1-logique.pdf' },
  { type: 'dm', niveau: 'premiere', annee: 2026, titre: 'DM 1', chapitres: 'Fonctions — généralités',
    sujet: '/pdf/premiere/dm1.pdf' },
  { type: 'eb', niveau: 'premiere', annee: 2026, titre: 'Examen blanc 1', chapitres: 'Principes de dénombrement · Arrangements', duree: '1 h',
    sujet: '/pdf/premiere/examens-blancs/eb1-sujet.pdf', corrige: '/pdf/premiere/examens-blancs/eb1-corrige.pdf' },
  { type: 'eb', niveau: 'premiere', annee: 2026, titre: 'Examen blanc 2', chapitres: 'Combinaisons · Binôme de Newton', duree: '1 h',
    sujet: '/pdf/premiere/examens-blancs/eb2-sujet.pdf', corrige: '/pdf/premiere/examens-blancs/eb2-corrige.pdf' },
  { type: 'eb', niveau: 'premiere', annee: 2026, titre: 'Examen blanc 3', chapitres: 'Synthèse — Dénombrement', duree: '1 h 30',
    sujet: '/pdf/premiere/examens-blancs/eb3-sujet.pdf', corrige: '/pdf/premiere/examens-blancs/eb3-corrige.pdf' },
  { type: 'eb', niveau: 'premiere', annee: 2026, titre: 'Examen blanc 4', chapitres: 'Divisibilité · PGCD · PPCM', duree: '1 h',
    sujet: '/pdf/premiere/examens-blancs/eb4-sujet.pdf', corrige: '/pdf/premiere/examens-blancs/eb4-corrige.pdf' },
  { type: 'eb', niveau: 'premiere', annee: 2026, titre: 'Examen blanc 5', chapitres: 'Nombres premiers · Congruences', duree: '1 h',
    sujet: '/pdf/premiere/examens-blancs/eb5-sujet.pdf', corrige: '/pdf/premiere/examens-blancs/eb5-corrige.pdf' },
  { type: 'eb', niveau: 'premiere', annee: 2026, titre: 'Examen blanc 6', chapitres: 'Synthèse — Arithmétique', duree: '1 h 30',
    sujet: '/pdf/premiere/examens-blancs/eb6-sujet.pdf', corrige: '/pdf/premiere/examens-blancs/eb6-corrige.pdf' },
  { type: 'eb', niveau: 'premiere', annee: 2026, categorie: 'Bac blanc', titre: 'Bac blanc 1', chapitres: 'Logique · Ensembles · Dénombrement', duree: '2 h',
    sujet: '/pdf/premiere/bacs-blancs/bb1-sujet.pdf', corrige: '/pdf/premiere/bacs-blancs/bb1-corrige.pdf' },
  { type: 'eb', niveau: 'premiere', annee: 2026, categorie: 'Bac blanc', titre: 'Bac blanc 2', chapitres: 'Arithmétique · Suites · Étude de fonctions', duree: '3 h',
    sujet: '/pdf/premiere/bacs-blancs/bb2-sujet.pdf', corrige: '/pdf/premiere/bacs-blancs/bb2-corrige.pdf' },
  { type: 'eb', niveau: 'premiere', annee: 2026, categorie: 'Bac blanc', titre: 'Bac blanc 3', chapitres: 'Tout le programme de 1ère Bac SM', duree: '3 h',
    sujet: '/pdf/premiere/bacs-blancs/bb3-sujet.pdf', corrige: '/pdf/premiere/bacs-blancs/bb3-corrige.pdf' },

  /* ───────────── CLASSES PRÉPAS ───────────── */
  { type: 'ds', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'DS 1', chapitres: 'Logique · Ensembles · Raisonnement', duree: '3 h',
    sujet: '/pdf/prepas/ds/mpsi-ds1-sujet.pdf', corrige: '/pdf/prepas/ds/mpsi-ds1-corrige.pdf' },
  { type: 'ds', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'DS 2', chapitres: 'Suites et séries', duree: '3 h',
    sujet: '/pdf/prepas/ds/mpsi-ds2-sujet.pdf', corrige: '/pdf/prepas/ds/mpsi-ds2-corrige.pdf' },
  { type: 'ds', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'DS 3', chapitres: 'Matrices · Déterminants', duree: '3 h',
    sujet: '/pdf/prepas/ds/mpsi-ds3-sujet.pdf', corrige: '/pdf/prepas/ds/mpsi-ds3-corrige.pdf' },
  { type: 'ds', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'DS 4', chapitres: 'Intégration · Équations différentielles', duree: '3 h',
    sujet: '/pdf/prepas/ds/mpsi-ds4-sujet.pdf', corrige: '/pdf/prepas/ds/mpsi-ds4-corrige.pdf' },
  { type: 'ds', niveau: 'prepas', annee: 2026, categorie: 'PCSI', titre: 'DS 1', chapitres: 'Analyse · Suites', duree: '3 h',
    sujet: '/pdf/prepas/ds/pcsi-ds1-sujet.pdf', corrige: '/pdf/prepas/ds/pcsi-ds1-corrige.pdf' },
  { type: 'ds', niveau: 'prepas', annee: 2026, categorie: 'PCSI', titre: 'DS 2', chapitres: 'Algèbre linéaire', duree: '3 h',
    sujet: '/pdf/prepas/ds/pcsi-ds2-sujet.pdf', corrige: '/pdf/prepas/ds/pcsi-ds2-corrige.pdf' },

  { type: 'dm', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'DM 1', chapitres: 'Raisonnement · Dénombrement',
    sujet: '/pdf/prepas/dm/mpsi-dm1-sujet.pdf', corrige: '/pdf/prepas/dm/mpsi-dm1-corrige.pdf' },
  { type: 'dm', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'DM 2', chapitres: 'Suites récurrentes · Convergence',
    sujet: '/pdf/prepas/dm/mpsi-dm2-sujet.pdf', corrige: '/pdf/prepas/dm/mpsi-dm2-corrige.pdf' },
  { type: 'dm', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'DM 3', chapitres: 'Espaces vectoriels · Applications linéaires',
    sujet: '/pdf/prepas/dm/mpsi-dm3-sujet.pdf', corrige: '/pdf/prepas/dm/mpsi-dm3-corrige.pdf' },
  { type: 'dm', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'DM 4', chapitres: 'Intégration · Développements limités',
    sujet: '/pdf/prepas/dm/mpsi-dm4-sujet.pdf', corrige: '/pdf/prepas/dm/mpsi-dm4-corrige.pdf' },
  { type: 'dm', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'DM 5', chapitres: 'Probabilités · Variables aléatoires',
    sujet: '/pdf/prepas/dm/mpsi-dm5-sujet.pdf', corrige: '/pdf/prepas/dm/mpsi-dm5-corrige.pdf' },

  { type: 'eb', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'Examen blanc 1', chapitres: 'Logique · Ensembles', duree: '2 h',
    sujet: '/pdf/prepas/eb/mpsi-eb1-sujet.pdf', corrige: '/pdf/prepas/eb/mpsi-eb1-corrige.pdf' },
  { type: 'eb', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'Examen blanc 2', chapitres: 'Suites · Séries', duree: '2 h',
    sujet: '/pdf/prepas/eb/mpsi-eb2-sujet.pdf', corrige: '/pdf/prepas/eb/mpsi-eb2-corrige.pdf' },
  { type: 'eb', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'Examen blanc 3', chapitres: 'Algèbre linéaire', duree: '2 h',
    sujet: '/pdf/prepas/eb/mpsi-eb3-sujet.pdf', corrige: '/pdf/prepas/eb/mpsi-eb3-corrige.pdf' },
  { type: 'eb', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'Examen blanc 4', chapitres: 'Intégration · EDO', duree: '2 h',
    sujet: '/pdf/prepas/eb/mpsi-eb4-sujet.pdf', corrige: '/pdf/prepas/eb/mpsi-eb4-corrige.pdf' },
  { type: 'eb', niveau: 'prepas', annee: 2026, categorie: 'MPSI', titre: 'Examen blanc 5', chapitres: 'Probabilités · Variables aléatoires', duree: '2 h',
    sujet: '/pdf/prepas/eb/mpsi-eb5-sujet.pdf', corrige: '/pdf/prepas/eb/mpsi-eb5-corrige.pdf' },
  { type: 'eb', niveau: 'prepas', annee: 2026, categorie: 'Concours blanc', titre: 'Concours blanc CNC 1', chapitres: 'Réduction · Intégration · Probabilités', duree: '4 h',
    sujet: '/pdf/prepas/concours-blancs/cnc-cb1-sujet.pdf', corrige: '/pdf/prepas/concours-blancs/cnc-cb1-corrige.pdf' },
  { type: 'eb', niveau: 'prepas', annee: 2026, categorie: 'Concours blanc', titre: 'Concours blanc CNC 2', chapitres: 'Niveau MP / PC', duree: '4 h',
    sujet: '/pdf/prepas/concours-blancs/cnc-cb2-sujet.pdf', corrige: '/pdf/prepas/concours-blancs/cnc-cb2-corrige.pdf' },
  { type: 'eb', niveau: 'prepas', annee: 2026, categorie: 'Concours blanc', titre: 'Concours blanc ENS 1', chapitres: 'Niveau MP — très difficile', duree: '5 h',
    sujet: '/pdf/prepas/concours-blancs/ens-cb1-sujet.pdf', corrige: '/pdf/prepas/concours-blancs/ens-cb1-corrige.pdf' },
];

/* ══════════════════════════════════════════════════════════════════
   EXAMENS NATIONAUX — la liste des 15 dernières sessions est générée
   automatiquement. Déposez simplement les PDF à ces adresses :

     public/pdf/examens-nationaux/sm/2025-normale-sujet.pdf
     public/pdf/examens-nationaux/sm/2025-normale-corrige.pdf
     public/pdf/examens-nationaux/sm/2025-rattrapage-sujet.pdf
     public/pdf/examens-nationaux/sm/2025-rattrapage-corrige.pdf
     public/pdf/examens-nationaux/pc/…   (Sciences expérimentales)

   Un fichier rangé ailleurs ? Ajoutez une ligne dans EXCEPTIONS.
   ══════════════════════════════════════════════════════════════════ */
export const FILIERES = {
  sm: { label: 'Sciences Mathématiques', court: 'Bac SM (A et B)', niveau: 'terminale' },
  pc: { label: 'Sciences Expérimentales', court: 'PC · SVT · SA', niveau: 'terminale-pc' },
};

const EXCEPTIONS = {
  // 'filière-année-session-pièce' : '/pdf/chemin/du/fichier.pdf'
  'sm-2026-normale-sujet': '/pdf/premiere/sujet_normal_2026.pdf',
};

export const examensNationaux = [];
for (const fil of Object.keys(FILIERES)) {
  for (let a = SESSION_COURANTE; a > SESSION_COURANTE - NB_ANNEES; a--) {
    for (const session of ['normale', 'rattrapage']) {
      const p = (piece) =>
        EXCEPTIONS[`${fil}-${a}-${session}-${piece}`] ?? `/pdf/examens-nationaux/${fil}/${a}-${session}-${piece}.pdf`;
      examensNationaux.push({ filiere: fil, annee: a, session, sujet: p('sujet'), corrige: p('corrige') });
    }
  }
}
