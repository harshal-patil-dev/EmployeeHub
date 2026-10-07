import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmp.css";
import axios from "axios";

const AddEmp = ({refresh}) => {

const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    position: "",
    salary: "",
    department: "",
  });

  const handleChange = (emp) => {
    const { name, value } = emp.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (emp) => {
    emp.preventDefault();
    await axios.post(`http://localhost:3000/employees`, employee);
    refresh(1);
    clearForm();
    navigate("/employees");
  };

  const clearForm = () => {
    setEmployee({
      name: "",
      position: "",
      salary: "",
      department: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
        />
        <label>Position</label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleChange}
          required
        />
        <label>Department</label>
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          required
        />
        <label>Salary</label>
        <input
          type="text"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmp;
