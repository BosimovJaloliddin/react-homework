import React, { useState } from "react";
import Context from "./context";
import Body from "./component/Body";
import { useMemo } from "react";
import Navbar from "./component/Navbar";
import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Root = () => {
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const memoValue = useMemo(() => {
    return { num: 2 };
  }, []);
  const callVal = useCallback(() => {
    return { num: 3 };
  }, []);

  const getE = useRef();
  useEffect(() => {
    console.log(getE);
  }, []);
  console.log("root");
  return (
    <Context>
      <h1 ref={getE}>count:{count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <Body memoVal={memoValue} callValue={callVal} />
      <Navbar memoVal={memoValue} callValue={callVal} />
    </Context>
  );
};
export default Root;
