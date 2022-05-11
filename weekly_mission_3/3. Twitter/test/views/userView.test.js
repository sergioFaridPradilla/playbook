const UserView = require("./../../app/views/userView")

describe('Test for userView', ()=> {
    test("Requerimiento 1: Return an error object when to create a new user with an null payload", ()=>{
        const payload = null
        const result = UserView.createUser(payload)
        https://jestjs.io/docs/using-matchers#srtings
        expect(result.error).toMatch(/payload no existe/)
    })

    test('Requerimiento 2: Return an error object when try to create a new user with a payload with invalid properties', ()=>{
      const payload = {userName: null, name: 12, id: "id" }
      const result = UserView.createUser(payload)
      expect(result.error).toMatch(/necesitan tener un valor válido/)  
    })

    test('Requerimiento 3: Return an error object when try to create a new user with a payload with missing properties', ()=>{
        const payload = {userName: null, name: 12, id: "id" }
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)  
      })

      test('Requerimiento 4: Create a user by a given valid payload', ()=>{
        const payload = {userName: "username", name: "name", id: 12 }
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")  
        expect(result.userName).toBe("username")  
        expect(result.id).toBe(12)  
      })
})