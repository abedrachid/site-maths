/* ────────────────────────────────────────────────────────────
   MathsElites — Worker « visiteurs en ligne » (temps réel)
   Cloudflare Worker + Durable Object (backend SQLite, plan GRATUIT).

   Principe : chaque onglet ouvert envoie un « battement de cœur »
   (POST /ping) toutes les 30 s avec un identifiant de session
   anonyme. Le Durable Object garde en mémoire les sessions vues
   dans la dernière minute et renvoie leur nombre : c'est le
   nombre de visiteurs actuellement en ligne.

   Aucune donnée personnelle : uniquement un identifiant aléatoire
   temporaire, oublié dès qu'un visiteur cesse d'émettre.
   ──────────────────────────────────────────────────────────── */

// Domaines autorisés à interroger le Worker (protection CORS).
// AJOUTEZ ici votre domaine .pages.dev si vous testez dessus.
const ALLOWED_ORIGINS = [
  'https://mathselites.com',
  'https://www.mathselites.com',
  // 'https://site-maths.pages.dev',
];

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.indexOf(origin) !== -1 ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (url.pathname === '/ping' || url.pathname === '/online') {
      // Une seule instance globale du Durable Object agrège tout le monde.
      const id = env.PRESENCE.idFromName('global');
      const stub = env.PRESENCE.get(id);
      const resp = await stub.fetch(request);
      const body = await resp.text();
      return new Response(body, {
        status: resp.status,
        headers: Object.assign({ 'Content-Type': 'application/json' }, corsHeaders(origin)),
      });
    }

    return new Response(JSON.stringify({ error: 'not found' }), {
      status: 404,
      headers: Object.assign({ 'Content-Type': 'application/json' }, corsHeaders(origin)),
    });
  },
};

// Fenêtre d'activité : une session est « en ligne » si vue dans les
// 60 dernières secondes (2× l'intervalle des battements côté client).
const WINDOW_MS = 60000;

export class Presence {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    // id de session -> horodatage du dernier battement (ms).
    this.sessions = new Map();
  }

  prune(now) {
    for (const [key, t] of this.sessions) {
      if (now - t > WINDOW_MS) this.sessions.delete(key);
    }
  }

  async fetch(request) {
    const url = new URL(request.url);
    const now = Date.now();

    if (url.pathname === '/ping' && request.method === 'POST') {
      let sid = '';
      try {
        const b = await request.json();
        sid = String((b && b.id) || '');
      } catch (e) { /* corps absent ou invalide */ }
      if (!sid) sid = crypto.randomUUID();
      this.sessions.set(sid, now);
    }

    this.prune(now);

    return new Response(JSON.stringify({ online: this.sessions.size }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
