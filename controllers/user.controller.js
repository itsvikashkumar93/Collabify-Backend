const userModel = require("../models/user.model");

module.exports.profileController = async (req, res) => {
  const userId = req.userId;
  const user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
};
