import React, { useContext, memo } from "react";
import { StudentContext } from "../../context/Student";

const Body = () => {
  const [state, dispatch] = useContext(StudentContext);

  console.log("Body");
  return (
    <div>
      {state.user.map((v) => (
        <h1 key={v.id}>
          {v.id}- {v.name}{" "}
          <button onClick={() => dispatch({ type: "delete", peyload: v.id })}>
            Delete
          </button>
        </h1>
      ))}
    </div>
  );
};
export default memo(Body);
