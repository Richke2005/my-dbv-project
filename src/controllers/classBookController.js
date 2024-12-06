const Controller = require('./controller.js');
const ClassBookService = require('../services/classBookService.js');

const classBookService = new ClassBookService();

class ClassBookController extends Controller {
    constructor(){
        super(classBookService);
    }
}

module.exports = ClassBookController;