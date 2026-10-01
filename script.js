document.documentElement.classList.add('js');

// Menu mobile
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
const setMenu = (open) => {
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
};
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', (e) => { if (e.target.tagName === 'A') setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Aparecer suavemente ao rolar a página
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('show'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el, i) => {
    el.style.transitionDelay = el.classList.contains('card') ? `${(i % 3) * 70}ms` : '0ms';
    io.observe(el);
  });
} else {
  items.forEach((el) => el.classList.add('show'));
}