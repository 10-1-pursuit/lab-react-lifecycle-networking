import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({employeesArray}) => {

  const employeesToRender = employeesArray.map((eachEmployeeObj)=>
     <Employee 
     key = {eachEmployeeObj.id}
     employeeObjToRender = {eachEmployeeObj}/>
  )
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeesToRender}
      </section>
    </main>
  );
};

export default EmployeeList;
