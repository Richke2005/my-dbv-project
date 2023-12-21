const express = require("express");

const app = express();
const rotaCartoes = require("./routes/cartoes")

app.use(rotaCartoes);

app.use(express.json())



module.exports = app;
