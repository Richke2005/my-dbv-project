const { Router } = require("express");
const UnitController = require("../controllers/unitController.js");

const router = Router();
const unitController = new UnitController();

router
.post("/dbv/api/v1/unit", (req, res) => unitController.post(req, res))
.get("/dbv/api/v1/unit", (req, res) => unitController.getAll(req, res))
.get("/dbv/api/v1/unit/:id", (req, res) => unitController.getById(req, res))
.put("/dbv/api/v1/unit/:id", (req, res) => unitController.update(req, res))
.delete("/dbv/api/v1/unit/:id", (req, res) => unitController.delete(req, res));

module.exports = router;