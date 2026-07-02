/* ═══════════════════════════════════════════════
   PROJECT DETAIL RENDERER
   Renders detailed project view with all sections
   ═══════════════════════════════════════════════ */

const ProjectDetail = {
  /**
   * Render project detail view
   * @param {Object} project - Project data object
   * @param {Object} navigation - {prev, next} adjacent projects
   * @returns {string} HTML string
   */
  render(project, navigation = {}) {
    if (!project) return '';

    const prevProject = navigation.prev;
    const nextProject = navigation.next;

    return `
      <article class="pd" data-project-id="${project.id}">
        <!-- Back Button -->
        <div class="pd__back">
          <a href="projects.html" class="pd__back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Projects
          </a>
        </div>

        <!-- Hero Section -->
        <header class="pd__hero reveal">
          <div class="pd__hero-meta">
            <span class="pd__hero-number">${this.getProjectNumber(project.id)}</span>
            <div class="pd__hero-badges">
              <span class="pd__badge pd__badge--${project.statusClass}">${project.status}</span>
              ${project.team ? '<span class="pd__badge pd__badge--team">Team Project</span>' : ''}
            </div>
          </div>
          <h1 class="pd__hero-title">${project.title}</h1>
          <div class="pd__hero-info">
            <span class="pd__hero-category">${project.category}</span>
            <span class="pd__hero-divider">·</span>
            <span class="pd__hero-year">${project.year}</span>
          </div>
          <p class="pd__hero-description">${project.description}</p>
          
          <div class="pd__hero-buttons">
            ${project.github ? `
              <a href="${project.github}" class="pd__btn pd__btn--primary" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>View on GitHub</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            ` : ''}
            ${project.playStore ? `
              <a href="${project.playStore}" class="pd__btn pd__btn--play" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                <span>Google Play</span>
              </a>
            ` : ''}
            ${project.liveDemo ? `
              <a href="${project.liveDemo}" class="pd__btn pd__btn--demo" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span>Live Demo</span>
              </a>
            ` : ''}
          </div>
        </header>

        <!-- Gallery Section -->
        <section class="pd__gallery reveal" aria-label="Project screenshots">
          <h2 class="pd__section-title">Screenshots</h2>
          ${Gallery.create(project.gallery, { className: 'pd__gallery-container', columns: 1 })}
        </section>

        <!-- Overview Section -->
        <section class="pd__section reveal">
          <h2 class="pd__section-title">Project Overview</h2>
          <p class="pd__section-text">${project.overview}</p>
        </section>

        <!-- Technologies Section -->
        <section class="pd__section reveal">
          <h2 class="pd__section-title">Technologies</h2>
          <div class="pd__tech-grid">
            ${project.technologies.map(tech => `
              <div class="pd__tech-item">
                <span class="pd__tech-name">${tech}</span>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Features Section -->
        <section class="pd__section reveal">
          <h2 class="pd__section-title">Key Features</h2>
          <ul class="pd__feature-list" role="list">
            ${project.features.map(feature => `
              <li class="pd__feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>${feature}</span>
              </li>
            `).join('')}
          </ul>
        </section>

        <!-- What I Learned Section -->
        <section class="pd__section reveal">
          <h2 class="pd__section-title">What I Learned</h2>
          <ul class="pd__learned-list" role="list">
            ${project.learned.map(item => `
              <li class="pd__learned-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </section>

        <!-- My Contribution Section -->
        <section class="pd__section reveal">
          <h2 class="pd__section-title">My Contribution</h2>
          <div class="pd__contribution-card">
            <p class="pd__contribution-text">${project.contribution}</p>
          </div>
        </section>

        <!-- Project Navigation -->
        <nav class="pd__navigation reveal" aria-label="Project navigation">
          ${prevProject ? `
            <a href="projects.html#${prevProject.id}" class="pd__nav-link pd__nav-link--prev">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              <div class="pd__nav-content">
                <span class="pd__nav-label">Previous Project</span>
                <span class="pd__nav-title">${prevProject.title}</span>
              </div>
            </a>
          ` : '<div></div>'}
          ${nextProject ? `
            <a href="projects.html#${nextProject.id}" class="pd__nav-link pd__nav-link--next">
              <div class="pd__nav-content">
                <span class="pd__nav-label">Next Project</span>
                <span class="pd__nav-title">${nextProject.title}</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          ` : '<div></div>'}
        </nav>
      </article>
    `;
  },

  /**
   * Get project number for display
   */
  getProjectNumber(id) {
    const numbers = {
      'workflow': '01',
      'student-life-manager': '02',
      'jadarabus': '03',
      'skillhub': '04',
      'flowwork': '05'
    };
    return numbers[id] || '00';
  },

  /**
   * Initialize project detail galleries
   */
  initGalleries() {
    const galleries = document.querySelectorAll('.pd__gallery-container');
    galleries.forEach(gallery => Gallery.init(gallery));
  }
};
