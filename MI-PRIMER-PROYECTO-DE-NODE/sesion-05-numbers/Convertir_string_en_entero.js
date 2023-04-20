// operadores .valueOf() -obtener valores numericos a partir de literales
let a =2;
let b = new Number(3)

console.log(a);
console.log(b)
console.log(a+b)
console.log(b.valueOf());

let str =new String("hola soy un string");
console.log(str)
console.log(str.valueOf())

// NaN (not a number) -Infinity
let n = Number("adios");
console.log(n)
console.log(isNaN(n))

let numerador =19;
let divisor = 0;
let divisor_2 = 0;

console.log(numerador/divisor)
console.log(numerador/divisor_2)

//Como convertir los string a valores numericos con Number , parseInt y parseFloat

let numero ="5.89";
let num2 =17.2;

console.log(typeof numero);
console.log(numero +num2); //error de concepto
console.log(Number(numero)+ num2);

//parse significa convertir Int devuelve entero float decimales

console.log(parseInt(numero))
console.log(parseFloat(numero))

let num3 =4;

console.log(parseInt(num3))
console.log(parseFloat(num3))

// Numeros hexadecimales(base 16) por la forma que se guardan los datos 

let numHex = "0x3a5b7"
console.log(parseInt(numHex,16))

//Obtener los valores maximo y minimo en Javascript // epsilon es el minimo valor que hay entre un numero


let min_precision = Number.EPSILON;
let min_valor_Js = Number.MIN_VALUE;
let max_valor_Js = Number.MAX_VALUE;

console.log(min_precision)
console.log(min_valor_Js)
console.log(max_valor_Js);