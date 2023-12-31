const { Router } = require("express");
const ClassesController = require("../controllers/classes_controller");

const router = Router();

router.get("/classes", ClassesController.getClasses)
	.get("/classes/:id", ClassesController.getClassesById)
	.post("/classes", ClassesController.postClasses)
	.put("/classes/:id", ClassesController.putClasses)
	.delete("/classes/:id", ClassesController.deleteClasses);

module.exports = router;