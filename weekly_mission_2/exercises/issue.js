

const issue = {
    title : "Comando básicos git",
    repossitoryNameAssociated : "comando básicos",
    status : "Activo",
    numberOfComments : 9,
    labels : ["git", "comandos", "básicos"],
    author : "Sergio",
    dateCrated : "01-04-2022",
    lastUpdate : "11-04-2022",
    getTitleAndAuthor : function() {
        return `This repository is ${this.title} and was created for ${this.author}` 
    },
    getGeneralInfo : function () {
        return `Create date is  ${this.dateCrated} and status ${this.status} and have ${this.numberOfComments} coments`
    }
}

console.log("\nTitulo del Issue: " + issue.title);
console.log("Autor y titulo:" + issue.getTitleAndAuthor());
console.log("Ingormación general" + issue.getGeneralInfo()+ "\n");