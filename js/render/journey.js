function renderJourney() {
  const section = document.getElementById('journey');
  if (!section) return;

  const j = window.journey;
  if (!j) {
    console.warn('Journey data missing: window.journey is undefined');
    return;
  }

  const items = Array.isArray(j.items) ? j.items : [];

  section.innerHTML = `
    <div class="container">
      <div class="journey__header reveal">
        <span class="journey__label">${j.label || ''}</span>
        <h2 class="journey__title">${j.title || ''}</h2>
        <p class="journey__description">${j.description || ''}</p>
      </div>

      <div class="journey__track">
        <div class="journey__line" aria-hidden="true"></div>
        <div class="journey__line-fill" aria-hidden="true"></div>

        ${items
          .map(
            (item, i) => `
          <div class="journey__item reveal" style="transition-delay: ${i * 100}ms">
            <div class="journey__dot" aria-hidden="true">
              <span class="journey__dot-inner"></span>
            </div>
            <div class="journey__card">
              <div class="journey__card-border" aria-hidden="true"></div>
              <div class="journey__card-inner">
                <span class="journey__year">${item.year || ''}</span>
                <h3 class="journey__card-title">${item.title || ''}</h3>
                <p class="journey__card-desc">${item.description || ''}</p>
                <div class="journey__tags" role="list" aria-label="Key milestones">
                  ${Array.isArray(item.tags) ? item.tags.map((t) => `<span class="journey__tag" role="listitem">${t}</span>`).join('') : ''}
                </div>
              </div>
            </div>
          </div>
        `,
          )
          .join('')}
      </div>

      <blockquote class="journey__quote reveal">
        <p>${j.quote || ''}</p>
      </blockquote>
    </div>
  `;
}

window.renderJourney = renderJourney;
