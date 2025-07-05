// Hover dinâmico nos ícones
document.querySelectorAll('.social-icon').forEach(icon => {
  const originalSrc = icon.src;
  const hoverSrc = originalSrc.replace('2.png', '.png');

  icon.addEventListener('mouseover', () => icon.src = hoverSrc);
  icon.addEventListener('mouseout', () => icon.src = originalSrc);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Validação do formulário
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  const rating = document.querySelector('input[name="rating"]:checked');

  if (nome && email && mensagem && rating) {
    alert(`Mensagem enviada com sucesso! Avaliação: ${rating.value} estrela(s)`);
    this.reset();
  } else {
    alert('Por favor, preencha todos os campos, incluindo a avaliação.');
  }
});

// Logotipo
document.getElementById('logo').addEventListener('click', () => {
  alert('Bem-vindo ao CrazyCow! Viva a cultura do skate!');
});

// Swiper.js
const swiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 16 },
    1024: { slidesPerView: 3, spaceBetween: 16 }
  }
});

// Modal
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.swiper-slide img').forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    modal.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
