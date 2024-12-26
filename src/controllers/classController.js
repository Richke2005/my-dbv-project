const Controller = require('./controller.js');
const ClassService = require('../services/classService.js');

const classService = new ClassService();

class ClassController extends Controller{
    constructor(){
        super(classService);
    }

    async getClassPathfinders(req, res){
        try {
            const { id } = req.params;
            const classResponse = await this.entityService.getPathfindersByClassId(id);
            return res.status(200).send(classResponse);
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}

module.exports = ClassController;