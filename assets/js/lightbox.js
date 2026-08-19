// assets/js/lightbox.js
// Lightbox Zoom functionality for images

(function () {
  function initLightbox() {
    // Create lightbox DOM elements if not already present
    let overlay = document.getElementById('lightboxOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'lightboxOverlay';
      overlay.className = 'lightbox-overlay';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.innerHTML = `
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Schließen">&times;</button>
          <img class="lightbox-img" src="" alt="Vergrößerte Ansicht">
          <p class="lightbox-caption"></p>
        </div>
      `;
      document.body.appendChild(overlay);

      const closeBtn = overlay.querySelector('.lightbox-close');
      const closeLightbox = () => {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
      };

      closeBtn.addEventListener('click', closeLightbox);
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.classList.contains('lightbox-content')) {
          closeLightbox();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
          closeLightbox();
        }
      });
    }

    // Attach click listener to all zoomable images
    document.querySelectorAll('.zoomable-img, .img-zoomable').forEach((img) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        const modalImg = overlay.querySelector('.lightbox-img');
        const caption = overlay.querySelector('.lightbox-caption');
        modalImg.src = img.src;
        modalImg.alt = img.alt || '';
        caption.textContent = img.alt || '';
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
})();
