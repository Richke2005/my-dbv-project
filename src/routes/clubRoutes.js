const { Router } = require("express");
const ClubController = require("../controllers/clubController.js");

const router = Router();
const clubController = new ClubController();

router
.post("/dbv/api/v1/club", (req, res) => clubController.post(req, res))
.get("/dbv/api/v1/club", (req, res) => clubController.getAll(req, res))
.get("/dbv/api/v1/club/:id", (req, res) => clubController.getById(req, res))
.put("/dbv/api/v1/club/:id", (req, res) => clubController.update(req, res))
.delete("/dbv/api/v1/club/:id", (req, res) => clubController.delete(req, res));

module.exports = router;