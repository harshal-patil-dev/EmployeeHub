import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import AddEmp from "./AddEmp";
import UpdateEmp from "./UpdateEmp";
import ShowEmp from "./ShowEmp";

const App = () => {
  const [ref, setRef] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleUpdate = (emp) => {
    setSelectedEmployee(emp);
};

const clearSelectedEmployee = () => {
    setSelectedEmployee(null);
};

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Default page */}
        <Route path="/" element={<Navigate to="/employees" />} />

        {/* Add Employee */}
        <Route
          path="/add"
          element={<AddEmp refresh={(e) => setRef(ref + e)} />}
        />

        {/* Update Employee */}
        <Route
          path="/update"
          element={
            <UpdateEmp
              refresh={(e) => setRef(ref + e)}
              upEmployee={selectedEmployee}
              clearSelectedEmployee={clearSelectedEmployee}
            />
          }
        />

        {/* All Employees */}
        <Route
          path="/employees"
          element={<ShowEmp doRefresh={ref} UpdateEmp={handleUpdate} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
