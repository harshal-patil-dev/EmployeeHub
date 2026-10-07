import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateEmp.css";
import axios from "axios";

const UpdateEmp = ({ refresh, upEmployee, clearSelectedEmployee }) => {
  const navigate = useNavigate();

  const [searchId, setSearchId] = useState("");

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    position: "",
    salary: "",
    department: "",
  });

  const handleChange = (emp) => {
    const { name, value } = emp.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/employees/${employee.id}`, employee);
    refresh(1);
    clearForm();
    clearSelectedEmployee();
    navigate("/employees");
  };

  const clearForm = () => {
    setEmployee({
      id: "",
      name: "",
      position: "",
      salary: "",
      department: "",
    });

    setSearchId("");
  };

  const findEmployee = async (searchId) => {
    try {
      let { data } = await axios.get(
        `http://localhost:3000/employees/${searchId}`,
      );
      setEmployee(data);
    } catch (error) {
      alert("Employee ID not found!");
    }
  };

  useEffect(() => {
    if (upEmployee) {
      setEmployee(upEmployee);
      setSearchId(upEmployee.id);
    }
  }, [upEmployee]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Id</label>
        <input
          type="text"
          name="id"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          required
        />
        <button type="button" onClick={() => findEmployee(searchId)}>
          Find Employee
        </button>
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
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateEmp;
