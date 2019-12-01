const express = require("express");
const UserController = require("./controllers/UserController");
const VirtualDocController = require("./controllers/VirtualDocController");
const DeckController = require("./controllers/DeckController");
const CardController = require("./controllers/CardController");
const BoardController = require("./controllers/BoardController");
const TaskController = require("./controllers/TaskController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

routes.get("/user", UserController.index);
routes.get("/users", UserController.all);
routes.post("/users", UserController.store);

routes.get("/virtual_doc", VirtualDocController.index);
routes.get("/virtual_docs", VirtualDocController.allByUser);
routes.post("/virtual_docs", VirtualDocController.store);

routes.get("/board", BoardController.index);
routes.get("/boards", BoardController.allByUser);
routes.post("/boards", BoardController.store);

routes.get("/board/:board_id/tasks", TaskController.index);
routes.post("/board/:board_id/tasks", TaskController.store);

routes.get("/deck", DeckController.index);
routes.get("/decks", DeckController.allByUser);
routes.post("/decks", DeckController.store);

routes.get("/deck/:deck_id/cards", CardController.index);
routes.post("/deck/:deck_id/cards", CardController.store);

module.exports = routes;
