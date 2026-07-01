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
});
