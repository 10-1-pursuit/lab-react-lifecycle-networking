import React, {useState, useEffect} from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
  const [employeesArray, setEmployeesArray] = useState( [] )
  console.log("STATE OF employeesArray: ", employeesArray)
useEffect( ()=>{

fetch( "http://localhost:3333/api/employees" )
.then( (response)=> response.json() )
.then( data => setEmployeesArray(data))
.catch( err => { console.log(err) } )
}, [] )

  return (
    <>
      <NavBar />
      <EmployeeList employeesArray={employeesArray}/>

    </>
  );
};

export default App;
