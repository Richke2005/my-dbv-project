function validatePhoneNumber(value){
	if(value.length !== 11){
		return false;
	}else{
		return true;
	}
}

module.exports = {
	validatePhoneNumber
};