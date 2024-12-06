const { Router } = require("express");
const ClassBookController = require("../controllers/classBookController.js");

const router = Router();
const classBookController = new ClassBookController();

router
.post("/dbv/api/v1/classBook", (req, res) => classBookController.post(req, res))
.get("/dbv/api/v1/classBook", (req, res) => classBookController.getAll(req, res))
.get("/dbv/api/v1/classBook/:id", (req, res) => classBookController.getById(req, res))
.put("/dbv/api/v1/classBook/:id", (req, res) => classBookController.update(req, res))
.delete("/dbv/api/v1/classBook/:id", (req, res) => classBookController.delete(req, res));

module.exports = router;