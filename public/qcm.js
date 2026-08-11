/* ────────────────────────────────────────────────────────────
   MathsElites — Moteur de QCM interactif
   Chaque bloc <div class="qcm"> contient des questions
   <div class="qcm-q"> avec des <button class="qcm-opt"> ;
   la bonne réponse porte l'attribut data-correct.
   ──────────────────────────────────────────────────────────── */
(function () {
  function initQcm(qcm) {
    var questions = qcm.querySelectorAll('.qcm-q');
    var submit = qcm.querySelector('.qcm-submit');
    var scoreEl = qcm.querySelector('.qcm-score');

    // Sélection d'une option
    qcm.querySelectorAll('.qcm-opt').forEach(function (opt) {
      opt.setAttribute('type', 'button');
      opt.addEventListener('click', function () {
        if (qcm.dataset.done === '1') return;
        var q = opt.closest('.qcm-q');
        q.querySelectorAll('.qcm-opt').forEach(function (o) {
          o.classList.remove('sel');
        });
        opt.classList.add('sel');
      });
    });

    if (!submit) return;
    submit.setAttribute('type', 'button');

    submit.addEventListener('click', function () {
      // Réinitialisation
      if (qcm.dataset.done === '1') {
        qcm.dataset.done = '';
        qcm.querySelectorAll('.qcm-opt').forEach(function (o) {
          o.classList.remove('sel', 'correct', 'wrong');
        });
        if (scoreEl) scoreEl.textContent = '';
        submit.textContent = 'Valider';
        return;
      }
      // Correction
      var score = 0;
      questions.forEach(function (q) {
        var sel = q.querySelector('.qcm-opt.sel');
        var correct = q.querySelector('.qcm-opt[data-correct]');
        if (correct) correct.classList.add('correct');
        if (sel) {
          if (sel.hasAttribute('data-correct')) score++;
          else sel.classList.add('wrong');
        }
      });
      if (scoreEl) {
        scoreEl.textContent = 'Score : ' + score + ' / ' + questions.length;
        scoreEl.className = 'qcm-score ' + (score === questions.length ? 'is-perfect' : '');
      }
      qcm.dataset.done = '1';
      submit.textContent = '↻ Recommencer';
    });
  }

  function initAll() {
    document.querySelectorAll('.qcm:not([data-init])').forEach(function (q) {
      q.dataset.init = '1';
      initQcm(q);
    });
  }

  document.addEventListener('DOMContentLoaded', initAll);
  // Compatibilité navigation client (Starlight / Astro)
  document.addEventListener('astro:page-load', initAll);
  // Sécurité : si le script est chargé après le DOM
  if (document.readyState !== 'loading') initAll();
})();
