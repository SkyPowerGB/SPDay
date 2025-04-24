const { rotate } = require("pdfkit");
const db=require("../../config/db");
const moment = require('moment');

async function getAllTransGroupFromUid(uid) {
const query="SELECT * FROM  transaction_group WHERE user_account_id=?";
const [rows] = await db.query(query, [uid]);
return rows; 
}

const rowNames={
    id:"transaction_group_id",
    name:"transaction_group_name",
    uid:"user_account_id",
}


async function createEditTransGroup(id,uid,transGroupName) {

}

async function deleteTransactGroup(id) {
const query="select deleteTransactGroup(?);"
const result=await db.query(query,[id]);
}
async function updateTransactGrp(id,gname) {
    const query="select updateTransactGrp(?,?);"
const result=await db.query(query,[id,gname]);
}

async function createNewTransactGroup(uid,gname) {
    const query="select createNewTransactGroup(?,?);"
    const result=await db.query(query,[uid,gname]);

}

async function getTransGroupByUidPaginated(uid,limit,offset) {
    const query="SELECT * FROM transaction_group WHERE user_account_id=? LIMIT ? OFFSET ?";
    const [rows] = await db.query(query,[uid,limit,offset]);
    return rows;
}




module.exports = {
    getAllTransGroupFromUid,
    createEditTransGroup,
    deleteTransactGroup,
    getTransGroupByUidPaginated,
    createNewTransactGroup,
    rowNames,

    updateTransactGrp,
    
};