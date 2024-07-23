const Services = require('./services');

class AddressService extends Services{
    constructor(){
        super("ParentAddress");
    }

    async insertAddress(address){
        return await super.createNewReg(address, {
            fields: ['mother_key', 'father_key', 'street', 'number', 'cep']
        })
    }
}

module.exports = AddressService;