import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useEffect } from "react";

function App () {

  const[employee,SetEmployee]=useState([]);

  console.log(employee)

  useEffect(
    
    ()=>{

      fetch("http://localhost:5005/api/employees")

      .then((response)=> response.json())
      // .then(console.log)
       .then((dataFromApi)=>{SetEmployee(dataFromApi)})
      
      .catch(err => {console.log(err)})
      
    }
    
    
    ,
    
    []
    
    
    
    )






  return (
    <>

    <h1></h1>
   
      <NavBar />


      <EmployeeList  emp={employee}/>
    </>
  );
};

export default App;
