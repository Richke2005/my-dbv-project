const Controller = require("./controller.js");
const AddressService = require("../services/addressService.js");

const addressService = new AddressService();

class AddressController extends Controller{
    constructor(){
        super(addressService);
    }
}

module.exports = AddressController;