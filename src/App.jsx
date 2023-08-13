import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState, useEffect } from "react";
import Employee from "./Components/Employee";

function App () {


  const [vetArray, setVetArray] = useState(null)
  
  // useEffect(() =>{}, [])///dependancy array

  useEffect(
    () => {
  
  
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => {setVetArray(data)}) //reference -refer
    .catch(err => console.log(err))
    },
    [])
    //console.log(vetArray)


  return (
    <>
    
      <NavBar />
      <Employee/>
      <EmployeeList vetArray = {vetArray} />
    </>
  );
};

export default App;
