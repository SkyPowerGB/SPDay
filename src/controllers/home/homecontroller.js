const user_model=require("../../models/user");


function home(req,res){

res.render("home/home");

}

module.exports={home}