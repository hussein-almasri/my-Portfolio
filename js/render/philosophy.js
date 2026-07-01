const PhilosophyIcons = {
  learn: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  problem: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  build: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  team: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};

function renderPhilosophy() {
  const section = document.getElementById('philosophy');
  if (!section) return;

  const p = window.philosophy;
  if (!p) {
    console.warn('Philosophy data missing: window.philosophy is undefined');
    return;
  }

  const cards = Array.isArray(p.cards) ? p.cards : [];

  section.innerHTML = `
    <div class="container">
      <div class="philosophy__header reveal">
        <span class="philosophy__label">${p.label || ''}</span>
        <h2 class="philosophy__title">${p.title || ''}</h2>
        <p class="philosophy__description">${p.description || ''}</p>
      </div>

      <div class="philosophy__grid">
        ${cards
          .map(
            (card, i) => `
          <div class="philosophy__card reveal" style="transition-delay: ${i * 80}ms">
            <div class="philosophy__card-border" aria-hidden="true"></div>
            <div class="philosophy__card-inner">
              <div class="philosophy__card-icon" aria-hidden="true">${PhilosophyIcons[card.icon] || ''}</div>
              <h3 class="philosophy__card-title">${card.title || ''}</h3>
              <p class="philosophy__card-desc">${card.description || ''}</p>
            </div>
          </div>
        `,
          )
          .join('')}
      </div>

      <blockquote class="philosophy__quote reveal">
        <p>${p.quote || ''}</p>
      </blockquote>
    </div>
  `;
}

window.renderPhilosophy = renderPhilosophy;
