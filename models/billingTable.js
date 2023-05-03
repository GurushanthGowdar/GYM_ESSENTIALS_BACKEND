const mongoose = require("mongoose");

const billingModel = new mongoose.Schema({
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

const BillingTable = new mongoose.model("BillingTable", billingModel);
module.exports = {
  BillingTable,
};
