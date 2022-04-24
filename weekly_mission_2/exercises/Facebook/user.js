

const user = {

    user: "Sergio",
    userName: "@sergioCamnino",
    age: 35,
    getUserName: function () {
        return `El nombre de usuario es: ${this.userName}`
    },
    getUserAndAge: function () {
        return `${this.user} tiene ${this.age} años.`
    }
}

console.log("\nEl usuario " + user.userName);
console.log(user.getUserName());
console.log("Su nombre y edad son: " + user.getUserAndAge() + "\n");