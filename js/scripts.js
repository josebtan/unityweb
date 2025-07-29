// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  // ===== Menú Hamburguesa =====
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu   = document.querySelector('.nav-menu');
  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // ===== Smooth Scroll =====
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
        navMenu.classList.remove('open');
      }
    });
  });

  // ===== Rotador de fondos en .hero =====
  const hero = document.querySelector('.hero');
  if (hero) {
    const backgrounds = [
      'assets/hero-bg-light.png',
      'assets/hero-gladiador.png',
      'assets/hero-momia.png'
    ];
    let bgIndex = 0;
    backgrounds.forEach(src => new Image().src = src);
    hero.style.backgroundImage = `url('${backgrounds[0]}')`;
    setInterval(() => {
      bgIndex = (bgIndex + 1) % backgrounds.length;
      hero.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
    }, 8000);
  }

  // ===== Slider de Jefes =====
  const slides     = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let slideIndex   = 0;
  function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  }
  if (slides.length && prevButton && nextButton) {
    showSlide(slideIndex);
    prevButton.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    });
    nextButton.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    });
    setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 6000);
  }

  // ===== Modal de Tutoriales =====
const modal       = document.getElementById('tutorial-modal');
const modalTitle  = document.getElementById('modal-title');
const modalBody   = document.getElementById('modal-body');
const closeButton = document.querySelector('.modal-close');

// Función para abrir modal con contenido
function openTutorialModal(card) {
  const title   = card.querySelector('h3').innerText;
  const details = card.querySelector('.details').innerHTML;
  modalTitle.innerText   = title;
  modalBody.innerHTML    = details;
  modal.classList.add('open');
}

// Cerrar modal
function closeTutorialModal() {
  modal.classList.remove('open');
  modalBody.innerHTML = '';  // limpia contenido
}

// Click en cada card → abre modal
document.querySelectorAll('.tutoriales .card').forEach(card => {
  card.addEventListener('click', () => {
    openTutorialModal(card);
  });
});

// Cerrar al hacer click en la X
closeButton.addEventListener('click', closeTutorialModal);

// Cerrar al hacer click fuera del contenido
modal.addEventListener('click', e => {
  if (e.target === modal) closeTutorialModal();
});

// Opcional: cerrar con Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeTutorialModal();
  }
});


});
