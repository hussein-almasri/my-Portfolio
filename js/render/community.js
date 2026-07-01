const CommunityIcons = {
  ieee: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  hackathon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  challenge: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  teach: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
};

function renderCommunity() {
  const section = document.getElementById('community');
  if (!section) return;

  const c = window.community;
  if (!c) {
    console.warn('Community data missing: window.community is undefined');
    return;
  }

  const cards = Array.isArray(c.cards) ? c.cards : [];

  section.innerHTML = `
    <div class="container">
      <div class="community__header reveal">
        <span class="community__label">${c.label || ''}</span>
        <h2 class="community__title">${c.title || ''}</h2>
        <p class="community__description">${c.description || ''}</p>
      </div>

      <div class="community__grid">
        ${cards
          .map(
            (card, i) => `
          <div class="community__card reveal" style="transition-delay: ${i * 80}ms">
            <div class="community__card-border" aria-hidden="true"></div>
            <div class="community__card-inner">
              <div class="community__card-header">
                <div class="community__card-icon" aria-hidden="true">${CommunityIcons[card.icon] || ''}</div>
                <div class="community__card-title-row">
                  <h3 class="community__card-title">${card.title || ''}</h3>
                  ${card.status ? `<span class="community__status">${card.status}</span>` : ''}
                </div>
              </div>
              <p class="community__card-desc">${card.description || ''}</p>
              <div class="community__card-tags" role="list" aria-label="${card.title || 'Card'} tags">
                ${Array.isArray(card.tags) ? card.tags.map((t) => `<span class="community__tag" role="listitem">${t}</span>`).join('') : ''}
              </div>
            </div>
          </div>
        `,
          )
          .join('')}
      </div>

      <blockquote class="community__quote reveal">
        <p>${c.quote || ''}</p>
      </blockquote>
    </div>
  `;
}

window.renderCommunity = renderCommunity;
