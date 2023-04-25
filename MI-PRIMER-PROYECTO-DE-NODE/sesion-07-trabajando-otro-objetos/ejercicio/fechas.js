const hoy = new Date()
const nacimiento = new Date(1992, 11, 28)

const comparacion = (hoy > nacimiento)
console.log(comparacion)
const diaNac = nacimiento.getDate()
const mesNac = nacimiento.getMonth() + 1
const anyoNac = nacimiento.getFullYear()