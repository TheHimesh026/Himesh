const loggerMethod = (req,res,next)=> {
  console.log(`Hello I'm here in ${req.url}`);
  next();
};