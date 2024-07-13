const Services = require("./services.js");

class PathfinderService extends Services{
    constructor(){
        super("Pathfinder");
    }
    //make one method to return the parents
    async getParents(){
        return super.getAllAtData()
        .then(pathfinders => {
            const pathfinderParents = pathfinders.map( async pathfinder => {
                return {
                    pathfinder_name: pathfinder.pathfinder_name,
                    father: await pathfinder.getFather({
                        attributes: ["id", "father_name"]
                    }),
                    mother: await pathfinder.getMother({
                        attributes: ["id", "mother_name"]
                    })
                };
            });
            return Promise.all(pathfinderParents);
        });
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