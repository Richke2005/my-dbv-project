const {Router} = require("express");
const ProfileController = require("../controllers/profileController.js");

const router = Router();
const profileController = new ProfileController();

router.get("/dbv/api/v1/profile/home", (req, res) => profileController.getById(req, res));
router.put("/dbv/api/v1/profile/home", (req, res) => profileController.update(req, res));

module.exports = router;