console.log('⚡ script.js cargado');

document.addEventListener('DOMContentLoaded', () => {
  // ===== Menú Hamburguesa =====
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu   = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // ===== Slider de Jefes =====
  const slides     = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let slideIndex   = 0;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  }

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

  // ===== Rotador de fondos en .hero =====
  const hero = document.querySelector('.hero');
  if (hero) {
    const backgrounds = [
      'assets/hero-bg-light.png',
      'assets/hero-gladiador.png',
      'assets/hero-momia.png'
    ];
    let bgIndex = 0;

    // Pre-carga de imágenes para evitar parpadeos
    backgrounds.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Imagen inicial
    hero.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;

    // Cada 8 segundos cambia al siguiente fondo
    setInterval(() => {
      bgIndex = (bgIndex + 1) % backgrounds.length;
      hero.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
    }, 8000);
  }
});
