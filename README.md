# Signup Form Project

## 📌 Overview
This is a simple signup form project built using **HTML, CSS, and JavaScript**.  
The form validates email and password inputs in real-time using `onChange` event handlers.  
It displays helpful error/success messages and provides a confirmation dialog before signup.

---

## ✨ Features
- **Email Validation**
  - Must be longer than 3 characters
  - Must include `@` and `.`
  - Shows red error if invalid
  - Shows green "All good to go ✅" if valid

- **Password Validation**
  - Must be longer than 8 characters
  - Shows red error if invalid
  - Shows green "All good to go ✅" if valid

- **Submit Behavior**
  - On clicking submit:
    - A confirmation popup appears (`confirm`)
    - If the user selects **OK** → success alert
    - If the user selects **Cancel** → form resets (clears inputs & messages)

---

## 📂 Project Structure
