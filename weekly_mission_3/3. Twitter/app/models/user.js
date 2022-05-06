
class User {
    constructor( id, userName, name, bio){
        this.id = id,
        this.userName = userName,
        this.name = name,
        this.bio = bio,
        this.dateCreated = new Date(),
        this.lastUpdate = new Date()
    }
    get getId(){
        return this.id
    }
    get getUsername(){
        return this.userName
    }
    get getName(){
        return this.name
    } 
    get getBio(){
        return this.bio
    }
    get getDatecreated(){
        return this.dateCreated
    }
    get getLastUpdate(){
        return this.lastUpdate
    }

    // Setters
    
    set setId(newId){
        this.id = newId
    }

    set setUsername(newUsername){
        this.userName = newUsername
    }

    set setName(newName){
        this.name = newName
    }

    set setBio(newBio){
        this.bio = newBio
    }

}

module.exports = User