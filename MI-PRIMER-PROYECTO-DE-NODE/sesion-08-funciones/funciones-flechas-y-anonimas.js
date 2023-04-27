// funciones tipo flecha y anonimas

const array =[1,5,6,2,7,12,8,92]
const array2 = array.map(((valor) => valor *2))//indice, arrayOriginal

console.log(array2)

const dobleDelValor = valor => valor *2

console.log(doble(6))
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor)

console.log(array3)

function doble (valor){
    return valor*2
}