const { Router } = require("express");
const { AnnouncementController } = require("../controllers/");

const router = Router();

router.get("/announcement", AnnouncementController.getAnnouncement)
.get("/announcement/:id", AnnouncementController.getAnnouncementById)
.post("/announcement", AnnouncementController.postAnnouncement);

module.exports = router;