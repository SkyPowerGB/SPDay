const express = require('express');
const path = require('path');
const authController = require('../../controllers/autentificationController');  
const router = express.Router();




router.post('/register', authController.register);  


module.exports = router;