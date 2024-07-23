const Controller = require("./controller.js");
const AddressService = require("../services/addressService.js");

const addressService = new AddressService();

class AddressController extends Controller{
    constructor(){
        super(addressService);
    }

    async postAddress(req, res){
        try{
            const newAddress = req.body;
            const savedAddress = await addressService.insertAddress(newAddress);
            return res.status(201).send(savedAddress);
        }catch(error){
            return res.status(500).send({message: error.message});
        }
    }
}

module.exports = AddressController;