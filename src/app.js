const express = require("express");

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res
    .status(200)
    .send({menssagem: `API escutando na ${PORT}`});
});

app.route("/teste").get((req, res) => {
    res
    .status(200)
    .send({menssagem: "rota de teste"});
})

module.exports = app;
