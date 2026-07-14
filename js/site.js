(function () {
  'use strict';

  // [FILL IN] Calendly / booking link — every "Book" button opens this.
  var CTA_URL = '[FILL IN: Calendly 15-minute call link]';

  function book() {
    if (CTA_URL && CTA_URL.indexOf('[FILL IN') === -1) {
      window.open(CTA_URL, '_blank', 'noopener');
    } else {
      console.warn('[FMT] Set the Calendly booking link (CTA_URL) in js/site.js before launch.');
    }
  }

  document.querySelectorAll('[data-book]').forEach(function (btn) {
    btn.addEventListener('click', book);
  });

  // Mobile menu toggle
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.querySelectorAll('[data-menu-link]').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Lead-magnet form: fake-submit swap (replace with real handler
  // once the [FILL IN] form action is wired up to Formspree/Netlify Forms).
  var leadForm = document.querySelector('[data-lead-form]');
  var leadNote = document.querySelector('[data-lead-note]');
  var leadSent = document.querySelector('[data-lead-sent]');
  if (leadForm && leadSent) {
    leadForm.addEventListener('submit', function (e) {
      var action = leadForm.getAttribute('action') || '';
      if (action.indexOf('[FILL IN') !== -1) {
        e.preventDefault();
        leadForm.hidden = true;
        if (leadNote) leadNote.hidden = true;
        leadSent.hidden = false;
      }
      // Once a real action URL is set, let the form submit normally.
    });
  }
})();
