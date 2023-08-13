import PetList from "./PetList";
import "./Employee.css";
import {useState, useEffect} from "react"

export const Employee = ( {renderObj}) => {

  const [showInter, setShowInter]= useState (false)
  
  const [dataApi, setDataApi]= useState ([])


  useEffect(
    () => {
  
  
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => {setDataApi(data)}) //reference -refer
    .catch(err => console.log(err))
    },
    [])


// console.log(vetArray)


  return (
    <article className="employee">
      <h3>{renderObj}</h3>
      <h4>Staff Member Title</h4>
      <button onClick={()=>{setShowInter(!showInter)} }>Show Pets</button>
      <PetList  />
    </article>
  );
};

export default Employee;
