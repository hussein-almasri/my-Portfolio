const CertIcons = {
  badge: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15l-2 5l9-13h-6l2-5-9 13h6z"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
};

function renderCertifications() {
  const section = document.getElementById('certificates');
  if (!section) return;

  const c = window.certifications;

  section.innerHTML = `
    <div class="container">
      <div class="certs__header reveal">
        <span class="certs__label">${c.label}</span>
        <h2 class="certs__title">${c.title}</h2>
        <p class="certs__description">${c.description}</p>
      </div>

      <div class="certs__grid">
        ${c.items
          .map(
            (cert, i) => `
          <div class="cert__card reveal" style="transition-delay: ${i * 60}ms">
            <div class="cert__card-border" aria-hidden="true"></div>
            <div class="cert__card-inner">
              <div class="cert__card-top">
                <div class="cert__card-icon" aria-hidden="true">${CertIcons.badge}</div>
                <span class="cert__category">${cert.category}</span>
              </div>
              <h3 class="cert__title">${cert.title}</h3>
              <p class="cert__provider">${cert.provider}</p>
              <div class="cert__card-footer">
                ${cert.duration ? `<span class="cert__duration">${cert.duration}</span>` : '<span></span>'}
                <span class="cert__verified">${CertIcons.check} Verified</span>
              </div>
            </div>
          </div>
        `,
          )
          .join('')}
      </div>

      <div class="certs__cta reveal">
        <div class="certs__cta-border" aria-hidden="true"></div>
        <div class="certs__cta-inner">
          <h3 class="certs__cta-title">${c.cta.title}</h3>
          <p class="certs__cta-desc">${c.cta.description}</p>
          <a href="${c.cta.buttonLink}" class="certs__cta-btn">
            <span>${c.cta.buttonLabel}</span>
            ${CertIcons.arrowRight}
          </a>
        </div>
      </div>
    </div>
  `;
}

window.renderCertifications = renderCertifications;
