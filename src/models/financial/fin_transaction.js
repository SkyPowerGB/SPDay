
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

async function deleteTransactionsById(id){
    const query="delete from fin_transaction where id=?";
    const output=db.execute(query,[id]);
    return output;
}

async function getAllFinAccountTransactions(id){
    const procedure="call getFinAccountTransactions(?)";
    const [results] = await db.query(procedure, [id]);
    console.log("Results of get transactions:", results[0]);
    return results[0];
}
async function getFinAccountTransactionsPaginated(id, page, limit){}



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

module.exports={
    validateTransDesc,
    validateTransAmm,
    validateTransGrpNm,
    addEditNewFinTransctionV2,
    
    getAllFinAccountTransactions
}