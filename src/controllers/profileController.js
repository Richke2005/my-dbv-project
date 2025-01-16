const UserService = require('../services/userService.js');

class ProfileController {
    #entityService;
    constructor(){
        this.#entityService = new UserService();
    }

    async getById(req, res){
        try {
            const {userId} = req
            const user = await this.#entityService.getRegById(userId);
            return res.status(200).send(user);
        }catch(error){
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = ProfileController;