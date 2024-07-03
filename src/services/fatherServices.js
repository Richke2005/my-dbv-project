const Service = require("./services.js");

class FatherService extends Service{
    constructor(){
        super("Father");
    }

    async getAddressById(fatherId){
        return super.getDataById(fatherId)
        .then( async (father)=>{
            return {
                id: father.id,
                name: father.father_name,
                address: await father.getFatherAddress({
                    attributes: ["mother_key", "street", "number", "cep"]
                })
            }
        });
    }
}

module.exports = FatherService;