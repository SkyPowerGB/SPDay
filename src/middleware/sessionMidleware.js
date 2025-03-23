const express = require('express');
const session = require('express-session');

const authenticateSession = (req, res, next) => {
  try{
    if (req.session.userId) {
      next();
    } else {
        req.session.returnTo=req.originalUrl;
      return res.redirect("/autentification/login.html");
    }
  }catch(e){
    return res.redirect("/autentification/login.html");
  }
  };

  module.exports={authenticateSession}
