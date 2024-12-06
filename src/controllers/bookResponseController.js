const Controller = require("./controller.js");
const BookResponseService = require("../services/bookResponseService.js");

const bookResponseService = new BookResponseService();

class BookResponseController extends Controller{
    constructor(){
        super(bookResponseService);
    }
}

module.exports = BookResponseController;