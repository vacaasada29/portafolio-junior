const miNombre = "Hola soy, Junior Niño Ponce";
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