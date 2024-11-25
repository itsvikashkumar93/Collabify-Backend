const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.isLoggedIn = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findById(decoded.id);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.userId = decoded.id;
  next();
};
