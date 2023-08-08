import { useState, useEffect } from 'react';

export const PetList = ({ selectedPokemon }) => {
  const [petNames, setPetNames] = useState([]);

  console.log('Selected Pokemon:', selectedPokemon);

  useEffect(() => {
    if(selectedPokemon) {
      console.log('Fetching pet data for:', selectedPokemon.id)
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.id}/`)
      .then(response => response.json())
      .then(petData => { setPetNames([petData.name]);
      })
      .catch(err => console.error('Error fetching pet data:', err));
    }
  }, [selectedPokemon]);
  return (
    <aside className="pets-list">
      {petNames.length > 0 ? (
        <p>Pets: {petNames.join(', ')}</p>
      ) : (
      <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
