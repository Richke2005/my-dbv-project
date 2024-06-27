const { Router } = require("express");
const PathfinderController = require("../controllers/pathfinderController.js");
const pathfinderController = new PathfinderController();

const router = Router();
router
.get('/pathfinders', (req, res) => pathfinderController.getAll(req, res))
.get('/pathfinders/:id', (req, res) => pathfinderController.getById(req, res))
.get('/pathfinders/:id/parents', (req, res) => pathfinderController.getPathfinderParents(req, res))
.post('/pathfinders', (req, res) => pathfinderController.postData(req, res))
.put('/pathfinders/:id', (req, res) => pathfinderController.updateData(req, res));


module.exports = router;