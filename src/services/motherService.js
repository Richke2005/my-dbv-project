const Service = require("./services.js");

class MotherService extends Service{
    constructor(){
        super("Mother");
    }

    async getAddressById(motherId){
        return super.getDataById(motherId)
        .then( async (mother)=>{
            return {
                id: mother.id,
                name: mother.mother_name,
                address: await mother.getMotherAddress({
                    attributes: ["father_key", "street", "number", "cep"]
                })
            }
        });
    }
}

module.exports = MotherService;