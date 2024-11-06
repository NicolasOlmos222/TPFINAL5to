class Estudiante {
    constructor(nombre, apellido, documento, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.curso = curso;
    }

    getInfo(){
        return "Nombre: " + this.nombre + " " + "Apellido: " + this.apellido + " " + "Documento: " + this.documento + " " + "Curso: " + this.curso
    }

    enviarCorreo(asunto, contenido){
        alert("Correo enviado");
    }
}
