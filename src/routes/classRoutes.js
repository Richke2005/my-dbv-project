const { Router } = require("express");
const ClassController = require("../controllers/classController.js");

const router = Router();
const classController = new ClassController();

router
.post("/dbv/api/v1/class", (req, res) => classController.post(req, res))
.get("/dbv/api/v1/class", (req, res) => classController.getAll(req, res))
.get("/dbv/api/v1/class/:id", (req, res) => classController.getById(req, res))
.get("/dbv/api/v1/class/:id/pathfinders", (req, res) => classController.getClassPathfinders(req, res))
.put("/dbv/api/v1/class/:id", (req, res) => classController.update(req, res))
.delete("/dbv/api/v1/class/:id", (req, res) => classController.delete(req, res));

module.exports = router;