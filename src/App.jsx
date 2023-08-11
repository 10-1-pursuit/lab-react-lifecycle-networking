import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState, useEffect } from "react";



function App () {

  // fetch("http://localhost:5005/api/pets")
  // .then((response)=> response.json())
  // .then((dataFromApi)=>{console.log(dataFromApi)})
  // .catch( err => console.log(err))

const [employeeArray, setEmployeeArray] = useState([])
// console.log(employeeArray)

useEffect(()=>{

  fetch("http://localhost:5005/api/employees")
  .then((response)=> response.json())
  .then((dataFromApi)=>{setEmployeeArray(dataFromApi)})
  .catch( err => console.log(err))

}

, [])

  return (
    <>
    
      <NavBar />
      <EmployeeList employeeArray={employeeArray} />

    </>
  );
};

export default App;







/*
<App />
L>

<NavBar />     <EmployeeList />
                <EmployeeCard />


*/ 