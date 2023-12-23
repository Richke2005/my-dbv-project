const express = require("express");
const dbvRoute = require("./desbravadores");

function routes(app){
	app.route("/").get((req, res) =>{
		res.status(200).send({message: "DBV API for APlication"});
	});

	app.use(
		express.json(),
		dbvRoute
	);
}

module.exports = routes;
