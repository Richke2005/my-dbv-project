const { Router } = require("express");
const MotherController = require("../controllers/motherController.js");
const motherController = new MotherController();

const router = Router();
//do mais abrangente ao mais específico
router
.get('/mothers', (req, res) => motherController.getAll(req, res))
.get('/mothers/:id', (req, res) => motherController.getById(req, res))
.post('/mothers', (req, res) => motherController.postData(req, res))
.put('/mothers/:id', (req, res) => motherController.updateData(req, res))
.delete('/mothers/:id', (req, res) => motherController.deleteData(req, res));

module.exports = router;