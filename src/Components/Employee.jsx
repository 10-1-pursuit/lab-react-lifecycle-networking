import PetList from "./PetList";
import "./Employee.css";

export const Employee =({handleClick, pokeList, showPokemonList}) => {
  return (
    <article className="employee">
      <h3>Staff Member Name</h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList/>
      <h3> Hoenn Region </h3><br/>
      <button onClick={handleClick}>
        {showPokemonList ? "Hide Pokemon" : "Show Pokemon"}
      </button>
      {showPokemonList && <PetList pokeList={pokeList} /> }
    </article>
    );
};

export default Employee;
