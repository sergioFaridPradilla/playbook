
const pullRequest = {
    title : "Playbook contributions",
    branchName : "Sergio Mission",
    dateCreated : "01-04-2022",
    status : "Activo",
    repositoryNameAssociated : "Playbook",
    getStatus : function () {
        return `${this.status}`
    },
    getTitleAndAuthor : function () {
        return `Title is: ${this.title}, and branch name " ${this.branchName}" `   
    }
}

console.log("\nTítulo del pull request: " + pullRequest.title);
console.log("Status del pull request: " + pullRequest.getStatus());
console.log("Autor y título: " + pullRequest.getTitleAndAuthor() + "\n");