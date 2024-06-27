const Services = require("./services.js");

class PathfinderService extends Services{
    constructor(){
        super("Pathfinder");
    }

    //override
    // //make one method to return the parents
    // async getAllAtData(){
    //     return super.getAllAtData()
    //     .then(pathfinders => pathfinders
    //         .map(pathfinder => pathfinder.getFather()));
    // }
        
    // }
    //make one take parents by pathfinder method
    
    async getParentsByPathfinderId(pathfinderId){
        return super.getDataById(pathfinderId)
        .then( async (pathfinder) => {
            return {
                pathfinder: pathfinder.pathfinder_name,
                father: await pathfinder.getFather(),
                mother: await pathfinder.getMother()
            }
        });
    }
}

module.exports = PathfinderService;