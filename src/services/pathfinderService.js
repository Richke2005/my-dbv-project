const Services = require("./services.js");

class PathfinderService extends Services{
    constructor(){
        super("Pathfinder");
    }
    //make one take parents by pathfinder method
    // async getParentsByPathfinder(pathfinderId){
    //     const pathfinder = await super.getDataById(pathfinderId);
    //     const listaMatriculas = await pathfinder.getAulasMatriculadas();
    //     return listaMatriculas;
    // }
    //Pessoa.getCursos() existe
}

module.exports = PathfinderService;