const User = require('./../models/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

     static getInfo(user){

        return Object.values(user)
    }

    static getAllUsernames(users){
        const usersUsrNames = users.map( user => user.userName)
        return usersUsrNames
    }
}

module.exports = UserService
