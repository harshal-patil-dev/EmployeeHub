import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">E</div>
        <h2>EmployeeHub</h2>
      </div>

      <div className="navbar-links">
        <NavLink to="/employees">Employees</NavLink>
        <NavLink to="/add">Add Employee</NavLink>
        <NavLink to="/update">Update Employee</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
