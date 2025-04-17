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
async function getFinAccBalance(accId){
const querry="select getFinAccBalance(?) as output;"
const [results] = await db.execute(querry,[accId]);
return results[0][0].output;

}
// TODO remove Logs
async function transactionBalanceUpdate(accId,amount){
  console.log("transactionBalanceUpdate: ",accId,amount);
  const curr= await getFinAccBalance(accId);
  const newBalance=curr+amount;
  await updateFinAccBalance(accId,newBalance);
}



module.exports={
  getAllFinAccFromUid,
  createEditFinAccount,
  getFinAccountData,
  updateFinAccBalance,
  transactionBalanceUpdate
}