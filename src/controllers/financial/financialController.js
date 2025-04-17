const fillCommonData = require("../../helpers/commonReqData");
const finAccTypeModel=require("../../models/financial/fin_acccount_type");
const finCurrTypeModel=require("../../models/financial/fin_acc_currency");
const finAccModel=require("../../models/financial/fin_account");
const finTransModel=require("../../models/financial/fin_transaction");
const finTransGroupModel=require("../../models/financial/trans_group");


const moment = require("moment");
const dateDisplayFormat="DD MM YYYY";
const dateInputFormat="YYYY-MM-DD";

const session=require("express-session");
const sanitize = require("sanitize-html");
const { isNumeric, isDecimal } = require("validator");

async function loadPage(req, res,next) {
     const finAccTypes=await finAccTypeModel.getAllAccountTypes();
     const finCurrTypes=await finCurrTypeModel.getAllCurrencyTypes();
     const finAccounts=await finAccModel.getAllFinAccFromUid(req.session.userId);
    
    res.render("financial/financial", fillCommonData( { title: "Financial" 
        ,finAccTypes:finAccTypes,CurrencyTypes:finCurrTypes,finAccounts:finAccounts },req));
}

async function addEditNewFinAccount(req,res,next) {
    const data=req.body;
    console.log(data);
    
    let id=data.fAccId;
    let accNm=data.finAccountName;
    const accTy=data.finAccountType;
    const accCt=data.finCurrType;
    let accBalance=data.finAccBalance;
    const uid=req.session.userId;

    let valid=true;
    console.log(uid);
    if(!isDecimal(accBalance)){valid=false;}
    accBalance=parseFloat(accBalance);
    accNm=sanitize(accNm);

    id=parseInt(id);
    if(id<0){
        valid=false;
    }
 
    if(valid){
   await finAccModel.createEditFinAccount(id,uid,accNm,accBalance,accTy,accCt); 
    }

    res.redirect("/Financial");
}


async function loadFinAccPage(req,res,next){


    console.log(req.body);
    const finAccId=req.body.finAccId;

    const transactionRows=await finTransModel.getAllFinAccountTransactions(finAccId);

    const transGroupRows=await finTransGroupModel.getAllTransGroupFromUid(req.session.userId);

    const finAccData= await finAccModel.getFinAccountData(finAccId);

    transactionRows.forEach(e => {
     e.transOuputDateFormat=   moment(e.finTransDate).format(dateDisplayFormat);
     e.inputDateFormat=moment(e.finTransDate).format(dateInputFormat);
    });

    res.render("financial/finAccView/finAccView",fillCommonData({finAccId,transactionRows,transGroupRows,finAccData},req));

}



async function addNewTransaction(req,res,next){
   let{id,finAccId,transDesc,transAmm,transDate,transGrpNm}=req.body;
    const uid=req.session.userId;
    let valid=true;

    id=sanitize(id);
    finAccId=sanitize(finAccId);
    transDesc=sanitize(transDesc);
    transAmm=sanitize(transAmm);
    transDate=sanitize(transDate);
    transGrpNm=sanitize(transGrpNm);

    console.log("-----------------------------------------------------------");
    console.log("ADD/EDIT TRANSACTION");
    console.log(id,finAccId,transDesc,transAmm,transDate,transGrpNm);
    console.log("-----------------------------------------------------------");


    valid=finTransModel.validateTransAmm(transAmm);
    valid=finTransModel.validateTransDesc(transDesc);
    valid=finTransModel.validateTransGrpNm(transGrpNm);
   

    if(valid){

        finAccId=parseInt(finAccId);
        transAmm=parseFloat(transAmm);
        id=parseInt(id);
        try{
        
        const res=await finTransModel.addEditNewFinTransctionV2(id,finAccId,transDesc,transAmm,transDate,transGrpNm,uid);
      
       ;
         
        }catch(err){
            console.log(err);
        }


    }else{
        console.log("invalid data");
    }


    res.json({OK:1})
}


module.exports={loadPage,addEditNewFinAccount,loadFinAccPage,addNewTransaction}