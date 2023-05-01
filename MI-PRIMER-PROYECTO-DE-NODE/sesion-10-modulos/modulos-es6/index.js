//import {suma,eleva, nombre} from './modulos/matematicas.js'
// const sum =suma(4,12)
// console.log(sum)
import * as moduloMatematicas from './modulos/matematicas.js'
import getAutor from './modulos/literatura.js';
const nom = moduloMatematicas.nombre
console.log(nom);
const sum =moduloMatematicas.suma(4,12)
console.log(sum)
 console.log(getAutor());
