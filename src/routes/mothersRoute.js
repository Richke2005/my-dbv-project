const { Router } = require("express");
const MotherController = require("../controllers/motherController.js");
const AddressController = require("../controllers/addressController.js");
const motherController = new MotherController();
const addressController = new AddressController();

const router = Router();
//do mais abrangente ao mais específico
router
.get('/mothers', (req, res) => motherController.getAll(req, res))
.get('/mothers/:id/address', (req, res) => motherController.getMotherAddress(req, res))
.get('/mothers/:id', (req, res) => motherController.getById(req, res))
.post('/mothers', (req, res) => motherController.postData(req, res))
.post('/mothers/address', (req, res) => addressController.postAddress(req, res))
.put('/mothers/:id', (req, res) => motherController.updateData(req, res))
.delete('/mothers/:id', (req, res) => motherController.deleteData(req, res));

module.exports = router;