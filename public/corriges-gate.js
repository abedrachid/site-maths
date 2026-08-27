/* ────────────────────────────────────────────────────────────
   MathsElites — Accès aux corrigés (verrou souple + Brevo)
   Tant que le visiteur n'a pas laissé son email, l'onglet
   « ✅ Corrections » de la visionneuse est verrouillé : un clic
   ouvre un encart d'inscription. À la validation, l'email est
   envoyé à Brevo (qui envoie l'email de confirmation) et les
   corrigés se débloquent (mémorisé sur l'appareil).

   ── CONFIGURATION ──────────────────────────────────────────────
   BREVO_ACTION : adresse d'envoi du formulaire Brevo (attribut
   « action » du formulaire — déjà renseignée ci-dessous).

   ACTIVE_PATHS : pages où le verrou s'applique. Laissez la valeur
   pilote ['/terminale/limites'] pour tester sur un seul chapitre ;
   mettez [] (crochets vides) pour l'activer sur TOUT le site.
   ──────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // ─── Configuration ───
  var BREVO_ACTION = 'https://5b727d43.sibforms.com/serve/MUIFAEAP0mOiMqizpRv7UtZw0G6bay8HfMgkXESj296-Q-bb2dsqxDZy5kJbK6w7uYb4hIN4lyLA0gFZcWg3NlBntL89PlvHtzA3iLNaS43FgntD_lgUfMTJU0QJMTDMJfQDq9Ygj9GfIZSq-TFyRCYwqtBQVJRd1ktR2HIxaotYdePoQJV06s1udPzxH1GqclxCXsz9zTqnnUJ2eg==';
  var EMAIL_FIELD = 'EMAIL';
  var ACTIVE_PATHS = []; // [] = tout le site ; ex. ['/terminale/limites'] pour limiter
  var STORAGE_KEY = 'me-corriges-ok';
  var CONFIRM_PATH = '/acces-corriges'; // page où Brevo peut rediriger après confirmation

  var CORRIG_RE = /corrig|correction/i;

  // ─── État ───
  function isUnlocked() {
    try { return localStorage.getItem(STORAGE_KEY) === '1'; } catch (e) { return false; }
  }
  function setUnlocked() {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
  }

  function onActivePage() {
    if (!ACTIVE_PATHS || ACTIVE_PATHS.length === 0) return true;
    var p = location.pathname.replace(/\/+$/, '');
    for (var i = 0; i < ACTIVE_PATHS.length; i++) {
      var a = ACTIVE_PATHS[i].replace(/\/+$/, '');
      if (p === a || p.indexOf(a + '/') === 0) return true;
    }
    return false;
  }

  function isCorrigTab(el) {
    if (!el || !el.classList || !el.classList.contains('doc-tab')) return false;
    var src = el.getAttribute('data-src') || '';
    var title = el.getAttribute('data-title') || el.textContent || '';
    return CORRIG_RE.test(src) || CORRIG_RE.test(title);
  }

  // ─── Styles (injectés une fois) ───
  function ensureStyle() {
    if (document.getElementById('me-corriges-style')) return;
    var st = document.createElement('style');
    st.id = 'me-corriges-style';
    st.textContent = [
      '.doc-tab--locked{position:relative;}',
      '.doc-tab--locked::before{content:"🔒 ";}',
      '#me-cg-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;',
      'justify-content:center;padding:1rem;background:rgba(9,17,28,.55);',
      'backdrop-filter:blur(2px);}',
      '#me-cg-card{width:100%;max-width:420px;background:var(--sl-color-bg,#fff);',
      'color:var(--sl-color-text,#1f2733);border:1px solid var(--sl-color-gray-5,#c0ccd9);',
      'border-radius:16px;padding:1.5rem 1.5rem 1.35rem;box-shadow:0 24px 60px rgba(0,0,0,.35);',
      'font-family:inherit;}',
      '#me-cg-card h3{margin:.1rem 0 .5rem;font-size:1.25rem;}',
      '#me-cg-card p{margin:0 0 1rem;font-size:.92rem;line-height:1.5;color:var(--sl-color-gray-2,#5b6472);}',
      '#me-cg-card input[type=email]{width:100%;box-sizing:border-box;padding:.7rem .85rem;',
      'font-size:1rem;border:1px solid var(--sl-color-gray-5,#c0ccd9);border-radius:9px;',
      'background:var(--sl-color-bg,#fff);color:inherit;margin-bottom:.7rem;}',
      '#me-cg-card input[type=email]:focus{outline:2px solid #7c3aed;outline-offset:1px;border-color:#7c3aed;}',
      '#me-cg-btn{width:100%;padding:.75rem 1rem;font-size:1rem;font-weight:700;cursor:pointer;',
      'color:#fff;background:#0c2340;border:0;border-radius:9px;transition:background .15s;}',
      '#me-cg-btn:hover{background:#123156;}',
      '#me-cg-btn:disabled{opacity:.6;cursor:default;}',
      '#me-cg-note{margin:.8rem 0 0;font-size:.72rem;color:var(--sl-color-gray-3,#8891a5);}',
      '#me-cg-later{display:block;margin:.7rem auto 0;background:none;border:0;cursor:pointer;',
      'color:var(--sl-color-gray-3,#8891a5);font-size:.82rem;text-decoration:underline;}',
      '#me-cg-msg{margin:.2rem 0 0;font-size:.85rem;min-height:1.1em;}',
      '#me-cg-msg.ok{color:#15803d;}#me-cg-msg.err{color:#b91c1c;}',
      '.me-cg-lockbadge{position:fixed;left:50%;bottom:1rem;transform:translateX(-50%);z-index:9999;',
      'background:#15803d;color:#fff;padding:.5rem .9rem;border-radius:999px;font-size:.85rem;',
      'box-shadow:0 8px 24px rgba(0,0,0,.25);}'
    ].join('');
    document.head.appendChild(st);
  }

  // ─── Verrouillage visuel des onglets « Corrections » ───
  function applyLocks() {
    if (isUnlocked() || !onActivePage()) return;
    ensureStyle();
    var tabs = document.querySelectorAll('.doc-viewer .doc-tab');
    tabs.forEach(function (t) {
      if (isCorrigTab(t)) t.classList.add('doc-tab--locked');
    });
  }

  function removeLocks() {
    document.querySelectorAll('.doc-tab--locked').forEach(function (t) {
      t.classList.remove('doc-tab--locked');
    });
  }

  // ─── Envoi de l'email à Brevo (déclenche l'email de confirmation) ───
  function submitToBrevo(email) {
    try {
      var sink = document.createElement('iframe');
      sink.name = 'me-brevo-sink';
      sink.style.display = 'none';
      document.body.appendChild(sink);

      var f = document.createElement('form');
      f.method = 'POST';
      f.action = BREVO_ACTION;
      f.target = 'me-brevo-sink';
      f.style.display = 'none';
      function add(n, v) {
        var i = document.createElement('input');
        i.type = 'hidden'; i.name = n; i.value = v; f.appendChild(i);
      }
      add(EMAIL_FIELD, email);
      add('email_address_check', ''); // pot de miel anti-robot : doit rester vide
      add('locale', 'fr');
      document.body.appendChild(f);
      f.submit();
      setTimeout(function () {
        try { f.remove(); sink.remove(); } catch (e) {}
      }, 10000);
    } catch (e) {}
  }

  // ─── Encart d'inscription ───
  var pendingTab = null;

  function closeOverlay() {
    var o = document.getElementById('me-cg-overlay');
    if (o) o.remove();
  }

  function openOverlay(tab) {
    pendingTab = tab || null;
    ensureStyle();
    if (document.getElementById('me-cg-overlay')) return;

    var ov = document.createElement('div');
    ov.id = 'me-cg-overlay';
    ov.innerHTML =
      '<div id="me-cg-card" role="dialog" aria-modal="true" aria-labelledby="me-cg-title">' +
      '<h3 id="me-cg-title">🔒 Corrigés réservés</h3>' +
      '<p>Entrez votre adresse email pour débloquer les corrigés du site. ' +
      'Vous recevrez un email de confirmation, et l\'accès reste actif sur cet appareil.</p>' +
      '<input type="email" id="me-cg-email" placeholder="votre@email.com" autocomplete="email" inputmode="email" />' +
      '<button id="me-cg-btn" type="button">Débloquer les corrigés</button>' +
      '<p id="me-cg-msg" aria-live="polite"></p>' +
      '<p id="me-cg-note">Aucune donnée n\'est partagée. Vous pourrez vous désinscrire à tout moment via l\'email reçu.</p>' +
      '<button id="me-cg-later" type="button">Plus tard</button>' +
      '</div>';
    document.body.appendChild(ov);

    var email = document.getElementById('me-cg-email');
    var btn = document.getElementById('me-cg-btn');
    var msg = document.getElementById('me-cg-msg');
    email.focus();

    ov.addEventListener('click', function (e) { if (e.target === ov) closeOverlay(); });
    document.getElementById('me-cg-later').addEventListener('click', closeOverlay);

    function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

    function submit() {
      var v = (email.value || '').trim();
      msg.className = '';
      if (!validEmail(v)) {
        msg.className = 'err';
        msg.textContent = 'Merci d\'entrer une adresse email valide.';
        email.focus();
        return;
      }
      btn.disabled = true;
      submitToBrevo(v);
      setUnlocked();
      removeLocks();
      msg.className = 'ok';
      msg.textContent = 'Merci ! Un email de confirmation vous a été envoyé. Accès débloqué ✅';
      // Débloque et ouvre le corrigé demandé, puis ferme l'encart.
      setTimeout(function () {
        closeOverlay();
        if (pendingTab && document.body.contains(pendingTab)) {
          try { pendingTab.click(); } catch (e) {}
        }
        showBadge('Corrigés débloqués ✅');
      }, 1400);
    }

    btn.addEventListener('click', submit);
    email.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  }

  function showBadge(text) {
    var b = document.createElement('div');
    b.className = 'me-cg-lockbadge';
    b.textContent = text;
    document.body.appendChild(b);
    setTimeout(function () { try { b.remove(); } catch (e) {} }, 3000);
  }

  // ─── Interception du clic sur l'onglet « Corrections » (phase capture) ───
  var handlerBound = false;
  function bindClickGuard() {
    if (handlerBound) return;
    handlerBound = true;
    document.addEventListener('click', function (e) {
      if (isUnlocked() || !onActivePage()) return;
      var tab = e.target && e.target.closest ? e.target.closest('.doc-tab') : null;
      if (tab && isCorrigTab(tab)) {
        e.preventDefault();
        e.stopPropagation();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        openOverlay(tab);
      }
    }, true); // capture : passe AVANT le gestionnaire de la visionneuse
  }

  // ─── Initialisation ───
  function init() {
    // Page de confirmation Brevo : on active l'accès puis on ne verrouille rien.
    if (location.pathname.replace(/\/+$/, '') === CONFIRM_PATH) {
      setUnlocked();
      return;
    }
    if (isUnlocked()) { removeLocks(); return; }
    bindClickGuard();
    applyLocks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  document.addEventListener('astro:page-load', init);
})();
