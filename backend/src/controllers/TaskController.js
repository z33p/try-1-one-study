const Board = require("../models/Board");
const Task = require("../models/Task");

module.exports = {
  async index(req, res) {
    const { board_id } = req.params;

    const board = await Board.findByPk(board_id, {
      include: { association: "tasks" }
    });

    return res.json(board.tasks);
  },

  async store(req, res) {
    const { board_id } = req.params;
    const { title, detail } = req.body;

    const board = await Board.findByPk(board_id);

    if (!board) return res.status(400).json({ error: "Board not found" });

    const task = await Task.create({
      title,
      detail,
      board_id
    });

    return res.json(task);
  }
};
