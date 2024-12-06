const Services = require("./services.js");

class LeadershipService extends Services{
    constructor(){
        super("leaderships");
    }
}

module.exports = LeadershipService;