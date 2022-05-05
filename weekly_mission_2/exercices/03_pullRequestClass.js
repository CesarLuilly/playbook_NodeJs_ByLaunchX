class PullRequest{
    constructor(
        title,
        branchName,
        dateCreated,
        status,
        repositoryNameAssociated
        )
    {
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }

    get getTitle(){
        return this.title;
    }
    
    getStatus(){
        return this.status
    }

    getGeneralInfo(){
        return this.title + this.branchName
    }
}

console.log(PullRequest);
console.log(new PullRequest());