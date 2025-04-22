const db=require("../../config/db");



async function getAllAccountTypes() {
    const query = "SELECT * FROM fin_account_type";
    const [rows] = await db.execute(query); 
    return rows;
}


async function getAccountTypeIdByName(name) {


    const query = "select getFinAccIdByName(?) as fin_account_type_id;";
    const [rows] = await db.execute(query, [name]);

    return rows[0].fin_account_type_id;
}

const accTypeColNm={
    id:"fin_account_type_id",
    name:"fin_account_type",  
}

module.exports={getAllAccountTypes,accTypeColNm,getAccountTypeIdByName};