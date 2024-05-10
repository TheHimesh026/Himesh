const jwt = require("jsonwebtoken");
const jwtSecret = "donttellanyonethisisaswcret";

const login = (req,res) => {
  const { username,password } = req.body;
  if(!username || !password){
    return res.status(401).json({msg:"Missing field enteries"});
  };
  const id = new Date().getDate();
  const token = jwt.sign({username,id},jwtSecret,{expiresIn:'2d'});
  res.status(200).json({msg:'User created',token,id});
};

const dashboard = (req,res) => {
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith("Bearer ")){
    console.log(!authHeader,authHeader)
    res.status(401).json({msg:"Auth Error"});
  };
  const token = authHeader.split(' ')[1];
  try{
    const decoded = jwt.verify(token,jwtSecret);
    const randomNo = Math.floor(Math.random() * 26);
  res.status(200).json({msg:`Hello ${decoded.username}.Your private key is ${randomNo}`});
  }catch(error){
    res.status(401).json({msg:"Fake auth"});
  }
};

module.exports = {
  login,dashboard
};