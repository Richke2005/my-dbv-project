const { desbravadores } = require("../models/index");

class DbvController{
	static async getDbv(req, res){
		try{
			const dbvData = await desbravadores.find();
			res.status(200).send(dbvData);
		}catch(error){
			res.status(401).send(error.message);
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
				res.status(401).send({message: "Not founded"});
			}

		}catch(error){
			res.status(401).send(error.message);
		}
	}

	// static postDbv(){
	// 	try{

	// 	}catch(err){
	// 		console.error(err.message);
	// 	}
	// }
}

module.exports = DbvController;