import { Estudiante } from "./clases/classEstudiante.js";
import { Profesor } from "./clases/classProfesor.js";
import { Curso } from "./clases/classCurso.js";

//Inicializo clases
var estudiante = new Estudiante("Juan", "Perez", 123456, "Matematicas");
var profesor = new Profesor("Pedro", "Lopez", "Matematicas", "pedro@pedro.com");
var curso = new Curso("5", "B")

//Muestro informacion
alert(estudiante.getInfo());
alert(profesor.getInfo());
alert(curso.getInfo());

//Agrego un objeto estudiante a curso
curso.agregarEstudiante(estudiante);
alert(curso.listarEstudiantes());

//Inicializo otro objeto estudiante y lo guardo
var estudiante = new Estudiante("NATALIA", "Perez", 123456, "Matematicas");
curso.agregarEstudiante(estudiante);
alert(curso.listarEstudiantes());

//Asigno un profesor
curso.asignarProfesor(profesor);
alert(curso.getInfo());
