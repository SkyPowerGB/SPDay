# 📅 Personal Appointment & Financial Manager

> ⚠️ **[Warning]** This project is no longer actively maintained.

A web app built with Express.js for managing personal medical appointments and financial accounts.

---

## ✨ Features

### User Management
- Registration and login with session-based authentication

### Medical
- Add, edit, and delete appointments (with date/time, description, and appointment group)
- Manage appointment groups (add, edit, delete)
- Download appointments as PDF filtered by date range and groups

### Financial
- Add, edit, and delete financial accounts (name, type, balance, currency)
- Add, edit, and delete transactions (date, description, value, group)
- Manage transaction groups (add, edit, delete)

---

## ⚠️ Limitations & Known Issues

- Validation is incomplete (missing error display feedback)
- Limited error handling throughout the app
- No full authorization — does **not** check resource ownership
- No user account management features (e.g., password reset)
- No roles or permissions system
- Input sanitization is incomplete — potential security risks
- **This project is not safe for public deployment**

---

## 🧩 Libraries & Technologies

- [Express.js](https://expressjs.com/)
- Session management (express-session)
- PDF generation (pdfkit)
- Validation libraries (express-validator)
- And others as listed in `package.json`

---

## 🎯 Purpose

Created for personal use and learning, focusing on expanding Express.js skills and understanding web app development basics.

---
