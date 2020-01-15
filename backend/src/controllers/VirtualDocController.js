const VirtualDoc = require("../models/VirtualDoc");
const Book = require("../models/Book");

module.exports = {
  async index(req, res) {
    const { vDoc_id } = req.params;
    const vDoc = await VirtualDoc.findByPk(vDoc_id);

    if (!vDoc) return res.status(404).json({ error: "doc not found" });

    if (
      await Book.findByPk(vDoc.book_id, {
        where: {
          user_id: req.user.id
        }
      })
    )
      return res.json(vDoc);

    return res.status(403);
  },

  async store(req, res) {
    const { book_id } = req.params;
    const { title, body } = req.body;

    const virtual_doc = await VirtualDoc.create({
      title,
      body,
      book_id
    });

    return res.status(201).json(virtual_doc);
  }
};
