// Sesion-4 string (cadena de caracteres)

let str_sng = 'hola soy un texto comillas simples';
let str_dbl = "hola soy un texto con comillas doble";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "el otro dia me dijo literalmente 'vota la basura'"
console.log(str_comillas);
let str_comillas_simples = 'el otro dia me dijo literalmente "vota la basura"'
console.log(str_comillas_simples);
let str_comillas_dobles= "el otro dia me dijo literalmente 'vota la basura'"
console.log(str_comillas_dobles);

// comillas invertidas

let str_bk= `hola este es un string con backtick`
console.log(str_bk);

let nombre = "gorka"
let saludo=`hola, ${nombre} bienvenido`

console.log(saludo) 

// plantillas HTML

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`;
console.log(plantilla)

// introduccion de variables en html

let lista = ["Empieza por el por que","el monje que vendio su Ferrari", "el poder del ahora"]