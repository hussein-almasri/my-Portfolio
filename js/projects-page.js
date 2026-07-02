/* ═══════════════════════════════════════════════
   PROJECTS PAGE
   Main entry point for projects page functionality
   ═══════════════════════════════════════════════ */

const ProjectsPage = {
  listView: null,
  detailView: null,
  pdContent: null,

  /**
   * Initialize the projects page
   */
  init() {
    this.listView = document.getElementById('projects-list-view');
    this.detailView = document.getElementById('project-detail-view');
    this.pdContent = document.getElementById('pd-content');

    if (!this.listView || !this.detailView) return;

    Lightbox.init();
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
      this.showProjectDetail(hash);
    } else {
      this.showProjectsList();
    }
  },

  /**
   * Show projects list view
   */
  showProjectsList() {
    this.listView.style.display = '';
    this.detailView.style.display = 'none';
    document.title = 'Projects — Hussein Almasri';

    this.renderStats();
    this.renderFeaturedProjects();
    this.renderEmbeddedProjects();
    this.renderMiniProjects();

    requestAnimationFrame(() => {
      this.initScrollReveal();
      window.scrollTo(0, 0);
    });
  },

  /**
   * Show project detail view
   */
  showProjectDetail(projectId) {
    const project = ProjectsPageData.featured.find(p => p.id === projectId) ||
                    ProjectsPageData.embedded.find(p => p.id === projectId);

    if (!project) {
      this.showProjectsList();
      return;
    }

    this.listView.style.display = 'none';
    this.detailView.style.display = 'block';
    document.title = `${project.title} — Hussein Almasri`;

    const allProjects = [...ProjectsPageData.featured, ...ProjectsPageData.embedded];
    const currentIndex = allProjects.findIndex(p => p.id === projectId);

    const navigation = {
      prev: currentIndex > 0 ? allProjects[currentIndex - 1] : null,
      next: currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null
    };

    if (this.pdContent) {
      this.pdContent.innerHTML = ProjectDetail.render(project, navigation);
    }

    requestAnimationFrame(() => {
      ProjectDetail.initGalleries();
      this.initScrollReveal();
      window.scrollTo(0, 0);
    });
  },

  /**
   * Render hero stats
   */
  renderStats() {
    const statsContainer = document.getElementById('pp-hero-stats');
    if (!statsContainer || !ProjectsPageData.stats) return;

    const icons = {
      projects: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>',
      check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      team: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',
      calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>'
    };

    statsContainer.innerHTML = ProjectsPageData.stats.map(stat => `
      <span class="pp-hero__stat">${icons[stat.icon] || ''} ${stat.label}</span>
    `).join('');
  },

  /**
   * Render featured projects
   */
  renderFeaturedProjects() {
    const grid = document.getElementById('pp-featured-grid');
    if (!grid || !ProjectsPageData.featured) return;

    grid.innerHTML = ProjectsPageData.featured.map((project, index) => `
      <article class="pp-project reveal" data-project-id="${project.id}" data-filters="${this.getProjectFilters(project)}" aria-label="${project.title} project">
        <div class="pp-project__border" aria-hidden="true"></div>
        <div class="pp-project__inner">
          <div class="pp-project__image">
            ${project.gallery && project.gallery[0] ? `
              <img 
                class="pp-project__image-img"
                src="${project.gallery[0].src}"
                alt="${project.gallery[0].alt}"
                loading="lazy"
                decoding="async"
              />
            ` : `
              <div class="pp-project__image-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
                <span class="pp-project__image-text">Screenshot</span>
              </div>
            `}
          </div>
          <div class="pp-project__content">
            <div class="pp-project__meta">
              <span class="pp-project__number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
              <div class="pp-project__badges">
                <span class="pp-project__status pp-project__status--${project.statusClass}">${project.status}</span>
                ${project.team ? '<span class="pp-project__status pp-project__status--team">Team</span>' : ''}
              </div>
            </div>
            <h3 class="pp-project__title">${project.title}</h3>
            <div class="pp-project__category-row">
              <span class="pp-project__category">${project.category}</span>
              <span class="pp-project__year">${project.year}</span>
            </div>
            <p class="pp-project__description">${project.description}</p>
            <div class="pp-project__footer">
              <div class="pp-project__techs" role="list" aria-label="Technologies used">
                ${project.technologies.slice(0, 4).map(tech => `<span class="pp-project__tech" role="listitem">${tech}</span>`).join('')}
                ${project.technologies.length > 4 ? `<span class="pp-project__tech pp-project__tech--more">+${project.technologies.length - 4}</span>` : ''}
              </div>
              <a href="projects.html#${project.id}" class="pp-project__btn" aria-label="View ${project.title} details">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.pp-project').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.pp-project__btn')) return;
        const projectId = card.dataset.projectId;
        if (projectId) {
          window.location.hash = projectId;
        }
      });
    });
  },

  /**
   * Render embedded systems projects
   */
  renderEmbeddedProjects() {
    const grid = document.getElementById('pp-embedded-grid');
    if (!grid || !ProjectsPageData.embedded) return;

    grid.innerHTML = ProjectsPageData.embedded.map((project, index) => `
      <article class="pp-project pp-project--card reveal" data-project-id="${project.id}" data-filters="embedded" aria-label="${project.title} project">
        <div class="pp-project__border" aria-hidden="true"></div>
        <div class="pp-project__inner pp-project__inner--vertical">
          <div class="pp-project__image pp-project__image--card">
            ${project.gallery && project.gallery[0] ? `
              <img 
                class="pp-project__image-img"
                src="${project.gallery[0].src}"
                alt="${project.gallery[0].alt}"
                loading="lazy"
                decoding="async"
              />
            ` : `
              <div class="pp-project__image-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
            `}
          </div>
          <div class="pp-project__content">
            <div class="pp-project__meta">
              <span class="pp-project__number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
              <span class="pp-project__status pp-project__status--${project.statusClass}">${project.status}</span>
            </div>
            <h3 class="pp-project__title">${project.title}</h3>
            <p class="pp-project__description">${project.description}</p>
            <div class="pp-project__techs" role="list" aria-label="Technologies used">
              ${project.technologies.map(tech => `<span class="pp-project__tech" role="listitem">${tech}</span>`).join('')}
            </div>
            <a href="projects.html#${project.id}" class="pp-project__btn" aria-label="View ${project.title} details">
              View Details
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </a>
          </div>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.pp-project').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.pp-project__btn')) return;
        const projectId = card.dataset.projectId;
        if (projectId) {
          window.location.hash = projectId;
        }
      });
    });
  },

  /**
   * Render mini/learning projects
   */
  renderMiniProjects() {
    const grid = document.getElementById('pp-mini-grid');
    if (!grid || !ProjectsPageData.miniProjects) return;

    grid.innerHTML = ProjectsPageData.miniProjects.map(project => `
      <div class="pp-mini-card reveal">
        <div class="pp-mini-card__badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          Learning Project
        </div>
        <h3 class="pp-mini-card__title">${project.title}</h3>
        <p class="pp-mini-card__desc">${project.description}</p>
        <div class="pp-mini-card__techs">
          ${project.technologies.map(tech => `<span class="pp-mini-card__tech">${tech}</span>`).join('')}
        </div>
      </div>
    `).join('');
  },

  /**
   * Get filter categories for a project
   */
  getProjectFilters(project) {
    const filters = [];
    if (project.category.toLowerCase().includes('mobile') || project.category.toLowerCase().includes('flutter')) {
      filters.push('mobile');
    }
    if (project.category.toLowerCase().includes('web') || project.technologies.some(t => ['React', 'Laravel', 'PHP'].includes(t))) {
      filters.push('web');
    }
    if (project.category.toLowerCase().includes('team') || project.team) {
      filters.push('team');
    }
    return filters.join(',');
  },

  /**
   * Initialize filter functionality
   */
  initFilters() {
    const buttons = document.querySelectorAll('.pp-filters__btn');
    const projects = document.querySelectorAll('.pp-project');
    if (!buttons.length || !projects.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        buttons.forEach((b) => b.classList.remove('pp-filters__btn--active'));
        btn.classList.add('pp-filters__btn--active');

        projects.forEach((project) => {
          if (filter === 'all') {
            project.classList.remove('pp-project--hidden', 'pp-project--fade-out');
            return;
          }

          const filters = project.dataset.filters || '';
          if (filters.includes(filter)) {
            project.classList.remove('pp-project--hidden');
            requestAnimationFrame(() => project.classList.remove('pp-project--fade-out'));
          } else {
            project.classList.add('pp-project--fade-out');
            setTimeout(() => project.classList.add('pp-project--hidden'), 250);
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
    ProjectsPage.init();
  } catch (error) {
    console.error('ProjectsPage.init failed:', error);
  }
});
