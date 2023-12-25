const { Router } = require("express");
const DbvController = require("../controllers/dbv_controllers");


const router = Router();

router
	.get("/desbravadores", DbvController.getDbv)
	.post("/desbravadores", function (req, res){
		res.status(200).send({message: "this is the post route dbv successful"});
	})
	.put("/desbravadores", function (req, res){
		res.status(200).send({message: "this is the put route dbv successful"});
	})
	.delete("/desbravadores", function (req, res){
		res.status(200).send({message: "this is delete route dbv successful"});
	});

module.exports = router;