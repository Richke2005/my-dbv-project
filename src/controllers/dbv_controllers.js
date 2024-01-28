const { desbravadores } = require("../models/index");

class DbvController{
	static async getDbv(req, res, next){
		try{
			const dbvData = await desbravadores.find();
			res.status(200).send(dbvData);
		}catch(error){
			next(error);
		}
	}

	static async getDbvById(req, res){
		try{
			const id = req.params.id;
			const searchedDbv = await desbravadores
				.findById(id)
				.populate("parents");

			if(searchedDbv){
				res.status(200).send(searchedDbv);
			}else{
				res.status(401).send({message: `dbv with id ${id} not founded`});
			}

		}catch(error){
			res.status(401).send(error.message);
		}
	}

	static async postDbv(req, res){
		try{
			const dbvData = new desbravadores(req.body);
			await dbvData.save();

			res.status(201).send({message: `${dbvData} created successfully`});
		}catch(error){
			res.status(401).send(error.message);
		}
	}

	static async putDbv(req, res){
		try{
			const id = req.params.id;
			const updatedDbv = await desbravadores.findByIdAndUpdate(id, {$set: req.body});
			if(updatedDbv !== null){
				res.status(200).send({message: `${updatedDbv} updated successfully`});
			}else{
				res.status(401).send({message: `dbv wih id ${id} was not found`});
			}
		}catch(error){
			res.status(401).send(error.message);
		}
        
	}

	static async deleteDbv(req, res){
		try{
			const id = req.params.id;

			const deletedDbv = await desbravadores.findByIdAndDelete(id);
			if(deletedDbv !== null){
				res.status(200).send({message: `${deletedDbv} deleted successfully`});
			}else{
				res.status(401).send({message: `dbv wih id ${id} was not found`});
			}
		}catch(error){
			res.status(401).send(error.message);
		}
	}
}

module.exports = DbvController;