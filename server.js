const express=require('express');
const app=express();
const db=require("./db");
require("dotenv").config();
const PORT=process.env.PORT || 3000;
// const person=require("./models/person")
//const menuitems=require("./models/menuitems");
const bodyParser=require("body-parser");
app.use(bodyParser.json());//req.body
//import the routers files
const personRoutes=require("./routes/personRoutes");
const menuRoutes=require("./routes/menuRoutes");
//use the routers
app.use("/person",personRoutes)
app.use("/menu",menuRoutes)

app.listen(PORT,()=>{
    console.log('listing on port 3000');
});


