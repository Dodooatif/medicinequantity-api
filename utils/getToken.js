const jwt = require("jsonwebtoken");

function getToken(_id) {
  //assign a token
  const token_id = jwt.sign({ _id }, process.env.JW_KEY, {
    expiresIn: "30d",
  });
  return token_id;
}

module.exports = getToken;