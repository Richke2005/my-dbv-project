const mongoose = require("mongoose");

const URI = process.env.URI;

function connect(){
	mongoose.connect(URI);

	const conn = mongoose.connection;

	conn.on("error", err =>{
		console.error(err);
	});

	conn.once("open", () => {
		console.log("connection successful to mongoDB");
	});
}

connect();

module.exports = mongoose;