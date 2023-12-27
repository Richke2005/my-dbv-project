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

const dbv = new desbravador({
	name: "Rodolfo Ferraz de Vasconselos",
	email: "rodolfo@works.com.br",
	phoneNumber: "119987364",
	frequency: 10,
	talents: 100,
	age: 15,
	parents: "658b3b40d8ac4c44b7b56758"
});

dbv.save().then(data =>{
	console.log(`${data} successfully saved`);
});