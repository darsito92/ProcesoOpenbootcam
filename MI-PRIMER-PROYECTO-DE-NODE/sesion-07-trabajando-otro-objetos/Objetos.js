// trabajando con objetos 
const obj ={
    id:4,
    nombre:"Juan",
    apellido:"Gonzales",
    isDeveloper:true,
    libros_favoritos:["el metodo","el codigo de la manifestacion"],
    "4-juegos":[1,2,3,4]
}

console.log(obj.id)
console.log(obj["4-juegos"])

const prop ="isDeveloper"  //acceder a propiedades atraves de variables
console.log(obj[prop])

const obj2 = obj;
console.log(obj2)

obj2.nombre = "iñigo"
console.log(obj2.nombre)
console.log(obj.nombre) // cambia el obj original utiliza el espacio original no lo duplica

 //no pasa lo mismo con las variables
let val1 = 4
let val2 =val1
val2 =6

console.log(val1)
console.log(val2) 

///////////////
const obj3 = {...obj} // forma correcta para cambiar datos solo en nuevo obj

obj3.nombre = "Diego"
console.log(obj.nombre)
console.log(obj3.nombre)

///

// como ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
    {titulo: "lo que el viento se llevo", anyo:1943},
    {titulo: "Titanic", anyo:1997},
    {titulo: "Moana", anyo:2016},
    {titulo: "El efecto mariposa", anyo:2004},
    {titulo: "Ted", anyo:2012}
]
console.log(listaPeliculas)
// .sort() muta valor de la lista original
listaPeliculas.sort((a,b)=>a.anyo-b.anyo)

