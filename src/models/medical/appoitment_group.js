const db=require("../../config/db");
const sanitize = require("sanitize-html");

async function addGroup(uid,groupname){
    const query="insert into appointment_group(groupName,fkUserId) values(?,?)"

     let groupName=sanitize(groupname);

      const [result] = await db.execute(query, [groupName,uid]);
     return result;


}

async function getGroups(uid) {
    const query = "SELECT * FROM appointment_group WHERE fkUserId = ?;";
    const [rows] = await db.execute(query, [uid]);
    return rows; 
}

async function updateGroup(gid,data){
    const query="update appointment_group set groupName=? where appointGroupId=?;";
 
    const [result] = await db.execute(query, [data,gid]);
    return result;
}

async function deleteGroup(gid){
    const query="delete from appointment_group where appointGroupId=?";
    const [result] = await db.execute(query, [gid]);
        return result; 
}

module.exports= {addGroup,getGroups,updateGroup,deleteGroup}

