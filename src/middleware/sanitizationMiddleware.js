const sanitizeHtml = require('sanitize-html');

const sanitizationMiddleware = (req, res, next) => {
  const { body } = req;
  

  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      // Sanitize each field with sanitize-html
      body[key] = sanitizeHtml(body[key], {
        allowedTags: [],  // Strip all HTML tags by default
        allowedAttributes: {}  // Strip all HTML attributes
      });
    }
  }

  next();  
};

module.exports = sanitizationMiddleware;