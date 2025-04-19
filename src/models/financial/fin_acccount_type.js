const db=require("../../config/db");



async function getAllAccountTypes() {
    const query = "SELECT * FROM fin_account_type";
    const [rows] = await db.execute(query); 
    return rows;
}

const accTypeColNm={
    id:"fin_account_type_id",
    name:"fin_account_type",  
}

module.exports={getAllAccountTypes,accTypeColNm};