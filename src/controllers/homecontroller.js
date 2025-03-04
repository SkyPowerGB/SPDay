const user_model=require("../models/user");


function home(req,res){

res.render("home");

}

module.exports={home}