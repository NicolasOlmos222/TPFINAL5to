export class Estudiante {
    constructor(nombre, apellido, documento, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.curso = curso;
    }

    getInfo(){
        return this.nombre, this.apellido, this.documento, this.curso
    }

    enviarCorreo(asunto, contenido){
        alert("Correo enviado");
    }
}
