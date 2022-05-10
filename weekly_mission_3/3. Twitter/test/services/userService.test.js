 const UserService = require("../../app/services/userService")

 describe("Unit Test for userService", ()=> {
     test('Requerimiento 1: Crea un nuevo usuario implementando método stático', ()=> {
         const user = UserService.create( 1, "sergioP", "Sergio")
         expect(user.id).toBe(1)
         expect(user.userName).toBe("sergioP")
         expect(user.name).toBe("Sergio")
         expect(user.bio).not.toBeUndefined()   
     })
 })