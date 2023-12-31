const { validatePhoneNumber } = require("../../src/models/validations");

describe("Validations from models", ()=>{
	it("Must return a valid phone number", ()=>{
		const phoneNumber = "(11)98473-4765";
		const validation = validatePhoneNumber(phoneNumber);

		expect(validation).toBe(true);

	});

	it("verifyIsArrayAndNotEmpty should return false for an empty array", () => {
		expect(verifyIsArrayAndNotEmpty([])).toBe(false);
	});

	it("verifyIsArrayAndNotEmpty should return false for a non-array value", () => {
		expect(verifyIsArrayAndNotEmpty("test")).toBe(false);
		expect(verifyIsArrayAndNotEmpty(123)).toBe(false);
		expect(verifyIsArrayAndNotEmpty({})).toBe(false);
	});
 
	it("verifyIsArrayAndNotEmpty should return true for a non-empty array", () => {
		expect(verifyIsArrayAndNotEmpty([1, 2, 3])).toBe(true);
	});
});