const { Router } = require("express");
const CursoController = require("../controllers/fatherController.js");

const cursoController = new CursoController();
const router = Router();
//do mais abrangente ao mais específico
router
.get('/getfathers', (req, res) => cursoController.getAll(req, res))
.get('/getfathersbyId/:id', (req, res) => cursoController.getById(req, res));

module.exports = router;