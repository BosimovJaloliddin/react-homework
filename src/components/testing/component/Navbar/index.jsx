import React from "react";
import { memo } from "react";

const Navbar = (props) => {
  console.log("Nav");
  return (
    <div>
      child
      {props.memoVal.num}
      {props.callValue().num}
    </div>
  );
};
export default memo(Navbar);
