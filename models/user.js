var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");
var keys=require('../keys');

var userSchema=new mongoose.Schema({
    username:String,
    password:String,
    googleId:String,
    role:{type:String,default:keys.role.basic},
    profileImage:{type:String,default:"https://images.unsplash.com/photo-1593956426409-6dd9c862d8c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}
})

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model('User',userSchema);