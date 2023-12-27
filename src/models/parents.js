const mongoose = require("mongoose");
const { validatePhoneNumber } = require("./validations");

const parentsSchema = mongoose.Schema({
	id: {type: String},
	parents_name: {
		type: String,
		required: [true, "The name is required"]
	},
	contacts: {
		type: Object,
		contact1: {type: String},
		contact2: {type: String},
		required: [ function(value){
			if(!value.contact1 && !value.contact){
				return false;
			}else{
				return true;
			}
		}, "At least one contact must provided"],
		validate: {
			validator: validatePhoneNumber,
			message: "The phone number must have 11 numbers this have {VALUE}"
		}
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

