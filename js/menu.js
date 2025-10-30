const openMenu = document.getElementById('openMenu');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', () => {
  menu.classList.add('open-menu');
  closeMenu.style.display = 'block';
  openMenu.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open-menu');
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none'
})

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    // Quitar clase 'activo' de todos los <a>
    links.forEach(l => l.classList.remove('activo'));

    // Agregar clase 'activo' al <a> clickeado
    link.classList.add('activo');
  });
});