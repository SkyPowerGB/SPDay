

const db=require("../../config/db");
const moment = require('moment');



async function createNewAppoitment(appointId,date,desc,group,uid){

    const querry="SELECT createEditAppointments(?,?,?,?,?);";
    console.log(`dateinput: ${date}`);
    console.log(`appointId: ${appointId}`);
   
    const [result] = await db.execute(querry, [appointId,desc,date,group,uid]);
    return result; 
};

async function  getAllAppointments(userId) {
    try {
        let query = "CALL getAllAppointments(?)";
        const [results] = await db.query(query, [userId]); 
        return results[0] || results; 
    } catch (e) {
        console.error(e);
        return null;       
    }
}

async function deleteAppointment(id) {
    sql="delete from appointments where appointId=?";
    const [result] = await db.execute(sql, [id]);
    return result;
}

async function getAllAppointmentsFromToByGroup(groupId,FromDate,ToDate){
 const querry="call getAllAppointmentsDateFromToByGrpId(?,?,?)";
 const [result] = await db.execute(querry, [groupId,FromDate,ToDate]);
 return result[0];

}

module.exports={createNewAppoitment,getAllAppointments,deleteAppointment,getAllAppointmentsFromToByGroup}