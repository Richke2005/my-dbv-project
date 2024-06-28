const express = require("express");
const mothersRoute = require("./mothersRoute.js");
const fathersRoute = require("./fathersRoute.js");
const pathfindersRoute = require("./pathfindersRoute.js");

function routes(app){
    app.route("/").get((req, res)=>{
        res.status(200).send({message: "Welcome to my API"});
    });

    app.use(
        express.json(),
        mothersRoute,
        fathersRoute,
        pathfindersRoute
    );
}

module.exports = routes;