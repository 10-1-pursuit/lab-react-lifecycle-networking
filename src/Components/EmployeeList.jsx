import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

import { useState, useEffect } from "react";

export const EmployeeList = ({vetArray}) => {

  const pokeRender = vetArray.map((eachObj) => <Employee key={eachObj} renderObj={eachObj} />)


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {pokeRender}
      </section>
    </main>
  );
};

export default EmployeeList;
