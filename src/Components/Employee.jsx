import PetList from "./PetList";
import "./Employee.css";

export const Employee =({handleClick, pokeList, showPokemonDex}) => {
  return (
    <article className="employee">
      <h3>Staff Member Name</h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList/>
      <h3> Hoenn Region </h3><br/>
      <button onClick={handleClick}>
        {showPokemonDex ? "Hide Pokemon" : "Show Pokemon"}
      </button>
      {showPokemonDex && <PetList pokeList={pokeList} /> }
    </article>
    );
};

export default Employee;
