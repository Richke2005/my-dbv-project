const Controller = require("./controller.js");
const PathfinderService = require("../services/pathfinderService.js");

const pathfinderService = new PathfinderService();

class PathfinderController extends Controller {
    constructor(){
        super(pathfinderService);
    }
}

module.exports = PathfinderController;