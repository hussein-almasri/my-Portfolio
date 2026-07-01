/**
 * navigation.js — Premium navigation behavior
 *
 * Features:
 * - Scroll-based glassmorphism effect
 * - Animated hamburger toggle
 * - Full-screen mobile overlay with staggered animations
 * - Body scroll lock when menu is open
 * - Active section tracking via IntersectionObserver
 * - Close on link click, backdrop click, Escape key
 */

const Navigation = {
  navbar: null,
  toggle: null,
  mobileMenu: null,
  backdrop: null,
  isOpen: false,
  lastScrollY: 0,

  init() {
    this.navbar = Utils.$('#navbar');
    this.toggle = Utils.$('.navbar__toggle');
    this.mobileMenu = Utils.$('#mobile-menu');
    this.backdrop = Utils.$('.navbar__mobile-backdrop');

    if (!this.navbar || !this.toggle || !this.mobileMenu) return;

    // Toggle mobile menu
    this.toggle.addEventListener('click', () => this.toggleMenu());

    // Close on backdrop click
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.closeMenu());
    }

    // Close on mobile link click
    Utils.$$('.navbar__mobile-link').forEach((link) => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close on nav link click (desktop — smooth scroll)
    Utils.$$('.navbar__link').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offset = this.navbar.offsetHeight + 16;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
          this.closeMenu();
        }
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.closeMenu();
    });

    // Scroll effect (throttled)
    window.addEventListener('scroll', Utils.throttle(() => this.onScroll(), 50), { passive: true });

    // Active section tracking
    this.initActiveLinks();
  },

  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  },

  openMenu() {
    this.isOpen = true;
    this.mobileMenu.setAttribute('aria-hidden', 'false');
    this.toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus first link after animation
    setTimeout(() => {
      const firstLink = Utils.$('.navbar__mobile-link', this.mobileMenu);
      if (firstLink) firstLink.focus();
    }, 300);
  },

  closeMenu() {
    this.isOpen = false;
    this.mobileMenu.setAttribute('aria-hidden', 'true');
    this.toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    // Return focus to toggle
    this.toggle.focus();
  },

  onScroll() {
    const scrollY = window.scrollY;
    const scrolled = scrollY > 20;

    // Toggle glassmorphism class
    this.navbar.classList.toggle('navbar--scrolled', scrolled);

    this.lastScrollY = scrollY;
  },

  initActiveLinks() {
    const sections = Utils.$$('.section[id]');
    const desktopLinks = Utils.$$('.navbar__link');
    const mobileLinks = Utils.$$('.navbar__mobile-link');

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            // Update desktop links
            desktopLinks.forEach((link) => {
              const isActive = link.getAttribute('href') === `#${id}`;
              link.classList.toggle('navbar__link--active', isActive);
            });

            // Update mobile links
            mobileLinks.forEach((link) => {
              const isActive = link.getAttribute('href') === `#${id}`;
              link.classList.toggle('navbar__link--active', isActive);
            });
          }
        });
      },
      {
        threshold: 0,
        rootMargin: `-${this.navbar.offsetHeight + 20}px 0px -50% 0px`,
      },
    );

    sections.forEach((section) => observer.observe(section));
  },
};

window.Navigation = Navigation;
