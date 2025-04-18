const express = require('express');
const router = express.Router();
const controller=require("../../controllers/financial/financialController");
const sessionMidleware=require("../../middleware/sessionMidleware");

router.get("/",sessionMidleware.authenticateSession,controller.loadPage);

router.post("/newFinAccount",sessionMidleware.authenticateSession,controller.addEditNewFinAccount,(req,res)=>{});

router.post("/finAccDetails",sessionMidleware.authenticateSession,controller.loadFinAccPage);


router.post("/newTransaction",sessionMidleware.authenticateSession,controller.addNewTransaction,(req,res)=>{});

router.delete("/finAccView/finAccViewDeleteActions",sessionMidleware.authenticateSession,
    controller.deleteTransaction,controller.deleteFinAcc,(req,res)=>{});

module.exports = router;

