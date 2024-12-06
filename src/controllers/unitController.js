const Controller = require("./controller.js");
const UnitService = require("../services/unitService.js");

const unitService = new UnitService();

class UnitController extends Controller {
    constructor(){
        super(unitService);
    }
}

module.exports = UnitController;