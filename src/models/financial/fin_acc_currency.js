const db=require("../../config/db");

async function getAllCurrencyTypes() {
    const query = "SELECT * FROM currency_type";
    const [rows] = await db.execute(query); 
    return rows;
}

async function getCurrencyIdByName(name) {
    const query = "select getCurrencyIdByName(?) as currency_type_id;";
    const [rows] = await db.execute(query, [name]);
  
    return rows[0].currency_type_id;
}

const currencyColNm={
    id:"id",
    name:"currencyName",
    symbol:"currencySign",

}
module.exports={getAllCurrencyTypes,currencyColNm,getCurrencyIdByName};