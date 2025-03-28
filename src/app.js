const express =require("express");
const path = require('path');
const app=express();
const session = require('express-session');

const appConfig=require("./config/appconfig");

const auttentificate=require("./middleware/sessionMidleware");

const registerRoute=require("./routes/autentification/register");
const loginRoute=require("./routes/autentification/login");
const homeRoute=require("./routes/home/home");
const medicalRoute=require("./routes/medical/medical");
const logoutRoute=require("./routes/autentification/logout"); 
const financialRoute=require("./routes/financial/financial");

app.use(session({
    secret: 'fddkdo3i3o219',  
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false,httpOnly: true,   maxAge: 1000 * 60 * 60 * 24 }  
  }));

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '..', 'public'))); 

app.use('/autentification', registerRoute);
app.use('/autentification',loginRoute);
app.use('/autentification',logoutRoute);
app.use('/',medicalRoute);
app.use("/",homeRoute);
app.use("/Financial",financialRoute);


app.get("/",(req,res)=>{
    res.redirect('/autentification/login.html');
});


app.listen(appConfig.PORT,()=>{console.log("server begin: http://localhost:"+appConfig.PORT)});