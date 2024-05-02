const express = require("express");
const router = express.Router();

router.get("/data",(req,res) => {
  res.status(200).json(data);
});

module.exports = router