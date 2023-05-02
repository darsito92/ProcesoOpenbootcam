class persona{
    nombre;
    edad;
    isDeveloper;
    constructor(nombre,edad,isDeveloper){
        this.nombre=nombre
        this.edad=edad
        this.isDeveloper=isDeveloper
    }

    saludo(){
        console.log(`hola mi nombre es ${this.nombre}, tengo ${this.edad}`)
    }
}

const nueva_persona = new persona("gorka",34,true)
console.log(nueva_persona);
nueva_persona.saludo()

let numero = 60 //inicializar
let persona_2 = new persona("maria",34,false)
console.log(typeof persona_2);
console.log(persona_2 instanceof persona)