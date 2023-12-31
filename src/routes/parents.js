const { Router }= require("express");
const ParentsController = require("../controllers/parents_controller");

const router = Router();

router.get("/parents", ParentsController.getParents)
	.get("/parents/:id", ParentsController.getParentsById)
	.post("/parents", ParentsController.postParents)
	.put("/parents/:id", ParentsController.putParents)
	.delete("/parents/:id", ParentsController.deleteParents);


module.exports = router;