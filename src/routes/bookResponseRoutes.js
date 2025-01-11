const { Router } = require("express");
const BookResponseController = require("../controllers/bookResponseController.js");

const router = Router();
const bookResponseController = new BookResponseController();
//TODO: implement route with search response by class book id
router
.post("/dbv/api/v1/bookResponse", (req, res) => bookResponseController.post(req, res))
.get("/dbv/api/v1/bookResponse", (req, res) => bookResponseController.getAll(req, res))
.get("/dbv/api/v1/bookResponse/:id", (req, res) => bookResponseController.getById(req, res))
.put("/dbv/api/v1/bookResponse/:id", (req, res) => bookResponseController.update(req, res))
.delete("/dbv/api/v1/bookResponse/:id", (req, res) => bookResponseController.delete(req, res));

module.exports = router;