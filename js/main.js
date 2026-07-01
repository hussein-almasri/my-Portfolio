/**
 * main.js — Application entry point
 */

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();

  renderHero();
  renderProjects();

  Animations.init();
});
