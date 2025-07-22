//db.js file in that case it is create the translator in mongoose
//this mongoose is the connection between node.js server and mongpdb server
const mongoose=require("mongoose");
require("dotenv").config();
//define the mongoDB connection URL
//local database mongdb compus
//const mongoURL=process.env.MONGODB_URL_LOCAL;//Replace 'hotel' with your database name
//online database mongodb atlas
const mongoURL=process.env.MONGODB_URL;
//hotel name database is create this hotel database under all data is store
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//get the default connection
//mongoose maintain a default connection object representing the mongoDB connections
const db=mongoose.connection;
//define event listener for database connection
db.on("connected",()=>{
    console.log("Connected for mongoDB Server");
}) 
db.on("error",(err)=>{
    console.log("MongoDB connection error",err);
})
db.on("disconnected",()=>{
    console.log("MongoDB Disconneted");
})
//exports the database connection
module.exports=db;
