const { parents } = require("../models/index");

class ParentsController{
	static async getParents(req, res) {
		try {
			const parentsData = await parents.find();
			res.status(200).send(parentsData);
		} catch (error) {
			next(error)
		}
	}

	static async getParentsById(req, res){
		try{
			const id = req.params.id;
			const parentsData = await parents.findById(id);

			if(parentsData){
				res.status(200).send(parentsData);
			}else{
				res.status(401).send({message: `Parents with id ${id} not founded`});
			}

		}catch(error){
			next(error)
		}
	}

	static async postParents(req, res){
		try{
			const parentsData = new parents(req.body);
			await parentsData.save();

			res.status(201).send({message: `${parentsData} created successfully`});
		}catch(error){
			next(error)
		}
	}

	static async putParents(req, res){
		try{
			const id = req.params.id;
			const updatedParent = await parents.findByIdAndUpdate(id, {$set: req.body});
			if(updatedParent !== null){
				res.status(200).send({message: `${updatedParent} updated successfully`});
			}else{
				res.status(401).send({message: `Parents wih id ${id} was not found`});
			}
		}catch(error){
			next(error)
		}
        
	}

	static async deleteParents(req, res){
		try{
			const id = req.params.id;

			const deletedParents = await parents.findByIdAndDelete(id);
			if(deletedParents !== null){
				res.status(200).send({message: `${deletedParents} deleted successfully`});
			}else{
				res.status(401).send({message: `Parents wih id ${id} was not found`});
			}
		}catch(error){
			next(error)
		}
	}
}

module.exports = ParentsController;