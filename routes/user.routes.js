const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/auth.middleware");
const { profileController } = require("../controllers/user.controller");

router.get("/profile", isLoggedIn, profileController);

module.exports = router;
