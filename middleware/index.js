var middleware={};

middleware.isLoggedIn=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/auth/login');
}

middleware.roleChecking=function(role){
   
    return function(req,res,next){

        if(req.isAuthenticated()){
            if(req.user.role === role){
                return next();
            }
    
            res.redirect('/auth/login');
        }else {
           res.redirect('/auth/login');   
        }
        
    }
}


module.exports=middleware;