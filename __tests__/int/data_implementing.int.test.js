const {desbravadores} = require("../../src/models/index");

describe("Implementing tests in database", ()=>{
	it("Should create a new desbravador", async ()=>{
		const dbv = new desbravadores({
			name: "Luan de Paes Mendes",
			email: "luanzin@gameplays.com.br",
			phoneNumber: "11987367853",
			frequency: 100,
			talents: 200,
			age: 10,
			parents: "658b3b40d8ac4c44b7b56758"
		});
    
		await dbv.save();

		expect(dbv).toHaveProperty("_id");
		expect(dbv).toHaveProperty("name", "Luan de Paes Mendes");
		expect(dbv).toHaveProperty("email", "luanzin@gameplays.com.br");
		expect(dbv).toHaveProperty("phoneNumber", "11987367853");
		expect(dbv).toHaveProperty("frequency", 100);
		expect(dbv).toHaveProperty("talents", 200);
		expect(dbv).toHaveProperty("age", 6);
		expect(dbv).toHaveProperty("parents", "658b3b40d8ac4c44b7b56758");
	});
});