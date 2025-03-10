
const session = require('express-session');
function addEditAppoitmentGroup(req,res,next){

console.log(req.body);
console.log(req.session.userId);



next();
}


module.exports={addEditAppoitmentGroup}