const db = require("../config/db.config");


exports.setTask = async (req, res) => {
    const user_id = req.params.user_id;
    const {title, description, due , color} = req.body;
    const sql = "INSERT INTO public.tasks( user_id, description, due, color, title, status) VALUES ($1,$2,$3,$4,$5,'In Progress');"
    db.query(sql,[user_id,description,due,color,title],(err,results)=>{
        if (err) {
            console.log(err.message) 
            res.status(401).json({message:'Failed to add task'})
        } else {
            res.status(201).json({message:'Task added'}) 
        }
    })  
}

exports.setColor = async (req, res) => {
    const task_id = req.params.task_id;
    const color = req.body.color
    const sql = 'UPDATE tasks SET color = $1 WHERE task_id = '+task_id+';'
    db.query(sql,[color],(err,result)=>{
        if (err) {
            console.log(err.message) 
            res.status(401).json({message:'Failed to edit task color'})
        } else {
            res.status(201).json({message:'Color updates'}) 
        }
    })
}

exports.setProgress = async (req, res) => {
    const task_id = req.params.task_id;
    const status = req.body.status
    const sql = 'UPDATE tasks SET status = $1 WHERE task_id = '+task_id+';'
    db.query(sql,[status],(err,result)=>{
        if (err) {
            console.log(err.message) 
            res.status(401).json({message:'Failed to edit task status'})
        } else {
            res.status(201).json({message:'Status updated'}) 
        }
    })
}

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