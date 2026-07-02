/* ═══════════════════════════════════════════════
   CERTIFICATE DETAIL RENDERER
   Renders detailed certificate view with all sections
   ═══════════════════════════════════════════════ */

const CertificateDetail = {
  /**
   * Render certificate detail view
   * @param {Object} cert - Certificate data object
   * @param {Object} navigation - {prev, next} adjacent certificates
   * @returns {string} HTML string
   */
  render(cert, navigation = {}) {
    if (!cert) return '';

    const prevCert = navigation.prev;
    const nextCert = navigation.next;

    return `
      <article class="cd" data-cert-id="${cert.id}">
        <!-- Back Button -->
        <div class="cd__back">
          <a href="certificates.html" class="cd__back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Certificates
          </a>
        </div>

        <!-- Hero Section -->
        <header class="cd__hero reveal">
          <div class="cd__hero-meta">
            <span class="cd__hero-number">${this.getCertNumber(cert.id)}</span>
            <div class="cd__hero-badges">
              <span class="cd__badge cd__badge--${cert.statusClass}">${cert.status}</span>
              <span class="cd__badge cd__badge--category">${cert.category}</span>
            </div>
          </div>
          <h1 class="cd__hero-title">${cert.title}</h1>
          <div class="cd__hero-info">
            <span class="cd__hero-provider">${cert.provider}</span>
            ${cert.duration ? `
              <span class="cd__hero-divider">·</span>
              <span class="cd__hero-duration">${cert.duration}</span>
            ` : ''}
            <span class="cd__hero-divider">·</span>
            <span class="cd__hero-date">${cert.date}</span>
          </div>
          <p class="cd__hero-description">${cert.description}</p>
        </header>

        <!-- Certificate Image -->
        ${cert.image ? `
        <section class="cd__image-section reveal" aria-label="Certificate image">
          <div class="cd__image-card">
            <div class="cd__image-border" aria-hidden="true"></div>
            <div class="cd__image-inner">
              <img 
                class="cd__image"
                src="${cert.image}"
                alt="${cert.imageAlt}"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
        ` : ''}

        <!-- Overview Section -->
        <section class="cd__section reveal">
          <h2 class="cd__section-title">About This Certificate</h2>
          <p class="cd__section-text">${cert.overview}</p>
        </section>

        <!-- Skills Section -->
        <section class="cd__section reveal">
          <h2 class="cd__section-title">Skills & Knowledge</h2>
          <ul class="cd__skills-list" role="list">
            ${cert.skills.map(skill => `
              <li class="cd__skills-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>${skill}</span>
              </li>
            `).join('')}
          </ul>
        </section>

        <!-- Verification Section -->
        <section class="cd__section reveal">
          <h2 class="cd__section-title">Verification</h2>
          <div class="cd__verification-card">
            <div class="cd__verification-border" aria-hidden="true"></div>
            <div class="cd__verification-inner">
              <div class="cd__verification-row">
                <div class="cd__verification-item">
                  <span class="cd__verification-label">Provider</span>
                  <span class="cd__verification-value">${cert.provider}</span>
                </div>
                <div class="cd__verification-item">
                  <span class="cd__verification-label">Date</span>
                  <span class="cd__verification-value">${cert.date}</span>
                </div>
                ${cert.duration ? `
                <div class="cd__verification-item">
                  <span class="cd__verification-label">Duration</span>
                  <span class="cd__verification-value">${cert.duration}</span>
                </div>
                ` : ''}
                <div class="cd__verification-item">
                  <span class="cd__verification-label">Category</span>
                  <span class="cd__verification-value">${cert.category}</span>
                </div>
              </div>
              ${cert.verificationUrl ? `
                <div class="cd__verification-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                  <a href="${cert.verificationUrl}" target="_blank" rel="noopener noreferrer" class="cd__verification-url">Verify Certificate</a>
                </div>
              ` : ''}
            </div>
          </div>
        </section>

        <!-- Certificate Navigation -->
        <nav class="cd__navigation reveal" aria-label="Certificate navigation">
          ${prevCert ? `
            <a href="certificates.html#${prevCert.id}" class="cd__nav-link cd__nav-link--prev">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              <div class="cd__nav-content">
                <span class="cd__nav-label">Previous Certificate</span>
                <span class="cd__nav-title">${prevCert.title}</span>
              </div>
            </a>
          ` : '<div></div>'}
          ${nextCert ? `
            <a href="certificates.html#${nextCert.id}" class="cd__nav-link cd__nav-link--next">
              <div class="cd__nav-content">
                <span class="cd__nav-label">Next Certificate</span>
                <span class="cd__nav-title">${nextCert.title}</span>
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
   * Get certificate number for display
   */
  getCertNumber(id) {
    const numbers = {
      'fullstack-mobile': '01',
      'cybersecurity-devsec': '02',
      'pcep-python': '03',
      'python-essentials-2': '04',
      'cpp-programming': '05',
      'ieee-ai-hackathon': '06'
    };
    return numbers[id] || '00';
  }
};
