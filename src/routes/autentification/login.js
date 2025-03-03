const express = require('express');
const router = express.Router();
const authController = require('../../controllers/autentificationController');

router.get("/login",(req,res)=>{});
router.post("/login",authController.authorizeUser);

module.exports=router