class Curso {
    constructor(año, division) {
        this.año = año;
        this.division = division;
        this.listaEstudiantes = [];
        this.profesor = "";
    }

    getInfo(){
        if (this.profesor == ""){
            return "Año: " + this.año + " " + "Division: " + this.division
        }
        else {
            return "Año: " + this.año + " " + "Division: " + this.division + " " + "Profesor: " + this.profesor.nombre
        }
    }

    agregarEstudiante(estudiante){
        this.listaEstudiantes.push(estudiante);
    }

    eliminarEstudiante(estudiante){
        for (let i = 0; i < this.listaEstudiantes.length; i++){
            if (this.listaEstudiantes[i] == estudiante){
                this.listaEstudiantes.delete(i);
            }
        }
    }

    listarEstudiantes(){
        var cadena = "";
        for (let i = 0; i < this.listaEstudiantes.length; i++){
            cadena += this.listaEstudiantes[i].nombre + "\n";
        }
        return cadena;
    }

    asignarProfesor(profesor){
        this.profesor = profesor;
    }
}