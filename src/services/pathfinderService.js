const Services = require("./services.js");
const {hash} = require("bcryptjs");

class PathfinderService extends Services{
    constructor(){
        super("pathfinders");
    }

    async postReg(doc){
        const pathfinders = await this.getRegBySearch({email: doc.email})
        if(pathfinders.length > 0){
            throw new Error("Email already registered");
        }

        try {
            const hashedPassword = await hash(doc.password, 8);
            return super.postReg({...doc, password: hashedPassword});
        }catch(error){
            throw new Error("Error while insert user at database");
        }
    }
}

module.exports = PathfinderService;