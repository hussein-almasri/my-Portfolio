function renderProjects() {
  const header = document.getElementById('projects-header');
  const grid = document.getElementById('projects-grid');
  if (!header || !grid) return;

  const data = window.projects;

  // Section Header
  header.innerHTML = `
    <span class="projects__label">Featured Projects</span>
    <h2 class="projects__title">Building Software, One Project at a Time</h2>
    <p class="projects__description">
      Every project represents a step in my learning journey and reflects my passion
      for solving practical problems through software engineering.
    </p>
  `;

  // Project Cards
  grid.innerHTML = data
    .map(
      (project, index) => `
    <article class="project-card reveal" aria-label="${project.title} project">
      <div class="project-card__border" aria-hidden="true"></div>
      <div class="project-card__inner">
        <div class="project-card__top">
          <div class="project-card__meta">
            <span class="project-card__number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
            <div class="project-card__badges">
              <span class="project-card__status project-card__status--${project.statusClass}">${project.status}</span>
              ${project.team ? `<span class="project-card__status project-card__status--team">${Icons.team} Team</span>` : ''}
            </div>
          </div>
          <h3 class="project-card__name">${project.title}</h3>
          <div class="project-card__category-row">
            <span class="project-card__category">${project.category}</span>
            <span class="project-card__year">${Icons.calendar} ${project.year}</span>
          </div>
        </div>
        <p class="project-card__description">${project.description}</p>
        ${
          project.keyLearnings.length > 0
            ? `
          <div class="project-card__learnings">
            <span class="project-card__learnings-label">Key Learnings</span>
            <ul class="project-card__learnings-list" role="list">
              ${project.keyLearnings.map((l) => `<li>${l}</li>`).join('')}
            </ul>
          </div>
        `
            : ''
        }
        <div class="project-card__footer">
          <div class="project-card__techs" role="list" aria-label="Technologies used">
            ${project.technologies.map((t) => `<span class="project-card__tech" role="listitem">${t}</span>`).join('')}
          </div>
          <a href="${project.github}" class="project-card__github" aria-label="View ${project.title} on GitHub">
            ${Icons.github}
          </a>
        </div>
      </div>
    </article>
  `,
    )
    .join('');
}

window.renderProjects = renderProjects;
