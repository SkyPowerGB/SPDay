

const db=require("../../config/db");

async function createNewAppoitment(appointId,date,desc,group,uid){

//  appointId INT,  appointDesc TEXT, appointDate DATETIME, groupID INT, userId INT    
    const querry="select createEditAppointments(?,?,?,?,?);";


    const [result] = await db.execute(querry, [appointId,desc,date,group,uid]);
    return result; 
};

async function getAllAppointmnets(userId){
    try{
    let querry="select * from appointments where user_account_id=?";
    const [rows]=await db.execute(querry,[userId]);
    return rows;
    }catch(e){
        return null;       
    }
}

module.exports={createNewAppoitment,getAllAppointmnets}