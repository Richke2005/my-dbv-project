const { Router } = require("express");
const DbvControler = require("../controllers/dbv_controlers");


const router = Router();

router
	.get("/desbravadores", DbvControler.getDbv)
	.post("/desbravadores", function (req, res){
		res.status(200).send({message: "this is the post route dbv sucessfull"});
	})
	.put("/desbravadores", function (req, res){
		res.status(200).send({message: "this is the put route dbv sucessfull"});
	})
	.delete("/desbravadores", function (req, res){
		res.status(200).send({message: "this is delete route dbv sucessfull"});
	});

module.exports = router;