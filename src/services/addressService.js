const Services = require('./services');

class AddressService extends Services{
    constructor(){
        super("ParentAddress");
    }
}

module.exports = AddressService;