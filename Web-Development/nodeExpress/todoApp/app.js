const express = require("express");
const app = express();
const routes = require("./routes.js");
const connectDB = require("./connect.js")

app.use("/",express.static("./public/"));
app.use(express.json());
app.use("/api/v1/task",routes);

const port = process.env.PORT || 5173;
const connectStart = async () => {
  try {
    await connectDB();
    app.listen(5173, () => {
      console.log(`Server running at port ${port}...`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

connectStart();