const mongoose = require("mongoose");

const ShippingModel = new mongoose.Schema({
  userEmail:{
        type:String
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  address:{
    type:String
  },
  ZIP_Code :{
    type: String
  },
  country:{
    type:String
  },
  
  Amount:{
    type:String
  }
});

const ShippingTable = new mongoose.model("ShippingTable", ShippingModel);
module.exports = {
  ShippingTable,
};
