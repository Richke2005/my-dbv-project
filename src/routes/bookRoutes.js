const { Router } = require("express");
const BookController = require("../controllers/BookController.js");

const router = Router();
const bookController = new BookController();

router
.post("/dbv/api/v1/book", (req, res) => bookController.post(req, res))
.get("/dbv/api/v1/book", (req, res) => bookController.getAll(req, res))
.get("/dbv/api/v1/book/:id", (req, res) => bookController.getById(req, res))
.put("/dbv/api/v1/book/:id", (req, res) => bookController.update(req, res))
.delete("/dbv/api/v1/book/:id", (req, res) => bookController.delete(req, res));

module.exports = router;