// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }
  
    get getStudents(){
     return this.students
    }
  
    get getLives(){
     return this.lives
    }
    set setStudents(students){
        this.students = students
    }
    set setlives(lives) {
        this.lives = lives
    }
    
}

console.log("\n" + "Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode = new MissionCommander("Carlos", "NodeJS")

console.log( "\n" + missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives + "\n") // 0 por default

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setlives = 3

console.log("\n" + "El commander tiene # studeents: "+ missionCommanderNode.getStudents) // 0 por default
console.log( "El record de lives son: " + missionCommanderNode.getLives + "\n") // 0 por default