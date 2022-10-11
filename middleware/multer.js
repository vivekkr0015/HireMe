//Using multer middleware for profile photo of developer
//SO that developer can upload his profile picture

const fs = require('fs'); 
const path = require('path'); 
var multer = require('multer'); 
  
var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, "public/uploadimages") ;
    }, 
    filename: (req, file, cb) => { 
        console.log(file);
        cb(null,Date.now()+path.extname(file.originalname)); 
        console.lof(file);
    } 
}); 
  
var upload = multer({ storage: storage });

module.exports=upload;