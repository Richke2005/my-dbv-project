const mongoose = require("mongoose");
const { validatePhoneNumber } = require("./validations");

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
			message: "The phone number must have 11 numbers this have {VALUE}"
		}
	},
	frequency: {
		type: Number
	},
	talents: {
		type: Number
	},
	age: {
		type: Number
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

const desbravador = mongoose.model("desbravadores", dbvSchema);

module.exports = desbravador;



