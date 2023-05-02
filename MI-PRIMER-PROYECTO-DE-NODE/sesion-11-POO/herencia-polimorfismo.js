// inheritance -Herencia
class persona {
    _nombre
    _edad
    constructor(nombre,edad){
        this._nombre=nombre
        this._edad=edad
    }
    saludo(){
        console.log(`hola mi nombre es ${this._nombre}, tengo ${this._edad} años`)
    }
}
class Desarrollador extends persona{
    constructor(nombre,edad,lenguaje){
    super(nombre,edad)
    this.lenguaje = lenguaje
}
saludo(){// Override sobrescribir funcion 
    super.saludo()
    console.log(`y soy desarrollador de ${this.lenguaje}`)
}
}
const nuevodev = new Desarrollador("Diego",30,"Javascript")
console.log(nuevodev)
nuevodev.saludo()

//polimorfismo => varias formas
