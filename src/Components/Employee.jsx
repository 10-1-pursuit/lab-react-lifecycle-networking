import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ handleClick, pokeList, showPokemonList }) => {
  return (
    <article className="employee">
      <h3>Kanto Region</h3><br />
      <button onClick={handleClick}>
        {showPokemonList ? "Hide Pokemon" : "Show Pokemon"}
        </button>
      {showPokemonList && <PetList pokeList={pokeList} />}
    </article>
  );
};

export default Employee;
