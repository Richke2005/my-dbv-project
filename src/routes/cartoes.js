const {Router} = require('express');
const { put } = require('../app');

const router = Router();

router
.get('/', function (req, res){
    res.send("hello world from yor API");
})
.get("/cartoes", function(req, res) {
    const data = req.body
    res.status(200).send({message: `Method get in cartoes sucessfull ${data}`});
})
.post("/cartoes", function(req, res){
     res.status(200).send({message: `Method post in cartoes`});
})
.put("/cartoes", function(req, res){
    res.send({message: "Method put in cartoes"})
})
module.exports = router;