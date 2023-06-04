import React from "react";
import Click from "./click";
import Hover from "./hover";

const RootHOC = () => {
  return (
    <div>
      <Click />
      <Hover />
    </div>
  );
};

export default RootHOC;
