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

//TODO remove Logs
async function getFinAccountData(id){
const query="call getFinAccountData(?)"; 
const [results] =await db.execute(query,[id]);
console.log("getFinAccData: ",results[0][0] ,"// ");
return results[0][0];
}


async function getAccountsUidPaginated(uid, page, limit) {

}

async function updateFinAccBalance(accId,amount){
  const querry= "select updateFinAccBalance(?,?);";
  const [results] = await db.execute(querry,[accId,amount]);
}

// TODO remove Logs
async function getFinAccBalance(accId){
  console.log("getting fin account balance");
const querry="select getFinAccBalance(?) as output;"
const [rows] = await db.execute(querry,[accId]);

return rows[0].output;

}


module.exports={
  getAllFinAccFromUid,
  createEditFinAccount,
  getFinAccountData,
  updateFinAccBalance,
  getFinAccBalance
}