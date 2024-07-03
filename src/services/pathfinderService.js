const Services = require("./services.js");

class PathfinderService extends Services{
    constructor(){
        super("Pathfinder");
    }
    //make one method to return the parents
    async getParents(){
        return super.getAllAtData()
        .then(pathfinders => pathfinders
            .map(pathfinder => {
                return {
                    pathfinder_name: pathfinder.pathfinder_name,
                    email: pathfinder.email,
                    talents: pathfinder.talents,
                }
            })
        );
    }
    
    async getParentsByPathfinderId(pathfinderId){
        return super.getDataById(pathfinderId)
        .then( async pathfinder => {
            return {
                pathfinder: pathfinder.pathfinder_name,
                father: await pathfinder.getFather(),
                mother: await pathfinder.getMother()
            }
        });
    }
}

module.exports = PathfinderService;