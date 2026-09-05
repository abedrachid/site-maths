/* ────────────────────────────────────────────────────────────
   MathsElites — Accès aux vidéos (verrou souple + Brevo)
   Même principe que corriges-gate.js, appliqué aux vidéos.

   Tant que le visiteur n'a pas confirmé son email, un clic sur une
   vignette vidéo (« cliquer pour lire », voir video-facade.js) —
   ou toute tentative de lecture directe d'une <video> — ouvre un
   encart d'inscription au lieu de lancer la vidéo. À la validation,
   l'email est envoyé à Brevo (qui renvoie un lien de confirmation) ;
   l'accès se débloque quand le visiteur clique ce lien et atterrit
   sur /acces-corriges/.

   ── ACCÈS PARTAGÉ ──────────────────────────────────────────────
   On réutilise VOLONTAIREMENT la même clé de stockage, le même
   formulaire Brevo et la même page de confirmation que les corrigés :
   une seule inscription débloque à la fois les corrigés ET les vidéos.

   ── CONFIGURATION ──────────────────────────────────────────────
   ACTIVE_PATHS : pages où le verrou s'applique. [] = tout le site ;
   ex. ['/terminale/limites'] pour se limiter à un chapitre.
   ──────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // ─── Configuration (identique aux corrigés → accès unifié) ───
  var BREVO_ACTION = 'https://5b727d43.sibforms.com/serve/MUIFAEAP0mOiMqizpRv7UtZw0G6bay8HfMgkXESj296-Q-bb2dsqxDZy5kJbK6w7uYb4hIN4lyLA0gFZcWg3NlBntL89PlvHtzA3iLNaS43FgntD_lgUfMTJU0QJMTDMJfQDq9Ygj9GfIZSq-TFyRCYwqtBQVJRd1ktR2HIxaotYdePoQJV06s1udPzxH1GqclxCXsz9zTqnnUJ2eg==';
  var EMAIL_FIELD = 'EMAIL';
  var ACTIVE_PATHS = [];                 // [] = tout le site
  var STORAGE_KEY = 'me-corriges-ok';    // MÊME clé que les corrigés
  var ACCESS_DAYS = 7;                   // durée d'accès (jours). 0 = illimité.
  var CONFIRM_PATH = '/acces-corriges';  // page de confirmation Brevo

  // ─── État (avec expiration) ───
  function isUnlocked() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (!v) return false;
      if (v === 'unlimited') return true;
      var t = parseInt(v, 10);
      if (!t || isNaN(t)) return false;
      if (Date.now() < t) return true;
      localStorage.removeItem(STORAGE_KEY);
      return false;
    } catch (e) { return false; }
  }
  function setUnlocked() {
    try {
      if (ACCESS_DAYS && ACCESS_DAYS > 0) {
        localStorage.setItem(STORAGE_KEY, String(Date.now() + ACCESS_DAYS * 86400000));
      } else {
        localStorage.setItem(STORAGE_KEY, 'unlimited');
      }
    } catch (e) {}
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

  // ─── Styles (injectés une fois) ───
  function ensureStyle() {
    if (document.getElementById('me-vg-style')) return;
    var st = document.createElement('style');
    st.id = 'me-vg-style';
    st.textContent = [
      // Cadenas sur les vignettes verrouillées.
      '.me-vg-locked .me-vfacade{position:relative;}',
      '.me-vg-locked .me-vfacade::after{content:"🔒";position:absolute;top:.55rem;right:.7rem;',
      'font-size:1rem;line-height:1;background:rgba(9,17,28,.72);color:#fff;',
      'padding:.28rem .4rem;border-radius:8px;pointer-events:none;}',
      // Encart d'inscription.
      '#me-vg-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;',
      'justify-content:center;padding:1rem;background:rgba(9,17,28,.55);',
      'backdrop-filter:blur(2px);}',
      '#me-vg-card{width:100%;max-width:420px;background:var(--sl-color-bg,#fff);',
      'color:var(--sl-color-text,#1f2733);border:1px solid var(--sl-color-gray-5,#c0ccd9);',
      'border-radius:16px;padding:1.5rem 1.5rem 1.35rem;box-shadow:0 24px 60px rgba(0,0,0,.35);',
      'font-family:inherit;}',
      '#me-vg-card h3{margin:.1rem 0 .5rem;font-size:1.25rem;}',
      '#me-vg-card p{margin:0 0 1rem;font-size:.92rem;line-height:1.5;color:var(--sl-color-gray-2,#5b6472);}',
      '#me-vg-card input[type=email]{width:100%;box-sizing:border-box;padding:.7rem .85rem;',
      'font-size:1rem;border:1px solid var(--sl-color-gray-5,#c0ccd9);border-radius:9px;',
      'background:var(--sl-color-bg,#fff);color:inherit;margin-bottom:.7rem;}',
      '#me-vg-card input[type=email]:focus{outline:2px solid #7c3aed;outline-offset:1px;border-color:#7c3aed;}',
      '#me-vg-btn{width:100%;padding:.75rem 1rem;font-size:1rem;font-weight:700;cursor:pointer;',
      'color:#fff;background:#0c2340;border:0;border-radius:9px;transition:background .15s;}',
      '#me-vg-btn:hover{background:#123156;}',
      '#me-vg-btn:disabled{opacity:.6;cursor:default;}',
      '#me-vg-note{margin:.8rem 0 0;font-size:.72rem;color:var(--sl-color-gray-3,#8891a5);}',
      '#me-vg-later{display:block;margin:.7rem auto 0;background:none;border:0;cursor:pointer;',
      'color:var(--sl-color-gray-3,#8891a5);font-size:.82rem;text-decoration:underline;}',
      '#me-vg-msg{margin:.2rem 0 0;font-size:.85rem;min-height:1.1em;}',
      '#me-vg-msg.ok{color:#15803d;}#me-vg-msg.err{color:#b91c1c;}'
    ].join('');
    document.head.appendChild(st);
  }

  function markLockState() {
    var root = document.documentElement;
    if (isUnlocked() || !onActivePage()) {
      root.classList.remove('me-vg-locked');
    } else {
      ensureStyle();
      root.classList.add('me-vg-locked');
    }
  }

  // ─── Envoi de l'email à Brevo (déclenche l'email de confirmation) ───
  function submitToBrevo(email) {
    try {
      var sink = document.createElement('iframe');
      sink.name = 'me-vg-brevo-sink';
      sink.style.display = 'none';
      document.body.appendChild(sink);

      var f = document.createElement('form');
      f.method = 'POST';
      f.action = BREVO_ACTION;
      f.target = 'me-vg-brevo-sink';
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
  function closeOverlay() {
    var o = document.getElementById('me-vg-overlay');
    if (o) o.remove();
  }

  function openOverlay() {
    ensureStyle();
    if (document.getElementById('me-vg-overlay')) return;

    var ov = document.createElement('div');
    ov.id = 'me-vg-overlay';
    ov.innerHTML =
      '<div id="me-vg-card" role="dialog" aria-modal="true" aria-labelledby="me-vg-title">' +
      '<h3 id="me-vg-title">🎬 Vidéos réservées</h3>' +
      '<p>Entrez votre adresse email : vous recevrez un <b>lien de confirmation</b>. ' +
      'En cliquant dessus, les vidéos <b>et</b> les corrigés se débloquent.</p>' +
      '<input type="email" id="me-vg-email" placeholder="votre@email.com" autocomplete="email" inputmode="email" />' +
      '<button id="me-vg-btn" type="button">Recevoir le lien d\'accès</button>' +
      '<p id="me-vg-msg" aria-live="polite"></p>' +
      '<p id="me-vg-note">Aucune donnée n\'est partagée. Vous pourrez vous désinscrire à tout moment via l\'email reçu.</p>' +
      '<button id="me-vg-later" type="button">Plus tard</button>' +
      '</div>';
    document.body.appendChild(ov);

    var email = document.getElementById('me-vg-email');
    var btn = document.getElementById('me-vg-btn');
    var msg = document.getElementById('me-vg-msg');
    email.focus();

    ov.addEventListener('click', function (e) { if (e.target === ov) closeOverlay(); });
    document.getElementById('me-vg-later').addEventListener('click', closeOverlay);

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
      // Double opt-in : on NE débloque PAS ici. L'accès s'active seulement
      // quand l'utilisateur clique le lien reçu par email (page /acces-corriges).
      btn.textContent = 'Email envoyé ✓';
      msg.className = 'ok';
      msg.innerHTML = '📩 Un email de confirmation vient de vous être envoyé.<br>'
        + 'Ouvrez-le et cliquez sur le lien pour débloquer les vidéos '
        + '(pensez à vérifier vos spams).';
      document.getElementById('me-vg-later').textContent = 'Fermer';
    }

    btn.addEventListener('click', submit);
    email.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  }

  // ─── Interception du clic sur une vignette vidéo (phase capture) ───
  var clickBound = false;
  function bindClickGuard() {
    if (clickBound) return;
    clickBound = true;
    document.addEventListener('click', function (e) {
      if (isUnlocked() || !onActivePage()) return;
      var facade = e.target && e.target.closest ? e.target.closest('.me-vfacade') : null;
      if (facade) {
        e.preventDefault();
        e.stopPropagation();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        if (e.isTrusted) openOverlay();
      }
    }, true); // capture : passe AVANT le gestionnaire de la vignette
  }

  // ─── Filet de sécurité : bloque toute lecture directe d'une <video> ───
  // (vidéos sans poster, vignette non appliquée, ou lecture programmée).
  var playBound = false;
  function bindPlayGuard() {
    if (playBound) return;
    playBound = true;
    document.addEventListener('play', function (e) {
      if (isUnlocked() || !onActivePage()) return;
      var v = e.target;
      if (!v || v.tagName !== 'VIDEO') return;
      try {
        v.pause();
        v.removeAttribute('autoplay');
        if (v.currentTime) v.currentTime = 0;
      } catch (err) {}
      openOverlay();
    }, true); // capture : « play » ne bulle pas, mais est capté ici
  }

  // ─── Initialisation ───
  function init() {
    // Page de confirmation Brevo : on active l'accès (par sécurité, en plus
    // de corriges-gate.js) puis on ne verrouille rien.
    if (location.pathname.replace(/\/+$/, '') === CONFIRM_PATH) {
      setUnlocked();
      markLockState();
      return;
    }
    markLockState();
    if (isUnlocked()) return;
    bindClickGuard();
    bindPlayGuard();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  document.addEventListener('astro:page-load', init);
})();
