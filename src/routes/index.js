const express = require("express");
const mothersRoute = require("./mothersRoute.js");
const fathersRoute = require("./fathersRoute.js");
const pathfindersRoute = require("./pathfindersRoute.js");

function routes(app){
    app.route("/api/dbv/v1").get((req, res)=>{
        res.status(200).send({message: "Welcome to pathfinders API"});
    });

    app.use(
        express.json(),
        mothersRoute,
        fathersRoute,
        pathfindersRoute
    );
}

module.exports = routes;