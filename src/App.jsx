import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState } from "react";
import { useEffect } from "react";

function App () {

  const [employeesArray, setEmployeesArray] = useState([])

  useEffect(
    ()=>{
      fetch("http://localhost:4444/api/employees")
      .then((r)=>r.json())
      .then( dataFromTheAPI => setEmployeesArray(dataFromTheAPI))
      .catch( err => (console.log(err)))
    }
    ,
     [])

  return (
    <>
      <NavBar />
      <EmployeeList employeesArray={employeesArray}/>
    </>
  );
};

export default App;
