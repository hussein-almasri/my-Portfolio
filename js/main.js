/**
 * main.js — Application entry point
 */

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();

  renderHero();
  renderProjects();
  renderJourney();

  Animations.init();
});
