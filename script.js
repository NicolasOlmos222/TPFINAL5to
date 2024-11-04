import { Estudiante } from "./clases/classEstudiante.js";
import { Profesor } from "./clases/classProfesor.js";
import { Curso } from "./clases/classCurso.js";



const prueba = new Estudiante("Juan", "Perez", 123456, "Matematicas");

alert(prueba.getInfo());