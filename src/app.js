const express =require("express");
const path = require('path');
const app=express();
const appConfig=require("./config/appconfig");
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '..', 'public'))); 
app.get("/",(req,res)=>{
    res.redirect('/autentification/login.html');
});
app.listen(appConfig.PORT,()=>{console.log("server begin: http://localhost:3000")});