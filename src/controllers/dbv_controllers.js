const { desbravadores } = require("../models/index");

class DbvController{
	static getDbv(req, res){
		try{
			const dbvData = desbravadores.find();
			res.status(200).send(dbvData);
		}catch(err){
			res.status(401).send(err.message);
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