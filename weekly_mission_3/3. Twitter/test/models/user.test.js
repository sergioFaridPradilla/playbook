const User = './../app/models/user'

describe("Unit Test for User Class", () => {
    test('Test 1: ', ()=> {
        const user = new User(1, "sergioF","Sergio Farid", "Bio", "dateCreated", "lastUpdate" )

        expect(user.id).toBe(1)
    }) 
    
} )