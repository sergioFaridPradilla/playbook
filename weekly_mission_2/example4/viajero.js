 import Explorer from "./explorer.js"

 export default class Viajero extends Explorer{
     constructor(name, username, missiom, cycle){
         super(name, username, missiom)
         this.cycle = cycle
     }

     getGeneralInfo() {
         let nameAndUsername = this.getNameAndUsername()
         return `${nameAndUsername}, Cyclo ${this.cycle} `
     }
 }