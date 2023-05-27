import React from "react";
import Context from "./context";
import Body from "./component/Body";

const Root = () => {
  return (
    <Context>
      <Body />
    </Context>
  );
};
export default Root;
