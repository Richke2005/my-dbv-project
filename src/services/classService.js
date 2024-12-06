const Service = require("./services.js");

class ClassService extends Service{
    constructor(){
        super("classes");
    }
}

module.exports = ClassService;