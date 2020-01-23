const express = require("express");
const UserController = require("./controllers/UserController");
const BookController = require("./controllers/NotebookController");
const VirtualDocController = require("./controllers/VirtualDocController");
const BoardController = require("./controllers/BoardController");
const TaskController = require("./controllers/TaskController");
const ApiRoutes = require("./contracts/ApiRoutes");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json(ApiRoutes);
});

routes.get(ApiRoutes.users.all, UserController.all);
routes.get(ApiRoutes.users.index, UserController.index);
routes.post(ApiRoutes.users.create, UserController.store);

routes.post(ApiRoutes.notebooks.create, BookController.store);
routes.get(ApiRoutes.notebooks.index, BookController.index);
routes.get(ApiRoutes.notebooks.allByUser, BookController.allByUser);

routes.get(ApiRoutes.virtual_docs.index, VirtualDocController.index);
routes.post(ApiRoutes.virtual_docs.create, VirtualDocController.store);

routes.post(ApiRoutes.boards.create, BoardController.store);
routes.get(ApiRoutes.boards.allByUser, BoardController.allByUser);
routes.get(ApiRoutes.boards.index, BoardController.index);
routes.post(ApiRoutes.tasks.create, TaskController.store);
routes.get(ApiRoutes.tasks.allByBoard, TaskController.allByBoard);

module.exports = routes;
