const express = require("express");
require("dotenv").config();
require("./config/connection");
const routes = require("./routes/index");
const errorHandler = require("./middlewares/handler")

const app = express();

routes(app);

app.use(errorHandler);


module.exports = app;
