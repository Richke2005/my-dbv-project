const Controller = require('./controller.js');
const ClassService = require('../services/classService.js');

const classService = new ClassService();

class ClassController extends Controller{
    constructor(){
        super(classService);
    }
}

module.exports = ClassController;