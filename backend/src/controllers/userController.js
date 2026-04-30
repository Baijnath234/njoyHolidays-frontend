const User = require("../models/User");

const mapUser = (user) => ({
  _id: user._id.toString(),
  name: user.name,
  email: user.email,
  role: user.role,
  isActive: user.isActive,
  profileImage: user.profileImage,
});

const getUsers = async (_req, res) => {
  const users = await User.find().sort({ createdAt: -1 });

  res.json(users.map(mapUser));
};

module.exports = {
  getUsers,
};
