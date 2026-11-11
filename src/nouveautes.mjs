/* ══════════════════════════════════════════════════════════════════
   MathsElites — NOUVEAUTÉS (nouveaux documents & vidéos)
   ------------------------------------------------------------------
   C'EST LE SEUL FICHIER À MODIFIER pour annoncer un ajout aux élèves.

   Ce fichier alimente :
     • la page « Nouveautés » (/nouveautes) — la liste consultable
     • la pastille « N » dans le menu (nombre d'ajouts pas encore vus
       par l'élève ; disparaît quand il ouvre la page Nouveautés).

   POUR ANNONCER UN AJOUT :
     Ajoutez une ligne EN HAUT du tableau « nouveautes » ci-dessous.
     Chaque entrée :
        date    : 'AAAA-MM-JJ'      (date de l'ajout — sert au tri)
        type    : 'document' | 'video' | 'stage' | 'autre'
        niveau  : 'Terminale SM' | 'Première SM' | 'Prépas' | ''  (facultatif)
        titre   : le texte affiché
        lien    : l'adresse de la page/document (ex. '/terminale/limites')
        desc    : une phrase courte (facultatif)

   Gardez idéalement les ~30 entrées les plus récentes (supprimez les
   plus anciennes de temps en temps).
   ══════════════════════════════════════════════════════════════════ */

// ── Canal de diffusion (Telegram / WhatsApp) ──────────────────────
// Collez ici le lien d'invitation de votre canal. Laissez '' pour
// masquer le bouton correspondant.
//   • Telegram : créez un « Canal » dans l'app Telegram, puis copiez
//     son lien public https://t.me/votre_canal
//   • WhatsApp : créez une « Chaîne » (ou un groupe) et copiez le lien
//     d'invitation https://whatsapp.com/channel/xxxxxxxx
export const canal = {
  telegram: '',   // ex. 'https://t.me/mathselites'
  whatsapp: 'https://whatsapp.com/channel/0029Vb8UfxnDeON2hYQPCr2Q',   // ex. 'https://whatsapp.com/channel/xxxxxxxxxxxxx'
};

// ── MESSAGE-TYPE À PUBLIER DANS LE CANAL (Telegram / WhatsApp) ─────
// À chaque ajout, copiez-collez ce modèle dans votre canal et
// remplacez les [ ... ]. Gardez le lien : il ouvre directement le doc.
//
//   🆕 Nouveau sur MathsElites
//   [Titre du document ou de la vidéo]
//   Niveau : [Terminale SM / Première SM / Prépas]
//   À consulter ici : https://mathselites.com[lien, ex. /devoirs-surveilles?niveau=terminale]
//
//   Bon travail 
//
// Variante courte :
//   🆕 Nouveau DS de Terminale SM en ligne https://mathselites.com/devoirs-surveilles?niveau=terminale

// ── Liste des nouveautés (la plus récente EN HAUT) ────────────────
export const nouveautes = [
  // ↓↓↓ AJOUTEZ VOS NOUVELLES ENTRÉES ICI ↓↓↓
  {
    date: '2026-11-11',
    type: 'document',
    niveau: 'Première SM',
    titre: 'Généralités sur les fonctions — cours complet, fiches et exercices',
    lien: '/premiere/generalites-fonctions',
    desc: 'Cours complet (43 p.), fiches de cours et exercices et problèmes.',
  },
  {
    date: '2026-11-11',
    type: 'document',
    niveau: 'Première SM',
    titre: 'Ensembles et applications — QCM n°1 et Série 2 (énoncés et corrigés)',
    lien: '/premiere/ensembles-applications',
    desc: 'QCM d\'auto-évaluation et série d\'exercices, avec leurs corrigés.',
  },
  {
    date: '2026-11-11',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'Fonction exponentielle — cours, fiche, QCM, exercices et problèmes',
    lien: '/terminale/exponentielle',
    desc: 'Chapitre complet en PDF (35 p.) : cours, fiche résumé, QCM de 21 questions, exercices et problèmes, avec corrigés.',
  },
  {
    date: '2026-11-11',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'Fonction logarithme — cours, fiche, QCM, exercices et problèmes',
    lien: '/terminale/logarithme',
    desc: 'Chapitre complet en PDF (32 p.) : cours, fiche résumé, QCM de 21 questions, exercices et problèmes, avec corrigés.',
  },
  {
    date: '2026-11-11',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'DS 2 — Primitives, fonction réciproque, théorème de Rolle (énoncé et corrigé)',
    lien: '/devoirs-surveilles?niveau=terminale',
    desc: 'Devoir surveillé de 2 h avec son corrigé.',
  },
  {
    date: '2026-11-11',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'Primitives — séries d\'exercices 1 et 2 (énoncés)',
    lien: '/terminale/primitives',
    desc: 'Deux séries d\'exercices sur les primitives usuelles et composées.',
  },
  {
    date: '2026-11-11',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'Généralités sur les fonctions — fiches de cours',
    lien: '/terminale/generalites-fonctions',
    desc: 'Fiches de cours (7 p.) : domaine de définition, opérations, composée, image d\'un intervalle.',
  },
  {
    date: '2026-11-11',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'QCM de révision n°1 — Dérivabilité, Rolle-TAF-IAF & primitives (énoncé mis à jour et corrigé)',
    lien: '/terminale/derivabilite',
    desc: 'Corrigé détaillé du QCM : grille des réponses, justifications, barème et diagnostic.',
  },
  {
    date: '2026-11-11',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'QCM de révision n°2 — Dérivabilité, Rolle-TAF-IAF & primitives (corrigé)',
    lien: '/terminale/derivabilite',
    desc: 'Corrigé détaillé : méthodes et pièges.',
  },
  {
    date: '2026-11-01',
    type: 'stage',
    niveau: 'Terminale SM',
    titre: 'Stage de mathématiques N°1 — polycopié complet (PDF)',
    lien: '/stages/terminale-sm',
    desc: 'Fonctions primitives, dérivabilité et réciproques, théorèmes de Rolle et des accroissements finis, suites numériques.',
  },
  {
    date: '2026-11-01',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'DM 7 — Dérivabilité, primitives & arctangente (énoncé)',
    lien: '/devoirs-maison?niveau=terminale',
    desc: 'Devoir libre sur 40 points : dérivabilité, primitives, T.A.F. et arctangente.',
  },
  {
    date: '2026-11-01',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'QCM de révision n°1 — Dérivabilité, Rolle-TAF-IAF & primitives (énoncé)',
    lien: '/terminale/derivabilite',
    desc: 'QCM de niveau approfondi sur les chapitres 3 et 4, en PDF.',
  },
  {
    date: '2026-10-13',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'Suites numériques — cours, fiche, QCM, exercices et problèmes corrigés',
    lien: '/terminale/suites',
    desc: 'Chapitre complet (37 p.) : cours démontré, fiche résumé, QCM de 21 questions corrigé, 12 exercices et 4 problèmes corrigés.',
  },
  {
    date: '2026-10-07',
    type: 'document',
    niveau: 'Première SM',
    titre: 'Fiche — La rédaction obligatoire en Première Bac Sciences Mathématiques',
    lien: '/pdf/premiere/fiche-redaction-obligatoire-1sm.pdf',
    desc: 'Ce qu\'il faut impérativement écrire, chapitre par chapitre (logique, ensembles et applications, fonctions, suites), avec des modèles rédigés.',
  },
  {
    date: '2026-10-02',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'QCM de révision n°2 — Limites, continuité & fonctions réciproques : deux sujets (A et B), interactifs et corrigés',
    lien: '/terminale/limites#qcm',
    desc: '20 questions par sujet sur les chapitres 1 et 2 (racines n-ièmes, arctangente) : méthodes, pièges et contre-exemples — en version interactive (note sur 20) et en PDF avec corrigé justifié.',
  },
  {
    date: '2026-10-02',
    type: 'document',
    niveau: 'Première SM',
    titre: 'Logique — deux QCM de révision interactifs (20 questions chacun) avec corrigés détaillés',
    lien: '/premiere/logique#qcm',
    desc: 'QCM n°1 « Cours sous tension » et QCM n°2 « Méthodes et pièges » : note sur 20 et corrigé justifié de chaque question, en ligne et en PDF.',
  },
  {
    date: '2026-10-02',
    type: 'document',
    niveau: 'Première SM',
    titre: 'Logique — premiers corrigés détaillés : Série n°1 et Série Raisonnements',
    lien: '/premiere/logique',
    desc: 'Corrigés rédigés pas à pas — parties 1 et 2 en ligne (Série n°1 : exercices 1 à 12 ; Série Raisonnements : exercices 1 à 12). Les autres parties arrivent prochainement.',
  },
  {
    date: '2026-09-27',
    type: 'document',
    niveau: 'Terminale SM',
    titre: '8 nouveaux entraînements pour le DS1 — sujets & corrigés détaillés',
    lien: '/devoirs-surveilles?niveau=terminale',
    desc: 'Entraînements N°3, 4, 6, 7, 8, 9, 10 et 11 — DS1 (2 h chacun) : limites, continuité, TVI, bijection et réciproque, racines n-ièmes, Arctangente.',
  },
  {
    date: '2026-09-26',
    type: 'autre',
    niveau: '',
    titre: 'Nouvel espace « Devoirs & Examens » — 15 années d\'archives',
    lien: '/devoirs-surveilles',
    desc: 'DS, devoirs à la maison, examens blancs et examens nationaux réunis dans 4 pages : filtre par niveau, recherche par chapitre, accès direct par année.',
  },
  {
    date: '2026-09-24',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'Racines n-ièmes et Arctangente — chapitre complet',
    lien: '/terminale/racines-arctan',
    desc: 'Fonctions réciproques : cours approfondi, fiche résumé, QCM de 21 questions, exercices et problèmes corrigés.',
  },
  {
    date: '2026-09-24',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'DS d\'entraînement n°1 et n°2 — sujets & corrigés détaillés',
    lien: '/devoirs-surveilles?niveau=terminale',
    desc: 'DS 1 : continuité, fonction réciproque, Arctangente (2 h). DS 2 : limites et continuité, Arctangente (4 h).',
  },
  {
    date: '2026-09-23',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'Fiche — La rédaction obligatoire en Terminale Sciences Mathématiques',
    lien: '/pdf/terminale/fiche-redaction-obligatoire-sm.pdf',
    desc: 'Ce qu\'il faut impérativement écrire, chapitre par chapitre, pour obtenir tous les points à l\'examen national.',
  },
  {
    date: '2026-09-23',
    type: 'document',
    niveau: 'Terminale PC',
    titre: 'Fiche — La rédaction obligatoire en Terminale Sciences Expérimentales',
    lien: '/pdf/terminale-pc/fiche-redaction-obligatoire-se.pdf',
    desc: 'Les attendus de rédaction chapitre par chapitre, d\'après le cadre de référence de l\'examen national.',
  },
  {
    date: '2026-09-23',
    type: 'document',
    niveau: 'Première SM',
    titre: 'Logique — 2 nouvelles séries d\'exercices : quantificateurs & types de raisonnement',
    lien: '/premiere/logique',
    desc: 'Série n°1 (quantificateurs, négation, CN/CS, valeurs de vérité) et série sur les raisonnements (absurde, contraposée, récurrence…).',
  },
  {
    date: '2026-09-04',
    type: 'video',
    niveau: 'Terminale SM',
    titre: 'Vidéos — Corrections animées : limite (racines cubiques) & prolongement par continuité',
    lien: '/terminale/limites#video-corrections',
    desc: 'Deux corrections en vidéo courte : calcul d\'une limite avec racines cubiques à l\'infini et prolongement par continuité en 0.',
  },
  {
    date: '2026-09-02',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'Limites et continuité — Cours, fiche, QCM, exercices & planches',
    lien: '/terminale/limites',
    desc: 'Nouveaux documents du chapitre : cours, fiche de révision, QCM, exercices d\'applications et 3 planches.',
  },
  {
    date: '2026-09-01',
    type: 'video',
    niveau: 'Terminale SM',
    titre: 'Vidéo — Le théorème des valeurs intermédiaires (T.V.I) en animation',
    lien: '/terminale/limites#video-tvi',
    desc: 'Nouvelle vidéo pédagogique animée pour comprendre et visualiser le T.V.I.',
  },
  {
    date: '2026-09-01',
    type: 'document',
    niveau: 'Terminale SM',
    titre: 'Théorème de Rolle & théorème des accroissements finis',
    lien: '/terminale/rolle-taf',
    desc: 'Cours complet, méthodes-types et exercices corrigés.',
  },
];
