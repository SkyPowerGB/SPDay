

const db=require("../../config/db");
const moment = require('moment');


async function createNewAppoitment(appointId,date,desc,group,uid){

//  appointId INT,  appointDesc TEXT, appointDate DATETIME, groupID INT, userId INT    
    const querry="select createEditAppointments(?,?,?,?,?);";
    const dateFormated= moment(date).format('YYYY-MM-DD HH:mm').trim(); 

    const [result] = await db.execute(querry, [appointId,desc,dateFormated,group,uid]);
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
    
}

module.exports={createNewAppoitment,getAllAppointments}