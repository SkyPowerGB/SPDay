const session = require("express-session");


function fillCommonData(obj,req) {
obj.username=req.spd_userData.username;


  return obj;
}



module.exports=fillCommonData;