const express = require('express');
const router = express.Router();
const homecontroller=require("../../controllers/home/homecontroller");
const sessionManger=require("../../middleware/sessionMidleware");


router.get("/home",sessionManger.authenticateSession,homecontroller.home);


module.exports=router;