/* ═══════════════════════════════════════════════
   LIGHTBOX COMPONENT
   Fullscreen image viewer with keyboard navigation
   ═══════════════════════════════════════════════ */

const Lightbox = {
  instance: null,
  images: [],
  currentIndex: 0,

  /**
   * Create lightbox HTML structure
   */
  createStructure() {
    if (document.getElementById('lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image viewer');
    lightbox.innerHTML = `
      <div class="lightbox__backdrop"></div>
      <div class="lightbox__container">
        <div class="lightbox__image-wrapper">
          <img class="lightbox__image" src="" alt="" />
          <div class="lightbox__loader">
            <div class="lightbox__spinner"></div>
          </div>
        </div>
        <div class="lightbox__counter">
          <span class="lightbox__counter-current">1</span>
          <span class="lightbox__counter-separator">/</span>
          <span class="lightbox__counter-total">1</span>
        </div>
      </div>
      <button class="lightbox__close" aria-label="Close viewer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button class="lightbox__nav lightbox__nav--next" aria-label="Next image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    `;
    document.body.appendChild(lightbox);

    lightbox.querySelector('.lightbox__backdrop').addEventListener('click', () => Lightbox.close());
    lightbox.querySelector('.lightbox__close').addEventListener('click', () => Lightbox.close());
    lightbox.querySelector('.lightbox__nav--prev').addEventListener('click', () => Lightbox.prev());
    lightbox.querySelector('.lightbox__nav--next').addEventListener('click', () => Lightbox.next());
  },

  /**
   * Open lightbox with images
   * @param {Array} images - Array of {src, alt} objects
   * @param {number} startIndex - Index of image to show first
   */
  open(images, startIndex = 0) {
    if (!Array.isArray(images) || images.length === 0) return;

    this.createStructure();
    this.images = images;
    this.currentIndex = startIndex;

    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('lightbox--active');
    document.body.style.overflow = 'hidden';

    this.updateImage();

    requestAnimationFrame(() => {
      lightbox.focus();
    });
  },

  /**
   * Close lightbox
   */
  close() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.classList.remove('lightbox--active');
      document.body.style.overflow = '';
    }
    this.images = [];
    this.currentIndex = 0;
  },

  /**
   * Navigate to next image
   */
  next() {
    if (this.images.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateImage();
  },

  /**
   * Navigate to previous image
   */
  prev() {
    if (this.images.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateImage();
  },

  /**
   * Update displayed image
   */
  updateImage() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const image = lightbox.querySelector('.lightbox__image');
    const loader = lightbox.querySelector('.lightbox__loader');
    const current = lightbox.querySelector('.lightbox__counter-current');
    const total = lightbox.querySelector('.lightbox__counter-total');
    const prevBtn = lightbox.querySelector('.lightbox__nav--prev');
    const nextBtn = lightbox.querySelector('.lightbox__nav--next');

    loader.classList.add('lightbox__loader--active');
    image.style.opacity = '0';

    const newImage = new Image();
    newImage.onload = () => {
      image.src = this.images[this.currentIndex].src;
      image.alt = this.images[this.currentIndex].alt;
      image.style.opacity = '1';
      loader.classList.remove('lightbox__loader--active');
    };
    newImage.onerror = () => {
      loader.classList.remove('lightbox__loader--active');
      image.style.opacity = '1';
    };
    newImage.src = this.images[this.currentIndex].src;

    if (current) current.textContent = this.currentIndex + 1;
    if (total) total.textContent = this.images.length;

    if (prevBtn) prevBtn.style.display = this.images.length > 1 ? '' : 'none';
    if (nextBtn) nextBtn.style.display = this.images.length > 1 ? '' : 'none';
  },

  /**
   * Initialize keyboard navigation
   */
  initKeyboard() {
    document.addEventListener('keydown', (e) => {
      const lightbox = document.getElementById('lightbox');
      if (!lightbox || !lightbox.classList.contains('lightbox--active')) return;

      switch (e.key) {
        case 'Escape':
          this.close();
          break;
        case 'ArrowLeft':
          this.prev();
          break;
        case 'ArrowRight':
          this.next();
          break;
      }
    });
  },

  /**
   * Initialize touch/swipe support
   */
  initTouch() {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
      const lightbox = document.getElementById('lightbox');
      if (!lightbox || !lightbox.classList.contains('lightbox--active')) return;
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const lightbox = document.getElementById('lightbox');
      if (!lightbox || !lightbox.classList.contains('lightbox--active')) return;

      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }, { passive: true });
  },

  /**
   * Initialize lightbox
   */
  init() {
    this.createStructure();
    this.initKeyboard();
    this.initTouch();
  }
};
