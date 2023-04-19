//metodos cadenas de texto parte 3
// https://regexr.com

let texto_largo = "tito no es un mono cualquiera. a tito no le dusta trepar por los arboles y odia comer platanos, el prefiere pasear por el bosque, oler las flores y revoger las nueces que se cae de los arboles"

console.log(texto_largo.match(/no/g))
//nos devuelve un booleano para verificar si en la cadena existe la palabra que buscamos
console.log(texto_largo.includes("prefiere"))
// saber si un texto empieza con una palabra letra o frase 
console.log(texto_largo.startsWith("tito"))
// saber si un texto terminacon una palabra letra o frase 
console.log(texto_largo.endsWith("arboles"))