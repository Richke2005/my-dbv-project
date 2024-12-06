const Controller = require("./controller.js");
const ClubService = require("../services/clubService.js");

const clubService = new ClubService();

class ClubController extends Controller {
    constructor(){
        super(clubService);
    }
}

module.exports = ClubController;