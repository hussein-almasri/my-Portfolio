const ProjectsPageIcons = {
  calendar: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  play: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>`,
  image: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  arrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`,
  download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  stat: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
};

const projectsPageData = {
  featured: [
    {
      id: 1,
      title: "Skill Hub",
      category: "Flutter + Backend",
      filter: ["mobile", "web"],
      year: "2026",
      status: "Completed",
      statusClass: "completed",
      team: false,
      description: "A Capture The Flag (CTF) platform built during my Flutter Full Stack course where users solve cybersecurity challenges, submit flags, and practice security concepts through interactive challenges.",
      contribution: "Built the complete Flutter frontend with responsive UI, integrated Python REST API backend, implemented user authentication and challenge submission flow.",
      keyLearnings: ["Flutter UI Development", "Backend API Integration", "Authentication", "Full Stack Architecture"],
      technologies: ["Flutter", "Dart", "Python", "REST API", "Git"],
      github: "#",
      playStore: null,
    },
    {
      id: 2,
      title: "JadaraBus",
      category: "Graduation Project",
      filter: ["web", "team"],
      year: "2026",
      status: "Completed",
      statusClass: "completed",
      team: true,
      description: "A graduation project designed to simplify transportation for university students through a modern web platform that improves communication between students and transportation providers.",
      contribution: "Co-developed the frontend with React and TypeScript, implemented Supabase integration for real-time data, managed PostgreSQL database schema design.",
      keyLearnings: ["React", "TypeScript", "Supabase", "Team Collaboration"],
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "PostgreSQL", "GitHub", "Trello"],
      github: "#",
      playStore: null,
    },
    {
      id: 3,
      title: "Student Life Manager",
      category: "Mobile Application",
      filter: ["mobile"],
      year: "2025",
      status: "Published on Google Play",
      statusClass: "published",
      team: false,
      description: "A mobile application created during my Flutter course to help university students organize courses, assignments, notes and schedules using local storage.",
      contribution: "Designed and developed the entire application from scratch, implemented SQLite local database, published on Google Play Store.",
      keyLearnings: ["Flutter", "SQLite", "App Publishing", "UI/UX Design"],
      technologies: ["Flutter", "Dart", "SQLite"],
      github: "#",
      playStore: "#",
    },
    {
      id: 4,
      title: "FlowWork",
      category: "Team Project",
      filter: ["web", "team"],
      year: "2025",
      status: "Completed",
      statusClass: "completed",
      team: true,
      description: "A project management system developed with my university team to practice backend development, MVC architecture, authentication and collaborative software development.",
      contribution: "Implemented authentication system and MVC backend architecture, developed team collaboration features using Laravel and PHP.",
      keyLearnings: ["Laravel", "MVC Architecture", "MySQL", "Git Workflow"],
      technologies: ["Laravel", "PHP", "MySQL", "Git"],
      github: "#",
      playStore: null,
    },
  ],
  others: [
    { title: "Calculator", description: "A clean Flutter calculator app with basic arithmetic operations.", category: "Mobile" },
    { title: "Weather App", description: "A weather application fetching real-time data from a REST API.", category: "Mobile" },
    { title: "Flutter UI Practice", description: "Collection of Flutter UI experiments and design implementations.", category: "Mobile" },
    { title: "Arduino Experiments", description: "Hardware projects exploring sensors, motors and embedded systems.", category: "Embedded" },
    { title: "Mini Web Apps", description: "Small JavaScript projects to practice frontend fundamentals.", category: "Web" },
    { title: "Todo App", description: "A task management app with local storage and clean UI.", category: "Mobile" },
  ],
};

function renderProjectsPage() {
  const featured = document.getElementById('pp-featured-grid');
  const others = document.getElementById('pp-others-grid');

  if (featured && Array.isArray(projectsPageData.featured)) {
    featured.innerHTML = projectsPageData.featured.map((p, i) => `
      <article class="pp-project reveal" data-filters="${(p.filter || []).join(',')}" aria-label="${p.title} project">
        <div class="pp-project__border" aria-hidden="true"></div>
        <div class="pp-project__inner">
          <div class="pp-project__image">
            <div class="pp-project__image-placeholder">
              ${ProjectsPageIcons.image}
              <span class="pp-project__image-text">Screenshot</span>
            </div>
          </div>
          <div class="pp-project__content">
            <div class="pp-project__meta">
              <span class="pp-project__number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
              <div class="pp-project__badges">
                <span class="pp-project__status pp-project__status--${p.statusClass}">${p.status}</span>
                ${p.team ? `<span class="pp-project__status pp-project__status--team">Team</span>` : ''}
              </div>
            </div>
            <h3 class="pp-project__title">${p.title}</h3>
            <div class="pp-project__category-row">
              <span class="pp-project__category">${p.category}</span>
              <span class="pp-project__year">${ProjectsPageIcons.calendar} ${p.year}</span>
            </div>
            <p class="pp-project__description">${p.description}</p>
            ${p.contribution ? `
              <div class="pp-project__contribution">
                <span class="pp-project__contribution-label">My Contribution</span>
                <p class="pp-project__contribution-text">${p.contribution}</p>
              </div>
            ` : ''}
            ${Array.isArray(p.keyLearnings) && p.keyLearnings.length > 0 ? `
              <div class="pp-project__learnings">
                <span class="pp-project__learnings-label">Key Learnings</span>
                <ul class="pp-project__learnings-list" role="list">
                  ${p.keyLearnings.map((l) => `<li>${l}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            <div class="pp-project__footer">
              <div class="pp-project__techs" role="list" aria-label="Technologies used">
                ${(Array.isArray(p.technologies) ? p.technologies : []).map((t) => `<span class="pp-project__tech" role="listitem">${t}</span>`).join('')}
              </div>
              <div class="pp-project__buttons">
                ${p.github ? `<a href="${p.github}" class="pp-project__btn" target="_blank" rel="noopener noreferrer" aria-label="View ${p.title} on GitHub">${ProjectsPageIcons.github} GitHub</a>` : ''}
                ${p.playStore ? `<a href="${p.playStore}" class="pp-project__btn pp-project__btn--play" target="_blank" rel="noopener noreferrer" aria-label="View ${p.title} on Google Play">${ProjectsPageIcons.play} Google Play</a>` : ''}
              </div>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  if (others && Array.isArray(projectsPageData.others)) {
    others.innerHTML = projectsPageData.others.map((p) => `
      <div class="pp-other reveal">
        <span class="pp-other__category">${p.category}</span>
        <h3 class="pp-other__title">${p.title}</h3>
        <p class="pp-other__desc">${p.description}</p>
      </div>
    `).join('');
  }
}

function initFilters() {
  const buttons = document.querySelectorAll('.pp-filters__btn');
  const projects = document.querySelectorAll('.pp-project');
  if (!buttons.length || !projects.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      buttons.forEach((b) => b.classList.remove('pp-filters__btn--active'));
      btn.classList.add('pp-filters__btn--active');

      projects.forEach((project) => {
        if (filter === 'all') {
          project.classList.remove('pp-project--hidden', 'pp-project--fade-out');
          return;
        }

        const filters = project.dataset.filters || '';
        if (filters.includes(filter)) {
          project.classList.remove('pp-project--hidden');
          requestAnimationFrame(() => project.classList.remove('pp-project--fade-out'));
        } else {
          project.classList.add('pp-project--fade-out');
          setTimeout(() => project.classList.add('pp-project--hidden'), 250);
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjectsPage();
  initFilters();

  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
  }
});
