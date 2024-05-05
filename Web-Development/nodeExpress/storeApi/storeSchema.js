const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please enter name"],
  },
  price:{
    type:Number,
    required:[true,"Please enter price"],
  },
  featured:{
    type:Boolean,
    default:false,
  },
  rating:{
    type:Number,
    default:4.5,
  },
  createdAt:{
    type:Date,
    default:Date.now(),
  },
  company:{
    type:String,
    enum:{
      values: ["ikea","liddy","caressa","marcos"],
      messages:`{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product",storeSchema);