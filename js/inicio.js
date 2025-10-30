const miNombre = "Junior Niño Ponce";
const miEspecialidad = "Desarrollador Front-End";

let i = 0;
let j = 0;

function escribirNombre() {
  if (i < miNombre.length) {
    document.getElementById('miNombre').innerHTML += miNombre.charAt(i);
    i++;
    setTimeout(escribirNombre, 150);
  } else {
    setTimeout(escribirEspecialidad, 500);
  }
}

function escribirEspecialidad() {
  if (j < miEspecialidad.length) {
    document.getElementById('miEspecialidad').innerHTML += miEspecialidad.charAt(j);
    j++;
    setTimeout(escribirEspecialidad, 100);
  }
}

escribirNombre();




/* seccion de adivinar mis habilidades */
const habilidades = {
  html: "HTML",
  css: "css",
  js: "JavaScript",
  react: "React JS",
  nodejs: "Node JS",
  bootstrap: "Bootstrap",
  sass: "SASS",
  npm: "NPM",
  vscode: "VS Code",
  git: "Git",
  github: "GitHub",
  mysql: "MySQL"
};

const mostrarHabilidad = document.getElementById('mostrarHabilidad');

document.querySelectorAll('.btn__habilidad').forEach((btnHabilidad) => {
  btnHabilidad.addEventListener('click', () => {
    const id = btnHabilidad.id.trim();
    mostrarHabilidad.textContent = habilidades[id] || ""
  });
});

/* seccion de animacion de las imagenes de proyecots */
const imgProyecto = document.querySelectorAll('.proyecto__imagen img');

// Activar una imagen y desactivar las demás
imgProyecto.forEach(img => {
  img.addEventListener('click', (e) => {
    e.stopPropagation(); // evita que el click se propague al document

    imgProyecto.forEach(otherImg => {
      if (otherImg !== img) {
        otherImg.classList.remove('active');
      }
    });

    img.classList.toggle('active');
  });
});

// Si haces clic en cualquier parte del documento, se quitan todas las activas
document.addEventListener('click', () => {
  imgProyecto.forEach(img => img.classList.remove('active'));
});

/* seccion de habilidades slider */
const slides = document.querySelector('.habilidades__slides');
const nextBtn = document.getElementById('nextHabilidad');
const prevBtn = document.getElementById('prevHabilidad');
let index = 0;

nextBtn.addEventListener('click', () => {
  if (index < 1) {
    index++;
    slides.style.transform = 'translateX(-50%)';
  }
  actualizarBotones();
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    slides.style.transform = 'translateX(0)';
  }
  actualizarBotones();
});

function actualizarBotones() {
  const colorActivo = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color-dark')
    .trim();

  // resetear colores
  nextBtn.style.color = '';
  prevBtn.style.color = '';

  // marcar el botón activo
  if (index === 0) prevBtn.style.color = colorActivo;
  if (index === 1) nextBtn.style.color = colorActivo;
}

// ✅ color por defecto al inicio
actualizarBotones();
