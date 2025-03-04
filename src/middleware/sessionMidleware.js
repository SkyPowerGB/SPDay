const express = require('express');
const session = require('express-session');

const authenticateSession = (req, res, next) => {
    if (req.session.userId) {
      next();
    } else {
      res.sendStatus(401);
      return res.redirect("/autentification/login.html");
    }
  };

  module.exports={authenticateSession}
