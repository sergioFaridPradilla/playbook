
class Issue{
    constructor( title, repositoryNameAssociated, status, numberOfComments,
        labels, author, dateCrated, lastUpdate) {
            this.title = title,
            this.repositoryNameAssociated = repositoryNameAssociated,
            this.status = status,
            this.numberOfComments = numberOfComments,
            this.labels = labels,
            this.author = author,
            this.dateCrated = dateCrated,
            this.lastUpdate
        }

        getTitleAndAuthor(){
            return `El title: ${this.title} and author ${this.author}`
        }

        getGeneralInfo(){
            return `Create date is  ${this.dateCrated} and status ${this.status} and have ${this.numberOfComments} coments`
        }
}

const errorJest = new Issue("Configurar línea del json para jest", "Problemas con JEST", "Activo", 19, ["JEST", "JSON", "Configurar"], "Sergio", "12-04-2022", "14-04-2022")
console.log(errorJest);
console.log(errorJest.getGeneralInfo());
console.log(errorJest.getTitleAndAuthor());