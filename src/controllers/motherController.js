const Controller = require('./controller.js');
const MotherService = require('../services/motherService.js');

const motherService = new MotherService();

class MotherController extends Controller {
    constructor(){
        super(motherService);
    }
}

module.exports = MotherController;