const express = require('express');
const router = express.Router();
const controller=require("../../controllers/financial/financialController");
const sessionMidleware=require("../../middleware/sessionMidleware");
const sanitisator=require("../../middleware/sanitizationMiddleware");

router.get("/",sessionMidleware.authenticateSession,controller.loadPage);

router.post("/newFinAccount",sessionMidleware.authenticateSession,controller.addEditNewFinAccount,(req,res)=>{});

router.post("/finAccDetails",sessionMidleware.authenticateSession,controller.loadFinAccPage);


router.post("/newTransaction",sessionMidleware.authenticateSession,controller.addNewTransaction,(req,res)=>{});

router.delete("/finAccView/finAccViewDeleteActions",sessionMidleware.authenticateSession,
    controller.deleteTransaction,controller.deleteFinAcc);

router.patch("/finAccView/finAccEdit",sessionMidleware.authenticateSession,
    controller.updateFinAcc,(req,res)=>{});    
module.exports = router;


router.get("/TransactionGroupManager",sessionMidleware.authenticateSession,

    controller.openFinGrpPage);

router.post("/TransactionGroupManager/newTransactionGroup",sessionMidleware.authenticateSession,
    sanitisator,controller.addNewTransactionGroup);

router.delete("/TransactionGroupManager/deleteTransactionGroup",sessionMidleware.authenticateSession,
    sanitisator,controller.deleteTransactionGroup);

router.post("/TransactionGroupManager/editTransactionGroup",sessionMidleware.authenticateSession,
    sanitisator,controller.editTransactionGroup);

