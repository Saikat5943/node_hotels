const express=require("express");
const router=express.Router();
const person=require("./../models/person");

router.post("/",async function(req,res){
    try{
        const data=req.body;//Assuming The rquest body contains person data
        //create a new person document using the mongoose mofdel
        const newPerson=new person(data);
        //save the new person to the database
        const response=await newPerson.save();
        console.log("data is saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:"Internal Server Error"});
    }
})

router.get('/',async function(req,res){
    try{
        const data=await person.find();
        console.log("Data Fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.get("/:worktype",async function(req,res){
    try{
        const worktype=req.params.worktype;
        if(worktype=='chef' || worktype=='manager' || worktype=='waiter'){
            const response=await person.find({work:worktype});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            
            res.status(404).json({error:"Inavalid Work Type"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Serever Error"});
    }
})

router.put("/:id",async function(req,res){
    try{
        const personId=req.params.id;//Extarct the id from the url parameter
        const updatePersonData=req.body;//updated data for the person
        const response=await person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,//return the update document
            runVaildators:true  //run mongoose validation
        });
        if(!response){//in that case respose is null no value update
            return res.status(404).json({error:"Person not found"});
        }
        console.log("data updated");
        res.status(200).json(response);

    }

    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

router.delete("/:id",async function(req,res){
    try{
        deleteId=req.params.id;
        const response=await person.findByIdAndDelete(deleteId);
        if(!response){
            return res.status(404).json({error:"Person not found"});
        }
        console.log("Data is deleted");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
});
module.exports=router;