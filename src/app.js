const express = require("express");
require("dotenv").config();
require("./config/connection");
const routes = require("./routes/index");

const app = express();

routes(app);


module.exports = app;
