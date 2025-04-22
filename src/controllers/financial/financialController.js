const fillCommonData = require("../../helpers/commonReqData");
const finAccTypeModel=require("../../models/financial/fin_acccount_type");
const finCurrTypeModel=require("../../models/financial/fin_acc_currency");
const finAccModel=require("../../models/financial/fin_account");
const finTransModel=require("../../models/financial/fin_transaction");
const finTransGroupModel=require("../../models/financial/trans_group");

const deleteConfrimForm=require("../../helpers/forms/deleteConfrimFormConfig");


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


  
    const finAccId=req.body.finAccId;

    const transactionRows=await finTransModel.getAllFinAccountTransactions(finAccId);

    const transGroupRows=await finTransGroupModel.getAllTransGroupFromUid(req.session.userId);

    const finAccData= await finAccModel.getFinAccountData(finAccId);

    const currencies=await finCurrTypeModel.getAllCurrencyTypes();
    const currencyColNm=finCurrTypeModel.currencyColNm;
    const finAccTypeColNm=finAccTypeModel.accTypeColNm;
    const finAccTypes=await finAccTypeModel.getAllAccountTypes();

    transactionRows.forEach(e => {
     e.transOuputDateFormat=   moment(e.finTransDate).format(dateDisplayFormat);
     e.inputDateFormat=moment(e.finTransDate).format(dateInputFormat);
    });

    res.render("financial/finAccView/finAccView",fillCommonData(
        {finAccId,transactionRows,transGroupRows,finAccData,currencies,finAccTypes,currencyColNm,finAccTypeColNm},req));

}


// TODO :remove console logs 
async function addNewTransaction(req,res,next){
   let{id,finAccId,transDesc,transValue,transDate,transGrpNm}=req.body;
    const uid=req.session.userId;
    let valid=true;

    id=sanitize(id);
    finAccId=sanitize(finAccId);
    transDesc=sanitize(transDesc);
    transAmm=sanitize(transValue);
    transDate=sanitize(transDate);
    transGrpNm=sanitize(transGrpNm);

    console.log("-----------------------------------------------------------");
    console.log("ADD/EDIT TRANSACTION");
    console.log(id,finAccId,transDesc,transAmm,transDate,transGrpNm);
    console.log("-----------------------------------------------------------");


    valid=finTransModel.validateTransAmm(transAmm);
    valid=finTransModel.validateTransDesc(transDesc);
    valid=finTransModel.validateTransGrpNm(transGrpNm);

  
    
   
     // TODO REMOVE LOGS
    if(valid){

        finAccId=parseInt(finAccId);
        transAmm=parseFloat(transAmm);
        let succes=true;

        let change=transAmm;
        try{
        if(id!=0){
            // editing transaction
            // get old transaction amount
            const oldTransAmount=await finTransModel.getTransactionAmount(id);
            console.log("oldTransAmount: ",oldTransAmount);
            change=transAmm-oldTransAmount;
            console.log("change: ",change);


        
        }
        // update account balance
         const currAccBalance= await  finAccModel.getFinAccBalance(finAccId);
         const newAccBalance=currAccBalance+change;
       await finAccModel.updateFinAccBalance(finAccId,newAccBalance);  

    }catch(err){
       succes=false;
        console.log("Error updating account balance: ",err);
    }

        id=parseInt(id);
        try{
        if(succes){
        const res=await finTransModel.addEditNewFinTransctionV2(id,finAccId,transDesc,transAmm,transDate,transGrpNm,uid);
        }
       ;
         
        }catch(err){
            console.log(err);
        }


    }else{
        console.log("invalid data");
    }


    res.json({OK:1})
}

// TODO: remove console logs
async function deleteTransaction(req,res,next) {
    let accBalance;
    let row;
    let transAmount;
    let finAccId;
    let transactId;
    
    const type=req.body[deleteConfrimForm.paramNames.type];
    if(type!=deleteConfrimForm.deleteTypes.finTrans){
       console.log("fin trans delete cancel other thing:");
       next();
       
    }

     transactId=req.body[deleteConfrimForm.paramNames.id];

    console.log("----------STARTING DELETE OPERATION-------------------------------------------------");

    try{
         row=await finTransModel.getFinTransRow(transactId);
          
    }catch(err){
        deleteUnssuceful(res);
        return;
    }
   

    

      finAccId=row[finTransModel.transactTabColNms.finAccId];
      transAmount=row[finTransModel.transactTabColNms.transAmount];
     try{
        console.log("getting account balance for id: ",finAccId);
      accBalance=await finAccModel.getFinAccBalance(finAccId);
     }
     catch(err){
        console.log("Error getting balance data");
        deleteUnssuceful(res);
        return;
     }

     const newAccBalance=accBalance-transAmount;
     console.log("new acc balance ready ");
   
    
    console.log("Deleting transaction with id: ",transactId);
    try{
    await finTransModel.deleteTransactionById(transactId);
    
    
    }
    catch(err){
         deleteUnssuceful(res);
         console.log("Error deleting transaction: ");
         return;
    }

    try{
        await finAccModel.updateFinAccBalance(finAccId,newAccBalance);
        console.log("updating account balance done ");
        res.status(200).json({OK:1});
    
    
        }catch(err){
           console.log("Error updating account balance");
           deleteUnssuceful(res);
           return;
        }
      
    
}
function deleteUnssuceful(res){
    res.status(500).json({OK:0});
}

async function deleteFinAcc(req,res,next) {
    const id=req.body[deleteConfrimForm.paramNames.id];
    const type=req.body[deleteConfrimForm.paramNames.type];

    if(type!=deleteConfrimForm.deleteTypes.finAcc){
        console.log("fin acc delete cancel other thing:");
        next();
    }

   const result=await finAccModel.deleteFinAcc(id);



}


// TODO: remove console logs
async function updateFinAcc(req,res,next){

    const data=req.body;
    console.log(data);
    let id=data.finAccEditFormAccIdInput;
    let accNm=data.finAccEditFormNameInput;
    let accTy=data.finAccEditFormAccType;
    let accCt=data.finAccEditFormCurrencyInput;
    let accBalance=data.finAccEditFormBalance;
    const uid=req.session.userId;

    let valid=true;
    console.log(uid);
    if(!isDecimal(accBalance)){valid=false;}

    accBalance=parseFloat(accBalance);
    accNm=sanitize(accNm);
    accTy=sanitize(accTy);
    accCt=sanitize(accCt);


    
    id=parseInt(id);
    if(id<0){
        valid=false;
        console.log("invalid id: ",id);
    }

    const accTyId=await finAccTypeModel.getAccountTypeIdByName(accTy.trim());
    const accCtId=await finCurrTypeModel.getCurrencyIdByName(accCt.trim());

    if(accTyId==0 || accCtId==0){valid=false; console.log("invalid account type or currency type",accTyId,accCtId );}
 
    if(valid){
   await finAccModel.createEditFinAccount(id,uid,accNm,accBalance,accTyId,accCtId); 
    res.status(200).json({OK:1});
    return;
    }

    res.status(500).json({OK:0});
}




module.exports={loadPage,addEditNewFinAccount,loadFinAccPage,addNewTransaction,deleteTransaction,deleteFinAcc,updateFinAcc}