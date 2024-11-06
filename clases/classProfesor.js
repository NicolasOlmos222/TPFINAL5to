class Profesor {
    constructor(nombre, apellido, materia, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.materia = materia;
        this.correo = correo;
    }

    getInfo(){
        return "Nombre: " + this.nombre + " " + "Apellido: " + this.apellido + " " + "Materia: " + this.materia + " " + "Correo: " + this.correo
    }

    enviarCorreo(asunto, contenido){
        alert("Correo enviado");
    }
}
