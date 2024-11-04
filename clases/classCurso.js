export class Estudiante {
    constructor(año, division) {
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