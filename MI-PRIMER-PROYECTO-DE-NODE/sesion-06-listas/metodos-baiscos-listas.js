//como trabajar con listas arrays vectores o arreglos 
let var1=45
let array =[1,"hola",{id:5},null,false,var1]

console.log(array)

//acceder a los valores de un array atraves de su posicion
//array[indice] => 0,1,2,3,4,5, .....


console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])


//metodos para introducir nuevos valores en nuestros arrays
// .push()  .unshift() => mutan el valor de nuestro array
// valores al final -> Push
array.push("final",45,100,false)
console.log(array)

// valores al principio -> Unshift 
array.unshift("inicio",87,99)
console.log(array)

//metodos para eliminar valores en nuestro array
// .pop()  .shift() => mutan el valor de nuestro array
const array2 =[1,3,"hola",false]
// valores al final -> Pop
array2.pop()
console.log(array2)

//valores al principio -> Shift
array2.shift()
console.log(array2)


//metodo para eliminar modificar o añadir valores en nuestro array
// .splice(x,y,z)
const array3 =[1,2,3,4,5,6]

// Eliminar valores .splice(desde,cantidad de numeros)
array3.splice(2,1)
console.log(array3)

//modificar valores .splice(indice,0,valores)
array3.splice(2,0,"hola")
console.log(array3)

//modificar valores .splice(indice,1,valores)
array3.splice(2,1,3)
console.log(array3)


