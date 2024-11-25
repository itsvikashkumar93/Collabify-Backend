const passport = require("passport");
const dotenv = require("dotenv");
const userModel = require("../models/user.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URI,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let user = await userModel.findOne({ googleId: profile.id });
        if (!user) {
          user = await userModel.create({
            username:
              profile.name.givenName.toLowerCase() +
              Math.floor(Math.random() * 10000),
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            profilePicture: profile.photos[0].value,
          });
        }
        cb(null, user);
      } catch (err) {
        cb(err, null);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// module.exports = passport;
