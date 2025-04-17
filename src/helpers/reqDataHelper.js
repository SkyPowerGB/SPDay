function getUid(req){
    return req.session.userId
}
module.exports={getUid};