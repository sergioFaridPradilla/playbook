 const UserService = require("./../../app/models/UserService")

 describe("Unit Test for userService Class", ()=> {
     test('Requerimiento 1: Crea un nuevo usuario implementando método stático', ()=> {
         const user = userService.create( 1, "sergioP", "Sergio")
         expect(user.id).toBe(1)
         expect(user.username).toBe("sergioP")
         expect(user.name).toBe("Sergio")
         expect(user.bio).not.toBeUndefined()
     })
 })