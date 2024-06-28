const { Router } = require("express");
const FatherController = require("../controllers/fatherController.js");
const fatherController = new FatherController();

const router = Router();
//do mais abrangente ao mais específico
router
.get('/fathers', (req, res) => fatherController.getAll(req, res))
.get('/fathers/:id', (req, res) => fatherController.getById(req, res))
.post('/fathers', (req, res) => fatherController.postData(req, res))
.put('/fathers/:id', (req, res) => fatherController.updateData(req, res))
.delete('/fathers/:id', (req, res) => fatherController.deleteData(req, res));

module.exports = router;