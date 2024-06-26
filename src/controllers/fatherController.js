const Controller = require('./controller.js');
const FatherService = require('../services/fatherServices.js');

const fatherServices = new FatherService();

class FatherController extends Controller{
    constructor(){
        super(fatherServices);
    }
}

module.exports = FatherController;