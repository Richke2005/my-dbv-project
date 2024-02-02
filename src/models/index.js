const { globalValidator } = require("../validations/models/");
globalValidator();

const desbravadores = require("./desbravadores");
const parents = require("./parents");
const classes = require("./classes");


module.exports = {
	desbravadores,
	parents,
	classes
};