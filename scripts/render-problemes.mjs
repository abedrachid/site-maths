/*
  Régénère les champs *Html (formules pré-rendues en SVG) des banques du
  « Problème de la semaine », après avoir modifié ou ajouté des énoncés
  (champs enonce / indice / solution en LaTeX $...$ et $$...$$).

  Prérequis (une seule fois) :  npm install --save-dev mathjax-full
  Utilisation (à la racine du projet) :  node scripts/render-problemes.mjs
*/
import fs from 'node:fs';
import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js';

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const doc = mathjax.document('', {
  InputJax: new TeX({ packages: AllPackages }),
  OutputJax: new SVG({ fontCache: 'none' }),
});
const render = (e, display) => adaptor.outerHTML(doc.convert(e, { display }));
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                     .replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>');
function rm(str) {
  const re = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;
  let out = '', last = 0, m;
  while ((m = re.exec(str))) {
    out += esc(str.slice(last, m.index));
    out += m[1] !== undefined ? render(m[1].trim(), true) : render(m[2].trim(), false);
    last = re.lastIndex;
  }
  out += esc(str.slice(last));
  return '<p>' + out + '</p>';
}

for (const lvl of ['premiere', 'terminale']) {
  const fn = `src/data/problemes-${lvl}.json`;
  const data = JSON.parse(fs.readFileSync(fn, 'utf8'));
  for (const p of data) {
    p.enonceHtml = rm(p.enonce);
    p.indiceHtml = rm(p.indice);
    p.solutionHtml = rm(p.solution);
  }
  fs.writeFileSync(fn, JSON.stringify(data, null, 2));
  console.log(lvl, '→', data.length, 'exercices re-rendus');
}
console.log('Terminé. Relancez « npm run dev » ou « npm run build ».');
