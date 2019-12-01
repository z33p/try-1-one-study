const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const user_id = req.user.unique_name;

    const user = await User.findByPk(user_id);

    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json(user);
  },

  async all(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
    const user = await User.create({ id: req.user.unique_name });

    return res.json(user);
  }
};
