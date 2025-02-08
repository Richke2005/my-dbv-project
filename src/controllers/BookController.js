const Controller = require('./controller.js');
const ClassBookService = require('../services/bookService.js');

const classBookService = new ClassBookService();

class BookController extends Controller {
    constructor(){
        super(classBookService);
    }
}

module.exports = BookController;