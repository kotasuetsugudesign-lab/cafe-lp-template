// ========================================
// SALON LP TEMPLATE - JS
// Mobile Menu / Header / Scroll Animation
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
     Elements
  =============================== */
  const header = document.querySelector('.header');
  const toggle = document.getElementById('js-menu-toggle');
  const nav = document.getElementById('js-nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile a');

  /* ===============================
     Mobile Menu Toggle
  =============================== */
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isActive = toggle.classList.toggle('is-active');
      nav.classList.toggle('is-active');
      toggle.setAttribute('aria-expanded', isActive);
    });
  }

  /* ===============================
     Close Menu When Link Clicked
  =============================== */
  if (mobileLinks.length > 0 && toggle && nav) {
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('is-active');
        nav.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ===============================
     Header Scroll Effect
  =============================== */
  if (header) {
    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }

  /* ===============================
     Fade-in Animation
  =============================== */
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    fadeElements.forEach(el => observer.observe(el));
  }

});