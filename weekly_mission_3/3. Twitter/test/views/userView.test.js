const UserView = require("./../../app/views/userView")

describe('Test for userView', ()=> {
    test("Requerimiento 1: Return an error object when to create a new user with an null payload", ()=>{
        const payload = null
        const result = UserView.createUser(payload)
        https://jestjs.io/docs/using-matchers#srtings
        expect(result.error).toMatch(/payload no existe/)
    })
})