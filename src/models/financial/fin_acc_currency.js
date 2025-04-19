const db=require("../../config/db");
async function getAllCurrencyTypes() {
    const query = "SELECT * FROM currency_type";
    const [rows] = await db.execute(query); 
    return rows;
}

const currencyColNm={
    id:"currency_type_id",
    name:"currency_name",
    symbol:"currency_sign",

}
module.exports={getAllCurrencyTypes,currencyColNm};