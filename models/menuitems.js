const mongoose=require("mongoose");
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:["Sweet","Spicy","Sour"],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
});
//after schema is create then create the model
const menuitems=mongoose.model("menuitems",menuSchema);
module.exports=menuitems;