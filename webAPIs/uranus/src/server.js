const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const authorize = require("./middleware");
const app = express();

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
require("./database");
const { env } = process;

// CORS config
app.use(cors());

// Response = JSON
app.use(express.json());

// Middlewares config
app.use(authorize);

// Routes
app.use(routes);

module.exports = app;

app.listen(env.PORT, env.HOST);
console.log(`Running on host=${env.HOST} port=${env.PORT}`);
