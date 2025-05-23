
const { isNumeric } = require("validator");
const db = require("../../config/db");
const moment = require("moment");


async function addEditNewFinTransctionV2(
    id,
fAccId,
transDesc,
transAmm,
transDate,
transGrpNm,
uid
){
   
    const query="call addEditFinTransV2(?,?,?,?,?,?,?)";
    const output=db.execute(query,[id,fAccId,transDesc,transAmm,transDate,transGrpNm,uid]);


  return output;
}


async function getAllFinTransByAccountIdV1(id){
const query="select * from fin_transaction where fin_account_id=?";
   const [rows] = await db.query(query, [id]); 
return rows; 

  
}

async function deleteTransactionById(id){
    const query="delete from fin_transaction where fin_transaction_id=?";
    const output=db.execute(query,[id]);
    return output;
}

async function getAllFinAccountTransactions(id){
    const procedure="call getFinAccountTransactions(?)";
    const [results] = await db.query(procedure, [id]);
   
    return results[0];
}
async function getFinAccountTransactionsPaginated(id, page, limit){}

// todo remove logs
async function getTransactionAmount(transId){
    const query="select getTransactionAmount(?) as output";
    const [rows] = await db.execute(query,[transId]);
    console.log("getting transaction amount: ",rows[0].output);
    return rows[0].output;
}

async function getFinTransRow(transactId) {
const querry="CALL getFinTransData(?)";
const [rows] = await db.execute(querry,[transactId]);
return rows[0][0];
}

async function getFinAccId(transId){
 const querry="SELECT getTransactionFinnAccountId(?) as output";
 const [rows] = await db.execute(querry,[transId]); 
return rows[0].output;
}

function validateTransDesc(transDesc){
    if(transDesc.length>0 && transDesc.length<255){
        return true;
    }
    return false;
}
function validateTransAmm(transAmm){   
    if(isNumeric(transAmm)){
        return true;
    }
    return false;
}
function validateTransGrpNm(transGrpNm){
    if(transGrpNm.length>0 && transGrpNm.length<255){
        return true;
    }
    return false;
}

const transactTabColNms={
    id:"fin_transaction_id",
    finAccId:"fin_account_id",
    transDesc:"transaction_desc",
    transAmount:"transaction_amount",
    transDate:"transaction_date",
    transactionGrp_id:"transaction_group_id",
}


module.exports={
    transactTabColNms,
    validateTransDesc,
    validateTransAmm,
    validateTransGrpNm,
    addEditNewFinTransctionV2,
    
    getAllFinAccountTransactions,
    getTransactionAmount,
    getFinAccId,
    getFinTransRow,

    deleteTransactionById
}