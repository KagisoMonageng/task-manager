const db = require("../config/db.config");


exports.getMyTasks = async (req, res) =>  {
    const user_id = req.params.user_id;
    const sql = "SELECT * FROM tasks WHERE user_id = $1";

    db.query(sql,[user_id],(err,tasks)=>{
        if(err){res.status(400).json({message:'Error getting tasks'})}
        else{res.status(200).json(tasks.rows)}
    })
};