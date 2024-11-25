const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/,
    },
    password: {
      type: String,
    },
    googleId: {
      type: String,
      sparse: true,
    },
    profilePicture: {
      type: String,
      default: "default-profile-pic.png",
    },
    bio: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    phone: {
      type: String,
      // unique: true,
    },
    preferences: {
      theme: { type: String, default: "light" },
      notifications: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
