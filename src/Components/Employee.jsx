  import PetList from "./PetList";
  import "./Employee.css";
  import { useState } from "react";
  import { useEffect } from "react";

  export const Employee = ({employeeObjToRender}) => {

    const[showPets, setShowPets]=useState(false)
    const[petsArray, setPetsArray]=useState([])

    useEffect(
      ()=>{
        fetch("http://localhost:4444/api/pets")
        .then((r)=>r.json())
        .then( dataFromTheAPI => setPetsArray(dataFromTheAPI))
        .catch( err => (console.log(err)))
      }
      ,
      [])

      const filterPetsPerEmployee = petsArray.filter(eachPet => eachPet.employeeId === employeeObjToRender.id)
    return (
      <article className="employee">
        <h3>{employeeObjToRender.prefix} {employeeObjToRender.firstName} {employeeObjToRender.lastName} {employeeObjToRender.postfix}</h3>
        <h4>{employeeObjToRender.title}</h4>
        <button onClick={()=>{setShowPets(!showPets)}}>{showPets ? "Close Pets" : "Show Pets"}</button>
        {showPets ?
          <PetList key={employeeObjToRender.id} petsToRender={filterPetsPerEmployee}/>
          :
          <></>
      }
      </article>
    );
  };

  export default Employee;
