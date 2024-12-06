const Service = require("./services.js");

class ClassBookService extends Service{
    constructor(){
        super("class_books");
    }
}

module.exports = ClassBookService;