var express=require('express');


var app=express();


app.set('view engine','ejs')
app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=> {
    res.render('index');
 
})


app.listen(3000, ()=>{
    console.log('server started');
})