const express=require("express");
const router=express.Router();
const menuitems=require("./../models/menuitems");

router.post("/",async function(req,res){
    try{
        const data=req.body;
        const newMenuItems=new menuitems(data);
        const menu=await newMenuItems.save();
        console.log("Data is saved");
        res.status(200).json(menu);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Server Error"});
    }
})

router.get("/",async function(req,res){
    try{
        const items=await menuitems.find();
        console.log("items is fatched");
        res.status(200).json(items);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Serever is Error"});
    }
})
router.get("/:taste",async function(req,res){
    try{
        const taste=req.params.taste;
        if(taste=="Sweet" || taste=="Spicy" || taste=="Sour"){
            const response=await menuitems.find({taste:taste})
            console.log("Taste is fetched Successfully");
            res.status(200).json(response);
        }
        else{
            console.log("error is created");
            res.status(403).json({error:"Inavalid taste type"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Serever Error"});
    }
})

router.put("/:id",async function(req,res){
    try{
        const menuId=req.params.id;
        const updateMenuItem=req.body;
        const response=await menuitems.findByIdAndUpdate(menuId,updateMenuItem,{
            new:true,
            runValidators:true
        })
        if(!response){
            res.status(404).json({menu:"menuitems not found"});
        }
        console.log("menu items is saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})
router.delete("/:id",async function(req,res){
    try{
        const deleteId=req.params.id;
        const response=await menuitems.findByIdAndDelete(deleteId);
        if(!response){
            return res.status(404).json({respond:"Delete data is not found"});
        }
        console.log("data is deleted");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internel Serever Error"});
    }
    
})
module.exports=router;

//comment added for testing purpuse