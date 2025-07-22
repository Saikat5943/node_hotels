const express=require('express');
const app=express();
const db=require("./db");
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
app.listen(3000,()=>{
    console.log('listing on port 3000');
});


