const { globalValidator } = require("./validations");
globalValidator();

const desbravador = require("./desbravadores");
const parents = require("./parents");
const classes = require("./classes");


module.exports = {
	desbravador,
	parents,
	classes
};