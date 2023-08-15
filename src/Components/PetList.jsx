export const PetList = ({ PetList}) => {
  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
      {pokelist.length > 0 ? (
        <div>
        <ol>
          {pokeList.map((pokemon,index) => (
            <li key={index}>
            {pokemon.name}
            {pokemon.spriteUrl && <img src={pokemon.spriteURl} alt={pokemon.name} />}
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
