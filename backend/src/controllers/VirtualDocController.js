const User = require("../models/User");
const VirtualDoc = require("../models/VirtualDoc");

module.exports = {
  async index(req, res) {
    const { vDoc_id } = req.params;
    const vDoc = await VirtualDoc.findByPk(vDoc_id, {
      where: {
        user_id: req.user.id
      }
    });

    if (!vDoc) return res.status(404).json({ error: "Document not found" });

    return res.json(vDoc);
  },

  async allByUser(req, res) {
    const user_id = req.user.id;

    const user = await User.findByPk(user_id, {
      include: {
        association: "virtual_docs",
        attributes: ["id", "title", "body", "created_at", "updated_at"]
      }
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json(user.virtual_docs);
  },

  async store(req, res) {
    const user_id = req.user.id;
    const { title, body } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) return res.status(400).json({ error: "User not found" });

    const virtual_doc = await VirtualDoc.create({
      title,
      body,
      user_id
    });

    return res.status(201).json(virtual_doc);
  }
};
