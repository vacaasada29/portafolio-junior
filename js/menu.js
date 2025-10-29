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