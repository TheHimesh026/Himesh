const fs = require("fs");
const Task = require("./task.js");

async function fetchAllTasks(req,res,next){
    const task = await Task.find({});
    res.status(201).send({task});
};

async function fetchSingleTask(req,res){
    const { id:taskID } = req.params;
    const task = await Task.findOne({_id:taskID});
    res.status(200).json(task);
    if(!task){
      return res.status(404).json({error:`no task with id:${taskID}`});
    }
};

async function postTask(req,res){
    const task = await Task.create(req.body);
    res.status(201).json({task});
};

async function updateTask(req,res){
    const { id:taskID } = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{runValidators:true,new:true});
    res.status(200).json({task});
    if(!task){
      return res.status(404).json({error:`no task with id:${taskID}`});
    }
};

async function deleteTask(req,res){
    const { id:taskID } = req.params;
    const task = await Task.findOneAndDelete({_id:taskID});
    res.status(200).json({task});
    if(!task){
      return res.status(404).json({error:`no task with id:${taskID}`});
    }
};

function lostError(req,res){
  fs.readFile("./lostError.html","utf8",(err,data) => {
    if(err){
      res.status(500).send("Internal Error");
    return;
    }
    res.status(404).send(data);
  })
}

module.exports = {
  fetchAllTasks,fetchSingleTask,postTask,updateTask,deleteTask,lostError
}