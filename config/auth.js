
module.exports={
    ensureAuthenticated:(req,res,next)=>{
        
        if(req.isAuthenticated()){
            
            return next();
        }

        //if not authenticate,show a flash message and redirect to home
        req.flash('error_msg','Please login to view that resource')
        res.redirect('/');
    },
    
    forwardAuthenticated:(req,res,next)=>{
        if(!req.isAuthenticated())
        {
            return next();
        }
        
    }
}

