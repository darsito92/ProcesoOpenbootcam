// trabajando con fechas
const fecha =new Date()
console.log(fecha)

// atencion- los meses inicializan en 0 (0- enero, 11- diciembre)
const fecha2 = new Date(1987,10,20,1,23,52,192)
console.log(fecha2)

const fecha3 = new Date(-100000000000)// milisegundos
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)


console.log(fecha<fecha2)

const fecha5 = new Date(1987,10,20,1,23,52,192)

console.log(fecha5 ===fecha2) // ERROR no se puede comparar fechas de esta manera

// .getTime() transforma fecha a milisegundos
console.log(fecha2.getTime())

console.log(fecha2.getTime()===fecha5.getTime())


///// Obtener dia mes y año de una fecha
//obeter el dia .getDate()
console.log(fecha2.getDate())
//obeter el mes .getMonth()
console.log(fecha2.getMonth()+1)
//obeter el año .getFullYear()
console.log(fecha2.getFullYear())

// .toLocaleDateString()
console.log(fecha2.toLocaleDateString()) //dd/mm/yyyy
console.log(fecha2.toLocaleDateString("en-GB")) //dd/mm/yyyy
console.log(fecha2.toLocaleDateString("en-US")) //mm/dd/yyyy