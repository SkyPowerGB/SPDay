const express = require('express');
const session = require('express-session');
const user=require("../models/user");

//  req.spd_userData 
//  req.session.userId

const authenticateSession =async (req, res, next) => {
  console.log("autehnticate session");
  try{ 
    if (req.session.userId) {
      req.spd_userData = await user.getUserDataById(req.session.userId);
     
      req.session.returnTo=req.originalUrl;

      next();
    } else {
        
        return res.redirect("/autentification/login.html");
    }
  }catch(e){
    console.log("autehnticate session failed" +e);
    return res.redirect("/autentification/login.html");
  }
  };

  const logoutSession = (req, res, next) => {
    
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid');
      return res.redirect('/autentification/login.html');
    });
  }

  module.exports={authenticateSession,logoutSession};
