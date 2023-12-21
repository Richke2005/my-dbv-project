const express = require("express");
require('./config/connection');

const app = express();
const rotaCartoes = require("./routes/cartoes")

app.use(rotaCartoes);

app.use(express.json())

module.exports = app;
