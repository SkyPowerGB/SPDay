const db=require("../config/db");
const sanitize = require("sanitize-html");

async function addGroup(uid,groupname){
    const query="insert into appointment_group(appointment_group,user_account_id) values(?,?)"

     let groupName=sanitize(groupname);

      const [result] = await db.execute(query, [groupName,uid]);
     return result;


}

async function getGroups(uid) {
    const query = "SELECT * FROM appointment_group WHERE user_account_id = ?;";
    const [rows] = await db.execute(query, [uid]);
    return rows; 
}

async function updateGroup(gid,data){
    const query="update appointment_group set appointment_group=? where appointment_group_id=?;";
    let datas=sanitize(data);
    const [result] = await db.execute(query, [gid,datas]);
    return result;
}

async function deleteGroup(gid){
    const query="delete from appointment_group where appointment_group_id=?";
    const [result] = await db.execute(query, [gid]);
        return result; 
}

module.exports= {addGroup,getGroups,updateGroup,deleteGroup}

