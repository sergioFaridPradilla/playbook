
class Logger {
    constructor(name) {
        
        //this is una variable para referenciar el valor del contexto local de esta clase
        this.name = name    //esta variable se le conoce como atributos
    }

    // MÉTODO
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este método

    info(message) {
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }

    // método
    verbose (message){
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

// Esta clase se exporta en este módulo
module.exports = Logger