const mongoose = require("mongoose");

const globalValidator = ()=> mongoose.Schema.Types.String.set("validate", {
	validator: (valor)=> valor.trim() !== ""
	,
	message: ({path})=> `O campo ${path} foi fornecido(a) em branco`
});

//TODO: repair the phone number validation
function validatePhoneNumber(value){
	const phoneNumber = value.replace(/[^0-9]/g, "");
	if(phoneNumber.length !== 11){
		return false;
	}else{
		return true;
	}
}

function verifyIsArrayAndNotEmpty(v){
	return Array.isArray(v) && v.length > 0;
}

//TODO: implement an address validation function for do not permit empty object

module.exports = {
	globalValidator,
	validatePhoneNumber,
	verifyIsArrayAndNotEmpty
};