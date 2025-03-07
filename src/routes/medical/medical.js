const express = require('express');
const router = express.Router();



router.get("/Medical",(req,res)=>{
    
    res.render("medical");
});

module.exports=router;