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
/* fin de seccion de animacion de mi nombre y especialidad */





/* seccion de animacion de las imagenes de proyecots */
const imgProyecto = document.querySelectorAll('.proyecto__imagen img');
const proyectoInfo = document.querySelectorAll('.proyecto__info');

// Activación sincronizada
imgProyecto.forEach((img, index) => {
  img.addEventListener('click', (e) => {
    e.stopPropagation();

    // Desactiva todos
    imgProyecto.forEach(otherImg => otherImg.classList.remove('active'));
    proyectoInfo.forEach(info => info.classList.remove('active'));

    // Activa el seleccionado
    img.classList.add('active');
    proyectoInfo[index].classList.add('active');
  });
});

// Cierre global al hacer clic fuera
document.addEventListener('click', () => {
  imgProyecto.forEach(img => img.classList.remove('active'));
  proyectoInfo.forEach(info => info.classList.remove('active'));
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



/* seccion de formulario  */
const form = document.querySelector(".contacto__form");
const mensajeValidar = document.getElementById("mensajeValidarForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita el envío hasta validar

  const nombre = document.getElementById("formNombre").value.trim();
  const telefono = document.getElementById("formTelefono").value.trim();
  const correo = document.getElementById("formCorreo").value.trim();
  const mensaje = document.getElementById("formMensaje").value.trim();

  let error = "";

  // 🚫 VALIDACIONES
  if (!nombre && !telefono && !correo && !mensaje) {
    error = "Debes llenar al menos un campo.";
  } else if (nombre && !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombre)) {
    error = "El nombre solo debe contener letras.";
  } else if (telefono && !/^[0-9+\s-]{6,15}$/.test(telefono)) {
    error = "El teléfono no es válido.";
  } else if (correo && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) {
    error = "El correo no tiene un formato válido.";
  } else if (mensaje && mensaje.length < 5) {
    error = "El mensaje es demasiado corto.";
  }

  // ✅ MOSTRAR ERROR O ENVIAR
  if (error) {
    mensajeValidar.textContent = error;
    mensajeValidar.style.color = "red";
  } else {
    mensajeValidar.textContent = ""; // limpia el texto
    form.submit(); // se envía el formulario
  }
});