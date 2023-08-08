import PetList from "./PetList";
import { useState, useEffect } from 'react';
import "./Employee.css";

export const Employee = () => {
const [pokeEmployeeRender, setPokeEmployeeRender ] = useState( null )
const [showPets, setShowPets] = useState(false);

console.log('STATE OF pokeEmployeeRender:', pokeEmployeeRender)
console.log('STATE OF showPets:', showPets);

useEffect( ()=> {
  const employeeId = 1;
fetch(`https://pokeapi.co/api/v2/machine/${employeeId}/`)
.then( response => response.json() )
.then( (fetchedEmployeeObj) =>
setPokeEmployeeRender(fetchedEmployeeObj) )
.catch(err => console.error('Error fetching employee', err))
} ,
[]
)

const handleShowPetsClick = () => {
  console.log('Show Pets button clicked')
  setShowPets(prevShowPets => !prevShowPets)
}
  return (
    <article className="employee">
    {pokeEmployeeRender ? 
      (
        <div>
          <h3>{pokeEmployeeRender.move.name}</h3>
          <h4>{pokeEmployeeRender.version_group.name}</h4>
        </div>
      )
      :
      <>Loading...</>  
    }
      <button onClick={handleShowPetsClick}>Show Pets</button>
      {showPets && <PetList selectedPokemon={pokeEmployeeRender} />}
    </article>
  );
};

export default Employee;
