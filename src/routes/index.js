const express = require("express");
const fathersRoute = require("./fathersRoute");

function routes(app){
    app.route("/").get((req, res)=>{
        res.status(200).send({message: "Welcome to my API"});
    });

    app.use(
        express.json(),
        fathersRoute
    );
}

module.exports = routes;