const mongoose = require("mongoose");
const { validatePhoneNumber } = require("../validations/models");

const parentsSchema = mongoose.Schema({
	id: {type: String},
	parents_name: {
		type: String,
		required: [true, "The name is required"]
	},
	contacts: {
		type: Object,
		contact1: {
			type: String, 
			validate: {
				validator: validatePhoneNumber,
				message: "The phone number {VALUE} must have 11 characters"
			}},
		contact2: {
			type: String, 
			validate: {
				validator: validatePhoneNumber,
				message: "The phone number {VALUE} must have 11 characters"
			}},
		required: [true, "At least one number must be provided"],
	},
	
	email: {type: String},
	address: {
		type: Object,
		street: {
			type: String,
			required: [true, "Street must be provided"]
		},
		number: {
			type: String,
			required: [true, "Number must be provided"]
		},
		cep: {type: String},

		required: [true, "An address must be provided"]
	}
},
{
	timestamp: true
});

const parents = mongoose.model("parents", parentsSchema);

module.exports = parents;

