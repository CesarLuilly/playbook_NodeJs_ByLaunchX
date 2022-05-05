class Repo{

    constructor(
        name, 
        author, 
        language, 
        numberOfCommits, 
        stars, 
        forks, 
        issues_open, 
        issues_close
        )
    {
        this.name = name 
        this.author = author 
        this.language = language 
        this.numberOfCommits = numberOfCommits 
        this.stars = stars 
        this.forks = forks 
        this.issues_open = issues_open 
        this.issues_close = issues_close            
    }
    get getName(){
        return this.name
    }
    getTotalIssues(){
        return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log(Repo);
console.log(new Repo());