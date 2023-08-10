
import {useState, useEffect} from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
  const [genPokemonDex, setgenPokemonDex] = useState([])
  const [showPokemonDex, setshowPokemonDex] = useState(false)


  useEffect(() => {
  if (showPokemonDex) {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data =>setgenPokemonDex(data.results))
    .catch(err => console.log(err))
  }
}, [showPokemonDex])

useEffect(() => {
  fetchShinys()
}, [genPokemonDex]);

const fetchShinys = () => {
  const updateShinys = [...genPokemonDex];

  updateShinys.forEach((pokemon, index) => {
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    .then(response => response.json())
    .then(data => {
      updateShinys[index].spriteUrl = data.sprites.front_shiny;
      setgenPokemonDex(updateShinys);
    })
    .catch(err => console.log(err));
});
};

const handleButtonClick = () => {
setshowPokemonDex(!showPokemonDex)
}

  
  
  
  
  return (
    <>
      <NavBar />
      <EmployeeList />
      <EmployeeList handleClick={handleButtonClick} pokeList={genPokemonDex} showPokemonDex={showPokemonDex}/>
    </>
  );
};

export default App;
