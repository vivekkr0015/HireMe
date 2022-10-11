const mongoose = require('mongoose');

const CompanySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    notifications:[String]


});

const Company=mongoose.model('Company',CompanySchema);

module.exports=Company;