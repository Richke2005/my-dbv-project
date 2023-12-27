const mongoose = require("mongoose");

const globalValidator = ()=> mongoose.Schema.Types.String.set("validate", {
	validator: (valor)=> valor.trim() !== ""
	,
	message: ({path})=> `O campo ${path} foi fornecido(a) em branco`
});

function validatePhoneNumber(value){
	const phoneNumber = value.replace(/[^0-9]/g, "");
	if(phoneNumber.length !== 11){
		return false;
	}else{
		return true;
	}
}

module.exports = {
	globalValidator,
	validatePhoneNumber,
};