import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee}) => {
  return (
    <article className="employee">
      <h3>{employee.firstName}</h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;
