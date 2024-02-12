const { announcement } = require("../models/");

class AnnouncementController{
    static async getAnnouncement(req, res, next){
        try{
            const announcementData = await announcement.find();
            res.status(200).send(announcementData);
        }catch(error){
            next(error);
        }
    }
 //TODO: announcement search
 
    // static async getAnnoncementBySearch(req, res, next){
	// 	try{
	// 		const parameters = req.query;
    //        
	// 		const search = Search(parameters);

	// 		if(search){
	// 			const apiSearch = await announcement.find(search);
	// 			res.status(200).send(apiSearch);
	// 		}else{
	// 			res.status(200).send([]);
	// 		}

	// 	}catch(error){
	// 		next(error);
	// 	};
	// }

    static async getAnnouncementById(req, res, next){
        try{
            const id = req.params
            const announcementData = await announcement.findById(id);
            if(announcementData){
                res.status(200).send(announcementData);
            }else{
                res.status(401).send({message: `Announcement with id ${id} not founded`});
            }
        }catch(error){
            next(error);
        }
    }

    static async postAnnouncement(req, res, next){
		try{
			const announcementData = new announcement(req.body);
			await announcementData.save();

			res.status(201).send({message: `${announcementData} created successfully`});
		}catch(error){
			next(error)
		}
	}

	static async putAnnouncement(req, res, next){
		try{
			const id = req.params.id;
			const updatedAnouncement = await announcement.findByIdAndUpdate(id, {$set: req.body});
			if(updatedAnouncement !== null){
				res.status(200).send({message: `${updatedAnouncement} updated successfully`});
			}else{
				res.status(401).send({message: `Announcement wih id ${id} was not found`});
			}
		}catch(error){
			next(error)
		}
        
	}

	static async deleteAnnouncement(req, res, next){
		try{
			const id = req.params.id;

			const deletedAnouncement = await announcement.findByIdAndDelete(id);
			if(deletedAnouncement !== null){
				res.status(200).send({message: `${deletedAnouncement} deleted successfully`});
			}else{
				res.status(401).send({message: `Announcement with id ${id} was not found`});
			}
		}catch(error){
			next(error)
		}
	}
}

module.exports = AnnouncementController;