(function () {
  'use strict';

  var CTA_URL = 'https://calendly.com/focusmatters/15min';

  function book() {
    if (CTA_URL) {
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

})();
