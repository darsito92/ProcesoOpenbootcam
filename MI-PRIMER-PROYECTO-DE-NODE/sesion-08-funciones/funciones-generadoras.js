function* generaId(){
    var id=0;
    while(true){
        id++
        if(id===10){
            return id
        }
        yield id // espera hasta que se vuelva  a llamar
    }
}
const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)

console.log(gen.next().value)

console.log(gen.next().value)
console.log(gen.next().value)

console.log(gen.next().value)

console.log(gen.next().value)

console.log(gen.next().value)

console.log(gen.next().value)

console.log(gen.next().value)

console.log(gen.next().value)
