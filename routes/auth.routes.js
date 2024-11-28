const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  signupController,
  loginController,
  logoutController,
  googleController,
  googleCallbackController,
} = require("../controllers/auth.controller");
const { isLoggedIn } = require("../middlewares/auth.middleware");

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", isLoggedIn, logoutController);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/api/auth/login",
  }),
  googleCallbackController
);

module.exports = router;
