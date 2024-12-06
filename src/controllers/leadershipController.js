const Controller = require("./controller.js");
const LeadershipService = require("../services/leadershipService.js");

const leadershipService = new LeadershipService();

class LeadershipController extends Controller {
    constructor(){
        super(leadershipService);
    }
}

module.exports = LeadershipController;