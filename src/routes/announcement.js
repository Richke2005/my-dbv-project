const { Router } = require("express");
const { AnnouncementController } = require("../controllers/");

const router = Router();

router.get("/announcement", AnnouncementController.getAnnouncement)
.get("/announcement/:id", AnnouncementController.getAnnouncementById);

module.exports = router;