/* Endpoint JSON lu par public/nouveautes-badge.js pour afficher la
   pastille « ✨ N » (nombre d'ajouts non encore vus). Généré au build
   à partir de src/nouveautes.mjs. */
import { nouveautes } from '../nouveautes.mjs';

export function GET() {
  const items = [...nouveautes]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((it) => ({ date: it.date, titre: it.titre }));
  const latest = items.length ? items[0].date : '';
  const body = JSON.stringify({ latest, count: items.length, items });
  return new Response(body, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
