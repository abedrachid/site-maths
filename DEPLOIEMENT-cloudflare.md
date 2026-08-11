# Déployer MathsElites sur Cloudflare Pages

Guide pas à pas pour mettre le site en ligne. Ton site est un projet **Astro/Starlight 100 % statique** : aucun adaptateur, aucun serveur à gérer. Cloudflare Pages est gratuit, avec bande passante illimitée (idéal pour les PDF) et un réseau rapide au Maroc.

Réglages du projet à retenir (tu les réutiliseras partout) :

| Paramètre | Valeur |
|---|---|
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Variable d'environnement | `SITE` = `https://mathselites.com` |
| Node version | `20` (variable `NODE_VERSION` = `20`) |

---

## Avant de commencer : vérifier que le build fonctionne

Sur ta machine, dans le dossier du site, lance :

```bash
npm install
npm run build
```

Tu dois obtenir un dossier `dist/` sans erreur. Si le build échoue en local, corrige avant de déployer (Cloudflare exécute exactement la même commande).

---

## Méthode A — Rapide (glisser-déposer), pour voir le site en ligne aujourd'hui

Aucune connaissance de Git nécessaire. Idéale pour un premier test.

1. Crée un compte gratuit sur https://dash.cloudflare.com (email + mot de passe).
2. Dans le menu de gauche, va sur **Workers & Pages**.
3. Clique **Create application** → onglet **Pages** → **Upload assets** (téléverser des fichiers).
4. Donne un nom au projet, par exemple `maths-expert`.
5. Fais glisser le **contenu du dossier `dist/`** (pas le dossier lui-même — son contenu : `index.html`, `_astro/`, `pdf/`, etc.) dans la zone de dépôt.
6. Clique **Deploy**. En quelques secondes, ton site est en ligne à une adresse du type `https://maths-expert.pages.dev`.

Limite de cette méthode : à chaque modification du site, tu dois refaire `npm run build` puis re-glisser le dossier `dist/`. Pour des mises à jour automatiques, passe à la méthode B.

> Important avec cette méthode : comme il n'y a pas de build côté Cloudflare, la variable `SITE` n'est pas lue. Fais donc le build en la définissant toi-même :
> - Windows (PowerShell) : `$env:SITE="https://mathselites.com"; npm run build`
> - macOS/Linux : `SITE=https://mathselites.com npm run build`

---

## Méthode B — Recommandée (Git + GitHub), déploiement automatique

Une fois configurée, chaque fois que tu modifies le site et que tu « pousses » sur GitHub, Cloudflare rebuild et met le site à jour tout seul.

### 1. Mettre le projet sur GitHub

Crée un compte sur https://github.com si tu n'en as pas, puis crée un dépôt vide (par ex. `site-maths`), **sans** README ni .gitignore (tu en as déjà un).

Ensuite, dans le dossier du site :

```bash
git init
git add .
git commit -m "Version initiale du site MathsElites"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/site-maths.git
git push -u origin main
```

Remplace `TON-COMPTE` par ton nom d'utilisateur GitHub. Grâce au `.gitignore`, les dossiers lourds (`node_modules/`, `dist/`, `.venv/`, `.astro/`) ne sont pas envoyés — c'est normal et voulu.

### 2. Connecter Cloudflare au dépôt

1. Sur https://dash.cloudflare.com → **Workers & Pages** → **Create application** → onglet **Pages** → **Connect to Git**.
2. Autorise Cloudflare à accéder à ton GitHub, puis choisis le dépôt `site-maths` → **Begin setup**.
3. Dans les réglages de build :
   - **Framework preset** : `Astro`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
4. Déplie **Environment variables (Variables d'environnement)** et ajoute :
   - `SITE` = `https://mathselites.com`
   - `NODE_VERSION` = `20`
5. Clique **Save and Deploy**. Cloudflare installe les dépendances, lance le build et publie le site sur `https://site-maths.pages.dev`.

### 3. Mises à jour

Désormais, pour publier une modification :

```bash
git add .
git commit -m "Description de ma modification"
git push
```

Cloudflare détecte le push et redéploie automatiquement en 1–2 minutes.

---

## Brancher ton domaine mathselites.com

Le `.pages.dev` fonctionne tout de suite. Pour utiliser ton vrai domaine :

1. Enregistre d'abord `mathselites.com` chez un registrar marocain agréé (via l'ANRT — ex. Genious, HB Maroc). Cloudflare ne vend pas les `.ma`.
2. Dans ton projet Cloudflare Pages → onglet **Custom domains** → **Set up a custom domain** → saisis `mathselites.com`.
3. Cloudflare t'indique les enregistrements DNS à configurer. Deux cas :
   - **Le plus simple** : transférer la gestion DNS du domaine vers Cloudflare (Cloudflare te donne 2 « nameservers » à coller chez ton registrar). Le certificat HTTPS est alors automatique.
   - **Sinon** : ajouter chez ton registrar les enregistrements `CNAME`/`A` fournis par Cloudflare.
4. Attends la propagation DNS (de quelques minutes à quelques heures). Le HTTPS (cadenas) est activé automatiquement et gratuitement.

Pense à garder `SITE` = `https://mathselites.com` : c'est cette valeur qui rend corrects ton `sitemap.xml` (référencement Google) et les aperçus de partage sur les réseaux sociaux.

---

## En cas de souci

- **Le build échoue sur Cloudflare mais marche en local** : vérifie que `NODE_VERSION` = `20` est bien défini dans les variables d'environnement.
- **Les formules de maths ou le compteur PDF ne s'affichent pas** : vide le cache du navigateur (Ctrl+F5). KaTeX et le compteur sont chargés via des scripts sur toutes les pages.
- **Erreur 404 sur la page d'accueil** : elle doit être servie à la racine `/` (on a réglé la config en locale « root »).
