const boton = document.querySelector(".btn")
//console.log(boton)
boton.addEventListener("click",()=>{
  // alert("se ha hecho click") ventana de texto
  //confirm("estas de acuerdo?") && console.log("ok") //para true
  //confirm("estas de acuerdo?") ? console.log("ok"):console.log("no!") //propuesta ternaria
  const respuesta = confirm("seguro?")
  if(respuesta){
      console.log("estas de acuerdo")
  }else{
      console.log("no estas de acuerdo");
  }
})

const lista = [{
    nombre:"Diego",
    edad:30
},{
    nombre:"Lili",
    edad:29
},
{
    nombre:"raul",
    edad:31
}]

console.table(lista)