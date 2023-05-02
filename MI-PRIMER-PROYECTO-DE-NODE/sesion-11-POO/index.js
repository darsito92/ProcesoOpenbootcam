const persona ={
    nombre:"gorka",
    edad:34,
    isDeveloper:true,
    saludo: function(){
        console.log("hola")
    }
}
console.log(persona)
persona.saludo()
const otra_persona ={
    nombre:"Miguel",
    edad:15,
    isDeveloper:false,
    saludo: function(){
        console.log("hola")
    }
}

// funcion factory
const creaPersona =(nombre,edad, isDeveloper)=>{
    return{
        nombre, //es igual a nombre: nombre
        edad,
        isDeveloper,
        saludo:function(){
            console.log("hola")
        }
    }
}
const nueva_persona= creaPersona("juan",23,true)
console.log(nueva_persona);

const nueva_persona2= creaPersona("Maria",44,false)
console.log(nueva_persona2);