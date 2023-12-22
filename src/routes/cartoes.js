const { Router } = require("express");
const  client  = require("../config/connection");


const router = Router();

router
	.get("/cartoes", function(req, res) {
		const data = req.body;
		res.status(200).send({message: `Method get in cartoes sucessfull ${data.text}`});
	})
	.post("/cartoes", async function(req, res){
		try{
			const { collection } = req.query;

			await client.connect();
			const { collectionName } = await client.db("primicias").createCollection(collection);
    
			res.status(200).send({message: `the collection ${collectionName} was created`});
		}catch(err){
			console.error(err.message);
		}finally{
			await client.close();
		}
   
	});

module.exports = router;