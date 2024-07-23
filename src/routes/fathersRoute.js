const { Router } = require("express");
const FatherController = require("../controllers/fatherController.js");
const AddressController = require("../controllers/addressController.js");
const fatherController = new FatherController();
const addressController = new AddressController();

const router = Router();
//do mais abrangente ao mais específico
router
.get('/fathers', (req, res) => fatherController.getAll(req, res))
.get('/fathers/:id/address', (req, res) => fatherController.getFatherAddress(req, res))
.get('/fathers/:id', (req, res) => fatherController.getById(req, res))
.post('/fathers', (req, res) => fatherController.postData(req, res))
.post('/fathers/address', (req, res) => addressController.postAddress(req, res))
.put('/fathers/:id', (req, res) => fatherController.updateData(req, res))
.delete('/fathers/:id', (req, res) => fatherController.deleteData(req, res));

module.exports = router;