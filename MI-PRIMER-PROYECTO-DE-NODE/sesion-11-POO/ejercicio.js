class Estudiante{
    nombre;
    asisgnaturas = ["Javascript","HTML","CSS"]
    constructor(nombre){
        this.nombre=nombre
    }
        obtenDatos() {
       return {
        nombre:this.nombre,
        asignatura:this.asisgnaturas
       }  
}
}

const estudiante1 = new Estudiante("Diego")
console.log(estudiante1.obtenDatos())
