//iterar los valores de una lista
const array =["hola",2,5,90,false,undefined]
// forma antigua
for(let i=0;i<array.length;i++){
console.log(array[i])
}

//forma ES6 (mas eficiente) .forEach()
let suma = 0;
const arrayNums =[3,6,2,77,2,3,93,19]
arrayNums.forEach(valor =>{
    suma+=valor;
    console.log(valor)
})
console.log(suma)

// busqueda de un valor dentro de una lista .find()
//quiero encontrar el primer elemento 90

const variable = array.find(valor =>{
    if(valor=== 90){
        return true
    }
})
console.log(variable)

const listaObjetos =[ 
    {nombre: "Leire",edad :35},
    {nombre: "Gorka",edad: 34},
    {nombre: "Miguel",edad: 28},
    {nombre: "Lucia",edad: 3},
    {nombre: "Amaia",edad: 29}
    

]
//forma antigua
// const objeto = listaObjetos.find(o =>{
//     if(o.nombre==="Miguel"){
//         return true
//     }
// })

// forma eficiente
const objeto = listaObjetos.find(o => o.nombre==="Miguel")
console.log(objeto.edad)
//mas eficiente actual
const {edad}= listaObjetos.find(o=> o.nombre === "Miguel")
console.log(edad)
