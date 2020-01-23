const User = require("../models/User");
const Notebook = require("../models/Notebook");

module.exports = {
  async index(req, res) {
    const { notebook_id } = req.params;

    const notebook = await Notebook.findByPk(notebook_id, {
      where: {
        user_id: req.user.id
      },
      include: {
        association: "virtual_docs"
      }
    });

    if (!notebook) return res.status(404).json({ error: "notebook not found" });

    return res.json(notebook);
  },
  async allByUser(req, res) {
    const user_id = req.user.id;

    const user = await User.findByPk(user_id, {
      include: {
        association: "notebooks",
        include: {
          association: "virtual_docs"
        },
        attributes: ["id", "title", "created_at", "updated_at"]
      }
    });

    return res.json(user.notebooks);
  },

  async store(req, res) {
    const user_id = req.user.id;
    const { title, detail } = req.body;

    const notebook = await Notebook.create({
      title,
      detail,
      user_id
    });

    return res.status(201).json(notebook);
  }
};
