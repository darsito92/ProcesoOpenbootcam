const persona ={
    nombre:"gorka",
    edad:34
}
console.log(persona);
function obtenerDobleEdad(edad){
    return 2*edad
}

const dobleEdad = obtenerDobleEdad(persona.edad)
console.log(dobleEdad);
for (let i=0;i<10;i++){
    const numero =persona.edad+1
    console.log(numero)
}
