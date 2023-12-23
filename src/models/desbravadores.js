const mongoose = require("mongoose");

const dbvSchema = mongoose.Schema({
	id: {
		type: String
	},
	name: {
		type: String,
		required: [true, "The name is required"]
	},
	email: {
		type: String
	},
	phoneNumber: { 
		type: String
	},
	parentsNumbers: { 
		type: String
	},
	frequency: {
		type: Number
	},
	talents: {
		type: Number
	}
},
{
	timestamp: true
});

const desbravadores = mongoose.model("desbravadores", dbvSchema);

module.exports = desbravadores;