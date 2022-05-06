const User =  require('./../../app/models/user')

describe("Unit Test for User Class", () => {
    test('Requerimiento 1: Create User Objet ', ()=> {
        const user = new User(1, "sergioF","Sergio Farid", "Bio")

        expect(user.id).toBe(1)
        expect(user.userName).toBe("sergioF")
        expect(user.name).toBe("Sergio Farid")
        expect(user.bio).toBe("Bio")
    }) 
    
    test('Requerimiento 2: Fechas en atributos de user', ()=>{
        const user = new User(1, "sergioF","Sergio Farid", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    })

})