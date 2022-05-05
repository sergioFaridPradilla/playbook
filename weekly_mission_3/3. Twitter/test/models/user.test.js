const User =  require('./../../app/models/user')

describe("Unit Test for User Class", () => {
    test('Test 1: Create User Objet ', ()=> {
        const user = new User(1, "sergioF","Sergio Farid", "Bio", "dateCreated", "lastUpdate" )

        expect(user.id).toBe(1)
        expect(user.userName).toBe("sergioF")
        expect(user.name).toBe("Sergio Farid")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdate")
    }) 
    
})