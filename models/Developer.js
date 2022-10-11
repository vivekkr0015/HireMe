
const mongoose=require('mongoose');

const DeveloperSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    hiddenScore:{
        type:String
    },
    subscribed:[String],
    
    notifications:[String],
    

});

const Developer=mongoose.model('Developer',DeveloperSchema);

module.exports=Developer;