# Compteurs de visiteurs — mise en service

Deux composants ont été ajoutés au site :

1. **Nombre total de visiteurs** — fonctionne **immédiatement**, rien à
   configurer. Utilise le service gratuit Abacus (comme le compteur de
   téléchargements PDF déjà en place).
2. **Visiteurs en ligne en temps réel** — nécessite de déployer **une
   seule fois** le petit Worker Cloudflare contenu dans ce dossier, puis
   de coller son adresse dans le site.

Les deux s'affichent dans une barre discrète en bas de page :
`👁️ 1 234 visiteurs   ● 5 en ligne`.

---

## 1. Compteur total — déjà prêt

Le fichier `public/site-stats.js` a été ajouté et branché dans
`astro.config.mjs`. Un visiteur est compté **une fois par jour** (réglage
`COUNT_MODE = 'unique'`). Pour compter chaque page vue à la place, ouvrez
`public/site-stats.js` et mettez `COUNT_MODE = 'views'`.

Rien d'autre à faire : au prochain déploiement du site, le total s'affiche.

---

## 2. Visiteurs en ligne — déployer le Worker (une seule fois)

Le Worker vit **à part** du site (le site reste 100 % statique). Il utilise
un **Durable Object avec stockage SQLite**, disponible sur le **plan gratuit**
Cloudflare.

### Étapes

1. Installez Node 20 si ce n'est pas déjà fait, puis ouvrez un terminal
   **dans ce dossier** `presence-worker/`.

2. Connectez-vous à Cloudflare (ouvre le navigateur) :

   ```bash
   npx wrangler login
   ```

3. Déployez :

   ```bash
   npx wrangler deploy
   ```

   À la fin, Wrangler affiche l'adresse publique du Worker, du type :

   ```
   https://mathselites-presence.VOTRE-SOUS-DOMAINE.workers.dev
   ```

   **Copiez cette adresse.**

4. Ouvrez `public/site-stats.js` (dans le site) et collez l'adresse dans
   la ligne de configuration, **sans slash final** :

   ```js
   var ONLINE_API = 'https://mathselites-presence.VOTRE-SOUS-DOMAINE.workers.dev';
   ```

5. (Recommandé) Dans `presence-worker/src/index.js`, vérifiez que la liste
   `ALLOWED_ORIGINS` contient bien votre domaine de production
   (`https://mathselites.com`). Si vous testez d'abord sur l'adresse
   `.pages.dev`, décommentez / ajoutez-la aussi, puis relancez
   `npx wrangler deploy`.

6. Redéployez le site (Cloudflare Pages) après avoir modifié
   `site-stats.js`. La pastille « ● N en ligne » apparaît alors.

### Bon à savoir

- Tant que `ONLINE_API` est vide, la pastille « en ligne » reste masquée
  et **seul le total** s'affiche — pratique pour mettre le total en ligne
  tout de suite et brancher le temps réel plus tard.
- Chaque onglet ouvert envoie un battement toutes les **30 s** (réglable
  via `HEARTBEAT_MS` dans `site-stats.js` ; `60000` = deux fois moins de
  requêtes). Les onglets en arrière-plan ne comptent pas.
- **Budget gratuit** : 100 000 requêtes/jour. À 30 s, un visiteur actif en
  continu consomme ~120 requêtes/heure. Largement suffisant pour un trafic
  scolaire ; passez à 60 s si votre audience grandit fortement.
- Aucune donnée personnelle : seulement un identifiant de session
  aléatoire et temporaire, oublié dès qu'un visiteur quitte le site.

### Tester rapidement

Après déploiement, cette commande doit renvoyer `{"online":1}` :

```bash
curl -X POST https://mathselites-presence.VOTRE-SOUS-DOMAINE.workers.dev/ping \
  -H "Content-Type: application/json" -d "{\"id\":\"test\"}"
```
