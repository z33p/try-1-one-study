const VirtualPaper = require("../models/VirtualPaper");
const Notebook = require("../models/Notebook");

module.exports = {
  async index(req, res) {
    const { vPaper_id } = req.params;
    const vPaper = await VirtualPaper.findByPk(vPaper_id);

    if (!vPaper) return res.status(404).json({ error: "paper not found" });

    if (
      await Notebook.findByPk(vPaper.notebook_id, {
        where: {
          user_id: req.user.id,
        },
      })
    )
      return res.json(vPaper);

    return res.status(403);
  },

  async store(req, res) {
    const { notebook_id } = req.params;
    const { title, body } = req.body;

    const virtual_paper = await VirtualPaper.create({
      title,
      body,
      notebook_id,
    });

    return res.status(201).json(virtual_paper);
  },
};
