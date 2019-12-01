const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const VirtualDoc = require("../models/VirtualDoc");
const Deck = require("../models/Deck");
const Card = require("../models/Card");
const Board = require("../models/Board");
const Task = require("../models/Task");

const connection = new Sequelize(dbConfig);

User.init(connection);
VirtualDoc.init(connection);
Deck.init(connection);
Card.init(connection);
Board.init(connection);
Task.init(connection);

User.associate(connection.models);
VirtualDoc.associate(connection.models);
Deck.associate(connection.models);
Card.associate(connection.models);
Board.associate(connection.models);
Task.associate(connection.models);

module.exports = connection;
