/* ═══════════════════════════════════════════════
   CERTIFICATES PAGE
   Main entry point for certificates page functionality
   ═══════════════════════════════════════════════ */

const CertificatesPage = {
  listView: null,
  detailView: null,
  cdContent: null,

  /**
   * Initialize the certificates page
   */
  init() {
    this.listView = document.getElementById('certifications-list-view');
    this.detailView = document.getElementById('certification-detail-view');
    this.cdContent = document.getElementById('cd-content');

    if (!this.listView || !this.detailView) return;

    this.handleRoute();
    this.initFilters();
    this.initScrollReveal();

    window.addEventListener('hashchange', () => this.handleRoute());
  },

  /**
   * Handle hash-based routing
   */
  handleRoute() {
    const hash = window.location.hash.slice(1);

    if (hash) {
      this.showCertificateDetail(hash);
    } else {
      this.showCertificatesList();
    }
  },

  /**
   * Show certificates list view
   */
  showCertificatesList() {
    this.listView.style.display = '';
    this.detailView.style.display = 'none';
    document.title = 'Certificates — Hussein Almasri';

    this.renderStats();
    this.renderCertificatesGrid();

    requestAnimationFrame(() => {
      this.initScrollReveal();
      this.initFilters();
      window.scrollTo(0, 0);
    });
  },

  /**
   * Show certificate detail view
   */
  showCertificateDetail(certId) {
    const certificate = CertificatesPageData.certificates.find(c => c.id === certId);

    if (!certificate) {
      this.showCertificatesList();
      return;
    }

    this.listView.style.display = 'none';
    this.detailView.style.display = '';
    document.title = `${certificate.title} — Hussein Almasri`;

    const allCerts = CertificatesPageData.certificates;
    const currentIndex = allCerts.findIndex(c => c.id === certId);

    const navigation = {
      prev: currentIndex > 0 ? allCerts[currentIndex - 1] : null,
      next: currentIndex < allCerts.length - 1 ? allCerts[currentIndex + 1] : null
    };

    if (this.cdContent) {
      this.cdContent.innerHTML = CertificateDetail.render(certificate, navigation);
    }

    requestAnimationFrame(() => {
      this.initScrollReveal();
      window.scrollTo(0, 0);
    });
  },

  /**
   * Render hero stats
   */
  renderStats() {
    const statsContainer = document.getElementById('cp-hero-stats');
    if (!statsContainer || !CertificatesPageData.stats) return;

    const icons = {
      certificates: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      hours: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      categories: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>'
    };

    statsContainer.innerHTML = CertificatesPageData.stats.map(stat => `
      <span class="cp-hero__stat">${icons[stat.icon] || ''} ${stat.label}</span>
    `).join('');
  },

  /**
   * Render certificates grid
   */
  renderCertificatesGrid() {
    const grid = document.getElementById('cp-grid');
    if (!grid || !CertificatesPageData.certificates) return;

    grid.innerHTML = CertificatesPageData.certificates.map((cert, index) => `
      <article class="cp-card reveal" data-cert-id="${cert.id}" data-filters="${cert.filterCategory}" aria-label="${cert.title} certificate">
        <div class="cp-card__border" aria-hidden="true"></div>
        <div class="cp-card__inner">
          <div class="cp-card__image">
            ${cert.image ? `
              <img 
                class="cp-card__image-img"
                src="${cert.image}"
                alt="${cert.imageAlt}"
                loading="lazy"
                decoding="async"
              />
            ` : `
              <div class="cp-card__image-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span class="cp-card__image-text">Certificate</span>
              </div>
            `}
          </div>
          <div class="cp-card__content">
            <div class="cp-card__meta">
              <span class="cp-card__number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
              <span class="cp-card__status cp-card__status--${cert.statusClass}">${cert.status}</span>
            </div>
            <h3 class="cp-card__title">${cert.title}</h3>
            <div class="cp-card__category-row">
              <span class="cp-card__category">${cert.provider}</span>
              <span class="cp-card__year">${cert.date}</span>
            </div>
            <p class="cp-card__description">${cert.description}</p>
            <div class="cp-card__footer">
              <div class="cp-card__badges">
                <span class="cp-card__badge">${cert.category}</span>
                ${cert.duration ? `<span class="cp-card__badge cp-card__badge--duration">${cert.duration}</span>` : ''}
              </div>
              <a href="certifications.html#${cert.id}" class="cp-card__btn" aria-label="View ${cert.title} details">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.cp-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.cp-card__btn')) return;
        const certId = card.dataset.certId;
        if (certId) {
          window.location.hash = certId;
        }
      });
    });
  },

  /**
   * Initialize filter functionality
   */
  initFilters() {
    const buttons = document.querySelectorAll('.cp-filters__btn');
    const cards = document.querySelectorAll('.cp-card');
    if (!buttons.length || !cards.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        buttons.forEach((b) => b.classList.remove('cp-filters__btn--active'));
        btn.classList.add('cp-filters__btn--active');

        cards.forEach((card) => {
          if (filter === 'all') {
            card.classList.remove('cp-card--hidden', 'cp-card--fade-out');
            return;
          }

          const filters = card.dataset.filters || '';
          if (filters === filter) {
            card.classList.remove('cp-card--hidden');
            requestAnimationFrame(() => card.classList.remove('cp-card--fade-out'));
          } else {
            card.classList.add('cp-card--fade-out');
            setTimeout(() => card.classList.add('cp-card--hidden'), 250);
          }
        });
      });
    });
  },

  /**
   * Initialize scroll reveal animations
   */
  initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal:not(.is-visible)');
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
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (typeof Navigation !== 'undefined') Navigation.init();

  const fy = document.getElementById('footer-year');
  if (fy) fy.textContent = new Date().getFullYear();

  try {
    CertificatesPage.init();
  } catch (error) {
    console.error('CertificatesPage.init failed:', error);
  }
});
