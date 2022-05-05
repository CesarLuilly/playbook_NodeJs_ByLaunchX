//  //Modelacion de objetos.
const pullRequest = {
    title: "Modelacion de objetos",
    branchName: "modelacion", 
    dateCreated: Date.now(),
    status: "Pull Request",
    repositoryNameAssociated: "https://github.com/CesarLuilly/playbook_NodeJs_ByLaunchX",
    getStatus: function(){
        return this.status
    },
    getGeneralInfo:function(){
        return this.title + this.branchName
    }
}

console.log("Nombre del Pull request" + pullRequest.title);
console.log("GeneralInfo" + pullRequest.getGeneralInfo());
