import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => ({handleClick, pokeList, showPokemonDex}) => {
  return (
    <main>
      <h2>All Staff</h2>
      <h2>Blaziken</h2>
      <section className="employee-list">
        <Employee />
        <Employee handleClick={handleClick} pokeList={genPokemonDex} showPokemonDex={showPokemonDex}/>
      </section>
    </main>
  );
  };

export default EmployeeList;
