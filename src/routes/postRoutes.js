const { Router } = require("express");
const PostController = require("../controllers/postController.js");

const router = Router();
const postController = new PostController();

router
.post("/dbv/api/v1/post", (req, res) => postController.post(req, res))
.get("/dbv/api/v1/post", (req, res) => postController.getAll(req, res))
.get("/dbv/api/v1/post/:id", (req, res) => postController.getById(req, res))
.put("/dbv/api/v1/post/:id", (req, res) => postController.update(req, res))
.delete("/dbv/api/v1/post/:id", (req, res) => postController.delete(req, res));

module.exports = router;