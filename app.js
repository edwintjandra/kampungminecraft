var express                 =require('express'),
    bodyParser              =require('body-parser'),
    methodOverride          =require('method-override'),
    mongoose                =require('mongoose'),
    passport                =require('passport'),
    app                     =express(); 

var keys  =require('./keys'),
    store =require('./routes/store'),
    auth  =require('./routes/auth'),
    index =require('./routes/index');  

mongoose.connect(keys.mongodb, {useNewUrlParser: true, useUnifiedTopology: true});
app.set('view engine','ejs')
app.use(express.static(__dirname+'/public'))

app.use(require('express-session')({
    secret:keys.secret,
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended:true}))


//my middleware
app.use(function(req,res,next){
    res.locals.user=req.user;
    res.locals.keys=keys;

    next();
})
 
app.use('/store',store);
app.use('/auth',auth);
app.use(index);
 


app.listen(process.env.PORT||3000, ()=>{
    console.log('server started');
})