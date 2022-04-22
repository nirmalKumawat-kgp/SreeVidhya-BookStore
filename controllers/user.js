const { User } = require("../models");
exports.getUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
};
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};
