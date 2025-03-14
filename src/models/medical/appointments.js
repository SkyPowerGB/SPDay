

const db=require("../../config/db");

async function createNewAppoitment(appointId,date,desc,group,uid){

//  appointId INT,  appointDesc TEXT, appointDate DATETIME, groupID INT, userId INT    
    const querry="select createEditAppointments(?,?,?,?,?);";


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

module.exports={createNewAppoitment,getAllAppointments}