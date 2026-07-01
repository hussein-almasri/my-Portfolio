function renderHero() {
  const container = document.getElementById('hero-content');
  const card = document.getElementById('hero-card');
  if (!container || !card) return;

  const p = window.personal;

  // Badge
  const badge = document.createElement('div');
  badge.className = 'hero__badge';
  badge.setAttribute('aria-label', 'Available for internship opportunities');
  badge.innerHTML = `
    <span class="hero__badge-dot" aria-hidden="true"></span>
    <span class="hero__badge-text">${p.badgeText}</span>
  `;

  // Heading
  const heading = document.createElement('h1');
  heading.className = 'hero__heading';
  heading.innerHTML = `
    <span class="hero__greeting">${p.greeting}</span>
    <span class="hero__name">${p.name}</span>
  `;

  // Subtitle
  const subtitle = document.createElement('p');
  subtitle.className = 'hero__subtitle';
  subtitle.innerHTML = p.subtitle.join('<br />');

  // Description
  const desc = document.createElement('p');
  desc.className = 'hero__description';
  desc.textContent = p.description;

  // Tech Chips
  const chips = document.createElement('div');
  chips.className = 'hero__chips';
  chips.setAttribute('role', 'list');
  chips.setAttribute('aria-label', 'Technical skills');
  chips.innerHTML = p.heroChips
    .map((t) => `<span class="hero__chip" role="listitem">${t}</span>`)
    .join('');

  // CTA Buttons
  const ctas = document.createElement('div');
  ctas.className = 'hero__ctas';
  ctas.innerHTML = `
    <a href="#projects" class="hero__btn hero__btn--primary">
      <span>Explore My Projects</span>
      ${Icons.arrowUpRight}
    </a>
    <a href="/assets/files/resume.pdf" class="hero__btn hero__btn--secondary" download aria-label="Download Resume">
      ${Icons.download}
      <span>Download Resume</span>
    </a>
    <a href="#contact" class="hero__btn hero__btn--ghost">
      <span>Let's Connect</span>
    </a>
  `;

  container.append(badge, heading, subtitle, desc, chips, ctas);

  // Developer Card
  card.innerHTML = `
    <div class="hero__card-border" aria-hidden="true"></div>
    <div class="hero__card-inner">
      <div class="hero__card-header">
        <div class="hero__card-avatar" aria-hidden="true">${p.initials}</div>
        <div class="hero__card-identity">
          <h2 class="hero__card-name">${p.name}</h2>
          <p class="hero__card-location">
            ${Icons.location}
            ${p.location}
          </p>
        </div>
      </div>
      <div class="hero__card-rows">
        <div class="hero__card-row">
          <span class="hero__card-label">Role</span>
          <span class="hero__card-value">${p.role}</span>
        </div>
        <div class="hero__card-row">
          <span class="hero__card-label">Primary Focus</span>
          <span class="hero__card-value hero__card-value--accent">${p.focus}</span>
        </div>
        <div class="hero__card-row">
          <span class="hero__card-label">Current Learning</span>
          <span class="hero__card-value">${p.currentLearning}</span>
        </div>
      </div>
      <div class="hero__card-status">
        <span class="hero__card-status-dot" aria-hidden="true"></span>
        <span>${p.status}</span>
      </div>
      <div class="hero__card-achievements">
        <span class="hero__card-label">Achievements</span>
        <ul class="hero__card-achievement-list" role="list">
          ${p.achievements.map((a) => `<li>${Icons.check} ${a}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

window.renderHero = renderHero;
