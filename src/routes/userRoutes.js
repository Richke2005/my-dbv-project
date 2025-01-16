const { Router } = require("express");
const UserController = require("../controllers/userController.js");
const roles = require("../middlewares/roles.js");

const router = Router();
const userController = new UserController();

router
.post("/dbv/api/v1/user", roles(['leadership']), (req, res) => userController.post(req, res))
.get("/dbv/api/v1/user", (req, res) => userController.getAll(req, res))
.get("/dbv/api/v1/user/:id", (req, res) => userController.getById(req, res))
.put("/dbv/api/v1/user/:id", (req, res) => userController.update(req, res))
.delete("/dbv/api/v1/user/:id", roles(['leadership']), (req, res) => userController.delete(req, res));

module.exports = router;