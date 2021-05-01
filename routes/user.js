const express = require("express");
const { userSignUp, userLogin } = require("../controllers/user");

const router = express.Router();

router.route("/signup").post(userSignUp);
router.route("/signin").post(userLogin);

module.exports = router;
