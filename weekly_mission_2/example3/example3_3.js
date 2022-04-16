

// Ejemplo 3: Instanciar un objeto con atributos
class Student {
    // El constructor nos permite instanciar un objeto y
    // asignarle atributos, this nos ayuda a realizar esto.
    constructor (name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}
// Creaar un objeto de la case Student (esto se le llama instanciación)
const carloStudent = new Student("Sergio", 45, [ "NodeJS", "Python"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(carloStudent)
