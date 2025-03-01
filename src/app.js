const express =require("express");
const path = require('path');
const app=express();
const appConfig=require("./config/appconfig");
const ragisterRoute=require("./routes/autentification/register");


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '..', 'public'))); 
app.use('/autentification', ragisterRoute);
app.get("/",(req,res)=>{
    res.redirect('/autentification/login.html');
});
app.listen(appConfig.PORT,()=>{console.log("server begin: http://localhost:"+appConfig.PORT)});