const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name:{
    type:String,
    trim:true,
    maxlength:[20,"Name cannot be bigger than 20 characters"],
    required:[true,"Name mustn't be empty"]
  },
  isDone:{
    type:Boolean,
    default:false
  }
  /*can be written as 
  isDone:Boolean*/
});

module.exports = mongoose.model("Task",taskSchema)