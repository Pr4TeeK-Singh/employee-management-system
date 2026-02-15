# Employee Management System

A full-stack Employee Management System built using Spring Boot and Angular.  
This project demonstrates CRUD operations, REST API development, form validation, department management, and unit testing.

---

## 🚀 Tech Stack

### 🔹 Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### 🔹 Frontend
- Angular
- Bootstrap
- Template-Driven Forms
- TypeScript

---

## ✨ Features

- Add, Edit, Delete Employees
- Department Management (Dynamic from Database)
- State → City Dependent Dropdown
- Form Validation
- RESTful API Integration
- Modal-based Editing
- Clean Layered Architecture

---

## 📁 Project Structure

employee-management-system
│
├── backend → Spring Boot Application
│ ├── controller
│ ├── service
│ ├── repository
│ ├── entity
│ └── config
│
├── frontend → Angular Application
│ ├── src
│ ├── angular.json
│ └── package.json
│
└── README.md


---

## 🗄 Database Schema

### Employee Table
| Column     | Type      |
|------------|----------|
| id         | Long     |
| name       | String   |
| department | String / FK |
| dob        | Date     |
| state      | String   |
| city       | String   |
| mobileNo   | String   |

### Department Table
| Column | Type   |
|--------|--------|
| id     | Long   |
| name   | String |

---

Backend runs at:

http://localhost:8080


---

Frontend runs at:

http://localhost:4200


---

## 🔗 API Endpoints

### Employees
- `GET /employees`
- `POST /employees`
- `PUT /employees/{id}`
- `DELETE /employees/{id}`

### Departments
- `GET /departments`
- `POST /departments`
- `DELETE /departments/{id}`

---

## 📚 What This Project Demonstrates

- Layered architecture (Controller → Service → Repository)
- REST API development
- Angular service integration with backend
- Form validation and UI interaction
- Database relationship handling

---
