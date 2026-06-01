
# Authentication System

A simple and beginner-friendly Authentication System built using Node.js, Express.js, HTML, and Tailwind CSS.  
This project includes User Registration and Login functionality with clean UI forms.

---

# Features

- User Registration
- User Login
- Responsive UI
- Tailwind CSS Styling
- Express.js Backend
- Form Handling
- Beginner Friendly Project Structure

---

# Tech Stack

## Frontend
- HTML5
- Tailwind CSS

## Backend
- Node.js
- Express.js

---

# Project Structure

```bash
project-folder/
│
├── views/
│   ├── register.ejs
│   └── login.ejs
│
├── app.js
├── package.json
└── README.md
```

---


# Registration Page

The registration page allows users to create an account by entering:

- Username
- Email
- Password
- Age

## Registration Route

```bash
POST /create
```

---

# Login Page

The login page allows users to log in using:

- Email
- Password

## Login Route

```bash
POST /login
```
---

# Installation

## Step 1: Clone Repository

```bash
git clone https://github.com/guri5405/reactpropsrepractice/05practiceday5auth.git
```
---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Start Server

```bash
node app.js
```

---
# Tailwind CSS CDN

This project uses Tailwind CSS through CDN.

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

---

# Registration Form Example

```html
<form method="post" action="/create">
  <input type="text" placeholder="Username" name="username">
  <input type="email" placeholder="Email" name="email">
  <input type="password" placeholder="Password" name="password">
  <input type="number" placeholder="Age" name="age">

  <input type="submit" value="Create User">
</form>
```

---

# Login Form Example

```html
<form method="post" action="/login">
  <input type="email" placeholder="Email" name="email">
  <input type="password" placeholder="Password" name="password">

  <input type="submit" value="Login">
</form>
```
---

# Future Improvements

- Password Hashing using bcrypt
- JWT Authentication
- MongoDB Database Integration
- Session Handling
- Input Validation
- Flash Messages
- Protected Routes
- Logout Functionality
---


## Register Page
- Dark Theme UI
- Responsive Design
- Tailwind Styled Inputs

## Login Page
- Simple Login Form
- Clean User Interface

---

# Author

Developed by Guree Sandhu
---







