import React, { useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { StudentContext } from "../../context/Student";
import Navbar from "../Navbar";

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
  const memoValue = useMemo(() => {
    return { num: 2 };
  }, []);
  const callValue = useCallback((a) => {
    return { num: 2 };
  }, []);
  const hRef = useRef();
  useEffect(() => {
    return console.log(hRef);
  }, []);
  const onAdd = () => {
    console.log(hRef.current.value);
  };
  return (
    <div>
      <input ref={hRef} type="text" />
      <button onClick={onAdd}>add</button>
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
      <Navbar memoValue={memoValue} callValue={callValue} />
    </div>
  );
};
export default Body;
