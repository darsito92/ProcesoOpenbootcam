//casos especificos - break, continue
let lista = [1,2,3,4,5,6,7,8]

for (let i = 0; i < lista.length; i++) {
    if(lista[i]===3){
        continue;
    }
    console.log(lista[i])
    if (lista[i]>5){
        break;
    }
    
}

// cual es el ambito de un bucle
// const let solo estas variabrles solo se definen dentro del bucle o bloque 
//var ya no es muy utilizada pero se declara en todo el proyecto de manera global
