//metodos de cadenas de texto parte 2

let input="Escorpio"
let db = "escorpio"

console.log(input=== db)

// metodos toLowerCase() todo en minuscula - toUpperCase() todo en mayuscula
console.log(input.toLowerCase())
console.log(input.toUpperCase())
//casos especifico otros idiomas toLocaleLowercase() ej turko
console.log(input.toLowerCase()===db.toLowerCase())
// formas de concatenar dos cadenas de caracteres
let str_1= "hola soy la primera cadena."
let str_2= "y yo soy la segunda cadena"
console.log(str_1.concat(" ",str_2))
console.log(str_1+" "+str_2)
console.log (`${str_1} ${str_2} `)

// todos los espacios pro el inicio y final

let str_3 = "    hola soy un string con espacios al final.   "
console.log(str_3.length)
//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//obtener la letra que hay en sierta posicion se puede tratar como lista

let str_4 ="hola soy el string numero 4"
console.log(str_4.charAt(5))
console.log(str_4[5])

// se puede obtener la posicion de una palabra dentro de una cadena
let str_5="hola soy gorka y me gusta el surf mi nombre es gorka"
console.log(str_5.indexOf("gorka"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("gorka"))