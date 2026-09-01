/* ══════════════════════════════════════════════════════════════════
   MathsElites — NOUVEAUTÉS (nouveaux documents & vidéos)
   ------------------------------------------------------------------
   C'EST LE SEUL FICHIER À MODIFIER pour annoncer un ajout aux élèves.

   Ce fichier alimente :
     • la page « ✨ Nouveautés » (/nouveautes) — la liste consultable
     • la pastille « ✨ N » dans le menu (nombre d'ajouts pas encore vus
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
//   📄 [Titre du document ou de la vidéo]
//   🎓 Niveau : [Terminale SM / Première SM / Prépas]
//   👉 À consulter ici : https://mathselites.com[lien, ex. /terminale/ds-2026]
//
//   Bon travail 💪
//
// Variante courte :
//   🆕 Nouveau DS de Terminale SM en ligne 👉 https://mathselites.com/terminale/ds-2026

// ── Liste des nouveautés (la plus récente EN HAUT) ────────────────
export const nouveautes = [
  // ↓↓↓ AJOUTEZ VOS NOUVELLES ENTRÉES ICI ↓↓↓
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
