const TechIcons = {
  focus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  learn: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  explore: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  workflow: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>`,
};

function renderTechnology() {
  const section = document.getElementById('skills');
  if (!section) return;

  const t = window.technology;

  section.innerHTML = `
    <div class="container">
      <div class="tech__header reveal">
        <span class="tech__label">${t.label}</span>
        <h2 class="tech__title">${t.title}</h2>
        <p class="tech__description">${t.description}</p>
      </div>

      <div class="tech__grid">
        ${t.cards
          .map(
            (card, i) => `
          <div class="tech__card reveal" style="transition-delay: ${i * 80}ms">
            <div class="tech__card-border" aria-hidden="true"></div>
            <div class="tech__card-inner">
              <div class="tech__card-header">
                <div class="tech__card-icon" aria-hidden="true">${TechIcons[card.icon]}</div>
                <h3 class="tech__card-title">${card.title}</h3>
              </div>
              <p class="tech__card-desc">${card.description}</p>
              <div class="tech__card-chips" role="list" aria-label="${card.title} technologies">
                ${card.technologies.map((t) => `<span class="tech__chip" role="listitem">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `,
          )
          .join('')}
      </div>
    </div>
  `;
}

window.renderTechnology = renderTechnology;
