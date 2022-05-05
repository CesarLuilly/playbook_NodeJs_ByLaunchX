//  //Modelacion.
const issue = {
    title:"Issue",
    reposityNameAssociated:10,
    status:1, 
    numberOfComments:1, 
    labels:"Label from issue", 
    author: "Cesar", 
    dateCreated:Date.now(),
    lastUpdated:Date.now(),
    getTitlleAndAuthor: function(){
        return this.title + this.author
    },
    getGeneralInfo: function(){
        this.reposityNameAssociated
    }
}

console.log("Nombre del issue:" + issue.title);
console.log("Titulo y author:" + issue.getTitlleAndAuthor());
