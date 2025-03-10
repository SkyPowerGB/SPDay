const express = require('express');
const controller=require('../../controllers/medicalController');
const router = express.Router();
const sessionManger=require("../../middleware/sessionMidleware");



router.get("/Medical",sessionManger.authenticateSession,(req,res)=>{
    
    res.render("medical");
});

router.post("/Medical/AppoitmentGroup",sessionManger.authenticateSession,controller.addEditAppoitmentGroup,(req,res)=>{
    
    res.redirect("/Medical");
});

module.exports=router;