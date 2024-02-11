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
}

module.exports = AnnouncementController;