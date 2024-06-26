class Controller{
    constructor(service){
        this.service = service;
    }

    async getAll(req, res){
        try{
            const data = await this.service.getAllAtData();
            return res.status(200).send(data);
        }catch(err){
            return res.status(500).send({message: err.message});
        }
     
    }

    async getById(req, res){
        try{
            const { id } = req.params;
            const data = await this.service.getDataById(Number.parseInt(id));
            return res.status(200).send(data);
        }catch(error){
            return res.status(500).send({message: error.message});
        }
    }

    async postData(req, res){
        try{
            reg = req.body;
            const data = await this.service.createNewReg(reg);
            return res.status(201).send(data);
        }catch(error){
            return res.status(500).send({message: error.message});
        }
    }

    async updateData(req, res){
        try{
            const { id } = req.params;
            const updatedData = req.body;
            const data = await this.service.updateReg(updatedData, Number.parseInt(id));
            return res.status(200).send(data);
        }catch(error){
            return res.status(500).send({message: error.message});
        }
    }

    async deleteData(req, res){
        try{
            const { id } = req. params;
            const data = await this.service.deleteReg(Number.parseInt(id));
            return res.status(200).send(data);
        }catch(error){
            return res.status(500).send({message: error.message});
        }
    }
}

module.exports = Controller;