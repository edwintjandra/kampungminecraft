var router=require('express').Router({mergeParams:true});


var Store       =require('../models/store'),
    keys        =require('../keys'), 
    middleware  =require('../middleware');


router.get('/',middleware.isLoggedIn,(req,res)=>{

    Store.find({},(err,stores)=>{
        if(err){
            console.log(err);
            res.redirect('/');
        }else {
            res.render('store/store',{stores:stores})
        }
    })
    
})

router.get('/new',middleware.roleChecking(keys.role.admin),(req,res)=>{
    res.render('store/new')
})

router.post('/',middleware.roleChecking(keys.role.admin),(req,res)=>{

    Store.create(req.body.store,(err,store)=>{
        if(err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.redirect('/store');
        }

    })
})

router.get('/:id',middleware.isLoggedIn,(req,res)=>{
    Store.findById(req.params.id,(err,store)=>{

        if(err){
            console.log(err);
            res.redirect('/store');
        }else {
            res.render('store/show',{store:store});
        }

    })
})


router.get('/:id/edit',middleware.roleChecking(keys.role.admin),(req,res)=>{

    Store.findById(req.params.id,(err,store)=>{

        if(err) {
            console.log(err);
            res.redirect('/store');
        } else {
            res.render('store/edit',{store:store}); 
        }


    })
})

router.put('/:id',middleware.roleChecking(keys.role.admin),(req,res)=>{
    
    Store.findByIdAndUpdate(req.params.id,req.body.store,(err,store)=>{
        if(err){
            console.log(err);
            res.redirect('/store/'+store._id);
        }else {
            res.redirect('/store/'+store._id);
        }
    })
})

router.delete('/:id',middleware.roleChecking(keys.role.admin),(req,res)=>{

    Store.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            console.log(err);
            res.redirect('/store');
        }else {
            res.redirect('/store');
        }

    })
})

module.exports=router;