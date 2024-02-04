const { desbravadores } = require("../models/");
const { dbvSearch } = require("../services/searches/");

class DbvController{
	static async getDbv(req, res, next){
		try{
			const dbvData = await desbravadores.find();
			res.status(200).send(dbvData);
		}catch(error){
			next(error);
		}
	}

	static async getDbvById(req, res, next){
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
			next(error)
		}
	}

	static async getDbvBySearch(req, res, next){
		try{
			const parameters = req.query;
			const search = dbvSearch(parameters);

			if(search){
				const apiSearch = await desbravadores.find(search);
				res.status(200).send(apiSearch);
			}else{
				res.status(200).send([]);
			}

		}catch(error){
			next(error);
		};
	}

	static async postDbv(req, res, next){
		try{
			const dbvData = new desbravadores(req.body);
			await dbvData.save();

			res.status(201).send({message: `${dbvData} created successfully`});
		}catch(error){
			next(error)
		}
	}

	static async putDbv(req, res, next){
		try{
			const id = req.params.id;
			const updatedDbv = await desbravadores.findByIdAndUpdate(id, {$set: req.body});
			if(updatedDbv !== null){
				res.status(200).send({message: `${updatedDbv} updated successfully`});
			}else{
				res.status(401).send({message: `dbv wih id ${id} was not found`});
			}
		}catch(error){
			next(error)
		}
        
	}

	static async deleteDbv(req, res, next){
		try{
			const id = req.params.id;

			const deletedDbv = await desbravadores.findByIdAndDelete(id);
			if(deletedDbv !== null){
				res.status(200).send({message: `${deletedDbv} deleted successfully`});
			}else{
				res.status(401).send({message: `dbv wih id ${id} was not found`});
			}
		}catch(error){
			next(error)
		}
	}
}

module.exports = DbvController;