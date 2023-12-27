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

const desbravadores = mongoose.model("desbravadores", dbvSchema);

module.exports = desbravadores;

const request = new desbravadores({
	name: "Luan de Paes Mendes",
	email: "luanzin@gameplays.com.br",
	phoneNumber: "1198736472",
	frequency: 10,
	talents: 10,
	age: 18,
	parents: "658b3b40d8ac4c44b7b56758"
});

request.save().then((response) => {
	console.log(response);
});