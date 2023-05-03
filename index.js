const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { BillingTable } = require("./models/billingTable");
const { ShippingTable } = require("./models/ShippingDetailsTable");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Aashika_backend");

app.get("/TestServerConnection", (req, res) => {
  res.send("server Connected");
});


app.post("/PlaceOrder",async (req,res)=>{
    const {userEmail,Billingname, Billingemail,Billingcity, Billingaddress , BillingZIP_Code , Billingcountry, Products,totalAmount}=req.body;
    const {Shippingname, Shippingemail,Shippingcity, Shippingaddress , ShippingZIP_Code , Shippingcountry}=req.body;

    const addBillingData=new BillingTable({
        name:Billingname,
        email:Billingemail,
        city:Billingcity,
        ZIP_Code:BillingZIP_Code,
        address:Billingaddress,
        country:Billingcountry,
        userEmail:userEmail,
        Amount:totalAmount
    })
    await addBillingData.save();
    const addShippingData=new ShippingTable({
        name:Shippingname,
        email:Shippingemail,
        city:Shippingcity,
        address:Shippingaddress,
        ZIP_Code:ShippingZIP_Code,
        country:Shippingcountry,
        userEmail:userEmail,
        Amount:totalAmount
    })
    await addShippingData.save();

    res.json({
        status:true,
        data:{BillingData:addBillingData,ShippingData:addShippingData},
        msg:"order placed successfully"
    })
})


app.get("/getAllOrdersPlaced",async (req,res)=>{
    const BillingData=await BillingTable.find();
    const ShippingData=await ShippingTable.find();
    res.json({
        status:true,
        data:{
            billingData:BillingData,
            ShippingData:ShippingData
        },
        msg:"Fetched all the data"
    })
})


app.listen(8080, () => {
  console.log("Server listening on port 8080");
});