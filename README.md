# Simple Calculator with Logs

A full-stack calculator web application built using HTML/CSS/JavaScript (frontend) and Java Spring Boot with MySQL (backend). The app performs calculations and stores logs in a database.

---

## 🖥️ Frontend

**Tech Used:** HTML, CSS, JavaScript

### How to Run:
1. Open `frontend/index.html` in any browser.
2. Perform calculations.
3. Results will be sent to backend and also shown on screen.

---

## 🚀 Backend

**Tech Used:** Java 17, Spring Boot, MySQL

### How to Run:
1. Make sure **MySQL is running**.
2. Create the database in MySQL:

   ```sql
   CREATE DATABASE calculator_logs;
   ```

3. Set DB credentials in `src/main/resources/application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/calculator_logs
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```

4. Start the backend server:

   ```bash
   cd backend
   mvn spring-boot:run
   ```

5. Backend runs on: `http://localhost:8080`

---

## 📦 API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| POST   | `/api/logs`      | Save a calculation log |
| GET    | `/api/logs`      | Get all calculation logs |

---

## 🗂 Folder Structure

```
project-root/
├── frontend/
│   └── index.html, style.css, script.js
├── backend/
│   └── src/main, pom.xml, target
└── README.md
```

---

## ✅ Features

- Basic calculator operations
- Logs every calculation to MySQL
- View calculation history on-screen

---

## 🙋‍♂️ Author

Jagat Singh (IIT PATNA ,COMPUTER SCIENCE AND DATA ANALYTICS)
CONTACT : jagatsingh62045@gmail.com
Intern at GUVI  
