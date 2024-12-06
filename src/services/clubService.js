const Services = require("./services.js");

class ClubService extends Services{
    constructor(){
        super("clubs");
    }
}

module.exports = ClubService;