import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [showPokemonList, setShowPokemonList] = useState(false)

  useEffect(() => {
    if (showPokemonList) {
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(response => response.json())
        .then(data => setPokemonList(data.results))
        .catch(err => console.log(err))
    }
  }, [showPokemonList])

  useEffect(() => {
    fetchSprites()
  }, [pokemonList]);

  const fetchSprites = () => {
    const updatedPokemonList = [...pokemonList];

    updatedPokemonList.forEach((pokemon, index) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(response => response.json())
        .then(data => {
          updatedPokemonList[index].spriteUrl = data.sprites.front_shiny;
          setPokemonList(updatedPokemonList);
        })
        .catch(err => console.log(err));
    });
  };

  const handleButtonClick = () => {
    setShowPokemonList(!showPokemonList)
  }

  return (
    <>
      <NavBar />
      <EmployeeList handleClick={handleButtonClick} pokeList={pokemonList} showPokemonList={showPokemonList}/>
    </>
  );
};

export default App;
