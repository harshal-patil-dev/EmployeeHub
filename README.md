# 🏢 EmployeeHub

EmployeeHub is a React-based Employee Management application built to practice React component communication, CRUD operations, Axios, JSON Server, and React Router.

## 🚀 Features

- **View All Employees** — Dynamic listing in a responsive dashboard table.
- **Add New Employee** — Form input handling with automatic list refresh.
- **Update Employee Details** — Pre-fills data dynamically using ID to modify records via PUT request.
- **Delete Employee** — Instant deletion with a clean browser confirmation modal.
- **Navigation & Routing** — Conditional page routing using React Router DOM.
- **State Management** — Parent-to-child data flow and child-to-parent callback actions.
- **REST API Integration** — Seamless client-server communication using Axios.

## 🛠️ Technologies Used

- **Frontend:** React.js (Vite), JavaScript, HTML5, CSS3
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Mock Backend:** JSON Server

## 📂 Project Structure

```text
src/
│
├── Navbar/
│   ├── Navbar.jsx
│   └── Navbar.css
│
├── AddEmp.jsx
├── AddEmp.css
│
├── UpdateEmp.jsx
├── UpdateEmp.css
│
├── ShowEmp.jsx
├── ShowEmp.css
│
├── App.jsx
└── App.css
```

## 🔄 Application Flow

```text
EmployeeHub
     │
     ├── Employees (ShowEmp)
     │     ├── View Employees
     │     ├── Pass Data to Update Form
     │     └── Delete Employee
     │
     ├── Add Employee (AddEmp)
     │
     └── Update Employee (UpdateEmp)
           └── Find Employee by ID & Save Changes
```

## 🔗 API Endpoint Configuration

The application uses **JSON Server** as a local REST API endpoint.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/employees` | Fetch all records |
| **GET** | `/employees/:id` | Find employee by ID |
| **POST**| `/employees` | Create a new employee |
| **PUT** | `/employees/:id` | Update complete entry |
| **DELETE** | `/employees/:id` | Remove a record |

* **Default API URL:** `http://localhost:3000`

## ▶️ How to Run & Install

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/harshal-patil-dev/EmployeeHub.git
cd EmployeeHub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start JSON Server
```bash
npx json-server --watch db.json --port 3000
```

### 4. Start React development environment
```bash
npm run dev
```

The application will launch on your local Vite environment link (usually `http://localhost:5173`).

## 📚 React Concepts Practiced

This project practically implements essential frontend structural architectures:
- **Components & Layouts** — Modular division of UI panels.
- **State & Hooks** — `useState` for local structures and `useEffect` for data fetch cycles.
- **Communication Layers** — Props cascading and custom callback functions.
- **Form Controls** — Controlled input architectures with state sync validation.

## 🎯 Purpose

EmployeeHub was built as a practical React learning project to understand how multiple components communicate with each other and how a frontend application syncs securely with a REST API backend.

---
**👨‍💻 Author**  
**Harshal Patil**  
*Java Full Stack Developer — Fresher*
