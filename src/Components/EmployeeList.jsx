import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ handleClick, pokeList, showPokemonList }) => {
  return (
    <main>
      <h2>All Gen 1 Pokemon</h2>
      <section className="employee-list">
        <Employee handleClick={handleClick} pokeList={pokeList} showPokemonList={showPokemonList}/>
      </section>
    </main>
  );
};

export default EmployeeList;
