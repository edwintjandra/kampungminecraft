var mongoose=require('mongoose');

var storeSchema=new mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    description:String,
    date: { type: Date,default: Date.now }
})


module.exports=mongoose.model("Store",storeSchema);