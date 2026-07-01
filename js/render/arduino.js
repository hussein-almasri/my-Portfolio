const ArduinoIcons = {
  chip: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
};

function renderArduino() {
  const section = document.getElementById('arduino');
  if (!section) return;

  const a = window.arduino;

  section.innerHTML = `
    <div class="container">
      <div class="arduino__header reveal">
        <span class="arduino__label">${a.label}</span>
        <h2 class="arduino__title">${a.title}</h2>
        <p class="arduino__description">${a.description}</p>
      </div>

      <div class="arduino__grid">
        ${a.projects
          .map(
            (project, i) => `
          <div class="arduino__card reveal" style="transition-delay: ${i * 80}ms">
            <div class="arduino__card-border" aria-hidden="true"></div>
            <div class="arduino__card-inner">
              <div class="arduino__card-top">
                <span class="arduino__number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
                <div class="arduino__card-icon" aria-hidden="true">${ArduinoIcons.chip}</div>
              </div>
              <div class="arduino__card-meta">
                <h3 class="arduino__card-title">${project.title}</h3>
                <div class="arduino__card-badges">
                  <span class="arduino__year">${project.year}</span>
                  <span class="arduino__status">${project.status}</span>
                </div>
              </div>
              <p class="arduino__card-desc">${project.description}</p>
              <div class="arduino__card-techs" role="list" aria-label="Technologies used">
                ${project.technologies.map((t) => `<span class="arduino__tech" role="listitem">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `,
          )
          .join('')}
      </div>

      <blockquote class="arduino__quote reveal">
        <p>${a.quote}</p>
      </blockquote>
    </div>
  `;
}

window.renderArduino = renderArduino;
