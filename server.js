const express = require("express");
const app = express();
const port = 3000;
const api1 = require("./routes/api1");
const api2 = require("./routes/api2");
app.use(api1);
app.use(api2);
app.listen(port,()=>{
    console.log("server is running");
})

//two api one is to sort the price
//other one to get bear price
