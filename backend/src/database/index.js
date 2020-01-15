const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Book = require("../models/Book");
const VirtualDoc = require("../models/VirtualDoc");
const Board = require("../models/Board");
const Task = require("../models/Task");

const connection = new Sequelize(dbConfig);

User.init(connection);
Book.init(connection);
VirtualDoc.init(connection);
Board.init(connection);
Task.init(connection);

User.associate(connection.models);
Book.associate(connection.models);
VirtualDoc.associate(connection.models);
Board.associate(connection.models);
Task.associate(connection.models);

module.exports = connection;
