# 🧑🏽‍💼 Employee Management Dashboard (React)

A simple and responsive employee management dashboard built with **React** for the frontend and a **mock API (JSON Server)** as the backend.

> Created as part of a frontend technical assignment to showcase CRUD operations, routing, and UI handling using React.

---

## 📸 Screenshots

### Employee Table (Dashboard)

![Dashboard View](./empdashboard/screenshots/dashboard.JPG)

### ➕ Add New Employee

![Add Employee](./empdashboard/screenshots/add_employee.JPG)

### Edit Employee

![Edit Employee](./empdashboard/screenshots/edit_emplooyee_details1.JPG)
(./empdashboard/screenshots/edit_employee_details_2.JPG)
(./empdashboard/screenshots/edit_employee_details_3.JPG)

### Search Functionality

![Search Feature](./empdashboard/screenshots/simple_search.JPG)

![Delete Feature](./empdashboard/screenshots/delete_employee.JPG)

## 🧰 Features

✅ View all employees  
✅ Add a new employee  
✅ Edit existing employee  
✅ Delete employee with confirmation  
✅ View employee details  
✅ Search employees by name or department  
✅ Responsive layout  
✅ Simple, dark-themed UI

---

## 🧪 Tech Stack

- **React** with `useState`, `useEffect`, and `react-router-dom`
- **Mock API** using `JSON Server`
- **Basic CSS** styling
- **React Router**

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Daniel-KK-world/MarkupAxis-emp_dashboard

cd employee-dashboard

### 2. Install dependencies
npm install

###3. Start the JSON server (mock backend)

npx json-server --watch db.json --port 8000
Make sure db.json is located at the root.

### 4. Start the React app
npm start
Visit: http://localhost:3000

🗂 Folder Structure (Simplified)
src/
├── components/
│   ├── EmpTable.js
│   ├── CreateEmp.js
│   ├── EditEmp.js
│   ├── ViewDetails.js
├── App.js
├── index.js
├── db.json (mock API)
├── App.css


✍🏽 Author
Daniel Possible Kwabi

📝 License
MIT – free to use, share, and remix.
```
