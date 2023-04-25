//sets o conjuntos
const array =[1,2,3,4,5,6,"hola",{id:5}]

const miSet = new Set(array)
console.log(array)
console.log(miSet) //no almacenan datos repetidos

// .add()

miSet.add(9)
console.log(miSet)

miSet.add(4)
console.log(miSet) // nos aseura no repetir valores

// .delete()
miSet.delete("hola")
console.log(miSet)

// .clear() limpia todo
// miSet.clear()
// console.log(miSet)

// .has()
// console.log(array.include(2))
console.log(miSet.has(40))

//.size  es una propiedad no un metodo

console.log(miSet.size)// devuelve tamaño del set

miSet.forEach(valor=>{
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet =[...miSet]
console.log(ar_miSet[1])