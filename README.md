🧑‍💼 Employee Management CRUD App

Description:
This is a full-stack web application built with Spring Boot (Backend) and React (Frontend) that allows users to manage employee records — including creating, reading, updating, and deleting employees.

🚀 Features

Add a new employee

View list of all employees

Update employee details

Delete employees

RESTful API with Spring Boot

Frontend built with React

Database: MySQL

🛠️ Tech Stack

Frontend: React, Axios, Bootstrap
Backend: Spring Boot, Spring Data JPA, Hibernate

⚙️ Installation
Backend (Spring Boot) 
cd employeeweb-backend
mvn spring-boot:run

Frontend (React)
cd employeeweb
npm install
npm start



Database: MySQL
Build Tools: Maven
Version Control: Git & GitHub



🌐 API Endpoints (Backend)
Method	Endpoint	Description
GET	/api/employees	Get all employees
GET	/api/employees/{id}	Get employee by ID
POST	/api/employees	Add new employee
PUT	/api/employees/{id}	Update employee
DELETE	/api/employees/{id}	Delete employee
