class Issue{
    constructor(
        title, 
        reposityNameAssociated, 
        status, 
        numberOfComments, 
        labels, 
        author, 
        dateCreated,
        lastUpdated
    ){
        this.title = title
        this.reposityNameAssociated = reposityNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

    get getTitle(){
        return this.title;
    }

    getTitlleAndAuthor(){
        return this.title + this.author
    }

    getGeneralInfo(){
        this.reposityNameAssociated
    }
}

console.log(Issue);
console.log(new Issue());


