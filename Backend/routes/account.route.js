const express = require("express");
const router = express.Router();

const account = require("../controllers/account");


//Authorization
router.post("/register", account.register);
router.post("/login", account.login);
router.get("/:user_id", account.getUser);

module.exports = router;