const fillCommonData = require("../../helpers/commonReqData");
const finAccTypeModel=require("../../models/financial/fin_acccount_type");
const finCurrTypeModel=require("../../models/financial/fin_acc_currency");
const finAccModel=require("../../models/financial/fin_account");
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


    res.render("financial/finAccView/finAccView",fillCommonData({},req));
}


module.exports={loadPage,addEditNewFinAccount,loadFinAccPage}