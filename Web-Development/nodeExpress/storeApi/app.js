const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes.js");
const connectDB = require("./connect.js");
const storeSchema = require("./storeSchema.js");


app.use(express.static("./public/"));
app.use(express.json());
app.use("/api/v1/store",routes);

const port = process.env.PORT || 5173;
async function startProcess(){
  try{
    await connectDB();
    app.listen(port,() => console.log(`Server running at ${port}...`));
  }catch(error){
    console.log("Something went wrong",error);
  }
};

startProcess();