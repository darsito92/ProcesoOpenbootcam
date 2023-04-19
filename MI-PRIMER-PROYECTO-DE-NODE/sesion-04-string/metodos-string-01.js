//metodos mas utilizados con cadena de caracteres
//como optener la longitud de un string
let str = "hola sou un string";
console.log(str.length)

//obetener partes de cadenas de caracteres
// slice() substring() ,substr() casi obsoleto
let slice_str = str.slice(5,10);
console.log(slice_str);

let substring_str =str.substring(5,10);
console.log(substring_str)

let substr_str= str.substr(5,10);
console.log(substr_str);

//remplazar parte del contenido de una cadena de texto 

let cadena= "hola mi nombre es gorka"
console.log(cadena)
// al utilizar string solo remplaza la primera instancia
console.log(cadena.replace("gorka", "miguel"))

let texto_largo = "tito no es un mono cualquiera. a tito no le dusta trepar por los arboles y odia comer platanos, el prefiere pasear por el bosque, oler las flores y revoger las nueces que se cae de los arboles"
console.log(texto_largo.replace("los", "cinco"))

//al utilizar la expresion regular /g (global), remplazara todas las instancias

console.log(texto_largo.replace(/los/g, "cinco"))


