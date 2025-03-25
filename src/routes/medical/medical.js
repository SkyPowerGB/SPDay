const express = require('express');
const controller=require('../../controllers/medical/medicalController');
const router = express.Router();
const sessionManger=require("../../middleware/sessionMidleware");



router.get("/Medical",sessionManger.authenticateSession,controller.loadPage,(req,res)=>{
    
});

router.post("/Medical/AppoitmentGroup",sessionManger.authenticateSession,controller.addEditAppoitmentGroup,(req,res)=>{
    
    res.redirect("/Medical");
});

router.post("/Medical/AppointmentsAddEdit",controller.addEditAppointments);


router.post("/Medical/AppointmentsDelete",controller.deleteAppointments);


router.post("/Medical/DataExport",controller.dataExport);

module.exports=router;