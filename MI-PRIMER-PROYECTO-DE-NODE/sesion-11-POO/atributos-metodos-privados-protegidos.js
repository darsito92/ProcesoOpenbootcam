class Persona {
    // Private -> #

    #nombre
    #edad
    // protected -> _ 
    _isDeveloper = true
    constructor(nom,edad){
        this.#nombre=nom
        this.#edad=edad
    }

    saludo(){
        console.log(`mi nombre es ${this.#nombre}, y tengo ${this.#edad}`)
    }
    obtenerNombre(){ // funcion getter ---> nos permite acceder (de forma controlada)a algun atributo protegido
       return this.#nombre
    }
    #obtenerEdad(){
        return this.#edad
    }
    gerEdad(){
        return this.#edad
    }
    setEdad(nuevaedad){
        this.#edad =nuevaedad
    }
}

const persona = new Persona("gorka", 70)
console.log(persona.obtenerNombre())
console.log(persona._isDeveloper)
persona.saludo()

//getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.gerEdad()
console.log(edad)
//setter -> metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
//quiero cambiar la edad de la persona
persona.setEdad(15)
console.log(persona.gerEdad())