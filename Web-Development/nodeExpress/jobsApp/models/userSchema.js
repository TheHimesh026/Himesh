const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please provide name"],
    minlength:3,
    maxlength:15,
  },
  email:{
    type:String,
    required:[true,"Please provide email"],
    unique:true,
    minlength:8,
    maxlength:26,
  },
  password:{
    type:String,
    required:[true,"Please provide password"],
    minlength:8,
  }
});

 userSchema.methods.createJWT = function (){
  return jwt.sign({
    userId:this._id,name:this.name
  },
   process.env.JWT_SECRET,
  {
   expiresIn: process.env.JWT_TIME
  });
};

 userSchema.pre("save",async function(next){
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password,salt);
   next();
 });
 
 userSchema.methods.comparePassword = async function(inputPassword){
   const isMatch = await bcrypt.compare(inputPassword,this.password);
   return isMatch;
};

module.exports = mongoose.model("User",userSchema);