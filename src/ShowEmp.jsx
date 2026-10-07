import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShowEmp.css";

const ShowEmp = ({ doRefresh, UpdateEmp }) => {
  const navigate = useNavigate();

  const [allEmployees, setAllemployee] = useState([]);

  const loadAllEmployees = async () => {
    let { data } = await axios.get(`http://localhost:3000/employees`);
    setAllemployee(data);
  };

  const deleteEmployee = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!confirmDelete) {
      return;
    }
    await axios.delete(`http://localhost:3000/employees/${id}`);
    loadAllEmployees();
  };

  const updateEmployee = (emp) => {
    UpdateEmp(emp);
    navigate("/update");
  };

  useEffect(() => {
    loadAllEmployees();
  }, [doRefresh]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>POSITION</th>
            <th>DEPARTMENT</th>
            <th>SALARY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {allEmployees.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.position}</td>
              <td>{e.department}</td>
              <td>{e.salary}</td>
              <td>
                <button onClick={() => deleteEmployee(e.id)}>Delete</button>
                <button onClick={() => updateEmployee(e)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowEmp;
