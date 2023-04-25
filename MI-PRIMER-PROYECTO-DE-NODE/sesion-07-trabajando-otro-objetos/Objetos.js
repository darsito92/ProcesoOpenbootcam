const persona = {
    nombre:"diego",
    apellido:"sepulveda",
    edad:30,
    altura:168,
    eresDesarrollador:true
}

const edad = persona.edad
console.log(edad)
const lista = [{...persona},
    {nombre:"lesie",
    apellido:"silva",
    edad:29,
    altura:155,
    eresDesarrollador:false},
    {nombre:"raul",
    apellido:"santillan",
    edad:31,
    altura:183,
    eresDesarrollador:false}]


const newLista = lista.sort((a,b)=> b.edad-a.edad)
console.log(newLista)