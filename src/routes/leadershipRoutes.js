const { Router } = require("express");
const LeadershipController = require("../controllers/leadershipController.js");

const router = Router();
const leadershipController = new LeadershipController();

router
.post("/dbv/api/v1/leadership", (req, res) => leadershipController.post(req, res))
.get("/dbv/api/v1/leadership", (req, res) => leadershipController.getAll(req, res))
.get("/dbv/api/v1/leadership/:id", (req, res) => leadershipController.getById(req, res))
.put("/dbv/api/v1/leadership/:id", (req, res) => leadershipController.update(req, res))
.delete("/dbv/api/v1/leadership/:id", (req, res) => leadershipController.delete(req, res));

module.exports = router;