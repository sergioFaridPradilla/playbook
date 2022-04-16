

// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
    this.name = name
    this.author = author
    this.language = language
    this.stars = stars
    }
    
    getinfo(){   // es una función que ejecutará cualquier objeto instanciado de esta clase
            return `Repository ${this.name} has ${this.stars} stars \n`

    }
}

console.log("\nEjemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "Sergio Farid", "js", 100)
console.log(myRepo.getinfo())