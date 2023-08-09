export const PetList = ({ pokeList }) => {
  return (
    <aside className="pets-list">
      {pokeList.length > 0 ? (
        <div>
          <ol>
            {pokeList.map((pokemon, index) => (
              <li key={index}>
                {pokemon.name}
                {pokemon.spriteUrl && <img src={pokemon.spriteUrl} alt={pokemon.name} />}
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <></>
      )}
    </aside>
  );
};

export default PetList;
