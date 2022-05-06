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

    test('Requerimiento 3: Agregando getters', () => {
        const user = new User(1, "sergioF","Sergio Farid", "Bio")
        expect(user.getId).toBe(1)
        expect(user.getUsername).toBe("sergioF")
        expect(user.getName).toBe("Sergio Farid")
        expect(user.getBio).toBe("Bio")
        expect(user.getDatecreated).not.toBeUndefined()
        expect(user.getLastUpdate).not.toBeUndefined()
    })

    test('Requerimiento 4: Add setters', ()=>{
        const user = new User(1, "sergioF","Sergio Farid", "Bio")
        user.setId = 2
        expect(user.getId).toBe(2)

        user.setUsername = "sergioFa"
        expect(user.getUsername).toBe("sergioFa")
        
    })

})