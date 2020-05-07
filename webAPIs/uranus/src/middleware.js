const jwt = require("jsonwebtoken");
const User = require("./models/User");

function authorize(req, res, next) {
  if (req.url === "/") next();

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    async (err, userFromToken) => {
      console.log(err);
      if (err) return res.sendStatus(403);

      const userFromDb = await User.findByPk(userFromToken.id);

      if (userFromDb) {
        req.user = userFromDb;
      } else {
        let new_user = await User.create({ id: userFromToken.id });
        req.user = new_user;
      }

      next();
    }
  );
}

module.exports = authorize;
