const User = require("../models/User");
const Deck = require("../models/Deck");

module.exports = {
  async index(req, res) {
    const { deck_id } = req.params;

    const deck = await Deck.findByPk(deck_id);

    if (!deck) return res.status(404).json({ error: "deck not found" });

    return deck;
  },
  async allByUser(req, res) {
    const user_id = req.user.unique_name;

    const user = await User.findByPk(user_id, {
      include: {
        association: "decks",
        attributes: ["id", "title", "created_at", "updated_at"]
      }
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    return res.json(user.decks);
  },

  async store(req, res) {
    const user_id = req.user.unique_name;
    const { title, detail } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) return res.status(400).json({ error: "User not found" });

    const deck = await Deck.create({
      title,
      detail,
      user_id
    });

    return res.json(deck);
  }
};
