const Services = require("./services.js");

class PostService extends Services{
    constructor(){
        super("posts");
    }
}

module.exports = PostService;