//funciones asincronas

function miAsinc(){

    //hace una llamada a una base de datos externa
    //puede darnos algun error
}

const miPromesa = new Promise((resolve,reject)=> {
        const i =math.floor(math.randon()*2)
//si esta todo correcto
if(i!==0){
    resolve()
}else{
    reject()
}
})

//como consumir la promesa

miPromesa
 .then(()=> console.log("se ha ejecutado de forma correcta"))
 .catch(()=> console.log("ERROR"))
 .finally(()=> console.log("Yo me ejecuto siempre"))

 
 // async await