const db=require("../../config/db");



async function getAllAccountTypes() {
    const query = "SELECT * FROM fin_account_type";
    const [rows] = await db.execute(query); 
    return rows;
}
module.exports={getAllAccountTypes};