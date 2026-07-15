(function () {
  'use strict';

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

  var leadForm = document.querySelector('[data-lead-form]');
  if (leadForm) {
    leadForm.addEventListener('submit', function (event) {
      var emailInput = leadForm.querySelector('input[type="email"]');
      var email = emailInput ? emailInput.value.trim() : '';

      if (!email) return;

      event.preventDefault();

      var subject = 'AI guide waitlist';
      var body = [
        'Please add me to the waitlist for Demystifying AI for small local businesses.',
        '',
        'Email: ' + email
      ].join('\n');

      window.location.href = 'mailto:shelby@focusmatters.net?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

})();
