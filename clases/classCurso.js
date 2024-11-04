export class Estudiante {
    constructor(año, division) {
        this.año = año;
        this.division = division;
        this.curso = [];
        this.profesor = "";
    }

    getInfo(){
        if (this.profesor == ""){
            return this.anio, this.division, this.curso, "Profesor no asignado";
        }
        else {
            return this.anio, this.division, this.curso, this.profesor;
        }
    }

    enviarCorreo(asunto, contenido){
        alert("Correo enviado");
    }
}