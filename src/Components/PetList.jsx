

export const PetList = ({petsToRender}) => {
  const petsForEachEmployee = petsToRender.map((eachPetForEmp)=>{
    console.log(eachPetForEmp)
     eachPetForEmp.name[0].toUpperCase()
     return eachPetForEmp.name
  })
  console.log(petsForEachEmployee)
  return (
    <aside className="pets-list">
      {petsForEachEmployee.join(", ")}
    </aside>
  );
};

export default PetList;
