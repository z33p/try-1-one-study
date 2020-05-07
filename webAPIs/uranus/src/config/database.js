require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const { host, dialect, username, password, database } = process.env;

module.exports = {
  host,
  dialect,
  username,
  password,
  database,
  storage: "./__tests__/database.sqlite",
  define: {
    timestamps: true,
    underscored: true
  }
};
