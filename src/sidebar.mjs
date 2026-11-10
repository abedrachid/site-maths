/* ═══════════════════════════════════════════════════════════════
   MATHSELITES — Navigation latérale (4 entrées principales)
   ---------------------------------------------------------------
   Première Bac SM · Terminale · Classes Prépas · Ressources.
   Un seul lien par chapitre : les documents du chapitre (cours, fiche,
   séries, corrigés, QCM) sont dans les onglets de la page du chapitre.
   Pour ajouter un chapitre : ajouter UNE ligne dans la liste du niveau.
   ═══════════════════════════════════════════════════════════════ */

const l = (label, link) => ({ label, link });
const g = (label, items, collapsed = true) => ({ label, collapsed, items });

export const sidebar = [
  g('Première Bac SM', [
    l('Présentation', '/premiere/'),
    l('Problème de la semaine', '/premiere/probleme-de-la-semaine'),
    l('Logique et raisonnement', '/premiere/logique'),
    l('Dénombrement', '/premiere/denombrement'),
    l('Arithmétique', '/premiere/arithmetique'),
    l('Calcul trigonométrique', '/premiere/calcul-trigonometrique'),
    l('Ensembles et applications', '/premiere/ensembles-applications'),
    l('Les symboles Σ et Π', '/premiere/sommes-produits'),
  ], false),

  g('Terminale', [
    g('Terminale Sciences Maths', [
      l('Présentation', '/terminale/'),
      l('Problème de la semaine', '/terminale/probleme-de-la-semaine'),
      g('Révision de Première', [
        l('Vue d’ensemble', '/terminale/revision-premiere'),
        l('I · Calcul algébrique', '/terminale/revision-calcul-algebrique'),
        l('II · Calcul des limites', '/terminale/revision-limites'),
        l('III · Dérivation', '/terminale/revision-derivation'),
        l('IV · Étude de fonctions', '/terminale/revision-etude-fonctions'),
        l('V · Neuf exercices originaux', '/terminale/revision-exercices-originaux'),
      ]),
      l('Calcul trigonométrique', '/terminale/revision-calcul-trigonometrique'),
      l('Rédaction mathématique', '/terminale/redaction-mathematique'),
      l('Limites et continuité', '/terminale/limites'),
      l('Racines n-ièmes et arctangente', '/terminale/racines-arctan'),
      l('Dérivabilité', '/terminale/derivabilite'),
      l('Rolle, T.A.F et I.A.F', '/terminale/rolle-taf'),
      l('Primitives', '/terminale/primitives'),
      l('Suites numériques', '/terminale/suites'),
      l('Dénombrement', '/terminale/denombrement'),
      l('Probabilités', '/terminale/probabilites'),
      l('Problèmes de synthèse', '/terminale/problemes-bacs-blancs'),
    ], false),
    g('Terminale PC', [
      l('Présentation', '/terminale-pc/'),
      l('Limites et continuité', '/terminale-pc/limites-continuite'),
      l('Dérivabilité et étude de fonctions', '/terminale-pc/derivabilite-etude-fonctions'),
      l('Suites numériques', '/terminale-pc/suites'),
      l('Fonction logarithme', '/terminale-pc/logarithme'),
      l('Fonction exponentielle', '/terminale-pc/exponentielle'),
      l('Calcul intégral', '/terminale-pc/calcul-integral'),
      l('Équations différentielles', '/terminale-pc/equations-differentielles'),
      l('Nombres complexes', '/terminale-pc/nombres-complexes'),
      l('Dénombrement et probabilités', '/terminale-pc/probabilites'),
    ]),
  ], false),

  g('Classes Prépas', [
    l('Présentation', '/prepas/'),
    g('Entrée en prépa d’excellence', [
      l('Concours d’entrée MPSI', '/prepas/concours-entree-excellence'),
      l('Préparation aux lycées d’excellence', '/prepas/preparation-lycees-excellence'),
    ]),
    g('MPSI · MP', [
      l('Algèbre et analyse', '/prepas/mpsi-algebre'),
      l('Géométrie et espaces vectoriels', '/prepas/mpsi-geometrie'),
      l('Probabilités et statistiques', '/prepas/mpsi-proba'),
      l('Ensembles et applications', '/prepas/ensembles-applications'),
      l('Continuité, dérivabilité et intégrales', '/prepas/cours-continuite-derivabilite'),
      l('Atelier du chercheur', '/prepas/atelier-chercheur'),
      l('Problèmes et stage Sup/Spé', '/prepas/problemes-stage-sup'),
    ]),
    g('PCSI · PC', [
      l('Analyse et intégration', '/prepas/pcsi-analyse'),
      l('Algèbre linéaire', '/prepas/pcsi-algebre'),
    ]),
  ], false),

  g('Ressources', [
    g('Devoirs et examens', [
      l('Devoirs surveillés', '/devoirs-surveilles'),
      l('Devoirs à la maison', '/devoirs-maison'),
      l('Examens blancs', '/examens-blancs'),
      l('Examens nationaux', '/examens-nationaux'),
    ], false),
    g('Concours et compétitions', [
      l('Concours', '/concours'),
      l('Olympiades', '/olympiades'),
      l('Compétitions mathématiques', '/competitions'),
    ]),
    g('Stages et cours accélérés', [
      l('Vue d’ensemble', '/stages'),
      l('Première Bac SM', '/stages/premiere-sm'),
      l('Terminale SM', '/stages/terminale-sm'),
      l('Prépas MPSI', '/stages/mpsi'),
    ]),
    l('Problème de la semaine', '/probleme-de-la-semaine'),
    l('Outils interactifs', '/outils/'),
    l('Nouveautés', '/nouveautes'),
    l('À propos', '/a-propos'),
    l('Contact', '/contact'),
  ], false),
];
