import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App() {

  // const [v,f] = useEffect(initialValue)
  const [employeesArray, setEmployeesArray] = useState( [] )
  console.log("set state of employees", employeesArray)
  //regular fetch == GET request 
  //reconfigure obtions is that object 
// useEffect( ()=> {},[] ) /// 🪝 
useEffect( 
  ()=> {
    fetch("http://localhost:3333/api/employees")
    // unraveled promise 
      .then((response) => response.json())
      // .then((dataFromAPI) => {console.log(dataFromAPI)})
     
      // useeffect can fetch both endpoints 
      //each fetch can also be a function/component
      // .then(console.log)
  
      .then(dataFromTheAPI => setEmployeesArray(dataFromTheAPI))
   // changing to a setter function using state will require useEffect
      // refers to outer function aka previous .then implicit return 
      .catch((err) => {});
  } 
  , [] 
  )



//map over this and render a card for all employees - an employee List Component
  return (
    <>
      <h1 onClick={console.log}>FRONT END 🥹 WE GUCCI ✨</h1>
      <NavBar />
      <EmployeeList employeesArray={employeesArray} />
    </>
  );
}

export default App;


/**
 <App />
 L> 
  <NavBar/> --- <EmployeeList/>
                    <EmployeeCard/>
  <Employees/> List Component
  <Employee/> Card Component
 */