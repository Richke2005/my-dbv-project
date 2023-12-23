class DbvControler{
	static getDbv(req, res){
		res.status(200).send({message: "get in dbv"});
	}
}

module.exports = DbvControler;