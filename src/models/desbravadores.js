const mongoose = require("mongoose");
const { validatePhoneNumber } = require("../validations/models");

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
		type: String,
		required: [true, "The phone number is required"],
		validate: {
			validator: validatePhoneNumber,
			message: "This {VALUE} phone number must have 11 characters"
		}
	},
	frequency: {
		type: Number
	},
	talents: {
		type: Number
	},
	age: {
		type: Number,
		min: [10, "Only ages between 10 and 15 are allowed\nYour age {VALUE}",],
		max: [15, "Only ages between 10 and 15 are allowed\nYour age {VALUE}"]
	},
	parents: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "parents",
		required: [true, "Is necessary to specify parents's reference"]
	}
},
{
	timestamp: true
});

const desbravadores = mongoose.model("desbravadores", dbvSchema);

module.exports = desbravadores;



