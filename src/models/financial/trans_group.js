const { rotate } = require("pdfkit");
const db=require("../../config/db");
const moment = require('moment');

async function getAllTransGroupFromUid(uid) {
const query="SELECT * FROM  transaction_group WHERE user_account_id=?";
const [rows] = await db.query(query, [uid]);
return rows; 
}

async function createEditTransGroup(id,uid,transGroupName) {

}

async function deleteTransGroup(id) {

}

async function getTransGroupByUidPaginated(uid,limit,offset) {
    const query="SELECT * FROM transaction_group WHERE user_account_id=? LIMIT ? OFFSET ?";
    const [rows] = await db.query(query,[uid,limit,offset]);
    return rows;
}

module.exports = {
    getAllTransGroupFromUid,
    createEditTransGroup,
    deleteTransGroup,
    getTransGroupByUidPaginated
};