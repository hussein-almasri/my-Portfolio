/**
 * main.js — Application entry point
 */

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();

  renderHero();
  renderProjects();
  renderJourney();
  renderTechnology();
  renderCertifications();
  renderCommunity();
  renderArduino();
  renderPhilosophy();

  Animations.init();
});
