import React, { useContext, useState } from "react";
import { StudentContext } from "../../context/Student";

const Body = () => {
  const [state, dispatch] = useContext(StudentContext);
  const [count, setCount] = useState(1);
  const plus = () => {
    localStorage.setItem("coutn", count + 1);
    setCount(count + 1);
  };
  const minus = () => {
    localStorage.setItem("coutn", count - 1);
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count:{localStorage.getItem("count")}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={() => localStorage.clear()}>clear</button>
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
export default Body;
