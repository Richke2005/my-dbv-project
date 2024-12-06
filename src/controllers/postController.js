const Controller = require("./controller.js");
const PostService = require("../services/postService.js");

const postService = new PostService();

class PostController extends Controller {
    constructor(){
        super(postService);
    }
}

module.exports = PostController;