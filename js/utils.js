/**
 * utils.js — Utility functions
 */

const Utils = {
  /**
   * Select a single element
   */
  $(selector, parent = document) {
    return parent.querySelector(selector);
  },

  /**
   * Select all elements
   */
  $$(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
  },

  /**
   * Debounce function execution
   */
  debounce(fn, delay = 250) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  },

  /**
   * Throttle function execution
   */
  throttle(fn, limit = 100) {
    let inThrottle = false;
    return (...args) => {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  /**
   * Check if element is in viewport
   */
  isInViewport(el, threshold = 0.1) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - threshold) &&
      rect.bottom >= 0
    );
  },

  /**
   * Smooth scroll to element
   */
  scrollTo(selector) {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },
};

// Make available globally
window.Utils = Utils;
