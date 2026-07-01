/**
 * animations.js — Scroll reveal and animation system
 */

const Animations = {
  /**
   * Initialize scroll reveal for elements with .reveal class
   */
  initScrollReveal() {
    const reveals = Utils.$$('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    reveals.forEach((el) => observer.observe(el));
  },

  /**
   * Initialize staggered animations for child elements
   */
  initStagger(selector, staggerDelay = 100) {
    const elements = Utils.$$(selector);
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * staggerDelay}ms`;
    });
  },

  /**
   * Initialize all animations
   */
  init() {
    this.initScrollReveal();
  },
};

window.Animations = Animations;
