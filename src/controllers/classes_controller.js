const { classes } = require("../models/index");

class ClassesController{
	static async getClasses(req, res){
		try{
			const classesData = await classes.find();
			res.status(200).send(classesData);
		}catch(error){
			res.status(401).send(error.message);
		}
	}

	static async getClassesById(req, res){
		try{
			const id = req.params.id;
			const searchedClasses = await classes
				.findById(id)
				.populate("desbravadores");
		

			if(searchedClasses){
				res.status(200).send(searchedClasses);
			}else{
				res.status(401).send({message: `Classes with id ${id} not founded`});
			}

		}catch(error){
			res.status(401).send(error.message);
		}
	}

	static async postClasses(req, res){
		try{
			const classesData = new classes(req.body);
			await classesData.save();

			res.status(201).send({message: `${classesData} created successfully`});
		}catch(error){
			res.status(401).send(error.message);
		}
	}

	static async putClasses(req, res){
		try{
			const id = req.params.id;
			const updatedClasses = await classes.findByIdAndUpdate(id, {$set: req.body});
			if(updatedClasses !== null){
				res.status(200).send({message: `${updatedClasses} updated successfully`});
			}else{
				res.status(401).send({message: `Classes wih id ${id} was not found`});
			}
		}catch(error){
			res.status(401).send(error.message);
		}
        
	}

	static async deleteClasses(req, res){
		try{
			const id = req.params.id;

			const deletedClasses = await classes.findByIdAndDelete(id);
			if(deletedClasses !== null){
				res.status(200).send({message: `${deletedClasses} deleted successfully`});
			}else{
				res.status(401).send({message: `Classes with id ${id} was not found`});
			}
		}catch(error){
			res.status(401).send(error.message);
		}
	}
}

module.exports = ClassesController;