
// Mobile Navigation
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Automatic Copyright Year
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// Photo Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

// Support both photo button classes
document.querySelectorAll('.image-button, .photo-view').forEach(button => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = button.dataset.image;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

// Close Lightbox
function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

// Close with Escape key
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});
