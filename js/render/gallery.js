/* ═══════════════════════════════════════════════
   GALLERY COMPONENT
   Reusable image gallery with lazy loading
   ═══════════════════════════════════════════════ */

const Gallery = {
  /**
   * Create a responsive image gallery
   * @param {Array} images - Array of {src, alt} objects
   * @param {Object} options - Configuration options
   * @returns {string} HTML string
   */
  create(images, options = {}) {
    const {
      className = 'gallery',
      columns = 1,
      showThumbnails = true,
      lazy = true
    } = options;

    if (!Array.isArray(images) || images.length === 0) {
      return '<div class="gallery gallery--empty"><p>No screenshots available</p></div>';
    }

    const mainImage = `
      <div class="gallery__main">
        <div class="gallery__main-container">
          <img 
            class="gallery__main-image"
            src="${images[0].src}"
            alt="${images[0].alt}"
            ${lazy ? 'loading="lazy"' : 'loading="eager"'}
            decoding="async"
            data-index="0"
          />
          <div class="gallery__counter">
            <span class="gallery__counter-current">1</span>
            <span class="gallery__counter-separator">/</span>
            <span class="gallery__counter-total">${images.length}</span>
          </div>
          <button class="gallery__nav gallery__nav--prev" aria-label="Previous image" data-action="prev">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button class="gallery__nav gallery__nav--next" aria-label="Next image" data-action="next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <button class="gallery__expand" aria-label="Open fullscreen gallery">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="15 3 21 3 21 9"/>
              <polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/>
              <line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    const thumbnails = showThumbnails && images.length > 1 ? `
      <div class="gallery__thumbnails">
        ${images.map((img, index) => `
          <button 
            class="gallery__thumbnail ${index === 0 ? 'gallery__thumbnail--active' : ''}"
            data-index="${index}"
            aria-label="View image ${index + 1}: ${img.alt}"
          >
            <img 
              src="${img.src}" 
              alt="${img.alt}"
              ${lazy ? 'loading="lazy"' : 'loading="eager"'}
              decoding="async"
            />
          </button>
        `).join('')}
      </div>
    ` : '';

    return `
      <div class="${className}" data-images='${JSON.stringify(images)}' role="region" aria-label="Project screenshots">
        ${mainImage}
        ${thumbnails}
      </div>
    `;
  },

  /**
   * Initialize gallery interactivity
   * @param {HTMLElement} container - Gallery container element
   */
  init(container) {
    if (!container) return;

    const images = JSON.parse(container.dataset.images || '[]');
    if (images.length === 0) return;

    let currentIndex = 0;
    const mainImage = container.querySelector('.gallery__main-image');
    const counter = container.querySelector('.gallery__counter-current');
    const thumbnails = container.querySelectorAll('.gallery__thumbnail');
    const prevBtn = container.querySelector('[data-action="prev"]');
    const nextBtn = container.querySelector('[data-action="next"]');
    const expandBtn = container.querySelector('.gallery__expand');

    function updateImage(index) {
      if (index < 0 || index >= images.length) return;
      currentIndex = index;

      mainImage.style.opacity = '0';
      setTimeout(() => {
        mainImage.src = images[index].src;
        mainImage.alt = images[index].alt;
        mainImage.style.opacity = '1';
      }, 150);

      if (counter) counter.textContent = index + 1;

      thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('gallery__thumbnail--active', i === index);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        updateImage(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        updateImage(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
      });
    }

    thumbnails.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const index = parseInt(thumb.dataset.index, 10);
        updateImage(index);
      });
    });

    if (expandBtn) {
      expandBtn.addEventListener('click', () => {
        Lightbox.open(images, currentIndex);
      });
    }

    container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        updateImage(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      } else if (e.key === 'ArrowRight') {
        updateImage(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
      }
    });

    container.setAttribute('tabindex', '0');
  }
};
