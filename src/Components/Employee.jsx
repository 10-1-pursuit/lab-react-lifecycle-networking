import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({employeeObjToRender}) => {

  const [showPets, setShowPets] = useState(false)

  // const[allPets, SetAllPets] = useState([])

  //employeeObjToRender.id

  //.filter(()=>{})

  //useEffect and fetch pets

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

      <h4>Staff Member Title</h4>

      <button onClick={()=>{setShowPets(!showPets)}}>Show Pets</button>
      
      {
        showPets ?  <PetList /> : <></>
      }
    </article>
  );
};

export default Employee;
