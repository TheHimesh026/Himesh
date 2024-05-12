require("dotenv").config();
const jwt = require("jsonwebtoken");

async function Authorization(req,res,next){
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith("Bearer ")){
    return res.status(401).json({error:"Unauthorised"});
  };
  const token = authHeader.split(' ')[1];
  try{
    const payload = jwt.verify(token,process.env.JWT_SECRET);
    req.user = { userId:payload.userId, name:payload.name };
  }catch(error){
    res.status(401).json({error:"Unauthorised"});
  }
  next();
};

module.exports = Authorization