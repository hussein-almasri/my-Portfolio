/**
 * main.js — Application entry point
 */

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();

  const renderers = [
    renderHero,
    renderProjects,
    renderJourney,
    renderTechnology,
    renderCertifications,
    renderCommunity,
    renderArduino,
    renderPhilosophy,
    renderContact,
  ];

  renderers.forEach((renderer) => {
    try {
      renderer();
    } catch (error) {
      console.error(`${renderer.name} failed:`, error);
    }
  });

  Animations.init();

  // Set footer year dynamically
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});
