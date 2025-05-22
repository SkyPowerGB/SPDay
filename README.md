# 📅 SPDay

> ⚠️ **[Warning]** This project is no longer actively maintained.

A web application built with Express.js and EJS templating for managing personal medical appointments and financial accounts.

This learning project implements a range of features, though some remain incomplete or partially implemented.

---

## ✨ Features

### User Management
- Registration and login with session-based authentication

### Medical
- Add, edit, and delete appointments (date/time, description, appointment groups)
- Manage appointment groups
- Download appointments as PDFs filtered by date range and groups

### Financial
- Add, edit, and delete financial accounts (name, type, balance, currency)
- Add, edit, and delete transactions (date, description, value, group)
- Manage transaction groups

---

## ⚠️ Limitations & Known Issues

- Validation is incomplete (missing error display feedback)
- Limited error handling
- No full authorization — does **not** check resource ownership
- No user account management features beyond registration/login
- No roles or permissions system
- Input sanitization is incomplete — potential security risks
- No protection against Cross-Site Request Forgery (CSRF)
- Security mainly relies on sessions and basic sanitization only
- Missing financial analytics and reporting features
- PDF generation formatting is basic and could be improved
- **Not safe for public deployment**
---

## 🧩 Technologies & Libraries

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/) — templating engine
- Session management with express-session
- PDF generation with pdfkit
- Other dependencies as listed in `package.json`

---

## 🎯 Purpose

Created for personal use and learning, focusing on full-stack Express.js development with templating, authentication, and basic CRUD operations.

---
