const jwt = require("jsonwebtoken");

const guide = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) return res.status(403).send("access denied");

  const verify_token = jwt.verify(token, process.env.JW_KEY);
  req.user = verify_token;
  next();
};
module.exports = guide;
