import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ employeesArray }) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeesArray.map((employee) => (
        <Employee key={employee.id} employee={employee}/>
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
