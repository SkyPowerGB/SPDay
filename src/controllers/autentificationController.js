const validator = require("validator");
const sanitize = require("sanitize-html");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

async function register(req, res) {
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
    return res.status(400).json({
      message: "Validation failed.",
      errors: errors,
    });
  }

  if (valid) {
    try {
     
        const salt = await bcrypt.genSalt(10); 
        
   
        const hashedPassword = await bcrypt.hash(password, salt); 

     
        const result = await userModel.createUser(username, email, hashedPassword);

        
        res.status(200).json({
            message: "Registration successful.",
            user: { username, email },
        });
    } catch (err) {
        
        console.error('Error during registration:', err);
        res.status(500).json({
            message: 'Registration failed.',
            error: err.message,
        });
    }
}

 
}
module.exports = {
  register,
};
