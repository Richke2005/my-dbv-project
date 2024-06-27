const Controller = require("./controller.js");
const PathfinderService = require("../services/pathfinderService.js");

const pathfinderService = new PathfinderService();

class PathfinderController extends Controller {
    constructor(){
        super(pathfinderService);
    }

    async getPathfinderParents(req, res){
        try{
            const { id } = req.params;
            const pathfindersParents = await pathfinderService.getParentsByPathfinderId(id);
            if(!pathfindersParents)
                return res.status(404).send({message: "Pathfinder do not exists"});
            return res.status(200).send(pathfindersParents);
        }catch(error){
            return res.status(500).send({message: error.message});
        }
    }
}

module.exports = PathfinderController;