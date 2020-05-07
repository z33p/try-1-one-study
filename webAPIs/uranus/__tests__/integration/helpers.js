const jwt = require("jsonwebtoken");
require("dotenv/config");

const getValidToken = () => {
  const VALID_TOKEN = jwt.sign(
    { id: "24317212-68ff-4f19-95a1-d70fabac9154" },
    process.env.ACCESS_TOKEN_SECRET
  );

  return VALID_TOKEN;
};

module.exports = getValidToken;
