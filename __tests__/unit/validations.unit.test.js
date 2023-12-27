const { validatePhoneNumber } = require("../../src/models/validations");

describe("Validations from models", ()=>{
	it("Must return a valid phone number", ()=>{
		const phoneNumber = "(11)98473-4765";
		const validation = validatePhoneNumber(phoneNumber);

		expect(validation).toBe(true);

	});
});