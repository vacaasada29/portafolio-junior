// --- ABRIR/CERRAR MENÚ ---
openMenu.addEventListener('click', (e) => {
  menu.classList.add('open-menu');
  closeMenu.style.display = 'block';
  openMenu.style.display = 'none';
  e.stopPropagation(); // Evita que el click se propague al document
});

closeMenu.addEventListener('click', (e) => {
  menu.classList.remove('open-menu');
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
  e.stopPropagation(); // Evita que el click se propague al document
});

// --- CERRAR MENÚ AL HACER CLICK FUERA ---
document.addEventListener('click', (e) => {
  if (
    menu.classList.contains('open-menu') &&
    !menu.contains(e.target) &&
    e.target !== openMenu
  ) {
    menu.classList.remove('open-menu');
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
  }
});



// --- SECCIONES Y OBSERVER ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('activo');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('activo');
        }
      });
    }
  });
}, {
  threshold: 0, // se activa apenas la sección entra en viewport
  rootMargin: "-50% 0px -50% 0px" // detecta cuando la sección está aproximadamente en el centro
});

sections.forEach(section => observer.observe(section));

// --- CLICK EN ENLACES ---
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Quitar activo de todos
    navLinks.forEach(l => l.classList.remove('activo'));
    // Activar el link clickeado
    link.classList.add('activo');

    // Cerrar menú hamburguesa si está abierto (solo móvil)
    menu.classList.remove('open-menu');
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
  });
});
