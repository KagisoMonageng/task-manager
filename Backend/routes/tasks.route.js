const express = require("express");
const router = express.Router();

const task = require("../controllers/task");


//Authorization
router.get("/:user_id", task.getMyTasks);


module.exports = router;