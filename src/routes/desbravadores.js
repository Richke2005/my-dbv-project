const { Router } = require("express");
const { DbvController } = require("../controllers/");


const router = Router();

router
	.get("/desbravadores", DbvController.getDbv)
	.get("/desbravadores/search", DbvController.getDbvBySearch)
	.get("/desbravadores/:id", DbvController.getDbvById)
	.post("/desbravadores", DbvController.postDbv)
	.put("/desbravadores/:id", DbvController.putDbv)
	.delete("/desbravadores/:id", DbvController.deleteDbv);

module.exports = router;