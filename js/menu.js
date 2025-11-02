const openMenu = document.getElementById('openMenu');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

const navLinks = document.querySelectorAll('.nav-link');

// 👉 Abrir menú
openMenu.addEventListener('click', () => {
  menu.classList.add('open-menu');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

// 👉 Cerrar menú
closeMenu.addEventListener('click', () => {
  menu.classList.remove('open-menu');
  closeMenu.style.display = 'none';
  openMenu.style.display = 'block';
});