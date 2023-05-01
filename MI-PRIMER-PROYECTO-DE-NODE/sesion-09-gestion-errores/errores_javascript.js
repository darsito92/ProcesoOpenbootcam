//errores
const miFuncion = val =>{
    if(val==="number"){
        return 2*val
    }
   // return false
    throw new Error ("el valor de ser de tipo numero")
}
//const elDoble = miFuncion("ala")
const numero=8;
try{
    //Codigo que puede fallar
    console.log("esta ejecutandose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
}catch(e){
// en caso de fallar,quiero que se ejecute
console.error(`el valor de e es: ${e}`)
console.error("ERROR!!")    
}finally{
    console.log("esto se va a ejecutar tanto si se produce algun error, como si no existe ninguno")
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
//https://developer.mozilla.org/es/docs/web/JavaScript/Reference/Global_Objects/Error
