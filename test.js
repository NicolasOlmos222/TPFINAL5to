import { Estudiante } from "./clases/classEstudiante.js";
import { Profesor } from "./clases/classProfesor.js";
import { Curso } from "./clases/classCurso.js";



var estudiante = new Estudiante("Juan", "Perez", 123456, "Matematicas");
var profesor = new Profesor("Pedro", "Lopez", "Matematicas", "pedro@pedro.com");
var curso = new Curso("5", "B")

alert(estudiante.getInfo());
alert(profesor.getInfo());
alert(curso.getInfo());


curso.agregarEstudiante(estudiante);
alert(curso.listarEstudiantes());
curso.agregarEstudiante(estudiante);
alert(curso.listarEstudiantes());

curso.asignarProfesor(profesor);
alert(curso.getInfo());
