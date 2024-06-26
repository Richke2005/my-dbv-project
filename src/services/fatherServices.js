const Service = require("./services.js");

class FatherService extends Service{
    constructor(){
        super("Father");
    }
}

module.exports = FatherService;