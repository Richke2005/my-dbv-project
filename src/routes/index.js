const express = require("express");
const authRoutes = require("./authRoutes.js");
const authenticate = require("../middlewares/authenticate.js");
const bookResponseRoutes = require("./bookResponseRoutes.js");
const classRoutes = require("./classRoutes.js");
const bookRoutes = require("./bookRoutes.js");
const clubRoutes = require("./clubRoutes.js");
const userRoutes = require("./userRoutes.js");
const profileRoutes = require("./profileRoutes.js");
const postRoutes = require("./postRoutes.js");
const unitRoutes = require("./unitRoutes.js");


module.exports = (app) => {
    app.route('/dbv/api/v1').get((req, res)=>{
        res.status(200).send({message: "Welcome to the DBV API"});
    });

    app.use(
        express.json(),
        authRoutes,
        authenticate,
        bookResponseRoutes,
        classRoutes,
        bookRoutes,
        clubRoutes,
        userRoutes,
        profileRoutes,
        postRoutes,
        unitRoutes
    );
}