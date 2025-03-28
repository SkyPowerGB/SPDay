const validator = require("validator");
const sanitize = require("sanitize-html");
const userModel = require("../../models/user");
const bcrypt = require("bcrypt");


const session = require('express-session');
async function register(req, res,next) {
  const data = req.body;
  let valid = true;
  const errors = [];

  // Sanitizacija
  const username = sanitize(data.username);
  const email = sanitize(data.email);
  const password = data.password;
  const passwordRpt = data.passwordRpt;

  // Validacija
  if (!username || username.length < 3) {
    valid = false;
    errors.push("Username must be at least 3 characters long.");
  }

  if (!validator.isEmail(email)) {
    valid = false;
    errors.push("Invalid email format.");
  }

  if (!password || password.length < 8) {
    valid = false;
    errors.push("Password must be at least 8 characters long.");
  }

  if (password !== passwordRpt) {
    valid = false;
    errors.push("Passwords do not match.");
  }
  
  


  if (!valid) {
    console.log("validation fail");
    console.log(errors);
    return res.status(400).json({
      message: "Validation failed.",
      errors: errors,
    });
  }

  if (valid) {
    try {
         console.log("validation succesful");
        const salt = await bcrypt.genSalt(10); 
        
   
        const hashedPassword = await bcrypt.hash(password, salt); 

     
        const result = await userModel.createUser(username, email, hashedPassword);

        
       
        return res.redirect("/autentification/login.html");

    } catch (err) {
        
        console.error('Error during registration:', err);
        res.status(500).json({
            message: 'Registration failed.',
            error: err.message,
        });
    }
}

 
}

async function authorizeUser(req, res, next) {
  try {
    
    const user = await userModel.getUserData(req.body.email_username);
    
    if (!user) {
     
      return res.redirect("/autentification/login.html"); 
    }

   
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password_hash);

    if (!isPasswordValid) {
        console.log("incorect password");
      return res.redirect("/autentification/login.html");
    }else{

      req.session.userId=user.user_account_id;
      const redirectUrl = req.session.returnTo || '/home'; 
      delete req.session.returnTo; 
    
      res.redirect(redirectUrl); 
   
    }

      
    next();

  } catch (error) {
  
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
async function logout(req, res) {

  req.session.destroy();
  res.redirect("/autentification/login.html");
}

module.exports = {
  register,authorizeUser,logout
};
