const User = require("../models/User");
const Book = require("../models/Book");

module.exports = {
  async index(req, res) {
    const { book_id } = req.params;

    const book = await Book.findByPk(book_id, {
      where: {
        user_id: req.user.id
      }
    });

    if (!book) return res.status(404).json({ error: "book not found" });

    return res.json(book);
  },
  async allByUser(req, res) {
    const user_id = req.user.id;

    const user = await User.findByPk(user_id, {
      include: {
        association: "books",
        attributes: ["id", "title", "created_at", "updated_at"]
      }
    });

    if (!user) return res.status(404).json({ error: "user not found" });

    return res.json(user.books);
  },

  async store(req, res) {
    const user_id = req.user.id;
    const { title } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) return res.status(400).json({ error: "User not found" });

    const book = await Book.create({
      title,
      user_id
    });

    return res.status(201).json(book);
  }
};
