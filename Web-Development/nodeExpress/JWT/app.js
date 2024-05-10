const express = require("express")
const app = express();
const {login,dashboard} = require("./controllers.js")

app.use(express.json());
app.use(express.static("./public/"));
app.get("/",(req,res) => res.send("Hello"));
app.post("/login",login);
app.get("/dashboard",dashboard);

app.listen(5173,() => {
  console.log("Server listening at 5173...");
});