const express = require("express");
const path = require("path");
const app = express();
const { data } = require("../content/data.js");
const send = require("./send.js");
const loggerMethod = require("./middleware.js");

app.use("/send",send);
app.use(express.urlencoded({extended:false}));
app.use(express.static("../content"));
//app.use("/",loggerMethod); //providing the first argument is optional and it will add the method after the url and also the order matters and place multiple functions in array and you can't provide seperate path for both of them in one

app.get("/",(req,res) => {
  res.status(200).sendFile(path.resolve(__dirname,"../content/index.html"));
});

app.post("/send",(req,res) => {
  const { todo } = req.body;
  console.log(todo,"hiii");
  res.status(200).send("Successfull");
});//it will not work with js.For js another will be used 

app.get("/search/:name",(req,res) => {
  const { name } = req.params;
  console.log(req.params);
  res.end(name);
});

app.get("/search",(req,res) => {
  console.log(req.query);
  res.end(req.query.q);
});

app.all("*",(req,res) => {
  res.status(404).send(`</h1>404 Error</h1>`);
});

app.listen(5173,() => {
  console.log("Server at 5173...");
});