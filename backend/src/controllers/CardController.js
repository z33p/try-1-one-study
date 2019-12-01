const Card = require("../models/Card");
const Deck = require("../models/Deck");

module.exports = {
  async index(req, res) {
    const { deck_id } = req.params;

    const deck = await Deck.findByPk(deck_id, {
      include: { association: "cards" }
    });

    return res.json(deck.cards);
  },

  async store(req, res) {
    const { deck_id } = req.params;
    const { title, detail } = req.body;

    const deck = await Deck.findByPk(deck_id);

    if (!deck) return res.status(400).json({ error: "deck not found" });

    const card = await Card.create({
      title,
      detail,
      deck_id
    });

    return res.json(card);
  }
};
