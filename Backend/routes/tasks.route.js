const express = require("express");
const router = express.Router();

const task = require("../controllers/task");


//Authorization
router.get("/:user_id", task.getMyTasks);
router.delete("/:task_id", task.deleteTask);
router.get("/in-progress/:user_id", task.getMyInProgress);


module.exports = router;