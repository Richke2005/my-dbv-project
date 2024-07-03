const Controller = require('./controller.js');
const MotherService = require('../services/motherService.js');

const motherService = new MotherService();

class MotherController extends Controller {
    constructor(){
        super(motherService);
    }

    async getMotherAddress(req, res){
        try{
            const { id } = req.params;
            const motherAddress = await motherService.getAddressById(Number.parseInt(id));
            if(!motherAddress)
                return res.status(404).send({ message: "Address not found"});

            return res.status(200).send(motherAddress);
        }catch(error){
            return res.status(500).send({message: error.message});
        }
    }
}

module.exports = MotherController;