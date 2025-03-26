const user_model=require("../../models/user");
const fillCommonData = require("../../helpers/commonReqData");

function home(req,res){

res.render("home/home",fillCommonData({ },req));

}

module.exports={home}