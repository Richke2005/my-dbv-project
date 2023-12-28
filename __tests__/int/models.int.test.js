const { desbravador } = require("../../src/models/index");

describe("Test the exceptions in desbravadores model", ()=>{
	it("Must return the name exception", ()=>{
		try{
			new desbravador({
				email: "ryanzin@gameplays.com.br",
				phoneNumber: "11987367853",
				frequency: 100,
				talents: 200,
				age: 13,
				parents: "658b3b40d8ac4c44b7b56758"
				
			});
		}catch(error){
			expect(error.message).toBe("The name is required");
		}
	});

	it("Must return phone number, exception", ()=>{
		try{
			new desbravador({
				name: "Luan de Paes Mendes",
				email: "luanzin@gameplays.com.br",
				frequency: 100,
				talents: 200,
				age: 13,
				parents: "658b3b40d8ac4c44b7b56758"
                
			});
		}catch(error){
			expect(error.message).toBe("The phone number is required");
		}
	});

	it("Must return validation phone number error", ()=>{
		try{
			new desbravador({
				name: "Luan de Paes Mendes",
				email: "luanzin@gameplays.com.br",
				phoneNumber: "11987367",
				frequency: 100,
				talents: 200,
				age: 13,
				parents: "658b3b40d8ac4c44b7b56758"
			});
		}catch(error){
			expect(error.message).toBe("This 11987367 phone number must have 11 characters");
		}
	});

	it("Must return the min age exception ", ()=>{
		try{
			new desbravador({
				name: "Luan de Paes Mendes",
				email: "luanzin@gameplays.com.br",
				phoneNumber: "11987367853",
				frequency: 100,
				talents: 200,
				age: 6,
				parents: "658b3b40d8ac4c44b7b56758"
			});
		}catch(error){
			expect(error.message).toBe("Only ages between 10 and 15 are allowed\nYour age 6");
		}
	});
});