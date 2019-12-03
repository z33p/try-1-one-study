const express = require("express");
const UserController = require("./controllers/UserController");
const VirtualDocController = require("./controllers/VirtualDocController");
const BoardController = require("./controllers/BoardController");
const TaskController = require("./controllers/TaskController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

routes.get("/users", UserController.all);
routes.post("/users", UserController.store);
routes.get("/users/:user_id", UserController.index);

routes.post("/virtual_docs", VirtualDocController.store);
routes.get("/virtual_docs", VirtualDocController.allByUser);
routes.get("/virtual_docs/:vDoc_id", VirtualDocController.index);

routes.post("/boards", BoardController.store);
routes.get("/boards", BoardController.allByUser);
routes.get("/boards/:board_id", BoardController.index);

routes.get("/tasks/:task_id", TaskController.index);
routes.post("/boards/:board_id/tasks", TaskController.store);
routes.get("/boards/:board_id/tasks", TaskController.allByParent);

module.exports = routes;
