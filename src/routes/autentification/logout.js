const express = require('express');
const router = express.Router();
const authController = require('../../controllers/autentification/autentificationController');
const sessionMidleware = require('../../middleware/sessionMidleware');  

router.get("/logout",sessionMidleware.logoutSession,(req,res)=>{});


module.exports=router