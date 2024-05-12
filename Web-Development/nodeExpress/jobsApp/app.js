const express = require("express");
const app = express();
const jobsRoute = require("./routes/jobsRoute.js");
const authRoute = require("./routes/authRoute.js");
const connectDB = require("./connect.js");
const authorizer = require("./authorization.js");
//security packages
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const rateLimiter = require("express-rate-limit");

//middlewares
app.set("trust proxy",1);
app.use(rateLimiter({
  windowMs:15 * 60 * 1000,
  max:100
}));
app.use(helmet());
app.use(xss());
app.use(cors());
app.use(express.json());
//routes
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/jobs",authorizer,jobsRoute);

//connect to DB
const port = process.env.PORT || 5173;
async function start(){
  try{
    await connectDB();
    app.listen(port,() => {
      console.log("Server started at port",port,"...");
    });
  }catch(error){
    console.log("Error occured while connecting to DB");
  }
};

start();