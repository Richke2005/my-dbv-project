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
		street: {type: String},
		number: {type: String},
		cep: {type: String}
	}
},
{
	timestamp: true
});

const parents = mongoose.model("parents", parentsSchema);

module.exports = parents;

