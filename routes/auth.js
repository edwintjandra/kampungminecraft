var router         =require('express').Router({mergeParams:true}),
    passport       =require('passport'),
    LocalStrategy  =require('passport-local'),
    GoogleStrategy =require('passport-google-oauth20')
    
    
var User=require('../models/user'),
    keys=require('../keys')    


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


passport.use(new LocalStrategy(User.authenticate()))
passport.use(new GoogleStrategy({
    clientID: keys.clientId,
    clientSecret: keys.clientSecret,
    callbackURL: "/auth/google/redirect"
},(accessToken, refreshToken, profile, done)=>{
    User.findOne({googleId:profile.id},(err,user)=>{
        if(err){ return done(err) }

        if(user) { return done(null,user) }

        User.create({username:profile.displayName,googleId:profile.id,profileImage:profile._json.picture},(err,user)=>{
            done(null,user);
        })
        
    })
}))


//local

router.get('/register',(req,res)=>{
    res.render('login/register');
})

router.post('/register',(req,res)=>{
    User.register(new User({username:req.body.username}),req.body.password,(err,user)=>{

        if(err) {
            return;
        }

        passport.authenticate('local')(req,res,()=>{
            res.redirect('/');
        })
    })
})

router.get('/login',(req,res)=>{
    res.render('login/login');
})

router.post('/login',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/auth/login'
}),(req,res)=>{})

router.get('/logout',(req,res)=>{
    req.logout();
    
    res.redirect('/');
})    


//google

router.get('/google',passport.authenticate('google', {scope:['profile']} ))
router.get('/google/redirect',passport.authenticate('google',{successRedirect:'/',failureRedirect:'/register'}));





module.exports=router;