var estudiante = new Estudiante("Juan", "Perez", 123456, "Matematicas");
var profesor = new Profesor("Pedro", "Lopez", "Matematicas", "pedro@pedro.com");
var curso = new Curso("5", "B")


function mostrarSeccion(seccionId) {
    if (seccionId == "estudiante"){
        document.getElementById("estudiante").style.display = "block";
        document.getElementById("profesor").style.display = "none";
        document.getElementById("curso").style.display = "none";
    } else if (seccionId == "profesor"){
        document.getElementById("estudiante").style.display = "none";
        document.getElementById("profesor").style.display = "block";
        document.getElementById("curso").style.display = "none";
    } else{
        document.getElementById("estudiante").style.display = "none";
        document.getElementById("profesor").style.display = "none";
        document.getElementById("curso").style.display = "block";
    }
}
