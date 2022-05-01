
class Repo {
    constructor(name, author, language, numbersOfCommits, stars, forks, issues_open, issues_close){
        this.name = name,
        this.author = author,
        this.language = language,
        this.numbersOfCommits = numbersOfCommits,
        this.stars = stars,
        this.forks = forks,
        this.issues_open = issues_open,
        this.issues_close = issues_close
    }

    getTotalIssues() {
        return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const repoSer = new Repo("Serprueba", "Sergio", "JS", 52, "Ejercico 1", "MainCarlos", 6, 45 )
console.log(repoSer);
console.log(repoSer.getGeneralInfo());
console.log(repoSer.getTotalIssues());