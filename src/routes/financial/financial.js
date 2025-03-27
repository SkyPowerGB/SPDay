const express = require('express');
const router = express.Router();
const controller=require("../../controllers/financial/financialController");
const sessionMidleware=require("../../middleware/sessionMidleware");

router.get("/Financial",sessionMidleware.authenticateSession,controller.loadPage);



module.exports = router;