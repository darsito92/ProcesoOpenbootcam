//Principales operaciones aritmeticas

let a =3.5;
let b =4.8;

//suma 
console.log(a+b)
//resta 
console.log(a-b)
//multiplicacion 
console.log(a*b)
//division
console.log(a/b)

// representacion de los numeros en cadenas de texto

console.log(typeof a)
let a_s =a.toString();
console.log(a_s);

//redondeo de numeros decimales
let c=3.3;
let d =c*3;
console.log(d)

// .toFixed(x) -Limita  el numero de decimales al valor de x devuelve un string trunca
console.log(d.toFixed(4))
console.log(typeof d.toFixed(4))

let e = 1839.123456789
let f = 2213556153215

console.log(e.toFixed(2))
console.log(f.toFixed(2))

// .toPrecision(x) realiza un redondeo cientifico tomando cifras cignificativas devuelven string

console.log(e.toPrecision(6))
console.log(f.toPrecision(2))