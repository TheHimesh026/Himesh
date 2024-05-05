const express = require("express");
const router = express.Router();
const {getAllStaticProduct,getAllProduct} = require("./controllers.js");

router.get("/products",getAllStaticProduct);
router.get("/search",getAllProduct);
router.get("*",(req,res) => {
  res.status(404).send("You are lost");
});

module.exports = router