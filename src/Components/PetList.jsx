

export const PetList = ({filterPet, showPets}) => {
 
  function petN(){
  if(filterPet.length === 0){
  return(
    <p> None Available At This Time.</p>
  )
}
 }

  return (

    <aside className="pets-list">

{showPets ? filterPet : petN()}

    </aside>
  );
};

export default PetList;
