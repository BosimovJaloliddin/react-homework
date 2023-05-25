import React from "react";
import Login from "./dark";
import Light from "./light";
import Registrotion from "./context";

const Root = () => {
  return (
    <>
      <Registrotion>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          <Login />
          <Light />
        </div>
      </Registrotion>
    </>
  );
};
export default Root;
