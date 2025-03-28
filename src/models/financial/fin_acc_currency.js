const db=require("../../config/db");
async function getAllCurrencyTypes() {
    const query = "SELECT * FROM currency_type";
    const [rows] = await db.execute(query); 
    return rows;
}
module.exports={getAllCurrencyTypes};