import React from "react";
import Employee from "./Employee.jsx";
import "./EmployeeList.css";

export const EmployeeList = ({employeeArray}) => {

  const employeesToRender = employeeArray.map((eachEmployeeObj)=> 
  <Employee 
  key={eachEmployeeObj.id}
  employeeObjToRender={eachEmployeeObj}/>
  
  )

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {/* <Employee /> */} 
        {employeesToRender}
      </section>
    </main>
  );
};

export default EmployeeList;
