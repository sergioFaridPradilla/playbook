 const UserService = require("../../app/services/userService")

 describe("Unit Test for userService", ()=> {
     test('Requerimiento 1: Crea un nuevo usuario implementando método stático', ()=> {
         const user = UserService.create( 1, "sergioP", "Sergio")
         expect(user.id).toBe(1)
         expect(user.userName).toBe("sergioP")
         expect(user.name).toBe("Sergio")
         expect(user.bio).not.toBeUndefined()   
     })
     test('Requerimiento 2: Crear método estático getInfo', () =>{
        const user = UserService.create(2, "sergioy", "Sergio")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(2)
        // expect(userInfoList[1]).toBe("sergioy")
        // expect(userInfoList[2]).toBe("Sergio")
        // expect(userInfoList[3]).toBe("Sin bio")
     })
     test('Requeriento 3: Crear un método statico GetAllUsernames', ()=>{
         
        const user1 = UserService.create(1, "sergio1", "Sergio")
        const user2 = UserService.create(2, "sergio2", "Sergio")
        const user3 = UserService.create(3, "sergio3", "Sergio")
        const usrsNames = UserService.getAllUsernames([user1, user2, user3])
        expect(usrsNames).toContain("sergio1")
        expect(usrsNames).toContain("sergio2")
        expect(usrsNames).toContain("sergio3")
     })
 })