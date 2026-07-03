// Mobile menu toggle
(function() {
  var nav = document.querySelector('nav');
  var toggle = document.querySelector('.nav-toggle');
  if (!nav || !toggle) return;

  toggle.addEventListener('click', function() {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  nav.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    });
  });
})();

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

reveals.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "none";
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
