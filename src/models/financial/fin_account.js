const db = require("../../config/db");
const moment = require("moment");


async function createEditFinAccount(
  id,
  uid,
  accNm,
  balance,
  currTypeId,
  finAccTypeId
) {
  // SQL procedura
  const sql = "call addEditFinAcc(?,?,?,?,?,?)";
  
  const output = await db.execute(sql, [
    id,
    uid,
    accNm,
    balance,
    currTypeId,
    finAccTypeId,
  ]);

  return output;
}

async function getAllFinAccFromUid(uid) {
  const sql = "SELECT * FROM fin_account WHERE user_account_id =?";
  const [rows] = await db.execute(sql, [uid]);
  return rows;
}

async function deleteFinAcc(id){


}

module.exports={getAllFinAccFromUid,createEditFinAccount}