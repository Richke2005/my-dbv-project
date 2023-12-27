const { desbravador } = require("../../src/models/index");

describe("Integration with models and database", ()=>{
	it("Must save the object on database", ()=>{

		return new desbravador({
			name: "Miguel Ferraz de Vasconselos",
			email: "rodolfo@works.com.br",
			phoneNumber: "11998736492",
			frequency: 10,
			talents: 100,
			age: 15,
			parents: "658b3b40d8ac4c44b7b56758"
		}).save().then(data => {
			const nome = data.name;
			expect(nome).toBe("Miguel Ferraz de vasconselos");
		});
	});
});
