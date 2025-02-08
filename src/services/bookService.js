const Service = require("./services.js");

class BookService extends Service{
    constructor(){
        super("books");
    }
}

module.exports = BookService;