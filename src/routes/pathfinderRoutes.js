const { Router } = require("express");
const PathfinderController = require("../controllers/pathfinderController.js");

const router = Router();
const pathfinderController = new PathfinderController();

router
.post("/dbv/api/v1/pathfinder", (req, res) => pathfinderController.post(req, res))
.get("/dbv/api/v1/pathfinder", (req, res) => pathfinderController.getAll(req, res))
.get("/dbv/api/v1/pathfinder/:id", (req, res) => pathfinderController.getById(req, res))
.put("/dbv/api/v1/pathfinder/:id", (req, res) => pathfinderController.update(req, res))
.delete("/dbv/api/v1/pathfinder/:id", (req, res) => pathfinderController.delete(req, res));

module.exports = router;