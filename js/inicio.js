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
    setTimeout(escribirEspecialidad, 100)
  }
}

escribirNombre()