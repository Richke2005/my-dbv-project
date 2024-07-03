const Controller = require('./controller.js');
const FatherService = require('../services/fatherServices.js');

const fatherServices = new FatherService();

class FatherController extends Controller{
    constructor(){
        super(fatherServices);
    }

    async getFatherAddress(req, res){
        try{
            const { id } = req.params;
            const fatherAddress = await fatherServices.getAddressById(Number.parseInt(id));
            if(!fatherAddress)
                return res.status(404).send({ message: "Address not found"});

            return res.status(200).send(fatherAddress);
        }catch(error){
            return res.status(500).send({message: error.message});
        }
    }
}

module.exports = FatherController;