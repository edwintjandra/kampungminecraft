var router=require('express').Router({mergeParams:true})


var middleware=require('../middleware')


router.get('/',(req,res)=> {
    res.render('index');
 
})

router.get('/profile',middleware.isLoggedIn,(req,res)=>{
    res.render('profile');
})


router.get('*',(req,res)=>{

    res.send("under construction....")
})

module.exports=router;