var express                 =require('express'),
    bodyParser              =require('body-parser'),
    mongoose                =require('mongoose'),
    passport                =require('passport'),
    localStrategy           =require("passport-local"),
    passportLocalMongoose   =require("passport-local-mongoose"),
    expressSession          =require("express-session"),
    app                     =express();

var User=require('./models/user');    
var Store=require('./models/store');
const store = require('./models/store');

    
mongoose.connect('mongodb://localhost:27017/kampungmc', {useNewUrlParser: true, useUnifiedTopology: true});
app.set('view engine','ejs')
app.use(express.static(__dirname+'/public'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSession({
    secret:"corona is a bir",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())


passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//my middleware
app.use(function(req,res,next){
    res.locals.user=req.user;

    next();
})



app.get('/',(req,res)=> {
    res.render('index');
 
})

// auth routes

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',(req,res)=>{
    User.register(new User({username:req.body.username}),req.body.password,(err,user)=>{

        if(err) {
            return;
        }

        passport.authenticate('local')(req,res,()=>{
            res.redirect('/');
            console.log(req.user)
        })
    })
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login'
}),(req,res)=>{})

app.get('/logout',(req,res)=>{
    req.logout();
    
    res.redirect('/');
})

//store route

app.get('/store',(req,res)=>{

    store.find({},(err,stores)=>{
        if(err){
            console.log(err);
            res.redirect('/');
        }else {
            res.render('store',{stores:stores})
        }
    })
    
})

app.get('/store/new',(req,res)=>{
    res.render('newstore')
})

app.post('/store',(req,res)=>{

    store.create(req.body.store,(err,store)=>{
        if(err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.redirect('/store');
        }

    })
})

app.get('/store/:id',(req,res)=>{
    store.findById(req.params.id,(err,store)=>{

        if(err){
            console.log(err);
            res.redirect('/store');
        }else {
            res.render('showstore.ejs',{store:store});
        }

    })
})




app.get('*',(req,res)=>{

    res.send("under construction....")
})

app.listen(3000, ()=>{
    console.log('server started');
})