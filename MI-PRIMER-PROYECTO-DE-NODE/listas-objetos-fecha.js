//listas, array o arreglo
const lista=[1,"hola",true, null]
const lista2= new Array(1,"hola",true, null);
const lista3=new Array(3);
lista3[0]="soy el primer elemento posicion 0"
const lista4 =[lista,lista2]

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);
//objetos
const movil={
    altura:10,
    anchura:5,
    marca:"xiaomi",
    isWhite:false,
    contacto:["gorka", "martin","diego"],
    tarjeta:{
        marca:"sandisk",
        almacenamiento:32
    }

}
movil.anyi=2019;

console.log(movil.contacto);
console.log(movil.tarjeta.marca);
console.log(movil.anyi);
//fechas
//librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);
const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);
const fecha_valores = new Date(2022,0,15);
console.log(fecha_valores);


const dia = ahora.getDate();

const mes = ahora.getMonth()+1;

const anyo = ahora.getFullYear();

console.log(dia,mes,anyo)
