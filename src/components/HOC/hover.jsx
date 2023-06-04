import React from "react";
import Main from "./main";

const Hover = ({ state, incerement }) => {
  return (
    <div>
      <h1>Hover</h1>
      <button onMouseOver={incerement}>Hover {state}</button>
    </div>
  );
};

export default Main(Hover);
