import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";



/*
      <EmployeeList employeesArray={employeesArray} />

*/



export const EmployeeList = ( {employeesArray} ) => {
// console.log({props}) undefined since it's destructured 

const employeesToRender = employeesArray.map(
  (eachEmployeeObj) =>  <Employee 
  key={eachEmployeeObj.id}
  eachEmployeeObjToRender={eachEmployeeObj}/>
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
