import Employee from "./Employee";
import React from "react";
import "./EmployeeList.css";


export const EmployeeList = () => ({handleClick, pokeList, showPokemonList}) => {
  return (
    <main>
      <h2>All Staff</h2>
      <h2>Generation 3 Pokemon</h2>
      <section className="employee-list">
        <Employee/>
        <Employee handleClick={handleClick} pokeList={genPokemonList} showPokemonList={showPokemonList}/>
      </section>
    </main>
  );
  };

export default EmployeeList;
