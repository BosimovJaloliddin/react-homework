import React from "react";
import Main from "./main";

const Click = ({ state, incerement }) => {
  return (
    <div>
      <h1>Click</h1>
      <button onClick={incerement}>count {state}</button>
    </div>
  );
};

export default Main(Click);
