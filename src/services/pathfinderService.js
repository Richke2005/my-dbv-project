const Services = require("./services.js");

class PathfinderService extends Services{
    constructor(){
        super("Pathfinder");
    }

    //override
    // //make one method to return the parents
    // getAllAtData(){
    //     return super.getAllAtData()
    //     .then(pathfinders => pathfinders
    //         .map(pathfinder => pathfinder.getFather()));
    // }
        
    // }
    //make one take parents by pathfinder method
    // async getParentsByPathfinder(pathfinderId){
    //     const pathfinder = await super.getDataById(pathfinderId);
    //     const listaMatriculas = await pathfinder.getAulasMatriculadas();
    //     return listaMatriculas;
    // }
    //Pessoa.getCursos() existe

}

module.exports = PathfinderService;