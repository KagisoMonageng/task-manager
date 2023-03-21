const express = require("express");
const router = express.Router();

const task = require("../controllers/task");


//Authorization
router.get("/:user_id", task.getMyTasks);
router.post('/:user_id', task.setTask)
router.delete("/:task_id", task.deleteTask);
router.get("/in-progress/:user_id", task.getMyInProgress);
router.put("/color/:task_id", task.setColor)
router.put("/status/:task_id", task.setProgress)


module.exports = router;