const db=require("../config/db");
const sanitize = require("sanitize-html");

async function addGroup(uid,groupname){
    const query="insert into appointment_group(appointment_group,user_account_id) values(?,?)"
     let id=parseInt(uid);
     let groupName=sanitize(groupname);

      const [result] = await db.execute(query, [groupName,id]);
     return result;


}