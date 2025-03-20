const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "You are not authorized user" });
  }

  const isBlacklisted = await userModel.findOne({ token });

  if (isBlacklisted) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.findById(decoded._id);

    req.user = user;
    return next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
