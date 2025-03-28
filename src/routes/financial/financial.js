const express = require('express');
const router = express.Router();
const controller=require("../../controllers/financial/financialController");
const sessionMidleware=require("../../middleware/sessionMidleware");

router.get("/",sessionMidleware.authenticateSession,controller.loadPage);

router.post("/newFinAccount",sessionMidleware.authenticateSession,controller.addEditNewFinAccount,(req,res,next)=>{});

module.exports = router;

