const express = require("express");
const rotaCartoes = require("./cartoes");

function routes(app){
	app.route("/").get((req, res) =>{
		res.status(200).send({message: "DBV API for APlication"});
	});

	app.use(
		express.json(),
		rotaCartoes
	);
}

module.exports = routes;
