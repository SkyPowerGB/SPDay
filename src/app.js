const express =require("express");
const app=express();
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen("3000",()=>{console.log("server begin: http://localhost:3000")});