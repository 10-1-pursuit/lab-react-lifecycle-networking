import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

export const Employee = ({employeeObjToRender}) => {

  const [showPets, setShowPets] = useState(false)
  

  // const[allPets, SetAllPets] = useState([])

  //employeeObjToRender.id

  //.filter(()=>{})

  //useEffect and fetch pets

  const [petArray, setpetArray] = useState([])

  useEffect(()=>{
  
   fetch("http://localhost:5005/api/pets")
      .then((response)=> response.json())
      .then((dataFromApi)=>{setpetArray(dataFromApi)})
      .catch( err => console.log(err)) } 
      , [])

let filterPet = petArray.filter((pet)=> (pet.employeeId === employeeObjToRender.id)).map((pet)=> pet.name)
  
filterPet =filterPet.join(", ")

  return (
    <article className="employee">
      <h3>{employeeObjToRender.prefix} 
        {" "}
        {employeeObjToRender.firstName}
        {" "}
        {employeeObjToRender.lastName}
        {" "}
        {employeeObjToRender.postfix}
        </h3>

      <h4>{employeeObjToRender.title}</h4>

      <button onClick={()=>{setShowPets(!showPets)}}>Show Pets</button>
      
      <br /> 
      <br />
      
    <PetList filterPet={filterPet} showPets={showPets} />
      
    </article>
  );
};

export default Employee;
