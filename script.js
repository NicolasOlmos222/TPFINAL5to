var estudiante = new Estudiante("Juan", "Perez", 123456, "Matematicas");
var profesor = new Profesor("Pedro", "Lopez", "Matematicas", "pedro@pedro.com");
var curso = new Curso("5", "B")

function miFuncion() {
    alert(estudiante.getInfo());
}

// Obtener el botón y agregar el evento de clic
const boton = document.getElementById('hola');
boton.addEventListener('click', miFuncion);