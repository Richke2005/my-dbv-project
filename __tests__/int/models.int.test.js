const { desbravadores } = require("../../src/models/index");

describe("Test the exceptions in desbravadores model", function(){
	it("Should throw an error when the name is not provided", () => {
		expect(() => {
			new desbravadores({
				email: "ryanzin@gameplays.com.br",
				phoneNumber: "11987367853",
				frequency: 100,
				talents: 200,
				age: 13,
				parents: "658b3b40d8ac4c44b7b56758",
			});
		}).toThrowError("The name is required");
	});

	it("Should throw an error when the phone number is not provided", () => {
		expect(() => {
			new desbravadores({
				name: "Luan de Paes Mendes",
				email: "luanzin@gameplays.com.br",
				frequency: 100,
				talents: 200,
				age: 13,
				parents: "658b3b40d8ac4c44b7b56758",
			});
		}).toThrowError("The phone number is required");
	});
 
	it("Should throw an error when the phone number is not valid", () => {
		expect(() => {
			new desbravadores({
				name: "Luan de Paes Mendes",
				email: "luanzin@gameplays.com.br",
				phoneNumber: "11987367",
				frequency: 100,
				talents: 200,
				age: 13,
				parents: "658b3b40d8ac4c44b7b56758",
			});
		}).toThrowError("This 11987367 phone number must have 11 characters");
	});

	it("Should throw an error when the age is less than the minimum allowed age", () => {
		expect(() => {
			new desbravadores({
				name: "Luan de Paes Mendes",
				email: "luanzin@gameplays.com.br",
				phoneNumber: "11987367853",
				frequency: 100,
				talents: 200,
				age: 6,
				parents: "658b3b40d8ac4c44b7b56758",
			});
		}).toThrowError("Only ages between 10 and 15 are allowed\nYour age 6");
	});
});
