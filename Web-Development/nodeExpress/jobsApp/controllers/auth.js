const User = require("../models/userSchema.js");
const bcrypt = require("bcryptjs");

async function register(req,res){
 //used this function in middleware which is not necessary
 /** const { name,email,password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password,salt);
  const tempFields = { name,email,password:hashPassword };
  const user = await User.create({...tempFields}); **/
  const user = await User.create({...req.body });
  const token = user.createJWT();
  res.status(201).json({ user });
};

async function login(req,res){
  const { email,password } = req.body;
  if(!email || !password){
    return res.status(400).json({error:"Input fields are empty"});
  };
  const user = await User.findOne({ email });
  if(!user){
    return res.status(401).json({error:"Not found"});
  };
  const isPasswordMatch = await user.comparePassword(password);
  if(!isPasswordMatch){
    return res.status(401).json({error:"Incorrect password"});
  };
  const token = user.createJWT();
  res.status(200).send({ user:{
    name:user.name },token });
};

module.exports = { login,register };