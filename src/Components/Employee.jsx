import PetList from "./PetList";
import { useState } from "react";
import "./Employee.css";

export const Employee = ({ employee }) => {
  const [pets, setPets] = useState([]);
  const [showPets, setShowPets] = useState(false);

  const handleShowPets = () => {
    if(!pets.length) {
      fetch(`http://localhost:3333/api/pets?employeeId=${employee.id}`)
      .then((response) => response.json())
      .then((data) => {
      setPets(data.map((pet) => pet.name))
      console.log(data.map((pet) => pet.name))
    })
      .catch((error) => {console.log(error)
      setPets([])
    })
    }
    setShowPets(!showPets)
  }
  return (
    <article className="employee">
      <h3>{employee.prefix} {employee.firstName} {employee.lastName} {employee.postfix}</h3>
      <h4>{employee.title}</h4>
      <button onClick={handleShowPets}>{showPets ? "Hide Pets" : "Show Pets"}</button>
      {showPets && <PetList pets={pets}/>}
    </article>
  );
};

export default Employee;
