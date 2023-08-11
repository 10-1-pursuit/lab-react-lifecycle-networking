import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

/*
Employee eachEmployeeObjToRender={eachEmployeeObj}/>
*/
export const Employee = ( {eachEmployeeObjToRender} ) => {

const [showPets, setShowPets] = useState(false)

//employeeId for which pets belong to employee 
//can filter pets
//check if (employeeid === eachEmployeeToRender.employeeId) return eachEmployeeObjToRender

//pass pets here useEffect( ()=> {fetch("pets")},[])






  return (
    <article className="employee">
      <h3>Name: {eachEmployeeObjToRender.prefix} {eachEmployeeObjToRender.firstName}, {eachEmployeeObjToRender.lastName}</h3>
      <h4>Title: {eachEmployeeObjToRender.title} </h4>
      <button onClick={ () => setShowPets(!showPets)   }>
        Show Pets
        </button>
        {
          //condition/question ? TRUE-case : FALSE case
          showPets ?  <PetList /> : <></>
        }
     
    </article>
  );
};

export default Employee;
