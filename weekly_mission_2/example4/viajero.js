 import explorer from "./explorer"

 export default class Viajero extends explorer{
     constructor(name, username, missiom, cycle){
         super(name, username, missiom)
         this.cycle = cycle
     }

     getGeneralInfo() {
         let nameAndUsername = this.getNameAndUsername()
         return `${nameAndUsername}, Cyclo ${this.cycle} `
     }
 }