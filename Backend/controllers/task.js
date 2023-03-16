const db = require("../config/db.config");


exports.getMyTasks = async (req, res) =>  {
    const user_id = req.params.user_id;
    const sql = "SELECT * FROM tasks WHERE user_id = $1 ORDER BY due";

    db.query(sql,[user_id],(err,tasks)=>{
        if(err){res.status(400).json({message:'Error getting tasks'})}
        else{res.status(200).json(tasks.rows)}
    })
};

exports.getMyInProgress = async (req, res) =>  {
    const user_id = req.params.user_id;
    const sql = "SELECT * FROM tasks WHERE user_id = $1 AND status = 'In Progress' ORDER BY due";

    db.query(sql,[user_id],(err,tasks)=>{
        if(err){res.status(400).json({message:'Error getting tasks'})}
        else{res.status(200).json(tasks.rows)}
    })
};

exports.getOneTask = async (req, res) =>  {
    const task_id = req.params.task_id;
    const sql = "SELECT * FROM tasks WHERE task_id = $1";

    db.query(sql,[task_id],(err,tasks)=>{
        if(err){res.status(400).json({message:'Error getting task'})}
        else{res.status(200).json(tasks.rows[0])}
    })
};

exports.deleteTask = async (req, res) =>  {
    const task_id = req.params.task_id;
    const sql = "DELETE FROM tasks WHERE task_id = $1";

    db.query(sql,[task_id],(err,tasks)=>{
        if(err){res.status(400).json({message:'Error deleting task'})}
        else{res.status(200).json({message:'Task deleted successfully'})}
    })
};