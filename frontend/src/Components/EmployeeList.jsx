import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({employee}) => {

 <EmployeeList  emp={employee}/> 



const employe=<EmployeeList  emp={employee}/>

const employeesToRender=employe.map((eachEmployee)=> <Employee employeesToRender={eachEmployee}/>

)
console.log(employeesToRender)

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
         <Employee /> 
        {employeesToRender}
      </section>
    </main>
  );
};

export default EmployeeList;
